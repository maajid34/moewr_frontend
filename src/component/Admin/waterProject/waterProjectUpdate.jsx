// 


// src/components/projects/EnergyProjectUpdate.jsx
// import axios from "axios";
// import { useEffect, useMemo, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function WaterProjectUpdate() {
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
//     const [geogrpahic, setgeogrpahic] = useState("");
//   const [objective, setObjective] = useState("");

//   const [componentTitle, setComponentTitle] = useState("");
//   const [componentOne, setComponentOne] = useState("");
//   const [componentTwo, setComponentTwo] = useState("");
//   const [componentThree, setComponentThree] = useState("");
//   const [componentFour, setComponentFour] = useState("");
//     const [StackeholderDesc, setStackeholderDesc] = useState("");
//   const [stack1Title, setstack1Title] = useState("");
//   const [stack1desc, setstack1desc] = useState("");
//    const [stack2Title, setstack2Title] = useState("");
//   const [stack2desc, setstack2desc] = useState("");
//    const [stack3Title, setstack3Title] = useState("");
//   const [stack3desc, setstack3desc] = useState("");

//   // existing filenames/URLs from backend
//   const [coverImage, setCoverImage] = useState("");
//   const [objectiveImage, setObjectiveImage] = useState("");
//   const [stackeHolder1, setstackeHolder1] = useState("");
//    const [GeographicImage, setGeographicImage] = useState("");
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
//   const READ_ONE_URL = `/readProjectWaterSingal/waterProject/${id}`;
//   const UPDATE_URL = `/UpdateWaterProject/waterProject/${id}`;

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
//          setgeogrpahic(data.geogrpahic ?? "");
//         setObjective(data.objective ?? "");

//         setComponentTitle(data.componentTitle ?? "");
//         setComponentOne(data.componentOne ?? "");
//         setComponentTwo(data.componentTwo ?? "");
//         setComponentThree(data.componentThree ?? "");
//         setComponentFour(data.componentFour ?? "");
//      formData.append("StackeholderDesc", StackeholderDesc);
//      formData.append("stack1Title", stack1Title);
//     formData.append("stack1desc", stack1desc);
//     formData.append("stack2Title", stack2Title);
//     formData.append("stack2desc", stack2desc);
//     formData.append("stack3Title", stack3Title);
//     formData.append("stack3desc", stack3desc);
//         setCoverImage(data.coverImage ?? "");
//         setObjectiveImage(data.objectiveImage ?? "");
//          setGeographicImage(data.GeographicImage ?? "");
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
//          if (GeographicFile) fd.append("GeographicImage", GeographicFile);
//       if (stake1File) fd.append("stackeHolder1", stake1File);
//       if (stake2File) fd.append("stakeHolder2", stake2File);
//       if (stake3File) fd.append("stakeHolder3", stake3File);
//       if (stake4File) fd.append("stakeHolder4", stake4File);

//       await http.patch(UPDATE_URL, fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Project updated successfully.");
//       navigate("/WaterProjectTable"); // back to list
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
//                   Update water Project
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

//                     {/* geographic */}
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

//              {/* geographicimage */}
            
//             <div className="rounded-2xl border bg-white shadow-sm p-5">
//               <h3 className="font-semibold">geographic Image</h3>
//               {GeographicImage && (
//                 <img
//                   src={toImgUrl(GeographicImage)} alt="geographic" onError={onImgError}
//                   className="mt-3 w-64 h-40 object-cover rounded border"
//                 />
//               )}
//               <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                 <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
//                   Choose new file
//                   <input type="file" className="hidden" onChange={(e) => setGeographicFile(e.target.files[0])} />
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
//               id="achievements" name="achievements" rows={5} required
//               value={achievements} onChange={(e) => setAchievements(e.target.value)}
//               className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
//             />
//           </section>

