// // 


// // src/components/projects/EnergyProjectUpdate.jsx
// import axios from "axios";
// import { useEffect, useMemo, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function EnergyProjectUpdate() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const API = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";
//   const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || API;

//   // ---------------- AUTH-AWARE AXIOS CLIENT (JWT in localStorage.admin.token) ----------------
//   const http = useMemo(() => {
//     const inst = axios.create({ baseURL: API }); // no withCredentials unless you use cookies
//     try {
//       const admin = JSON.parse(localStorage.getItem("admin") || "{}");
//       if (admin?.token) {
//         inst.defaults.headers.common.Authorization = `Bearer ${admin.token}`;
//       }
//     } catch {}
//     return inst;
//   }, [API]);

//   // ---------------- FORM STATE ----------------
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [overview, setOverview] = useState("");
//   const [geogrpahic, setgeogrpahic] = useState("");
//   const [objective, setObjective] = useState("");
    
//   const [componentTitle, setComponentTitle] = useState("");
//   const [componentOne, setComponentOne] = useState("");
//   const [componentTwo, setComponentTwo] = useState("");
//   const [componentThree, setComponentThree] = useState("");
//   const [componentFour, setComponentFour] = useState("");

//   // existing filenames/URLs from backend
//   const [coverImage, setCoverImage] = useState("");
//   const [objectiveImage, setObjectiveImage] = useState("");
//   const [GeographicImage, setGeographicImage] = useState("");

//   const [stackeHolder1, setstackeHolder1] = useState("");
//   const [stakeHolder2, setstakeHolder2] = useState("");
//   const [stakeHolder3, setstakeHolder3] = useState("");
//   const [stakeHolder4, setstakeHolder4] = useState("");

//   // newly selected files (optional)
//   const [coverFile, setCoverFile] = useState(null);
//   const [objectiveFile, setObjectiveFile] = useState(null);
//   const [GeographicFile, setGeographicFile] = useState("");
//   const [stake1File, setStake1File] = useState(null);
//   const [stake2File, setStake2File] = useState(null);
//   const [stake3File, setStake3File] = useState(null);
//   const [stake4File, setStake4File] = useState(null);

//   // free text achievements (keep your backend expectation in mind)
//   const [achievements, setAchievements] = useState("");

//   // ---------------- UI STATE ----------------
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState(null);

//   // ---------------- ENDPOINTS ----------------
//   const READ_ONE_URL = `/readProjectEnergySingal/EnergyProject/${id}`;
//   const UPDATE_URL = `/UpdateEnergyProject/energy/${id}`;

//   // ---------------- HELPERS ----------------
//   const toImgUrl = (val) => {
//     if (!val || typeof val !== "string") return "";
//     if (/^https?:\/\//i.test(val)) return val;
//     const fname = val.split(/[\\/]/).pop();
//     return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
//   };
//   const onImgError = (e) => (e.currentTarget.src = "/placeholder.png");

//   // ---------------- LOAD ONE ----------------
//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await http.get(READ_ONE_URL);
//         const data = Array.isArray(res.data) ? res.data[0] : (res.data?.data ?? res.data);
//         if (!mounted) return;

//         if (!data) {
//           setError("Project not found.");
//           setLoading(false);
//           return;
//         }

//         setTitle(data.title ?? "");
//         setDesc(data.desc ?? "");
//         setOverview(data.overview ?? "");
//         setgeogrpahic(data.geogrpahic ?? "");
//         setObjective(data.objective ?? "");

//         setComponentTitle(data.componentTitle ?? "");
//         setComponentOne(data.componentOne ?? "");
//         setComponentTwo(data.componentTwo ?? "");
//         setComponentThree(data.componentThree ?? "");
//         setComponentFour(data.componentFour ?? "");

//         setCoverImage(data.coverImage ?? "");
//         setObjectiveImage(data.objectiveImage ?? "");
//         setGeographicImage(data.GeographicImage ?? "");
//         setstackeHolder1(data.stackeHolder1 ?? "");
//         setstakeHolder2(data.stakeHolder2 ?? "");
//         setstakeHolder3(data.stakeHolder3 ?? "");
//         setstakeHolder4(data.stakeHolder4 ?? "");

//         if (Array.isArray(data.achievements)) {
//           const txt = data.achievements
//             .map((a) => {
//               if (typeof a === "string") return `• ${a}`;
//               if (a && typeof a === "object") {
//                 const pct = a.progress != null ? ` (${a.progress}%)` : "";
//                 const detail = a.detail ? ` — ${a.detail}` : "";
//                 return `• ${a.title ?? "Achievement"}${pct}${detail}`;
//               }
//               return "";
//             })
//             .filter(Boolean)
//             .join("\n");
//           setAchievements(txt);
//         } else {
//           setAchievements(data.achievements ?? "");
//         }
//       } catch (err) {
//         if (err?.response?.status === 401) {
//           navigate("/AdminLogin", { replace: true });
//           return;
//         }
//         setError(err?.response?.data?.message || "Failed to load project.");
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, [READ_ONE_URL, http, navigate]);

//   // ---------------- SUBMIT UPDATE ----------------
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     setError(null);

