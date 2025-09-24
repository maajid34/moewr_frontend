// // src/components/projects/EnergyProjectPhotosTable.jsx
// import { useEffect, useMemo, useRef, useState } from "react";
// import api from "../../api"; // axios instance with baseURL
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function EnergyProjectPhotosTable() {
//   const [projects, setProjects] = useState([]);
//   const [selectedId, setSelectedId] = useState("");
//   const [selectedProjectName, setSelectedProjectName] = useState("");
//   const [rows, setRows] = useState([]); // [{ Image }]
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(null);
//   const [msg, setMsg] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // hidden input for replace (edit one)
//   const replaceFileRef = useRef(null);
//   const replaceTargetIndexRef = useRef(null);

//   // hidden input for quick-append
//   const appendFileRef = useRef(null);

//   const PATHS = useMemo(
//     () => ({
//       projects: ["/readProjectEnergy/EnergyProject", "/api/readProjectEnergy/EnergyProject"],
//       readPhotos: (id) => [`/ReadEnergyProjectPhoto/${id}/photos`, `/api/ReadEnergyProjectPhoto/${id}/photos`],
//       postPhotos: (id) => [`/energyProject/${id}/photos`, `/api/energyProject/${id}/photos`],
//       deletePhoto: (id) => [`/energyProject/${id}/photos`, `/api/energyProject/${id}/photos`], // body: {index} or {imageName}
//     }),
//     []
//   );

//   // util: normalize display src (same as in your detail page)
//   const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
//   const normalizeName = (val) => {
//     if (!val) return "";
//     if (/^https?:\/\//i.test(val)) return val;
//     const fname = String(val).split(/[\\/]/).pop();
//     return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
//   };

//   // load projects for select
//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       setErr(null);
//       try {
//         let res;
//         try {
//           res = await api.get(PATHS.projects[0]);
//         } catch {
//           res = await api.get(PATHS.projects[1]);
//         }
//         if (!mounted) return;
//         const docs = Array.isArray(res.data) ? res.data : [];
//         setProjects(docs);
//       } catch (e) {
//         setErr(e?.response?.data?.message || e?.message || "Failed to load projects");
//       }
//     })();
//     return () => (mounted = false);
//   }, [PATHS]);

//   // load photos for selected project
//   const loadPhotos = async (projectId) => {
//     if (!projectId) return;
//     setLoading(true);
//     setErr(null);
//     setMsg(null);
//     try {
//       let res;
//       try {
//         res = await api.get(PATHS.readPhotos(projectId)[0]);
//       } catch {
//         res = await api.get(PATHS.readPhotos(projectId)[1]);
//       }
//       const arr = Array.isArray(res.data?.photos)
//         ? res.data.photos
//         : Array.isArray(res.data)
//         ? res.data
//         : [];
//       setRows(arr);
//     } catch (e) {
//       setErr(e?.response?.data?.message || e?.message || "Failed to load photos");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // on project change
//   const handlePickProject = (e) => {
//     const pid = e.target.value;
//     setSelectedId(pid);
//     setSelectedProjectName(
//       projects.find((p) => p._id === pid)?.title || projects.find((p) => p._id === pid)?.name || pid
//     );
//     if (pid) loadPhotos(pid);
//   };

//   // delete by index
//   const handleDelete = async (index) => {
//     if (!selectedId && selectedId !== "0") return;
//     const ok = window.confirm("Delete this photo?");
//     if (!ok) return;
//     setErr(null);
//     setMsg(null);
//     try {
//       // Use raw axios with absolute URL to avoid any interceptor edge cases
//       const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
//       // Your controller accepts JSON body { index } or { imageName }
//       await axios.delete(`${base}${PATHS.deletePhoto(selectedId)[0]}`, {
//         data: { index },
//       }).catch(async () => {
//         // fallback to /api prefix if needed
//         await axios.delete(`${base}${PATHS.deletePhoto(selectedId)[1]}`, {
//           data: { index },
//         });
//       });

//       // remove locally
//       setRows((prev) => prev.filter((_, i) => i !== index));
//       setMsg("Photo deleted ✅");
//     } catch (e) {
//       setErr(e?.response?.data?.message || e?.message || "Delete failed");
//     }
//   };

//   // start replace flow: pick file
//   const startReplace = (index) => {
//     replaceTargetIndexRef.current = index;
//     replaceFileRef.current?.click();
//   };

//   // when replacement file chosen: delete old index then append new photo
//   const onPickReplaceFile = async (e) => {
//     const file = (e.target.files && e.target.files[0]) || null;
//     e.target.value = ""; // reset input
//     if (!file) return;

//     const idx = replaceTargetIndexRef.current;
//     if (idx == null) return;

//     setUploading(true);
//     setErr(null);
//     setMsg(null);

//     try {
//       // 1) delete existing at index
//       const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
//       await axios
//         .delete(`${base}${PATHS.deletePhoto(selectedId)[0]}`, { data: { index: idx } })
//         .catch(async () => {
//           await axios.delete(`${base}${PATHS.deletePhoto(selectedId)[1]}`, { data: { index: idx } });
//         });

//       // 2) append the new one
//       const form = new FormData();
//       form.append("photos", file);
//       await api
//         .post(PATHS.postPhotos(selectedId)[0], form, { headers: { "Content-Type": "multipart/form-data" } })
//         .catch(async () => {
//           await api.post(PATHS.postPhotos(selectedId)[1], form, {
//             headers: { "Content-Type": "multipart/form-data" },
//           });
//         });

//       // reload list to reflect new order/state
//       await loadPhotos(selectedId);
//       setMsg("Photo replaced ✅");
//     } catch (e) {
//       setErr(e?.response?.data?.message || e?.message || "Replace failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Quick-append multiple photos
//   const startAppend = () => appendFileRef.current?.click();
//   const onPickAppendFiles = async (e) => {
//     const list = Array.from(e.target.files || []);
//     e.target.value = "";
//     if (!list.length) return;

//     setUploading(true);
//     setErr(null);
//     setMsg(null);

//     try {
//       const form = new FormData();
//       list.forEach((f) => form.append("photos", f));
//       await api
//         .post(PATHS.postPhotos(selectedId)[0], form, { headers: { "Content-Type": "multipart/form-data" } })
//         .catch(async () => {
//           await api.post(PATHS.postPhotos(selectedId)[1], form, {
//             headers: { "Content-Type": "multipart/form-data" },
//           });
//         });

//       await loadPhotos(selectedId);
//       setMsg("Photos appended ✅");
//     } catch (e) {
//       setErr(e?.response?.data?.message || e?.message || "Upload failed");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 absolute left-[300px] top-[100px]">
//       {/* Controls header */}
//       <div className="flex flex-wrap items-center gap-3 mb-5">
//         <select
//           className="rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
//           value={selectedId}
//           onChange={handlePickProject}
//         >
//           <option value="">{projects.length ? "Select a project…" : "Loading projects…"}</option>
//           {projects.map((p) => (
//             <option key={p._id} value={p._id}>
//               {p.title || p.name || p._id}
//             </option>
//           ))}
//         </select>

//         <button
//           type="button"
//           disabled={!selectedId || uploading}
//           onClick={startAppend}
//           className="rounded-xl bg-blue-900 px-5 py-2 text-white hover:brightness-110 disabled:opacity-60"
//         >
//           {uploading ? "Working…" : "Add Photos"}
//         </button>

//         {selectedId && (
//           <Link to={`/SingalProjectsEnergy/${selectedId}`}>
//             <button className="rounded-xl border border-slate-200 px-5 py-2 text-slate-700 hover:bg-slate-50">
//               View Project
//             </button>
//           </Link>
//         )}
//       </div>

//       {/* Alerts */}
//       {err && <div className="mb-3 text-sm text-rose-600">{err}</div>}
//       {msg && <div className="mb-3 text-sm text-emerald-600">{msg}</div>}

//       {/* Table */}
//       <div className="rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
//         <table className="min-w-full divide-y divide-slate-200">
//           <thead className="bg-slate-50">
//             <tr>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">#</th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Project</th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Preview</th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Image</th>
//               <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-100 bg-white">
//             {!selectedId ? (
//               <tr>
//                 <td colSpan={5} className="px-4 py-6 text-center text-slate-500">
//                   Select a project to view photos.
//                 </td>
//               </tr>
//             ) : loading ? (
//               <tr>
//                 <td colSpan={5} className="px-4 py-6 text-center text-slate-500">Loading…</td>
//               </tr>
//             ) : rows.length === 0 ? (
//               <tr>
//                 <td colSpan={5} className="px-4 py-6 text-center text-slate-500">
//                   No photos uploaded yet.
//                 </td>
//               </tr>
//             ) : (
//               rows.map((p, i) => {
//                 const name = p?.Image ? String(p.Image).split(/[\\/]/).pop() : "—";
//                 return (
//                   <tr key={`${name}-${i}`} className="hover:bg-slate-50">
//                     <td className="px-4 py-3 text-slate-700">{i}</td>
//                     <td className="px-4 py-3 text-slate-900 font-medium">
//                       {selectedProjectName || selectedId}
//                     </td>
//                     <td className="px-4 py-3">
//                       <img
//                         src={normalizeName(p?.Image)}
//                         alt={name}
//                         className="w-20 h-16 object-cover rounded-md border border-slate-200"
//                         onError={(e) => (e.currentTarget.src = "/placeholder.png")}
//                       />
//                     </td>
//                     <td className="px-4 py-3 text-slate-600 break-all">{name}</td>
//                     <td className="px-4 py-3">
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => startReplace(i)}
//                           disabled={uploading}
//                           className="inline-flex items-center rounded-lg bg-[#2FA8E1] px-3 py-1.5 text-sm font-semibold text-white hover:brightness-95 disabled:opacity-60"
//                         >
//                           <i className="fa-solid fa-pen-to-square mr-2" /> Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(i)}
//                           disabled={uploading}
//                           className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-60"
//                         >
//                           <i className="fa-solid fa-trash mr-2" /> Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Hidden file pickers */}
//       <input
//         ref={replaceFileRef}
//         type="file"
//         accept="image/*"
//         className="hidden"
//         onChange={onPickReplaceFile}
//       />
//       <input
//         ref={appendFileRef}
//         type="file"
//         accept="image/*"
//         multiple
//         className="hidden"
//         onChange={onPickAppendFiles}
//       />
//     </div>
//   );
// }


