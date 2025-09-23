// // src/components/events/EventUpdateForm.jsx
// import { useEffect, useState } from "react";
// import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
// import axios from "axios";

// export default function EventUpdateForm() {
//   const API = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";
//   const STATIC_PREFIX = `${API}/allimages`;
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [title, setTitle] = useState("");
//   const [ministry, setMinistry] = useState("");
//   const [description, setDescription] = useState("");
//   const [moreDescription, setMoreDescription] = useState("");

//   const [coverPath, setCoverPath] = useState("");
//   const [objectivePath, setObjectivePath] = useState("");
//   const [coverFile, setCoverFile] = useState(null);
//   const [objectiveFile, setObjectiveFile] = useState(null);

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [err, setErr] = useState(null);
//   const [msg, setMsg] = useState(null);

//   const resolveImgSrc = (p) => {
//     if (!p) return "";
//     const original = String(p);
//     if (/^https?:\/\//i.test(original)) return original;
//     let s = original.replace(/\\/g, "/").replace(/^\/+/, "");
//     s = s.replace(/^document\//i, "").replace(/^allimages\//i, "");
//     const i = s.toLowerCase().indexOf("document/");
//     if (i !== -1) s = s.slice(i + "document/".length);
//     return `${STATIC_PREFIX}/${s}`;
//   };

//   const extractPath = (v) => {
//     if (!v) return "";
//     if (typeof v === "string") return v;
//     if (v.path) return String(v.path);
//     if (v.filename) return v.filename;
//     if (v.url || v.secure_url || v.location) return v.url || v.secure_url || v.location;
//     return "";
//   };

//   const hydrate = (ev) => {
//     if (!ev) return false;
//     setTitle(ev.title ?? "");
//     setMinistry(ev.ministry ?? "");
//     setDescription(ev.description ?? "");
//     setMoreDescription(ev.moreDescription ?? "");
//     setCoverPath(extractPath(ev.coverImage));
//     setObjectivePath(extractPath(ev.objectiveImage));
//     return true;
//   };

//   const loadEvent = async () => {
//     const urls = [
//       `${API}/readProjectEvent/Event/${id}`,
//       `${API}/readProjectEvent/events/${id}`,
//       `${API}/readProjectEvent/Event`,
//     ];
//     for (const u of urls) {
//       try {
//         const res = await axios.get(u);
//         const d = res.data;
//         let ev = null;
//         if (Array.isArray(d)) ev = d.find((x) => x._id === id) || d[0];
//         else if (d?.data && Array.isArray(d.data)) ev = d.data.find((x) => x._id === id) || d.data[0];
//         else if (d?.event) ev = d.event;
//         else if (d?._id || d?.title) ev = d;
//         if (ev) return hydrate(ev);
//       } catch {
//         /* try next */
//       }
//     }
//     return false;
//   };

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       setErr(null);
//       setLoading(true);
//       try {
//         const stateEv = location.state?.event || location.state?.data;
//         const ok = stateEv ? hydrate(stateEv) : await loadEvent();
//         if (!ok && mounted) setErr("Could not load event details.");
//       } finally {
//         mounted && setLoading(false);
//       }
//     })();
//     return () => (mounted = false);
//   }, [id, location.state]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErr(null);
//     setMsg(null);
//     if (!title.trim()) return setErr("Title is required.");

//     const fd = new FormData();
//     fd.append("title", title.trim());
//     fd.append("ministry", (ministry || "").trim());
//     fd.append("description", (description || "").trim());
//     fd.append("moreDescription", (moreDescription || "").trim());
//     if (coverFile) fd.append("coverImage", coverFile);
//     if (objectiveFile) fd.append("objectiveImage", objectiveFile);

//     setSaving(true);
//     try {
//       await axios.patch(`${API}/UpdateEvent/events/${id}`, fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setMsg("Event updated ✅");
//       setTimeout(() => navigate("/EventTable"), 700);
//     } catch (e2) {
//       setErr(
//         e2?.response?.data?.message ||
//         e2?.response?.data?.error ||
//         e2?.message ||
//         "Update failed"
//       );
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) return <div className="p-6 text-slate-700">Loading event…</div>;

//   return (
//     <div className="absolute top-10 left-[400px] w-full max-w-3xl mx-auto p-6 [--brand:#2FA8E1] [--brand-dark:#0A7FB8]">
//       <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">Update Event</h2>
//           <Link to="/EventsTable" className="text-sm rounded border px-3 py-1.5 hover:bg-slate-50">Back</Link>
//         </div>
//         <p className="text-sm text-slate-600 mt-1">Edit details. Uploading a new image will replace the current one.</p>

//         <form onSubmit={handleSubmit} className="mt-6 space-y-5" encType="multipart/form-data">
//           {/* title */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700">Title *</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700">Ministry</label>
//             <input
//               type="text"
//               value={ministry}
//               onChange={(e) => setMinistry(e.target.value)}
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700">Short Description</label>
//             <textarea
//               rows={3}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700">More Description</label>
//             <textarea
//               rows={5}
//               value={moreDescription}
//               onChange={(e) => setMoreDescription(e.target.value)}
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//             />
//           </div>