//     try {
//       const fd = new FormData();
//       // text fields
//       fd.append("title", title);
//       fd.append("desc", desc);
//       fd.append("overview", overview);
//       fd.append("geogrpahic", geogrpahic);
//       fd.append("objective", objective);
//       fd.append("componentTitle", componentTitle);
//       fd.append("componentOne", componentOne);
//       fd.append("componentTwo", componentTwo);
//       fd.append("componentThree", componentThree);
//       fd.append("componentFour", componentFour);
//       fd.append("achievements", achievements);

//       // files: only append if user picked a new one (backend keeps current otherwise)
//       if (coverFile) fd.append("coverImage", coverFile);
//       if (objectiveFile) fd.append("objectiveImage", objectiveFile);
//       if (GeographicFile) fd.append("GeographicImage", GeographicFile);
//       if (stake1File) fd.append("stackeHolder1", stake1File);
//       if (stake2File) fd.append("stakeHolder2", stake2File);
//       if (stake3File) fd.append("stakeHolder3", stake3File);
//       if (stake4File) fd.append("stakeHolder4", stake4File);

//       await http.patch(UPDATE_URL, fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Project updated successfully.");
//       navigate(-1); // back to list
//     } catch (err) {
//       if (err?.response?.status === 401) {
//         setError("Unauthorized. Please log in again.");
//         navigate("/AdminLogin", { replace: true });
//         return;
//       }
//       const msg =
//         err?.response?.data?.message ||
//         err?.response?.data?.error ||
//         err?.message ||
//         "Update failed.";
//       setError(msg);
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="absolute left-[300px] top-[120px] p-6 text-slate-700">
//         Loading project…
//       </div>
//     );
//   }

//   return (
//     <div className="absolute left-[300px] top-[100px] min-h-screen w-[calc(100%-300px)] bg-slate-50 text-slate-800">
//       <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
//         {error && (
//           <div className="mb-4 rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
//             {error}
//           </div>
//         )}

//         <form className="space-y-8" onSubmit={handleUpdate} encType="multipart/form-data" noValidate>
//           {/* Header */}
//           <section className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
//             <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/30" />
//             <div className="absolute -right-32 top-6 h-48 w-48 rounded-full bg-sky-300/30" />
//             <div className="px-5 sm:px-8 py-6">
//               <div className="flex items-center gap-3">
//                 <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] rounded-full bg-sky-100 text-sky-700 font-semibold">
//                   Update Energy Project
//                 </span>
//                 <span className="text-xs text-slate-500">ID: {id}</span>
//               </div>
//               <h2 className="mt-3 text-2xl font-extrabold">Project Basics</h2>

//               <div className="mt-6 grid gap-5 md:grid-cols-2">
//                 <div>
//                   <label htmlFor="title" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                     Title <span className="text-rose-600">*</span>
//                   </label>
//                   <input
//                     id="title" name="title" type="text" required
//                     value={title} onChange={(e) => setTitle(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="componentTitle" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                     Component Title <span className="text-rose-600">*</span>
//                   </label>
//                   <input
//                     id="componentTitle" name="componentTitle" type="text" required
//                     value={componentTitle} onChange={(e) => setComponentTitle(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label htmlFor="desc" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                     Short Description <span className="text-rose-600">*</span>
//                   </label>
//                   <textarea
//                     id="desc" name="desc" rows={3} required
//                     value={desc} onChange={(e) => setDesc(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label htmlFor="overview" className="text-sm font-medium text-slate-700">Overview</label>
//                   <textarea
//                     id="overview" name="overview" rows={3}
//                     value={overview} onChange={(e) => setOverview(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>
//                 {/* geographic */}
//                 <div className="md:col-span-2">
//                   <label htmlFor="overview" className="text-sm font-medium text-slate-700">geography</label>
//                   <textarea
//                     id="overview" name="geography" rows={3}
//                     value={geogrpahic} onChange={(e) => setgeogrpahic(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Media */}
//           <section className="grid lg:grid-cols-2 gap-6">
//             <div className="rounded-2xl border bg-white shadow-sm p-5">
//               <h3 className="font-semibold">Overview Image</h3>
//               {coverImage && (
//                 <img
//                   src={toImgUrl(coverImage)} alt="cover" onError={onImgError}
//                   className="mt-3 w-64 h-40 object-cover rounded border"
//                 />
//               )}
//               <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                 <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
//                   Choose new file
//                   <input type="file" className="hidden" onChange={(e) => setCoverFile(e.target.files[0])} />
//                 </label>
//                 <div className="mt-2 text-xs text-slate-500">
//                   Current: {coverImage ? coverImage.split(/[\\/]/).pop() : "—"}
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-2xl border bg-white shadow-sm p-5">
//               <h3 className="font-semibold">Objective Image</h3>
//               {objectiveImage && (
//                 <img
//                   src={toImgUrl(objectiveImage)} alt="objective" onError={onImgError}
//                   className="mt-3 w-64 h-40 object-cover rounded border"
//                 />
//               )}
//               <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                 <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
//                   Choose new file
//                   <input type="file" className="hidden" onChange={(e) => setObjectiveFile(e.target.files[0])} />
//                 </label>
//                 <div className="mt-2 text-xs text-slate-500">
//                   Current: {objectiveImage ? objectiveImage.split(/[\\/]/).pop() : "—"}
//                 </div>
//               </div>
//             </div>

//             {/* geographicimage */}
            
