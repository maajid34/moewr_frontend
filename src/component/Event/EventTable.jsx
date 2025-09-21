// src/components/events/EventTable.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventTable() {
  const API = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";
  const STATIC_PREFIX = `${API}/allimages`; // <- matches: app.use("/allimages", express.static("document"))

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [rawPreview, setRawPreview] = useState("");

  // Normalize common API shapes to an array
  const normalizeEvents = (d) => {
    if (!d) return [];
    if (Array.isArray(d)) return d;
    if (Array.isArray(d.data)) return d.data;
    if (Array.isArray(d.events)) return d.events;
    if (Array.isArray(d.items)) return d.items;
    if (Array.isArray(d.docs)) return d.docs;
    if (d.data && Array.isArray(d.data.events)) return d.data.events;
    if (d.result && Array.isArray(d.result.events)) return d.result.events;
    if (d._id || d.id || d.title) return [d]; // single object fallback
    return [];
  };

  // Get a path from either a string or a multer-like object
  const extractPath = (v) => {
    if (!v) return "";
    if (typeof v === "string") return v;                // "events/abc.jpg" or "abc.jpg" or "document/events/abc.jpg"
    if (v.filename) return v.filename;                  // "abc.jpg" (we'll prefix folder later)
    if (v.path) return String(v.path);                  // may include "document/.../abc.jpg" or absolute disk path
    if (v.url || v.secure_url || v.location) return v.url || v.secure_url || v.location; // already full URL
    return "";
  };

  // Build a browser URL that hits Express at /allimages
  const resolveImgSrc = (p) => {
    if (!p) return "";
    const original = String(p);
    if (/^https?:\/\//i.test(original)) return original; // already absolute

    // Clean: convert backslashes, remove "document/" or "allimages/" prefixes, trim leading slashes
    let s = original.replace(/\\/g, "/")
      .replace(/^\/?document\/?/i, "")
      .replace(/^\/?allimages\/?/i, "")
      .replace(/^\/+/, "");

    // If the DB stored a full disk path, keep only from "document/" onward (or from "uploads/" if you used that)
    const docIdx = s.toLowerCase().indexOf("document/");
    if (docIdx !== -1) s = s.slice(docIdx + "document/".length);
    const upIdx = s.toLowerCase().indexOf("uploads/");
    if (upIdx !== -1 && docIdx === -1) s = s.slice(upIdx); // fallback

    // If you want everything under a subfolder like "events/", you can enforce it here if needed:
    // if (!s.includes("/")) s = `events/${s}`;

    return `${STATIC_PREFIX}/${s}`;
  };

  const loadEvents = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`${API}/readProjectEvent/Event`);
      if (!res.ok) throw new Error(`Failed (${res.status})`);
      const data = await res.json();
      const arr = normalizeEvents(data).map((e) => ({
        ...e,
        _id: e._id || e.id,
        coverImage: extractPath(e.coverImage),
        objectiveImage: extractPath(e.objectiveImage),
      }));
      setEvents(arr);
      setRawPreview(JSON.stringify(data, null, 2).slice(0, 800));
    } catch (e) {
      setErr(e.message || "Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`${API}/DeleteEvent/events/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Delete failed (${res.status})`);
      setEvents((prev) => prev.filter((e) => e._id !== id));
    } catch (e) {
      alert(e.message || "Could not delete");
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="absolute top-10 left-[300px] w-full max-w-6xl mx-auto p-6">
      <Link to="/EventCreateForm">
        <button className="px-5 py-2 rounded-xl bg-blue-900 text-white font-semibold m-10">
          Add New Event
        </button>
      </Link>

      <div className="rounded-2xl border bg-white shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-800">Events</h2>
          <button
            onClick={loadEvents}
            className="text-sm rounded-lg border px-3 py-1.5 hover:bg-slate-50"
          >
            Reload
          </button>
        </div>

        {loading && <p className="text-slate-500">Loading…</p>}
        {err && <p className="text-rose-600">{err}</p>}

        {!loading && !err && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-2 border">#</th>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Ministry</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Cover</th>
                  <th className="px-4 py-2 border">Objective</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>

              <tbody>
                {events.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-6 text-center text-slate-500">
                      No events found.
                      {rawPreview && (
                        <details className="mt-3">
                          <summary className="cursor-pointer text-slate-400 text-xs">
                            Show API response preview
                          </summary>
                          <pre className="text-xs mt-2 max-h-48 overflow-auto bg-slate-50 p-3 rounded border">
                            {rawPreview}
                          </pre>
                        </details>
                      )}
                    </td>
                  </tr>
                ) : (
                  events.map((ev, idx) => (
                    <tr key={ev._id || idx} className="hover:bg-slate-50">
                      <td className="px-4 py-2 border">{idx + 1}</td>
                      <td className="px-4 py-2 border font-medium">{ev.title || "—"}</td>
                      <td className="px-4 py-2 border">{ev.ministry || "—"}</td>
                      <td className="px-4 py-2 border">
                        {ev.description?.slice(0, 60) || "—"}
                        {ev.description && ev.description.length > 60 && "..."}
                      </td>

                      {/* Cover */}
                      <td className="px-4 py-2 border">
                        {ev.coverImage ? (
                          <img
                            src={resolveImgSrc(ev.coverImage)}
                            alt="cover"
                            className="h-14 w-24 rounded object-cover border cursor-pointer hover:opacity-80"
                            onClick={() => window.open(resolveImgSrc(ev.coverImage), "_blank")}
                            onError={(e) => (e.currentTarget.style.display = "none")}
                          />
                        ) : ("—")}
                      </td>

                      {/* Objective */}
                      <td className="px-4 py-2 border">
                        {ev.objectiveImage ? (
                          <img
                            src={resolveImgSrc(ev.objectiveImage)}
                            alt="objective"
                            className="h-14 w-24 rounded object-cover border cursor-pointer hover:opacity-80"
                            onClick={() => window.open(resolveImgSrc(ev.objectiveImage), "_blank")}
                            onError={(e) => (e.currentTarget.style.display = "none")}
                          />
                        ) : ("—")}
                      </td>

                      <td className="px-4 py-2 border flex space-x-5">
                        <button
                          onClick={() => handleDelete(ev._id)}
                          // disabled={deleting === ev._id}
                          className="text-sm rounded bg-rose-600 px-3 py-1 text-white hover:bg-rose-700 disabled:opacity-60"
                        >
                          {deleting === ev._id ? "Deleting…" : "Delete"}
                        </button>
                        <Link to={`/EventUpdateForm/${ev._id}`} state={{ event: ev }}>
      <button className="text-sm rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700">
        Edit
      </button>
    </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