//           {/* Stakeholders */}
//           {/* <section className="grid lg:grid-cols-2 gap-6">
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
//           </section> */}

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
//               {saving ? "Saving…" : "Update"}
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// }

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function WaterProjectUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";
  const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || API;

  // ---------------- AUTH-AWARE AXIOS CLIENT ----------------
  const http = useMemo(() => {
    const inst = axios.create({ baseURL: API });
    try {
      const admin = JSON.parse(localStorage.getItem("admin") || "{}");
      if (admin?.token) {
        inst.defaults.headers.common.Authorization = `Bearer ${admin.token}`;
      }
    } catch {}
    return inst;
  }, [API]);

  // ---------------- FORM STATE ----------------
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

  // Stakeholder text (required by your backend)
  const [StackeholderDesc, setStackeholderDesc] = useState("");
  const [stack1Title, setstack1Title] = useState("");
  const [stack1desc, setstack1desc] = useState("");
  const [stack2Title, setstack2Title] = useState("");
  const [stack2desc, setstack2desc] = useState("");
  const [stack3Title, setstack3Title] = useState("");
  const [stack3desc, setstack3desc] = useState("");
  const [projectStage, setprojectSatge] = useState("");

  // existing image filenames/URLs from backend
  const [coverImage, setCoverImage] = useState("");
  const [objectiveImage, setObjectiveImage] = useState("");
  const [GeographicImage, setGeographicImage] = useState("");
  const [stackeHolder1, setstackeHolder1] = useState("");
  const [stakeHolder2, setstakeHolder2] = useState("");
  const [stakeHolder3, setstakeHolder3] = useState("");
  const [stakeHolder4, setstakeHolder4] = useState("");

  // newly selected files (optional)
  const [coverFile, setCoverFile] = useState(null);
  const [objectiveFile, setObjectiveFile] = useState(null);
  const [GeographicFile, setGeographicFile] = useState(null);
  const [stake1File, setStake1File] = useState(null);
  const [stake2File, setStake2File] = useState(null);
  const [stake3File, setStake3File] = useState(null);
  const [stake4File, setStake4File] = useState(null);

  const [achievements, setAchievements] = useState("");

  // ---------------- UI STATE ----------------
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // ---------------- ENDPOINTS ----------------
  const READ_ONE_URL = `/readProjectWaterSingal/waterProject/${id}`;
  const UPDATE_URL = `/UpdateWaterProject/waterProject/${id}`;

  // ---------------- HELPERS ----------------
  const toImgUrl = (val) => {
    if (!val || typeof val !== "string") return "";
    if (/^https?:\/\//i.test(val)) return val;
    const fname = val.split(/[\\/]/).pop();
    return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
  };
  const onImgError = (e) => (e.currentTarget.src = "/placeholder.png");

  // ---------------- LOAD ONE ----------------
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

        // basics
        setTitle(data.title ?? "");
        setDesc(data.desc ?? "");
        setOverview(data.overview ?? "");
        setgeogrpahic(data.geogrpahic ?? "");
        setObjective(data.objective ?? "");

        // components
        setComponentTitle(data.componentTitle ?? "");
        setComponentOne(data.componentOne ?? "");
        setComponentTwo(data.componentTwo ?? "");
        setComponentThree(data.componentThree ?? "");
        setComponentFour(data.componentFour ?? "");

        // stakeholder text (IMPORTANT)
        setStackeholderDesc(data.StackeholderDesc ?? "");
        setstack1Title(data.stack1Title ?? "");
        setstack1desc(data.stack1desc ?? "");
        setstack2Title(data.stack2Title ?? "");
        setstack2desc(data.stack2desc ?? "");
        setstack3Title(data.stack3Title ?? "");
        setstack3desc(data.stack3desc ?? "");
        setprojectSatge(data.projectStage ?? "");

        // images
        setCoverImage(data.coverImage ?? "");
        setObjectiveImage(data.objectiveImage ?? "");
        setGeographicImage(data.GeographicImage ?? "");
        setstackeHolder1(data.stackeHolder1 ?? "");
        setstakeHolder2(data.stakeHolder2 ?? "");
        setstakeHolder3(data.stakeHolder3 ?? "");
        setstakeHolder4(data.stakeHolder4 ?? "");

        // achievements
        if (Array.isArray(data.achievements)) {
          const txt = data.achievements
            .map((a) => (typeof a === "string" ? `• ${a}` : ""))
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
    };
  }, [READ_ONE_URL, http, navigate]);

  // ---------------- SUBMIT UPDATE ----------------
  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    // quick required validation matching your schema