//             <div className="rounded-2xl border bg-white shadow-sm p-5">
//               <h3 className="font-semibold">geographic Image</h3>
//               {objectiveImage && (
//                 <img
//                   src={toImgUrl(objectiveImage)} alt="objective" onError={onImgError}
//                   className="mt-3 w-64 h-40 object-cover rounded border"
//                 />
//               )}
//               <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                 <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
//                   Choose new file
//                   <input type="file" className="hidden" onChange={(e) => setGeographicImage(e.target.files[0])} />
//                 </label>
//                 <div className="mt-2 text-xs text-slate-500">
//                   Current: {objectiveImage ? objectiveImage.split(/[\\/]/).pop() : "—"}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Objective */}
//           <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//             <div className="flex items-center justify-between">
//               <h3 className="font-semibold">Objective</h3>
//               <span className="inline-flex h-2 w-24 rounded-full bg-sky-300" />
//             </div>
//             <textarea
//               id="objective" name="objective" rows={4} required
//               value={objective} onChange={(e) => setObjective(e.target.value)}
//               className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </section>

//           {/* Components */}
//           <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//             <h3 className="font-semibold">Project Components</h3>
//             <div className="mt-5 grid md:grid-cols-2 gap-5">
//               <input value={componentOne} onChange={(e) => setComponentOne(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//               <input value={componentTwo} onChange={(e) => setComponentTwo(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//               <input value={componentThree} onChange={(e) => setComponentThree(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//               <input value={componentFour} onChange={(e) => setComponentFour(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//             </div>
//           </section>

//           {/* Achievements */}
//           <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//             <div className="flex items-center justify-between">
//               <h3 className="font-semibold">Achievements</h3>
//               <span className="inline-flex h-2 w-16 rounded-full bg-sky-200" />
//             </div>
//             <textarea
//               id="achievements" name="achievements" rows={5} required
//               value={achievements} onChange={(e) => setAchievements(e.target.value)}
//               className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </section>

//           {/* Stakeholders */}
//           <section className="grid lg:grid-cols-2 gap-6">
//             {[
//               { label: "Stakeholder 1", current: stackeHolder1, setFile: setStake1File },
//               { label: "Stakeholder 2", current: stakeHolder2, setFile: setStake2File },
//               { label: "Stakeholder 3", current: stakeHolder3, setFile: setStake3File },
//               { label: "Stakeholder 4", current: stakeHolder4, setFile: setStake4File },
//             ].map(({ label, current, setFile }) => (
//               <div key={label} className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold">{label}</h3>
//                 {current && (
//                   <img
//                     src={toImgUrl(current)} alt={label} onError={onImgError}
//                     className="mt-3 w-64 h-40 object-cover rounded border"
//                   />
//                 )}
//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
//                     Choose new file
//                     <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} />
//                   </label>
//                   <div className="mt-2 text-xs text-slate-500">
//                     Current: {current ? current.split(/[\\/]/).pop() : "—"}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* Actions */}
//           <div className="h-2" />
//           <div className="flex items-center justify-end gap-3 pt-2">
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={saving}
//               className="rounded-xl bg-[#536878] px-5 py-2.5 text-white hover:bg-[#495c6a] disabled:opacity-60"
//             >
//               {saving ? "Saving…" : "Save Changes"}
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }


// 


// src/components/projects/EnergyProjectUpdate.jsx
// import axios from "axios";
// import { useEffect, useMemo, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function EnergyProjectUpdate() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Hardcoded bases (no .env)
//   const API = "https://moewr-backend.onrender.com";
//   const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

//   // ---------------- AUTH-AWARE AXIOS CLIENT (JWT in localStorage.admin.token) ----------------
//   const http = useMemo(() => {
//     const inst = axios.create({ baseURL: API });
//     try {
//       const admin = JSON.parse(localStorage.getItem("admin") || "{}");
//       if (admin?.token) {
//         inst.defaults.headers.common.Authorization = `Bearer ${admin.token}`;
//       }
//     } catch {}
//     return inst;
//   }, []);

//   // ---------------- FORM STATE ----------------
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [overview, setOverview] = useState("");
//   const [geogrpahic, setgeogrpahic] = useState("");
//   const [objective, setObjective] = useState("");

//   const [componentTitle, setComponentTitle] = useState("");
//   const [componentOne, setComponentOne] = useState("");
//   const [componentTwo, setComponentTwo] = useState("");
//   const [componentThree, setComponentThree] = useState("");
//   const [componentFour, setComponentFour] = useState("");

//   // existing filenames/URLs from backend
//   const [coverImage, setCoverImage] = useState("");
//   const [objectiveImage, setObjectiveImage] = useState("");
//   const [GeographicImage, setGeographicImage] = useState("");

//   const [stackeHolder1, setstackeHolder1] = useState("");
//   const [stakeHolder2, setstakeHolder2] = useState("");
//   const [stakeHolder3, setstakeHolder3] = useState("");
//   const [stakeHolder4, setstakeHolder4] = useState("");

//   // newly selected files (optional)
//   const [coverFile, setCoverFile] = useState(null);
//   const [objectiveFile, setObjectiveFile] = useState(null);
//   const [GeographicFile, setGeographicFile] = useState(null);
//   const [stake1File, setStake1File] = useState(null);
//   const [stake2File, setStake2File] = useState(null);
//   const [stake3File, setStake3File] = useState(null);
//   const [stake4File, setStake4File] = useState(null);

