// // src/components/projects/updateprojects.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function EnergyProjectTable() {
//   const API = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";
//   // If your backend serves images at `${API}/allimages/<filename>`
//   const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || API;

//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Build URL for image-like values; accept full URLs too
//   const toImgUrl = (val) => {
//     if (!val) return "";
//     if (typeof val !== "string") return "";
//     if (/^https?:\/\//i.test(val)) return val; // already a URL
//     const fname = val.split(/[\\/]/).pop();    // just last segment
//     return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
//   };

//   const onImgError = (e) => {
//     e.currentTarget.src = "/placeholder.png"; // place a placeholder in /public
//   };

//   const fileLabel = (v) => {
//     if (!v) return "—";
//     if (typeof v === "string") return v.split(/[\\/]/).pop();
//     if (v?.name) return v.name;
//     return String(v);
//   };

// //   const handleEdit = (row) => {
// //     alert(`Edit requested for: ${row.title || row._id}`);
// //   };

// const handleDelete = async (row) => {
//   try {
//     const id = row?._id ?? row?.id;
//     if (!id) {
//       alert("Missing project id");
//       return;
//     }

//     const ok = window.confirm(
//       `Delete "${row.title ?? id}"? This cannot be undone.`
//     );
//     if (!ok) return;

//     // read token from localStorage (saved at login)
//     let token = "";
//     try {
//       const admin = JSON.parse(localStorage.getItem("admin") || "{}");
//       token = admin?.token || "";
//     } catch {}

//     await axios.delete(`${API}/DeleteEnergyProject/energy/${id}`, {
//       headers: token ? { Authorization: `Bearer ${token}` } : {},
//       // if your backend uses cookies instead of bearer, use:
//       // withCredentials: true,
//     });

//     // remove from UI
//     setRows((prev) => prev.filter((r) => (r._id ?? r.id) !== id));
//   } catch (e) {
//     if (e?.response?.status === 401) {
//       alert("Unauthorized. Please log in again.");
//       return;
//     }
//     console.error(e);
//     alert(e?.response?.data?.message || "Delete failed");
//   }
// };

//   // Render achievements safely (string | string[] | {title,detail,progress} | array of objects)
//   const renderAchievementsCell = (val) => {
//     if (!val) return <span>—</span>;

//     if (typeof val === "string") {
//       return <div className="whitespace-pre-wrap max-w-xs">{val}</div>;
//     }

//     if (Array.isArray(val)) {
//       if (val.length === 0) return <span>—</span>;
//       if (typeof val[0] === "string") {
//         return (
//           <ul className="list-disc pl-5 space-y-1 max-w-xs">
//             {val.map((s, i) => <li key={i}>{s}</li>)}
//           </ul>
//         );
//       }
//       return (
//         <ul className="space-y-2 max-w-xs">
//           {val.map((a, i) => {
//             const pct = Number(a?.progress ?? 0);
//             return (
//               <li key={a?._id ?? i} className="rounded border border-slate-200 p-2">
//                 <div className="font-medium">{a?.title ?? "Achievement"}</div>
//                 {a?.detail && <div className="text-xs text-slate-600 mt-1">{a.detail}</div>}
//                 {!Number.isNaN(pct) && (
//                   <div className="mt-2">
//                     <div className="text-xs font-semibold">{pct}%</div>
//                     <div className="h-2 bg-slate-200 rounded">
//                       <div className="h-2 rounded bg-sky-600" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
//                     </div>
//                   </div>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       );
//     }

//     if (typeof val === "object") {
//       const pct = Number(val.progress ?? 0);
//       return (
//         <div className="max-w-xs">
//           <div className="font-medium">{val.title ?? "Achievement"}</div>
//           {val.detail && <div className="text-xs text-slate-600 mt-1">{val.detail}</div>}
//           {!Number.isNaN(pct) && (
//             <div className="mt-2">
//               <div className="text-xs font-semibold">{pct}%</div>
//               <div className="h-2 bg-slate-200 rounded">
//                 <div className="h-2 rounded bg-sky-600" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     }

//     return <span>{String(val)}</span>;
//   };

//   useEffect(() => {
//     let mounted = true;

//     const fetchAll = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios.get(`${API}/readProjectEnergy/EnergyProject`);
//         const list = Array.isArray(res.data)
//           ? res.data
//           : Array.isArray(res.data?.data)
//           ? res.data.data
//           : [];

//         if (!mounted) return;