//  const missing = [];
//     if (!title.trim()) missing.push("title");
//     if (!desc.trim()) missing.push("desc");
//     if (!objective.trim()) missing.push("objective");
//     if (!geogrpahic.trim()) missing.push("geogrpahic");
//     if (!stack1Title.trim()) missing.push("stack1Title");
//     if (!stack1desc.trim()) missing.push("stack1desc");
//     if (!stack2Title.trim()) missing.push("stack2Title");
//     if (!stack2desc.trim()) missing.push("stack2desc");
//     if (!stack3Title.trim()) missing.push("stack3Title");
//     if (!stack3desc.trim()) missing.push("stack3desc");
//     if (!projectSatge.trim()) missing.push("projectSatge");
//     if (missing.length) {
//       setSaving(false);
//       setError(`Please fill required fields: ${missing.join(", ")}`);
//       return;
//     }

    try {
      const fd = new FormData();
      // text fields
      fd.append("title", title);
      fd.append("desc", desc);
      fd.append("overview", overview);
      fd.append("geogrpahic", geogrpahic); // keep spelling to match backend
      fd.append("objective", objective);
      fd.append("componentTitle", componentTitle);
      fd.append("componentOne", componentOne);
      fd.append("componentTwo", componentTwo);
      fd.append("componentThree", componentThree);
      fd.append("componentFour", componentFour);
        fd.append("projectStage", projectStage);
      fd.append("StackeholderDesc", StackeholderDesc);
      fd.append("stack1Title", stack1Title);
      fd.append("stack1desc", stack1desc);
      fd.append("stack2Title", stack2Title);
      fd.append("stack2desc", stack2desc);
      fd.append("stack3Title", stack3Title);
      fd.append("stack3desc", stack3desc);
      
      fd.append("achievements", achievements);

      // files: only append if user picked a new one
      if (coverFile) fd.append("coverImage", coverFile);
      if (objectiveFile) fd.append("objectiveImage", objectiveFile);
      if (GeographicFile) fd.append("GeographicImage", GeographicFile);
      if (stake1File) fd.append("stackeHolder1", stake1File); // note the 'e'
      if (stake2File) fd.append("stakeHolder2", stake2File);
      if (stake3File) fd.append("stakeHolder3", stake3File);
      if (stake4File) fd.append("stakeHolder4", stake4File);

      // DEBUG: see exactly what we send
      const preview = {};
      fd.forEach((v, k) => (preview[k] = v instanceof File ? `File(${v.name})` : v));
      console.table(preview);

      await http.patch(UPDATE_URL, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project updated successfully.");
      navigate("/WaterProjectTable");
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Update failed.";
      console.error("UPDATE ERROR:", err?.response || err);
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="absolute left-[300px] top-[120px] p-6 text-slate-700">
        Loading project…
      </div>
    );
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
                  Update Water Project
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
                    Component Title
                  </label>
                  <input
                    id="componentTitle" name="componentTitle" type="text"
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
                  <label htmlFor="geogrpahic" className="text-sm font-medium text-slate-700">Geographic *</label>
                  <textarea
                    id="geogrpahic" name="geogrpahic" rows={3} required
                    value={geogrpahic} onChange={(e) => setgeogrpahic(e.target.value)}
                    className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Media */}
          <section className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white shadow-sm p-5">
              <h3 className="font-semibold">Overview Image</h3>
              {coverImage && (
                <img
                  src={toImgUrl(coverImage)} alt="cover" onError={onImgError}
                  className="mt-3 w-64 h-40 object-cover rounded border"
                />
              )}
              <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
                  Choose new file
                  <input type="file" className="hidden" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />
                </label>
                <div className="mt-2 text-xs text-slate-500">
                  Current: {coverImage ? coverImage.split(/[\\/]/).pop() : "—"}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white shadow-sm p-5">
              <h3 className="font-semibold">Objective Image</h3>
              {objectiveImage && (
                <img
                  src={toImgUrl(objectiveImage)} alt="objective" onError={onImgError}
                  className="mt-3 w-64 h-40 object-cover rounded border"
                />
              )}
              <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
                  Choose new file
                  <input type="file" className="hidden" onChange={(e) => setObjectiveFile(e.target.files?.[0] || null)} />
                </label>
                <div className="mt-2 text-xs text-slate-500">
                  Current: {objectiveImage ? objectiveImage.split(/[\\/]/).pop() : "—"}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-white shadow-sm p-5">
              <h3 className="font-semibold">Geographic Image</h3>
              {GeographicImage && (
                <img
                  src={toImgUrl(GeographicImage)} alt="geographic" onError={onImgError}
                  className="mt-3 w-64 h-40 object-cover rounded border"
                />
              )}
              <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                <label className="inline-block text-xs px-3 py-2 rounded-md border border-sky-600 text-sky-700 hover:bg-sky-50 cursor-pointer">
                  Choose new file
                  <input type="file" className="hidden" onChange={(e) => setGeographicFile(e.target.files?.[0] || null)} />
                </label>
                <div className="mt-2 text-xs text-slate-500">
                  Current: {GeographicImage ? GeographicImage.split(/[\\/]/).pop() : "—"}
                </div>
              </div>
            </div>
          </section>

          {/* Objective */}
          <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Objective *</h3>
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

          {/* Stakeholders TEXT (required by backend) */}
          <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
            <h3 className="font-semibold">Stakeholders (Text)</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-700">StackeholderDesc</label>
                <input
                  type="text"
                  value={StackeholderDesc}
                  onChange={(e) => setStackeholderDesc(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* Stakeholder 1 */}
              <div>
                <label className="text-sm font-medium text-slate-700">stack1Title *</label>
                <input
                  type="text" 
                  value={stack1Title}
                  onChange={(e) => setstack1Title(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">stack1desc *</label>
                <input
                  type="text" 
                  value={stack1desc}
                  onChange={(e) => setstack1desc(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* Stakeholder 2 */}
              <div>
                <label className="text-sm font-medium text-slate-700">stack2Title *</label>
                <input
                  type="text" 
                  value={stack2Title}
                  onChange={(e) => setstack2Title(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">stack2desc *</label>
                <input
                  type="text" 
                  value={stack2desc}
                  onChange={(e) => setstack2desc(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              {/* Stakeholder 3 */}
              <div>
                <label className="text-sm font-medium text-slate-700">stack3Title *</label>
                <input
                  type="text" 
                  value={stack3Title}
                  onChange={(e) => setstack3Title(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">stack3desc *</label>
                <input
                  type="text" 
                  value={stack3desc}
                  onChange={(e) => setstack3desc(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>
          </section>

          {/* Stakeholder IMAGES (optional to change) */}
          <section className="grid lg:grid-cols-2 gap-6">
            {[
              { label: "Stakeholder 1 Image", current: stackeHolder1, setFile: setStake1File },
              { label: "Stakeholder 2 Image", current: stakeHolder2, setFile: setStake2File },
              { label: "Stakeholder 3 Image", current: stakeHolder3, setFile: setStake3File },
              { label: "Stakeholder 4 Image", current: stakeHolder4, setFile: setStake4File },
            ].map(({ label, current, setFile }) => (
              <div key={label} className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold">{label}</h3>
                {current && (
                  <img
                    src={toImgUrl(current)} alt={label} onError={onImgError}
                    className="mt-3 w-64 h-40 object-cover rounded border"
                  />
                )}
                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <label className="inline-block text-xs px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 cursor-pointer">
                    Choose new file
                    <input type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  </label>
                  <div className="mt-2 text-xs text-slate-500">
                    Current: {current ? current.split(/[\\/]/).pop() : "—"}
                  </div>
                </div>
              </div>
            ))}
          </section>
 <label className="text-sm font-medium text-slate-700">Project Stage</label>
                <input
                  type="text"
                  value={projectStage}
                  
                  onChange={(e) => setprojectSatge(e.target.value)}
                  className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
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
              {saving ? "Saving…" : "Update"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