//   // achievements (free text; backend may ignore if not updating it)
//   const [achievements, setAchievements] = useState("");

//   // ---------------- UI STATE ----------------
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState(null);

//   // ---------------- ENDPOINTS ----------------
//   const READ_ONE_URL = `/readProjectEnergySingal/EnergyProject/${id}`;
//   const UPDATE_URL = `/UpdateEnergyProject/energy/${id}`;

//   // ---------------- HELPERS ----------------
//   const toImgUrl = (val) => {
//     if (!val || typeof val !== "string") return "";
//     if (/^https?:\/\//i.test(val)) return val; // already full URL from R2
//     // Clean and build public R2 URL
//     let s = val.replace(/\\/g, "/").replace(/^\/+/, "");
//     const lower = s.toLowerCase();
//     if (lower.includes("document/")) s = s.slice(lower.indexOf("document/") + "document/".length);
//     if (lower.includes("allimages/")) s = s.slice(lower.indexOf("allimages/") + "allimages/".length);
//     if (lower.includes("uploads/")) s = s.slice(lower.indexOf("uploads/"));
//     s = s.replace(/^\/?r2\//i, "").replace(/^\/+/, "");
//     const encoded = s.split("/").filter(Boolean).map(encodeURIComponent).join("/");
//     return `${ASSET_BASE}/${encoded}`;
//   };
//   const onImgError = (e) => (e.currentTarget.style.display = "none");

//   // ---------------- LOAD ONE ----------------
//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await http.get(READ_ONE_URL);
//         const data = Array.isArray(res.data) ? res.data[0] : (res.data?.data ?? res.data);
//         if (!mounted) return;

//         if (!data) {
//           setError("Project not found.");
//           setLoading(false);
//           return;
//         }

//         setTitle(data.title ?? "");
//         setDesc(data.desc ?? "");
//         setOverview(data.overview ?? "");
//         setgeogrpahic(data.geogrpahic ?? "");
//         setObjective(data.objective ?? "");

//         setComponentTitle(data.componentTitle ?? "");
//         setComponentOne(data.componentOne ?? "");
//         setComponentTwo(data.componentTwo ?? "");
//         setComponentThree(data.componentThree ?? "");
//         setComponentFour(data.componentFour ?? "");

//         setCoverImage(data.coverImage ?? "");
//         setObjectiveImage(data.objectiveImage ?? "");
//         setGeographicImage(data.GeographicImage ?? "");
//         setstackeHolder1(data.stackeHolder1 ?? "");
//         setstakeHolder2(data.stakeHolder2 ?? "");
//         setstakeHolder3(data.stakeHolder3 ?? "");
//         setstakeHolder4(data.stakeHolder4 ?? "");

//         if (Array.isArray(data.achievements)) {
//           const txt = data.achievements
//             .map((a) => {
//               if (typeof a === "string") return `• ${a}`;
//               if (a && typeof a === "object") {
//                 const pct = a.progress != null ? ` (${a.progress}%)` : "";
//                 const detail = a.detail ? ` — ${a.detail}` : "";
//                 return `• ${a.title ?? "Achievement"}${pct}${detail}`;
//               }
//               return "";
//             })
//             .filter(Boolean)
//             .join("\n");
//           setAchievements(txt);
//         } else {
//           setAchievements(data.achievements ?? "");
//         }
//       } catch (err) {
//         if (err?.response?.status === 401) {
//           navigate("/AdminLogin", { replace: true });
//           return;
//         }
//         setError(err?.response?.data?.message || "Failed to load project.");
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, [READ_ONE_URL, http, navigate]);

//   // ---------------- SUBMIT UPDATE ----------------
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     setError(null);

//     try {
//       const fd = new FormData();
//       // text fields
//       fd.append("title", title);
//       fd.append("desc", desc);
//       fd.append("overview", overview);
//       fd.append("geogrpahic", geogrpahic);
//       fd.append("objective", objective);
//       fd.append("componentTitle", componentTitle);
//       fd.append("componentOne", componentOne);
//       fd.append("componentTwo", componentTwo);
//       fd.append("componentThree", componentThree);
//       fd.append("componentFour", componentFour);
//       fd.append("achievements", achievements);

//       // files: only append if user picked a new one (backend keeps current otherwise)
//       if (coverFile) fd.append("coverImage", coverFile);
//       if (objectiveFile) fd.append("objectiveImage", objectiveFile);
//       if (GeographicFile) fd.append("GeographicImage", GeographicFile);
//       if (stake1File) fd.append("stackeHolder1", stake1File);
//       if (stake2File) fd.append("stakeHolder2", stake2File);
//       if (stake3File) fd.append("stakeHolder3", stake3File);
//       if (stake4File) fd.append("stakeHolder4", stake4File);

//       await http.patch(UPDATE_URL, fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Project updated successfully.");
//       navigate(-1);
//     } catch (err) {
//       if (err?.response?.status === 401) {
//         setError("Unauthorized. Please log in again.");
//         navigate("/AdminLogin", { replace: true });
//         return;
//       }
//       const msg =
//         err?.response?.data?.message ||
//         err?.response?.data?.error ||
//         err?.message ||
//         "Update failed.";
//       setError(msg);
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="absolute left-[300px] top-[120px] p-6 text-slate-700">
//         Loading project…
//       </div>
//     );
//   }