//         const normalized = list.map((it) => ({
//           _id: it._id ?? it.id ?? crypto.randomUUID(),
//           title: it.title ?? "",
//           desc: it.desc ?? "",
//           overview: it.overview ?? "",
//           geogrpahic: it.geogrpahic ?? "",
//           componentTitle: it.componentTitle ?? "",
//           componentOne: it.componentOne ?? "",
//           componentTwo: it.componentTwo ?? "",
//           componentThree: it.componentThree ?? "",
//           componentFour: it.componentFour ?? "",
//           achievements: it.achievements ?? null,
//           coverImage: it.coverImage ?? "",
//           objectiveImage: it.objectiveImage ?? "",
//           GeographicImage: it.GeographicImage ?? "",
//           stackeHolder1: it.stackeHolder1 ?? "",
//           stakeHolder2: it.stakeHolder2 ?? "",
//           stakeHolder3: it.stakeHolder3 ?? "",
//           stakeHolder4: it.stakeHolder4 ?? "",
//         }));

//         setRows(normalized);
//       } catch (err) {
//         console.error(err);
//         if (mounted) setError("Failed to load projects list.");
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     fetchAll();
//     return () => {
//       mounted = false;
//     };
//   }, [API]);

//   return (
//     <>
//       {error && (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//           <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
//             {error}
//           </div>
//         </div>
//       )}

//       <section className="absolute top-10 left-[300px] w-[80%] mt-10 rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//         <Link to={"/energyProjectForm"}><button className="py-2  px-5 mb-[20px] rounded-xl bg-blue-900 text-white">New Project</button></Link>
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-semibold">Projects List</h3>
          
//           <span className="text-xs text-slate-500">
//             {loading ? "Loading..." : `${rows.length} item(s)`}
//           </span>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm">
//             <thead className="bg-slate-100 text-slate-700">
//               <tr className="text-left">
//                 <th className="px-3 py-2">Title</th>
//                 <th className="px-3 py-2">Desc</th>
//                 <th className="px-3 py-2">Overview</th>
//                 <th className="px-3 py-2">Geographic</th>
//                 <th className="px-3 py-2">Component Title</th>
//                 <th className="px-3 py-2">Components</th>
//                 <th className="px-3 py-2">Achievements</th>
//                 <th className="px-3 py-2">Images</th>
//                 <th className="px-3 py-2">Stakeholders</th>
//                 <th className="px-3 py-2">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-slate-200">
//               {loading ? (
//                 <tr>
//                   <td className="px-3 py-4 text-slate-500" colSpan={8}>Loading…</td>
//                 </tr>
//               ) : rows.length === 0 ? (
//                 <tr>
//                   <td className="px-3 py-4 text-slate-500" colSpan={8}>No projects found.</td>
//                 </tr>
//               ) : (
//                 rows.map((r) => (
//                   <tr key={r._id} className="align-top">
//                     <td className="px-3 py-3">
//                       <div className="font-semibold text-slate-900">{r.title || "—"}</div>
//                       <div className="text-xs text-slate-500">{r._id}</div>
//                     </td>

//                     <td className="px-3 py-3"><div className="line-clamp-3 max-w-xs">{r.desc || "—"}</div></td>
//                     <td className="px-3 py-3"><div className="line-clamp-3 max-w-xs">{r.overview || "—"}</div></td>
//                     <td className="px-3 py-3"><div className="line-clamp-3 max-w-xs">{r.geogrpahic || "—"}</div></td>
//                     <td className="px-3 py-3">{r.componentTitle || "—"}</td>

//                     <td className="px-3 py-3">
//                       <ul className="list-disc pl-5 space-y-1">
//                         {r.componentOne && <li>{r.componentOne}</li>}
//                         {r.componentTwo && <li>{r.componentTwo}</li>}
//                         {r.componentThree && <li>{r.componentThree}</li>}
//                         {r.componentFour && <li>{r.componentFour}</li>}
//                       </ul>
//                     </td>

//                     <td className="px-3 py-3">
//                       {renderAchievementsCell(r.achievements)}
//                     </td>

//                     {/* IMAGES column: show thumbnails */}
//                     <td className="px-3 py-3">
//                       <div className="flex items-start gap-3">
//                         <div className="text-xs w-28">
//                           <div className="font-medium mb-1">Cover</div>
//                           {r.coverImage ? (
//                             <img
//                               src={toImgUrl(r.coverImage)}
//                               alt="cover"
//                               onError={onImgError}
//                               className="w-28 h-20 object-cover rounded border"
//                             />
//                           ) : (
//                             <span>—</span>
//                           )}
//                           <div className="mt-1 truncate">{fileLabel(r.coverImage)}</div>
//                         </div>