//           {/* Cover image */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700">Cover Image</label>
//             {coverPath && !coverFile && (
//               <div className="mt-2">
//                 <img src={resolveImgSrc(coverPath)} className="h-36 w-full max-w-xs object-cover border rounded" />
//                 <p className="text-xs text-slate-500 mt-1">Current cover</p>
//               </div>
//             )}
//             {coverFile && (
//               <div className="mt-2">
//                 <img src={URL.createObjectURL(coverFile)} className="h-36 w-full max-w-xs object-cover border rounded" />
//                 <p className="text-xs text-slate-500 mt-1">New image selected</p>
//               </div>
//             )}
//             <input type="file" accept="image/*" onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
//               className="mt-2 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--brand)] file:px-4 file:py-2 file:text-white hover:file:bg-[var(--brand-dark)]" />
//           </div>

//           {/* Objective image */}
//           <div>
//             <label className="block text-sm font-medium text-slate-700">Objective Image (optional)</label>
//             {objectivePath && !objectiveFile && (
//               <div className="mt-2">
//                 <img src={resolveImgSrc(objectivePath)} className="h-36 w-full max-w-xs object-cover border rounded" />
//                 <p className="text-xs text-slate-500 mt-1">Current objective</p>
//               </div>
//             )}
//             {objectiveFile && (
//               <div className="mt-2">
//                 <img src={URL.createObjectURL(objectiveFile)} className="h-36 w-full max-w-xs object-cover border rounded" />
//                 <p className="text-xs text-slate-500 mt-1">New image selected</p>
//               </div>
//             )}
//             <input type="file" accept="image/*" onChange={(e) => setObjectiveFile(e.target.files?.[0] || null)}
//               className="mt-2 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--brand)] file:px-4 file:py-2 file:text-white hover:file:bg-[var(--brand-dark)]" />
//           </div>

//           {err && <div className="text-sm text-rose-600">{err}</div>}
//           {msg && <div className="text-sm text-emerald-600">{msg}</div>}

//           <div className="pt-2 flex gap-3">
//             <button type="submit" disabled={saving}
//               className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-white hover:bg-[var(--brand-dark)] disabled:opacity-60">
//               {saving ? "Saving…" : "Update Event"}
//             </button>
//             <button type="button" onClick={() => navigate("/EventTable")}
//               className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50">
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// 

// src/components/events/EventUpdateForm.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";