//   return (
//     <div className="absolute left-[300px] top-[100px] min-h-screen w-[calc(100%-300px)] bg-slate-50 text-slate-800">
//       <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
//         {error && (
//           <div className="mb-4 rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
//             {error}
//           </div>
//         )}

//         <form className="space-y-8" onSubmit={handleUpdate} encType="multipart/form-data" noValidate>
//           {/* Header */}
//           <section className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
//             <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/30" />
//             <div className="absolute -right-32 top-6 h-48 w-48 rounded-full bg-sky-300/30" />
//             <div className="px-5 sm:px-8 py-6">
//               <div className="flex items-center gap-3">
//                 <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] rounded-full bg-sky-100 text-sky-700 font-semibold">
//                   Update Energy Project
//                 </span>
//                 <span className="text-xs text-slate-500">ID: {id}</span>
//               </div>
//               <h2 className="mt-3 text-2xl font-extrabold">Project Basics</h2>

//               <div className="mt-6 grid gap-5 md:grid-cols-2">
//                 <div>
//                   <label htmlFor="title" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                     Title <span className="text-rose-600">*</span>
//                   </label>
//                   <input
//                     id="title" name="title" type="text" required
//                     value={title} onChange={(e) => setTitle(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="componentTitle" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                     Component Title <span className="text-rose-600">*</span>
//                   </label>
//                   <input
//                     id="componentTitle" name="componentTitle" type="text" required
//                     value={componentTitle} onChange={(e) => setComponentTitle(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label htmlFor="desc" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                     Short Description <span className="text-rose-600">*</span>
//                   </label>
//                   <textarea
//                     id="desc" name="desc" rows={3} required
//                     value={desc} onChange={(e) => setDesc(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label htmlFor="overview" className="text-sm font-medium text-slate-700">Overview</label>
//                   <textarea
//                     id="overview" name="overview" rows={3}
//                     value={overview} onChange={(e) => setOverview(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label htmlFor="geography" className="text-sm font-medium text-slate-700">Geography</label>
//                   <textarea
//                     id="geography" name="geography" rows={3}
//                     value={geogrpahic} onChange={(e) => setgeogrpahic(e.target.value)}
//                     className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//                   />
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Media */}
//           <section className="grid lg:grid-cols-2 gap-6">
//             <div className="rounded-2xl border bg-white shadow-sm p-5">
//               <h3 className="font-semibold">Overview Image</h3>
//               {coverImage && (
//                 <img
//                   src={toImgUrl(coverImage)} alt="cover" onError={onImgError}
//                   className="mt-3 w-64 h-40 object-cover rounded border"
//                 />
//               )}
//               <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                 <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
//                   Choose new file
//                   <input type="file" className="hidden" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />
//                 </label>
//                 <div className="mt-2 text-xs text-slate-500">
//                   Current: {coverImage ? coverImage.split(/[\\/]/).pop() : "—"}
//                 </div>
//               </div>
//             </div>

//             <div className="rounded-2xl border bg-white shadow-sm p-5">
//               <h3 className="font-semibold">Objective Image</h3>
//               {objectiveImage && (
//                 <img
//                   src={toImgUrl(objectiveImage)} alt="objective" onError={onImgError}
//                   className="mt-3 w-64 h-40 object-cover rounded border"
//                 />
//               )}
//               <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                 <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
//                   Choose new file
//                   <input type="file" className="hidden" onChange={(e) => setObjectiveFile(e.target.files?.[0] || null)} />
//                 </label>
//                 <div className="mt-2 text-xs text-slate-500">
//                   Current: {objectiveImage ? objectiveImage.split(/[\\/]/).pop() : "—"}
//                 </div>
//               </div>
//             </div>

//             {/* Geographic image */}
//             <div className="rounded-2xl border bg-white shadow-sm p-5">
//               <h3 className="font-semibold">Geographic Image</h3>
//               {GeographicImage && (
//                 <img
//                   src={toImgUrl(GeographicImage)} alt="geographic" onError={onImgError}
//                   className="mt-3 w-64 h-40 object-cover rounded border"
//                 />
//               )}
//               <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                 <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
//                   Choose new file
//                   <input type="file" className="hidden" onChange={(e) => setGeographicFile(e.target.files?.[0] || null)} />
//                 </label>
//                 <div className="mt-2 text-xs text-slate-500">
//                   Current: {GeographicImage ? GeographicImage.split(/[\\/]/).pop() : "—"}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Objective */}
//           <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//             <div className="flex items-center justify-between">
//               <h3 className="font-semibold">Objective</h3>
//               <span className="inline-flex h-2 w-24 rounded-full bg-sky-300" />
//             </div>
//             <textarea
//               id="objective" name="objective" rows={4} required
//               value={objective} onChange={(e) => setObjective(e.target.value)}
//               className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </section>

//           {/* Components */}
//           <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//             <h3 className="font-semibold">Project Components</h3>
//             <div className="mt-5 grid md:grid-cols-2 gap-5">
//               <input value={componentOne} onChange={(e) => setComponentOne(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//               <input value={componentTwo} onChange={(e) => setComponentTwo(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//               <input value={componentThree} onChange={(e) => setComponentThree(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//               <input value={componentFour} onChange={(e) => setComponentFour(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
//             </div>
//           </section>