//                         <div className="text-xs w-28">
//                           <div className="font-medium mb-1">Objective</div>
//                           {r.objectiveImage ? (
//                             <img
//                               src={toImgUrl(r.objectiveImage)}
//                               alt="objective"
//                               onError={onImgError}
//                               className="w-28 h-20 object-cover rounded border"
//                             />
//                           ) : (
//                             <span>—</span>
//                           )}
//                           <div className="mt-1 truncate">{fileLabel(r.objectiveImage)}</div>
//                         </div>

//                         {/* georaphic image */}
//                         <div className="text-xs w-28">
//                           <div className="font-medium mb-1">geogrpahicImage</div>
//                           {r.objectiveImage ? (
//                             <img
//                               src={toImgUrl(r.GeographicImage)}
//                               alt="objective"
//                               onError={onImgError}
//                               className="w-28 h-20 object-cover rounded border"
//                             />
//                           ) : (
//                             <span>—</span>
//                           )}
//                           <div className="mt-1 truncate">{fileLabel(r.objectiveImage)}</div>
//                         </div>

//                       </div>
//                     </td>

//                     {/* STAKEHOLDERS column: thumbnails */}
//                     <td className="px-3 py-3">
//                       <div className="grid grid-cols-2 gap-3">
//                         {[
//                           { label: "S1", val: r.stackeHolder1 },
//                           { label: "S2", val: r.stakeHolder2 },
//                           { label: "S3", val: r.stakeHolder3 },
//                           { label: "S4", val: r.stakeHolder4 },
//                         ].map(({ label, val }) => (
//                           <div key={label} className="text-xs">
//                             <div className="font-medium mb-1">{label}</div>
//                             {val ? (
//                               <img
//                                 src={toImgUrl(val)}
//                                 alt={label}
//                                 onError={onImgError}
//                                 className="w-20 h-16 object-cover rounded border"
//                               />
//                             ) : (
//                               <span>—</span>
//                             )}
//                             <div className="mt-1 truncate max-w-[5rem]">{fileLabel(val)}</div>
//                           </div>
//                         ))}
//                       </div>
//                     </td>

//                     <td className="px-3 py-3">
//                       <div className="flex items-center gap-2">
//                         <Link to={`/EnergyProjectUpdate/${r._id}`}><button  className="inline-flex items-center rounded-lg border border-sky-600 text-sky-700 px-3 py-1.5 hover:bg-sky-50">Update</button></Link>
//                         <button onClick={() => handleDelete(r)} className="inline-flex items-center rounded-lg border border-rose-500 text-rose-600 px-3 py-1.5 hover:bg-rose-50">Delete</button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// }