// src/components/projects/EnergyProjectPhotosTable.jsx

// src/components/projects/EnergyProjectPhotosTable.jsx

// src/components/projects/EnergyProjectPhotosTable.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EnergyProjectPhotosTable() {
  // ---- HARDCODED BASES ----
  const API = "https://moewr-backend.onrender.com";
  const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

  // ---- AXIOS (optional token) ----
  const http = useMemo(() => {
    const inst = axios.create({ baseURL: API, withCredentials: false });
    try {
      const admin = JSON.parse(localStorage.getItem("admin") || "{}");
      if (admin?.token) inst.defaults.headers.common.Authorization = `Bearer ${admin.token}`;
    } catch {}
    return inst;
  }, []);

  // ---- STATE ----
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showDebug, setShowDebug] = useState(false);

  const replaceFileRef = useRef(null);
  const replaceTargetIndexRef = useRef(null);
  const appendFileRef = useRef(null);

  // ---- ROUTES (exactly yours) ----
  const PATHS = useMemo(
    () => ({
      projects: `/readProjectEnergy/EnergyProject`,
      readPhotos: (id) => `/ReadEnergyProjectPhoto/${id}/photos`,
      readProjectOne: (id) => `/readProjectEnergySingal/EnergyProject/${id}`,
      postPhotos: (id) => `/energyProject/${id}/photos`,   // POST (append)
      putPhotos:  (id) => `/energyProject/${id}/photos`,   // PUT (replace with index)
      deletePhoto:(id) => `/energyProject/${id}/photos`,   // DELETE (index in body)
    }),
    []
  );

  // ---- HELPERS ----
  const getImagePath = (photo) => {
    if (!photo) return "";
    if (typeof photo === "string") return photo;

    const direct =
      photo.Image ?? photo.image ?? photo.url ?? photo.URL ??
      photo.Location ?? photo.location ?? photo.path ?? photo.filepath ??
      photo.filename ?? photo.Key ?? photo.key ?? "";

    if (typeof direct === "string" && direct) return direct;

    const img = photo.Image || photo.image || {};
    if (img && typeof img === "object") {
      const nested =
        img.Location || img.location || img.url || img.URL ||
        img.path || img.filepath || img.filename || img.Key || img.key || "";
      if (typeof nested === "string" && nested) return nested;
    }
    return "";
  };

  // Build public R2 URL; add default folder when only a filename exists