//           {/* Achievements */}
//           <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//             <div className="flex items-center justify-between">
//               <h3 className="font-semibold">Achievements</h3>
//               <span className="inline-flex h-2 w-16 rounded-full bg-sky-200" />
//             </div>
//             <textarea
//               id="achievements" name="achievements" rows={5}
//               value={achievements} onChange={(e) => setAchievements(e.target.value)}
//               className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </section>

//           {/* Stakeholders */}
//           <section className="grid lg:grid-cols-2 gap-6">
//             {[
//               { label: "Stakeholder 1", current: stackeHolder1, setFile: setStake1File },
//               { label: "Stakeholder 2", current: stakeHolder2, setFile: setStake2File },
//               { label: "Stakeholder 3", current: stakeHolder3, setFile: setStake3File },
//               { label: "Stakeholder 4", current: stakeHolder4, setFile: setStake4File },
//             ].map(({ label, current, setFile }) => (
//               <div key={label} className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold">{label}</h3>
//                 {current && (
//                   <img
//                     src={toImgUrl(current)} alt={label} onError={onImgError}
//                     className="mt-3 w-64 h-40 object-cover rounded border"
//                   />
//                 )}
//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
//                     Choose new file
//                     <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
//                   </label>
//                   <div className="mt-2 text-xs text-slate-500">
//                     Current: {current ? current.split(/[\\/]/).pop() : "—"}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </section>

//           {/* Actions */}
//           <div className="h-2" />
//           <div className="flex items-center justify-end gap-3 pt-2">
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={saving}
//               className="rounded-xl bg-[#536878] px-5 py-2.5 text-white hover:bg-[#495c6a] disabled:opacity-60"
//             >
//               {saving ? "Saving…" : "Save Changes"}
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