export default function EventUpdateForm() {
  // Hardcoded bases (no .env)
  const API = "https://moewr-backend.onrender.com";
  const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [ministry, setMinistry] = useState("");
  const [description, setDescription] = useState("");
  const [moreDescription, setMoreDescription] = useState("");

  const [coverPath, setCoverPath] = useState("");
  const [objectivePath, setObjectivePath] = useState("");
  const [coverFile, setCoverFile] = useState(null);
  const [objectiveFile, setObjectiveFile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);

  // Convert any saved value into a public R2 URL
  const toAssetUrl = (val) => {
    if (!val) return "";
    let s = String(val);

    // Already absolute? use as-is
    if (/^https?:\/\//i.test(s)) return s;

    // Normalize: slashes + trim known prefixes
    s = s.replace(/\\/g, "/");

    const docIdx = s.toLowerCase().indexOf("document/");
    if (docIdx !== -1) s = s.slice(docIdx + "document/".length);

    const allIdx = s.toLowerCase().indexOf("allimages/");
    if (allIdx !== -1 && docIdx === -1) s = s.slice(allIdx + "allimages/".length);

    const uploadsIdx = s.toLowerCase().indexOf("uploads/");
    if (uploadsIdx !== -1 && docIdx === -1 && allIdx === -1) {
      s = s.slice(uploadsIdx);
    }

    // Strip /r2/ and leading slashes
    s = s.replace(/^\/?r2\//i, "").replace(/^\/+/, "");

    // Encode path segments, keep folder structure
    const encoded = s
      .split("/")
      .filter(Boolean)
      .map(encodeURIComponent)
      .join("/");

    return `${ASSET_BASE}/${encoded}`;
  };

  // Read a "path" out of possible shapes (string, multer file object, etc.)
  const extractPath = (v) => {
    if (!v) return "";
    if (typeof v === "string") return v;
    if (v.url || v.secure_url || v.location) return v.url || v.secure_url || v.location;
    if (v.path) return String(v.path);
    if (v.filename) return v.filename;
    return "";
  };

  const hydrate = (ev) => {
    if (!ev) return false;
    setTitle(ev.title ?? "");
    setMinistry(ev.ministry ?? "");
    setDescription(ev.description ?? "");
    setMoreDescription(ev.moreDescription ?? "");
    setCoverPath(extractPath(ev.coverImage));
    setObjectivePath(extractPath(ev.objectiveImage));
    return true;
  };

  // Load a single event (try specific endpoint first, then fallbacks)
  const loadEvent = async () => {
    const urls = [
      `${API}/readProjectEventSingal/Event/${id}`, // PRIMARY (your controller that returns the doc directly)
      `${API}/readProjectEvent/events/${id}`,
      `${API}/readProjectEvent/Event/${id}`,
      `${API}/readProjectEvent/Event`, // list fallback
    ];
    for (const u of urls) {
      try {
        const res = await axios.get(u);
        const d = res.data;

        let ev = null;
        if (d && (d._id || d.id || d.title)) {
          ev = d; // single doc
        } else if (Array.isArray(d)) {
          ev = d.find((x) => x._id === id) || d[0];
        } else if (d?.data && Array.isArray(d.data)) {
          ev = d.data.find((x) => x._id === id) || d.data[0];
        } else if (d?.event) {
          ev = d.event;
        } else if (Array.isArray(d?.items)) {
          ev = d.items.find((x) => x._id === id) || d.items[0];
        }

        if (ev) return hydrate(ev);
      } catch {
        // try next URL
      }
    }
    return false;
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      setErr(null);
      setLoading(true);
      try {
        // Prefer navigation state if present (faster)
        const stateEv = location.state?.event || location.state?.data;
        const ok = stateEv ? hydrate(stateEv) : await loadEvent();
        if (!ok && mounted) setErr("Could not load event details.");
      } finally {
        mounted && setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setMsg(null);
    if (!title.trim()) return setErr("Title is required.");

    const fd = new FormData();
    fd.append("title", title.trim());
    fd.append("ministry", (ministry || "").trim());
    fd.append("description", (description || "").trim());
    fd.append("moreDescription", (moreDescription || "").trim());
    if (coverFile) fd.append("coverImage", coverFile);
    if (objectiveFile) fd.append("objectiveImage", objectiveFile);

    setSaving(true);
    try {
      await axios.patch(`${API}/UpdateEvent/events/${id}`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMsg("Event updated ✅");
      setTimeout(() => navigate("/EventTable"), 700);
    } catch (e2) {
      setErr(
        e2?.response?.data?.message ||
          e2?.response?.data?.error ||
          e2?.message ||
          "Update failed"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6 text-slate-700">Loading event…</div>;

  return (
    <div className="absolute top-10 left-[400px] w-full max-w-3xl mx-auto p-6 [--brand:#2FA8E1] [--brand-dark:#0A7FB8]">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">Update Event</h2>
          <Link
            to="/EventTable"
            className="text-sm rounded border px-3 py-1.5 hover:bg-slate-50"
          >
            Back
          </Link>
        </div>
        <p className="text-sm text-slate-600 mt-1">
          Edit details. Uploading a new image will replace the current one.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-5"
          encType="multipart/form-data"
        >
          {/* title */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Ministry
            </label>
            <input
              type="text"
              value={ministry}
              onChange={(e) => setMinistry(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Short Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              More Description
            </label>
            <textarea
              rows={5}
              value={moreDescription}
              onChange={(e) => setMoreDescription(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
            />
          </div>

          {/* Cover image */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Cover Image
            </label>

            {coverPath && !coverFile && (
              <div className="mt-2">
                <img
                  src={toAssetUrl(coverPath)}
                  alt="cover"
                  className="h-36 w-full max-w-xs object-cover border rounded"
                  onError={(e) => {
                    console.error("Cover preview failed:", {
                      raw: coverPath,
                      tried: toAssetUrl(coverPath),
                    });
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p className="text-xs text-slate-500 mt-1">Current cover</p>
              </div>
            )}

            {coverFile && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(coverFile)}
                  alt="new cover"
                  className="h-36 w-full max-w-xs object-cover border rounded"
                />
                <p className="text-xs text-slate-500 mt-1">New image selected</p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
              className="mt-2 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--brand)] file:px-4 file:py-2 file:text-white hover:file:bg-[var(--brand-dark)]"
            />
          </div>

          {/* Objective image */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Objective Image (optional)
            </label>

            {objectivePath && !objectiveFile && (
              <div className="mt-2">
                <img
                  src={toAssetUrl(objectivePath)}
                  alt="objective"
                  className="h-36 w-full max-w-xs object-cover border rounded"
                  onError={(e) => {
                    console.error("Objective preview failed:", {
                      raw: objectivePath,
                      tried: toAssetUrl(objectivePath),
                    });
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p className="text-xs text-slate-500 mt-1">Current objective</p>
              </div>
            )}

            {objectiveFile && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(objectiveFile)}
                  alt="new objective"
                  className="h-36 w-full max-w-xs object-cover border rounded"
                />
                <p className="text-xs text-slate-500 mt-1">New image selected</p>
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setObjectiveFile(e.target.files?.[0] || null)}
              className="mt-2 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--brand)] file:px-4 file:py-2 file:text-white hover:file:bg-[var(--brand-dark)]"
            />
          </div>

          {err && <div className="text-sm text-rose-600">{err}</div>}
          {msg && <div className="text-sm text-emerald-600">{msg}</div>}

          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-white hover:bg-[var(--brand-dark)] disabled:opacity-60"
            >
              {saving ? "Saving…" : "Update Event"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/EventTable")}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