const toPublicUrl = (val) => {
  if (!val) return "";
  let s = String(val).trim();
  if (!s) return "";

  // Already a full URL
  if (/^https?:\/\//i.test(s)) return s;

  // Normalize slashes and trim
  s = s.replace(/\\/g, "/").replace(/^\/+/, "");

  // If DB stored a full disk path, cut it down: .../uploads/foo.jpg -> uploads/foo.jpg
  const m = s.match(/(?:^|\/)(upload|uploads|allimages|document)\/(.+)$/i);
  if (m) {
    // Always serve local files from your backend /upload/*
    const filename = m[2];
    return `${API.replace(/\/+$/, "")}/upload/${filename}`;
  }

  // Otherwise assume it's an R2 key or plain filename
  if (!s.includes("/")) s = `energy/photos/${s}`;
  return `${ASSET_BASE.replace(/\/+$/, "")}/${encodeURI(s)}`;
};


  const normalizeProjects = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.items)) return data.items;
    return [];
  };

  // ---- UPLOADS ----
  // Append photos: POST /energyProject/:id/photos
  const appendFiles = async (projectId, files) => {
    // Try "photos", then "Photos"
    const attempt = async (field) => {
      const fd = new FormData();
      files.forEach((f) => fd.append(field, f, f.name));
      // DO NOT set Content-Type manually; axios sets boundary.
      return http.post(PATHS.postPhotos(projectId), fd);
    };
    try {
      return await attempt("photos");
    } catch {
      return await attempt("Photos");
    }
  };

  // Replace a single photo at index: PUT /energyProject/:id/photos  (with index)
  const replaceFileAtIndex = async (projectId, index, file) => {
    // Try with field "photos" then "Photos"; include index in FormData (multer puts it in req.body)
    const attempt = async (field) => {
      const fd = new FormData();
      fd.append("index", String(index));
      fd.append(field, file, file.name);
      return http.put(PATHS.putPhotos(projectId), fd);
    };
    try {
      return await attempt("photos");
    } catch {
      return await attempt("Photos");
    }
  };

  // ---- LOAD DATA ----
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
    return () => { mounted = false; };
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
        photos = Array.isArray(res.data?.photos) ? res.data.photos
               : Array.isArray(res.data) ? res.data
               : [];
      } catch {
        // fallback: read whole project and pick Photos/photos
      }

      if (!photos.length) {
        const r2 = await http.get(PATHS.readProjectOne(projectId));
        const doc = Array.isArray(r2.data) ? r2.data[0] : r2.data?.data ?? r2.data;
        photos =
          (Array.isArray(doc?.Photos) && doc.Photos) ||
          (Array.isArray(doc?.photos) && doc.photos) || [];
      }

      setRows(photos);
      if (!photos.length) setMsg("No photos found for this project.");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Failed to load photos");
    } finally {
      setLoading(false);
    }
  };

  // ---- UI EVENTS ----
  const handlePickProject = (e) => {
    const pid = e.target.value;
    setSelectedId(pid);
    const p = projects.find((x) => x._id === pid);
    setSelectedProjectName(p?.title || p?.name || pid || "");
    if (pid) loadPhotos(pid);
  };

  // Delete with body { index }
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

  // PUT (replace) with index
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
      await replaceFileAtIndex(selectedId, idx, file);
      await loadPhotos(selectedId);
      setMsg("Photo replaced ✅");
    } catch (e2) {
      setErr(e2?.response?.data?.message || e2?.message || "Replace failed");
      await loadPhotos(selectedId);
    } finally {
      setUploading(false);
    }
  };

  // POST (append)
  const startAppend = () => appendFileRef.current?.click();

  const onPickAppendFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;

    setUploading(true);
    setErr(null);
    setMsg(null);
    try {
      await appendFiles(selectedId, files);
      await loadPhotos(selectedId);
      setMsg("Photos appended ✅");
    } catch (e2) {
      setErr(e2?.response?.data?.message || e2?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ---- RENDER ----
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
                      ) : ("—")}
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
      <input ref={replaceFileRef} type="file" accept="image/*" className="hidden" onChange={onPickReplaceFile} />
      <input ref={appendFileRef}  type="file" accept="image/*" multiple className="hidden" onChange={onPickAppendFiles} />
    </div>
  );
}