// src/components/projects/EnergyProjectUpdate.jsx
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EnergyProjectUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Bases
  const API = "https://moewr-backend.onrender.com";
  const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

  // Auth-aware axios
  const http = useMemo(() => {
    const inst = axios.create({ baseURL: API });
    try {
      const admin = JSON.parse(localStorage.getItem("admin") || "{}");
      if (admin?.token) inst.defaults.headers.common.Authorization = `Bearer ${admin.token}`;
    } catch {}
    return inst;
  }, []);

  // Form state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [overview, setOverview] = useState("");
  const [geogrpahic, setgeogrpahic] = useState("");
  const [objective, setObjective] = useState("");

  const [componentTitle, setComponentTitle] = useState("");
  const [componentOne, setComponentOne] = useState("");
  const [componentTwo, setComponentTwo] = useState("");
  const [componentThree, setComponentThree] = useState("");
  const [componentFour, setComponentFour] = useState("");

  // Existing image strings from backend
  const [coverImage, setCoverImage] = useState("");
  const [objectiveImage, setObjectiveImage] = useState("");
  const [GeographicImage, setGeographicImage] = useState("");

  const [stackeHolder1, setstackeHolder1] = useState("");
  const [stakeHolder2, setstakeHolder2] = useState("");
  const [stakeHolder3, setstakeHolder3] = useState("");
  const [stakeHolder4, setstakeHolder4] = useState("");

  // New file picks (optional)
  const [coverFile, setCoverFile] = useState(null);
  const [objectiveFile, setObjectiveFile] = useState(null);
  const [GeographicFile, setGeographicFile] = useState(null);
  const [stake1File, setStake1File] = useState(null);
  const [stake2File, setStake2File] = useState(null);
  const [stake3File, setStake3File] = useState(null);
  const [stake4File, setStake4File] = useState(null);

  // NEW: existing gallery photos from backend + new picks
  const [existingPhotos, setExistingPhotos] = useState([]); // strings/URLs from DB
  const [newPhotos, setNewPhotos] = useState([]);           // File[]
  const [newPhotoPreviews, setNewPhotoPreviews] = useState([]); // blob URLs

  // Free-text achievements
  const [achievements, setAchievements] = useState("");

  // UI
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Endpoints
  const READ_ONE_URL = `/readProjectEnergySingal/EnergyProject/${id}`;
  const UPDATE_URL = `/UpdateEnergyProject/energy/${id}`;

  // Helpers
  const toImgUrl = (val) => {
    if (!val || typeof val !== "string") return "";
    if (/^https?:\/\//i.test(val)) return val; // already full URL
    let s = val.replace(/\\/g, "/").replace(/^\/+/, "");
    const lower = s.toLowerCase();
    if (lower.includes("document/")) s = s.slice(lower.indexOf("document/") + "document/".length);
    if (lower.includes("allimages/")) s = s.slice(lower.indexOf("allimages/") + "allimages/".length);
    if (lower.includes("uploads/")) s = s.slice(lower.indexOf("uploads/"));
    s = s.replace(/^\/?r2\//i, "").replace(/^\/+/, "");
    const encoded = s.split("/").filter(Boolean).map(encodeURIComponent).join("/");
    return `${ASSET_BASE}/${encoded}`;
  };
  const onImgError = (e) => (e.currentTarget.style.display = "none");

  // Load one
  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await http.get(READ_ONE_URL);
        const data = Array.isArray(res.data) ? res.data[0] : (res.data?.data ?? res.data);
        if (!mounted) return;

        if (!data) {
          setError("Project not found.");
          setLoading(false);
          return;
        }

        setTitle(data.title ?? "");
        setDesc(data.desc ?? "");
        setOverview(data.overview ?? "");
        setgeogrpahic(data.geogrpahic ?? "");
        setObjective(data.objective ?? "");

        setComponentTitle(data.componentTitle ?? "");
        setComponentOne(data.componentOne ?? "");
        setComponentTwo(data.componentTwo ?? "");
        setComponentThree(data.componentThree ?? "");
        setComponentFour(data.componentFour ?? "");

        setCoverImage(data.coverImage ?? "");
        setObjectiveImage(data.objectiveImage ?? "");
        setGeographicImage(data.GeographicImage ?? "");

        setstackeHolder1(data.stackeHolder1 ?? "");
        setstakeHolder2(data.stakeHolder2 ?? "");
        setstakeHolder3(data.stakeHolder3 ?? "");
        setstakeHolder4(data.stakeHolder4 ?? "");

        // NEW: existing photos array if present
        const photos = Array.isArray(data.photos) ? data.photos : [];
        setExistingPhotos(photos);

        if (Array.isArray(data.achievements)) {
          const txt = data.achievements
            .map((a) => {
              if (typeof a === "string") return `• ${a}`;
              if (a && typeof a === "object") {
                const pct = a.progress != null ? ` (${a.progress}%)` : "";
                const detail = a.detail ? ` — ${a.detail}` : "";
                return `• ${a.title ?? "Achievement"}${pct}${detail}`;
              }
              return "";
            })
            .filter(Boolean)
            .join("\n");
          setAchievements(txt);
        } else {
          setAchievements(data.achievements ?? "");
        }
      } catch (err) {
        if (err?.response?.status === 401) {
          navigate("/AdminLogin", { replace: true });
          return;
        }
        setError(err?.response?.data?.message || "Failed to load project.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
      // Revoke previews on unmount
      newPhotoPreviews.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [READ_ONE_URL, http, navigate]); // eslint-disable-line

  // NEW: handle multiple new photos
  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files || []);
    newPhotoPreviews.forEach((u) => URL.revokeObjectURL(u));
    setNewPhotos(files);
    setNewPhotoPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  // Submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const fd = new FormData();
      // text
      fd.append("title", title);
      fd.append("desc", desc);
      fd.append("overview", overview);
      fd.append("geogrpahic", geogrpahic);
      fd.append("objective", objective);
      fd.append("componentTitle", componentTitle);
      fd.append("componentOne", componentOne);
      fd.append("componentTwo", componentTwo);
      fd.append("componentThree", componentThree);
      fd.append("componentFour", componentFour);
      fd.append("achievements", achievements);

      // files (singletons): only if changed
      if (coverFile) fd.append("coverImage", coverFile);
      if (objectiveFile) fd.append("objectiveImage", objectiveFile);
      if (GeographicFile) fd.append("GeographicImage", GeographicFile);
      if (stake1File) fd.append("stackeHolder1", stake1File);
      if (stake2File) fd.append("stakeHolder2", stake2File);
      if (stake3File) fd.append("stakeHolder3", stake3File);
      if (stake4File) fd.append("stakeHolder4", stake4File);

      // NEW: append new gallery photos (match your backend field name)
      // If your backend expects "photos[]", switch the key below.
      for (const f of newPhotos) fd.append("photos", f);

      await http.patch(UPDATE_URL, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project updated successfully.");
      navigate(-1);
    } catch (err) {
      if (err?.response?.status === 401) {
        setError("Unauthorized. Please log in again.");
        navigate("/AdminLogin", { replace: true });
        return;
      }
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Update failed.";
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="absolute left-[300px] top-[120px] p-6 text-slate-700">Loading project…</div>;
  }

  return (
    <div className="absolute left-[300px] top-[100px] min-h-screen w-[calc(100%-300px)] bg-slate-50 text-slate-800">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {error && (
          <div className="mb-4 rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
            {error}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleUpdate} encType="multipart/form-data" noValidate>
          {/* Header */}
          <section className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/30" />
            <div className="absolute -right-32 top-6 h-48 w-48 rounded-full bg-sky-300/30" />
            <div className="px-5 sm:px-8 py-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] rounded-full bg-sky-100 text-sky-700 font-semibold">
                  Update Energy Project
                </span>
                <span className="text-xs text-slate-500">ID: {id}</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold">Project Basics</h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="title" className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    Title <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="title" name="title" type="text" required
                    value={title} onChange={(e) => setTitle(e.target.value)}
                    className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div>
                  <label htmlFor="componentTitle" className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    Component Title <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="componentTitle" name="componentTitle" type="text" required
                    value={componentTitle} onChange={(e) => setComponentTitle(e.target.value)}
                    className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="desc" className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    Short Description <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="desc" name="desc" rows={3} required
                    value={desc} onChange={(e) => setDesc(e.target.value)}
                    className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="overview" className="text-sm font-medium text-slate-700">Overview</label>
                  <textarea
                    id="overview" name="overview" rows={3}
                    value={overview} onChange={(e) => setOverview(e.target.value)}
                    className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="geography" className="text-sm font-medium text-slate-700">Geography</label>
                  <textarea
                    id="geography" name="geography" rows={3}
                    value={geogrpahic} onChange={(e) => setgeogrpahic(e.target.value)}
                    className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Media */}
          <section className="grid lg:grid-cols-2 gap-6">
            {/* Cover */}
            <div className="rounded-2xl border bg-white shadow-sm p-5">
              <h3 className="font-semibold">Overview Image</h3>
              {coverImage && (
                <img src={toImgUrl(coverImage)} alt="cover" onError={onImgError} className="mt-3 w-64 h-40 object-cover rounded border" />
              )}
              <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
                  Choose new file
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />
                </label>
                <div className="mt-2 text-xs text-slate-500">Current: {coverImage ? coverImage.split(/[\\/]/).pop() : "—"}</div>
              </div>
            </div>

            {/* Objective */}
            <div className="rounded-2xl border bg-white shadow-sm p-5">
              <h3 className="font-semibold">Objective Image</h3>
              {objectiveImage && (
                <img src={toImgUrl(objectiveImage)} alt="objective" onError={onImgError} className="mt-3 w-64 h-40 object-cover rounded border" />
              )}
              <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
                  Choose new file
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => setObjectiveFile(e.target.files?.[0] || null)} />
                </label>
                <div className="mt-2 text-xs text-slate-500">Current: {objectiveImage ? objectiveImage.split(/[\\/]/).pop() : "—"}</div>
              </div>
            </div>

            {/* Geographic (FIXED: preview uses GeographicImage now) */}
            <div className="rounded-2xl border bg-white shadow-sm p-5">
              <h3 className="font-semibold">Geographic Image</h3>
              {GeographicImage && (
                <img src={toImgUrl(GeographicImage)} alt="geographic" onError={onImgError} className="mt-3 w-64 h-40 object-cover rounded border" />
              )}
              <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
                  Choose new file
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => setGeographicFile(e.target.files?.[0] || null)} />
                </label>
                <div className="mt-2 text-xs text-slate-500">Current: {GeographicImage ? GeographicImage.split(/[\\/]/).pop() : "—"}</div>
              </div>
            </div>
          </section>

          {/* NEW: Project Photos (Gallery) */}
          <section className="rounded-2xl border bg-white shadow-sm p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Project Photos (Gallery)</h3>
              <span className="text-xs text-slate-500">
                You can select multiple files; new ones will be added.
              </span>
            </div>

            {/* Existing thumbnails */}
            {existingPhotos?.length > 0 && (
              <div className="mt-4">
                <div className="text-xs text-slate-500 mb-2">Existing photos</div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {existingPhotos.map((p, i) => (
                    <img
                      key={`${p}-${i}`}
                      src={toImgUrl(p)}
                      alt={`existing-${i + 1}`}
                      onError={onImgError}
                      className="aspect-square w-full object-cover rounded-lg border"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Picker + new previews */}
            <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
              <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
                Add Photos
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  multiple
                  onChange={handlePhotosChange}
                />
              </label>
              {newPhotoPreviews.length > 0 && (
                <>
                  <div className="mt-2 text-xs text-slate-500">{newPhotoPreviews.length} new photo(s) selected</div>
                  <div className="mt-3 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {newPhotoPreviews.map((src, i) => (
                      <img key={i} src={src} className="aspect-square w-full object-cover rounded-lg border" alt={`new-${i + 1}`} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Objective */}
          <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Objective</h3>
              <span className="inline-flex h-2 w-24 rounded-full bg-sky-300" />
            </div>
            <textarea
              id="objective" name="objective" rows={4} required
              value={objective} onChange={(e) => setObjective(e.target.value)}
              className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </section>

          {/* Components */}
          <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
            <h3 className="font-semibold">Project Components</h3>
            <div className="mt-5 grid md:grid-cols-2 gap-5">
              <input value={componentOne} onChange={(e) => setComponentOne(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input value={componentTwo} onChange={(e) => setComponentTwo(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input value={componentThree} onChange={(e) => setComponentThree(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
              <input value={componentFour} onChange={(e) => setComponentFour(e.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400" />
            </div>
          </section>

          {/* Achievements */}
          <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Achievements</h3>
              <span className="inline-flex h-2 w-16 rounded-full bg-sky-200" />
            </div>
            <textarea
              id="achievements" name="achievements" rows={5}
              value={achievements} onChange={(e) => setAchievements(e.target.value)}
              className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </section>

          {/* Stakeholders */}
          <section className="grid lg:grid-cols-2 gap-6">
            {[
              { label: "Stakeholder 1", current: stackeHolder1, setFile: setStake1File },
              { label: "Stakeholder 2", current: stakeHolder2, setFile: setStake2File },
              { label: "Stakeholder 3", current: stakeHolder3, setFile: setStake3File },
              { label: "Stakeholder 4", current: stakeHolder4, setFile: setStake4File },
            ].map(({ label, current, setFile }) => (
              <div key={label} className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold">{label}</h3>
                {current && (
                  <img src={toImgUrl(current)} alt={label} onError={onImgError} className="mt-3 w-64 h-40 object-cover rounded border" />
                )}
                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
                    Choose new file
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  </label>
                  <div className="mt-2 text-xs text-slate-500">Current: {current ? current.split(/[\\/]/).pop() : "—"}</div>
                </div>
              </div>
            ))}
          </section>

          {/* Actions */}
          <div className="h-2" />
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[#536878] px-5 py-2.5 text-white hover:bg-[#495c6a] disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

