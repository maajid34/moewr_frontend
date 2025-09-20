// src/components/projects/updateprojects.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EnergyProjectTable() {
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  // If your backend serves images at `${API}/allimages/<filename>`
  const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || API;

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Build URL for image-like values; accept full URLs too
  const toImgUrl = (val) => {
    if (!val) return "";
    if (typeof val !== "string") return "";
    if (/^https?:\/\//i.test(val)) return val; // already a URL
    const fname = val.split(/[\\/]/).pop();    // just last segment
    return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
  };

  const onImgError = (e) => {
    e.currentTarget.src = "/placeholder.png"; // place a placeholder in /public
  };

  const fileLabel = (v) => {
    if (!v) return "—";
    if (typeof v === "string") return v.split(/[\\/]/).pop();
    if (v?.name) return v.name;
    return String(v);
  };

//   const handleEdit = (row) => {
//     alert(`Edit requested for: ${row.title || row._id}`);
//   };

const handleDelete = async (row) => {
  try {
    const id = row?._id ?? row?.id;
    if (!id) {
      alert("Missing project id");
      return;
    }

    const ok = window.confirm(
      `Delete "${row.title ?? id}"? This cannot be undone.`
    );
    if (!ok) return;

    // read token from localStorage (saved at login)
    let token = "";
    try {
      const admin = JSON.parse(localStorage.getItem("admin") || "{}");
      token = admin?.token || "";
    } catch {}

    await axios.delete(`${API}/DeleteEnergyProject/energy/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      // if your backend uses cookies instead of bearer, use:
      // withCredentials: true,
    });

    // remove from UI
    setRows((prev) => prev.filter((r) => (r._id ?? r.id) !== id));
  } catch (e) {
    if (e?.response?.status === 401) {
      alert("Unauthorized. Please log in again.");
      return;
    }
    console.error(e);
    alert(e?.response?.data?.message || "Delete failed");
  }
};

  // Render achievements safely (string | string[] | {title,detail,progress} | array of objects)
  const renderAchievementsCell = (val) => {
    if (!val) return <span>—</span>;

    if (typeof val === "string") {
      return <div className="whitespace-pre-wrap max-w-xs">{val}</div>;
    }

    if (Array.isArray(val)) {
      if (val.length === 0) return <span>—</span>;
      if (typeof val[0] === "string") {
        return (
          <ul className="list-disc pl-5 space-y-1 max-w-xs">
            {val.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        );
      }
      return (
        <ul className="space-y-2 max-w-xs">
          {val.map((a, i) => {
            const pct = Number(a?.progress ?? 0);
            return (
              <li key={a?._id ?? i} className="rounded border border-slate-200 p-2">
                <div className="font-medium">{a?.title ?? "Achievement"}</div>
                {a?.detail && <div className="text-xs text-slate-600 mt-1">{a.detail}</div>}
                {!Number.isNaN(pct) && (
                  <div className="mt-2">
                    <div className="text-xs font-semibold">{pct}%</div>
                    <div className="h-2 bg-slate-200 rounded">
                      <div className="h-2 rounded bg-sky-600" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      );
    }

    if (typeof val === "object") {
      const pct = Number(val.progress ?? 0);
      return (
        <div className="max-w-xs">
          <div className="font-medium">{val.title ?? "Achievement"}</div>
          {val.detail && <div className="text-xs text-slate-600 mt-1">{val.detail}</div>}
          {!Number.isNaN(pct) && (
            <div className="mt-2">
              <div className="text-xs font-semibold">{pct}%</div>
              <div className="h-2 bg-slate-200 rounded">
                <div className="h-2 rounded bg-sky-600" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
              </div>
            </div>
          )}
        </div>
      );
    }

    return <span>{String(val)}</span>;
  };

  useEffect(() => {
    let mounted = true;

    const fetchAll = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API}/readProjectEnergy/EnergyProject`);
        const list = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.data)
          ? res.data.data
          : [];

        if (!mounted) return;

        const normalized = list.map((it) => ({
          _id: it._id ?? it.id ?? crypto.randomUUID(),
          title: it.title ?? "",
          desc: it.desc ?? "",
          overview: it.overview ?? "",
          geogrpahic: it.geogrpahic ?? "",
          componentTitle: it.componentTitle ?? "",
          componentOne: it.componentOne ?? "",
          componentTwo: it.componentTwo ?? "",
          componentThree: it.componentThree ?? "",
          componentFour: it.componentFour ?? "",
          achievements: it.achievements ?? null,
          coverImage: it.coverImage ?? "",
          objectiveImage: it.objectiveImage ?? "",
          GeographicImage: it.GeographicImage ?? "",
          stackeHolder1: it.stackeHolder1 ?? "",
          stakeHolder2: it.stakeHolder2 ?? "",
          stakeHolder3: it.stakeHolder3 ?? "",
          stakeHolder4: it.stakeHolder4 ?? "",
        }));

        setRows(normalized);
      } catch (err) {
        console.error(err);
        if (mounted) setError("Failed to load projects list.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchAll();
    return () => {
      mounted = false;
    };
  }, [API]);

  return (
    <>
      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
            {error}
          </div>
        </div>
      )}

      <section className="absolute top-10 left-[300px] w-[80%] mt-10 rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
        <Link to={"/energyProjectForm"}><button className="py-2  px-5 mb-[20px] rounded-xl bg-blue-900 text-white">New Project</button></Link>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Projects List</h3>
          
          <span className="text-xs text-slate-500">
            {loading ? "Loading..." : `${rows.length} item(s)`}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr className="text-left">
                <th className="px-3 py-2">Title</th>
                <th className="px-3 py-2">Desc</th>
                <th className="px-3 py-2">Overview</th>
                <th className="px-3 py-2">Geographic</th>
                <th className="px-3 py-2">Component Title</th>
                <th className="px-3 py-2">Components</th>
                <th className="px-3 py-2">Achievements</th>
                <th className="px-3 py-2">Images</th>
                <th className="px-3 py-2">Stakeholders</th>
                <th className="px-3 py-2">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {loading ? (
                <tr>
                  <td className="px-3 py-4 text-slate-500" colSpan={8}>Loading…</td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td className="px-3 py-4 text-slate-500" colSpan={8}>No projects found.</td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r._id} className="align-top">
                    <td className="px-3 py-3">
                      <div className="font-semibold text-slate-900">{r.title || "—"}</div>
                      <div className="text-xs text-slate-500">{r._id}</div>
                    </td>

                    <td className="px-3 py-3"><div className="line-clamp-3 max-w-xs">{r.desc || "—"}</div></td>
                    <td className="px-3 py-3"><div className="line-clamp-3 max-w-xs">{r.overview || "—"}</div></td>
                    <td className="px-3 py-3"><div className="line-clamp-3 max-w-xs">{r.geogrpahic || "—"}</div></td>
                    <td className="px-3 py-3">{r.componentTitle || "—"}</td>

                    <td className="px-3 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        {r.componentOne && <li>{r.componentOne}</li>}
                        {r.componentTwo && <li>{r.componentTwo}</li>}
                        {r.componentThree && <li>{r.componentThree}</li>}
                        {r.componentFour && <li>{r.componentFour}</li>}
                      </ul>
                    </td>

                    <td className="px-3 py-3">
                      {renderAchievementsCell(r.achievements)}
                    </td>

                    {/* IMAGES column: show thumbnails */}
                    <td className="px-3 py-3">
                      <div className="flex items-start gap-3">
                        <div className="text-xs w-28">
                          <div className="font-medium mb-1">Cover</div>
                          {r.coverImage ? (
                            <img
                              src={toImgUrl(r.coverImage)}
                              alt="cover"
                              onError={onImgError}
                              className="w-28 h-20 object-cover rounded border"
                            />
                          ) : (
                            <span>—</span>
                          )}
                          <div className="mt-1 truncate">{fileLabel(r.coverImage)}</div>
                        </div>

                        <div className="text-xs w-28">
                          <div className="font-medium mb-1">Objective</div>
                          {r.objectiveImage ? (
                            <img
                              src={toImgUrl(r.objectiveImage)}
                              alt="objective"
                              onError={onImgError}
                              className="w-28 h-20 object-cover rounded border"
                            />
                          ) : (
                            <span>—</span>
                          )}
                          <div className="mt-1 truncate">{fileLabel(r.objectiveImage)}</div>
                        </div>

                        {/* georaphic image */}
                        <div className="text-xs w-28">
                          <div className="font-medium mb-1">geogrpahicImage</div>
                          {r.objectiveImage ? (
                            <img
                              src={toImgUrl(r.GeographicImage)}
                              alt="objective"
                              onError={onImgError}
                              className="w-28 h-20 object-cover rounded border"
                            />
                          ) : (
                            <span>—</span>
                          )}
                          <div className="mt-1 truncate">{fileLabel(r.objectiveImage)}</div>
                        </div>

                      </div>
                    </td>

                    {/* STAKEHOLDERS column: thumbnails */}
                    <td className="px-3 py-3">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "S1", val: r.stackeHolder1 },
                          { label: "S2", val: r.stakeHolder2 },
                          { label: "S3", val: r.stakeHolder3 },
                          { label: "S4", val: r.stakeHolder4 },
                        ].map(({ label, val }) => (
                          <div key={label} className="text-xs">
                            <div className="font-medium mb-1">{label}</div>
                            {val ? (
                              <img
                                src={toImgUrl(val)}
                                alt={label}
                                onError={onImgError}
                                className="w-20 h-16 object-cover rounded border"
                              />
                            ) : (
                              <span>—</span>
                            )}
                            <div className="mt-1 truncate max-w-[5rem]">{fileLabel(val)}</div>
                          </div>
                        ))}
                      </div>
                    </td>

                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <Link to={`/EnergyProjectUpdate/${r._id}`}><button  className="inline-flex items-center rounded-lg border border-sky-600 text-sky-700 px-3 py-1.5 hover:bg-sky-50">Update</button></Link>
                        <button onClick={() => handleDelete(r)} className="inline-flex items-center rounded-lg border border-rose-500 text-rose-600 px-3 py-1.5 hover:bg-rose-50">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