// src/components/projects/updateprojects.jsx
// src/components/projects/EnergyProjectPhotosTable.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EnergyProjectPhotosTable() {
  // Hardcoded bases (no .env)
  const API = "https://moewr-backend.onrender.com";
  const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev"; // public R2 bucket (for display only)

  // axios client with optional token
  const http = useMemo(() => {
    const inst = axios.create({ baseURL: API, withCredentials: false });
    try {
      const admin = JSON.parse(localStorage.getItem("admin") || "{}");
      if (admin?.token) inst.defaults.headers.common.Authorization = `Bearer ${admin.token}`;
    } catch {}
    return inst;
  }, []);

  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [rows, setRows] = useState([]); // photo objects/strings
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  const replaceFileRef = useRef(null);
  const replaceTargetIndexRef = useRef(null);
  const appendFileRef = useRef(null);

  // ---- ROUTES: change these if your backend names differ --------------------
  const PATHS = useMemo(
    () => ({
      projects: `${API}/readProjectEnergy/EnergyProject`,
      readPhotos: (id) => `${API}/ReadEnergyProjectPhoto/${id}/photos`, // if missing, we fallback to readProjectOne
      readProjectOne: (id) => `${API}/readProjectEnergySingal/EnergyProject/${id}`,

      // R2: server signs a PUT URL for each file
      signUpload: (id, name, type) =>
        `${API}/r2/sign/energy-photo?projectId=${encodeURIComponent(id)}&filename=${encodeURIComponent(
          name
        )}&type=${encodeURIComponent(type || "application/octet-stream")}`,

      // register uploaded URLs to the project Photos array
      registerPhotos: (id) => `${API}/energyProject/${id}/photos/register`,

      // delete from Photos by index
      deletePhoto: (id) => `${API}/energyProject/${id}/photos`,
    }),
    [API]
  );

  // ---------------- helpers (display) ----------------
  const getImagePath = (photo) => {
    if (!photo) return "";
    if (typeof photo === "string") return photo;

    const direct =
      photo.Image ??
      photo.image ??
      photo.url ??
      photo.URL ??
      photo.Location ??
      photo.location ??
      photo.path ??
      photo.filepath ??
      photo.filename ??
      photo.Key ??
      photo.key ??
      "";

    if (typeof direct === "string" && direct) return direct;

    const img = photo.Image || photo.image || {};
    if (img && typeof img === "object") {
      const nested =
        img.Location ||
        img.location ||
        img.url ||
        img.URL ||
        img.path ||
        img.filepath ||
        img.filename ||
        img.Key ||
        img.key ||
        "";
      if (typeof nested === "string" && nested) return nested;
    }
    return "";
  };

  // Build public URL for legacy stored values
  const toPublicUrl = (val) => {
    if (!val) return "";
    let s = String(val).trim();
    if (!s) return "";
    if (/^https?:\/\//i.test(s)) return s;

    s = s.replace(/\\/g, "/").replace(/^\/+/, "");
    s = s.replace(/^document\//i, "").replace(/^allimages\//i, "").replace(/^r2\//i, "");
    if (!s.includes("/")) s = `energy/photos/${s}`;
    return `${ASSET_BASE}/${encodeURI(s)}`;
  };

  const normalizeProjects = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.items)) return data.items;
    return [];
  };

  // ---------------- R2 upload flow ----------------
  /**
   * For each file:
   *  1) ask backend for a signed PUT url (Cloudflare R2 / S3 compat).
   *  2) PUT the file directly to R2 (no form-data!).
   *  3) Collect the publicUrl and register it to the project.
   */
  const uploadViaR2 = async (projectId, files) => {
    // 1) get signed urls
    const toUpload = await Promise.all(
      files.map(async (file) => {
        const { data } = await http.get(PATHS.signUpload(projectId, file.name, file.type));
        // expected: { uploadUrl, key, publicUrl }
        if (!data?.uploadUrl || !data?.publicUrl) {
          throw new Error("Sign URL failed: malformed response");
        }
        return { file, uploadUrl: data.uploadUrl, publicUrl: data.publicUrl };
      })
    );

    // 2) PUT to R2
    await Promise.all(
      toUpload.map(({ file, uploadUrl }) =>
        fetch(uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Type": file.type || "application/octet-stream",
            "Content-Length": String(file.size),
          },
          body: file,
        }).then((r) => {
          if (!r.ok) throw new Error(`R2 upload failed (${r.status})`);
        })
      )
    );

    // 3) register photos to the project
    const photos = toUpload.map((u) => ({ Image: u.publicUrl }));
    await http.post(PATHS.registerPhotos(projectId), { photos });

    return photos.length;
  };

  // ---------------- data loads ----------------
  useEffect(() => {
    let mounted = true;
    (async () => {
      setErr(null);
      try {
        const res = await http.get(PATHS.projects);
        if (!mounted) return;
        setProjects(normalizeProjects(res.data));
      } catch (e) {
        setErr(e?.response?.data?.message || e?.message || "Failed to load projects");
      }
    })();
    return () => {
      mounted = false;
    };
  }, [http, PATHS]);

  const loadPhotos = async (projectId) => {
    if (!projectId) return;
    setLoading(true);
    setErr(null);
    setMsg(null);

    try {
      let photos = [];
      try {
        const res = await http.get(PATHS.readPhotos(projectId));
        photos = Array.isArray(res.data?.photos) ? res.data.photos : Array.isArray(res.data) ? res.data : [];
      } catch {
        // fall back to reading the project doc
      }

      if (!photos.length) {
        const r2 = await http.get(PATHS.readProjectOne(projectId));
        const doc = Array.isArray(r2.data) ? r2.data[0] : r2.data?.data ?? r2.data;
        photos =
          (Array.isArray(doc?.Photos) && doc.Photos) ||
          (Array.isArray(doc?.photos) && doc.photos) ||
          [];
      }

      setRows(photos);
      if (!photos.length) setMsg("No photos found for this project.");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Failed to load photos");
    } finally {
      setLoading(false);
    }
  };

  const handlePickProject = (e) => {
    const pid = e.target.value;
    setSelectedId(pid);
    const p = projects.find((x) => x._id === pid);
    setSelectedProjectName(p?.title || p?.name || pid || "");
    if (pid) loadPhotos(pid);
  };

  // ---------------- actions ----------------
  const handleDelete = async (index) => {
    if (!selectedId && selectedId !== "0") return;
    if (!window.confirm("Delete this photo?")) return;
    setErr(null);
    setMsg(null);
    try {
      await http.delete(PATHS.deletePhoto(selectedId), { data: { index } });
      setRows((prev) => prev.filter((_, i) => i !== index));
      setMsg("Photo deleted ✅");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Delete failed");
    }
  };

  const startReplace = (index) => {
    replaceTargetIndexRef.current = index;
    replaceFileRef.current?.click();
  };

  const onPickReplaceFile = async (e) => {
    const file = (e.target.files && e.target.files[0]) || null;
    e.target.value = "";
    if (!file) return;
    const idx = replaceTargetIndexRef.current;
    if (idx == null) return;

    setUploading(true);
    setErr(null);
    setMsg(null);

    try {
      // remove the old one, then upload/register the new one to R2
      await http.delete(PATHS.deletePhoto(selectedId), { data: { index: idx } });
      await uploadViaR2(selectedId, [file]);
      await loadPhotos(selectedId);
      setMsg("Photo replaced ✅");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Replace failed");
      await loadPhotos(selectedId);
    } finally {
      setUploading(false);
    }
  };

  const startAppend = () => appendFileRef.current?.click();

  const onPickAppendFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;

    setUploading(true);
    setErr(null);
    setMsg(null);

    try {
      await uploadViaR2(selectedId, files);
      await loadPhotos(selectedId);
      setMsg("Photos appended ✅");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ---------------- UI ----------------
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 absolute left-[300px] top-[100px]">
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <select
          className="rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={selectedId}
          onChange={handlePickProject}
        >
          <option value="">{projects.length ? "Select a project…" : "Loading projects…"}</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title || p.name || p._id}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={!selectedId || uploading}
          onClick={startAppend}
          className="rounded-xl bg-blue-900 px-5 py-2 text-white hover:brightness-110 disabled:opacity-60"
        >
          {uploading ? "Working…" : "Add Photos"}
        </button>

        {selectedId && (
          <Link to={`/SingalProjectsEnergy/${selectedId}`}>
            <button className="rounded-xl border border-slate-200 px-5 py-2 text-slate-700 hover:bg-slate-50">
              View Project
            </button>
          </Link>
        )}

        <label className="ml-auto flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
          <input type="checkbox" checked={showDebug} onChange={(e) => setShowDebug(e.target.checked)} />
          Debug
        </label>
      </div>

      {err && <div className="mb-3 text-sm text-rose-600">{err}</div>}
      {msg && <div className="mb-3 text-sm text-emerald-600">{msg}</div>}

      <div className="rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Project</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Preview</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Image</th>
              {showDebug && (
                <>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">raw</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">src</th>
                </>
              )}
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {!selectedId ? (
              <tr>
                <td colSpan={showDebug ? 7 : 5} className="px-4 py-6 text-center text-slate-500">
                  Select a project to view photos.
                </td>
              </tr>
            ) : loading ? (
              <tr>
                <td colSpan={showDebug ? 7 : 5} className="px-4 py-6 text-center text-slate-500">
                  Loading…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={showDebug ? 7 : 5} className="px-4 py-6 text-center text-slate-500">
                  No photos uploaded yet.
                </td>
              </tr>
            ) : (
              rows.map((photo, i) => {
                const raw = getImagePath(photo);
                const name = raw ? String(raw).split(/[\\/]/).pop() : "—";
                const src = raw ? toPublicUrl(raw) : "";

                return (
                  <tr key={`${name}-${i}`} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-700">{i}</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">{selectedProjectName || selectedId}</td>
                    <td className="px-4 py-3">
                      {src ? (
                        <a href={src} target="_blank" rel="noreferrer" title="Open full image">
                          <img
                            src={src}
                            alt={name}
                            className="w-20 h-16 object-cover rounded-md border border-slate-200"
                            onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                          />
                        </a>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-600 break-all">{name}</td>

                    {showDebug && (
                      <>
                        <td className="px-4 py-3 text-xs text-slate-500 break-all">
                          {typeof raw === "string" ? raw : JSON.stringify(raw)}
                        </td>
                        <td className="px-4 py-3 text-xs text-slate-500 break-all">{src}</td>
                      </>
                    )}

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startReplace(i)}
                          disabled={uploading}
                          className="inline-flex items-center rounded-lg bg-[#2FA8E1] px-3 py-1.5 text-sm font-semibold text-white hover:brightness-95 disabled:opacity-60"
                        >
                          <i className="fa-solid fa-pen-to-square mr-2" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(i)}
                          disabled={uploading}
                          className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-60"
                        >
                          <i className="fa-solid fa-trash mr-2" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Hidden file pickers */}
      <input
        ref={replaceFileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onPickReplaceFile}
      />
      <input
        ref={appendFileRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={onPickAppendFiles}
      />
    </div>
  );
}

