// // src/components/projects/SingalProjectsEnergy.jsx
// // Route: <Route path="/SingalProjectsEnergy/:id" element={<SingalProjectsEnergy />} />
// // Link : <Link to={`/SingalProjectsEnergy/${project._id}`} className="...">Read for More</Link>

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";


// export default function SingalProjectsWater() {
//   const { id } = useParams();

//   // API bases
//   const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
//   const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || API; // serves /allimages

//   // Page state
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [title, setTitle] = useState("");
//   const [overview, setOverview] = useState("");
//   const [coverImage, setCoverImage] = useState("");
//   const [objectiveImage, setObjectiveImage] = useState("");
//   const [GeographicImage, setGeographicImage] = useState("");
//   const [geogrpahic, setgeogrpahic] = useState("");
//   const [objective, setObjective] = useState("");

//   const [componentTitle, setComponentTitle] = useState("");
//   const [componentOne, setComponentOne] = useState("");
//   const [componentTwo, setComponentTwo] = useState("");
//   const [componentThree, setComponentThree] = useState("");
//   const [componentFour, setComponentFour] = useState("");
//    const [stackeHolder1, setstackeHolder1] = useState("");
//     const [stakeHolder2, setstakeHolder2] = useState("");
//     const [stakeHolder3, setstakeHolder3] = useState(""); 
//     const [stakeHolder4, setstakeHolder4] = useState(""); 

//   const [achievements, setAchievements] = useState([]);

//   // Helpers
//   const normalizeName = (val) => {
//     if (!val) return "";
//     if (/^https?:\/\//i.test(val)) return val;           // full URL already
//     const fname = String(val).split(/[\\/]/).pop();       // take last path segment
//     return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
//   };
//   const onImgError = (e) => (e.currentTarget.src = "/placeholder.png");

//   // Fetch single project (+ achievements fallback)
//   useEffect(() => {
//     let mounted = true;

//     const fetchOne = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios.get(
//           `${API}/readProjectWaterSingal/waterProject/${id}`
//         );
//         const data = Array.isArray(res.data) ? res.data[0] : (res.data?.data ?? res.data);
//         if (!mounted || !data) return;

//         // Basics
//         setTitle(data.title || "");
//         setOverview(data.overview || data.desc || "");
//         setCoverImage(data.coverImage || "");
//         setObjectiveImage(data.objectiveImage || "");
//          setGeographicImage(data.GeographicImage || "");
//         setgeogrpahic(data.geogrpahic || "");
//         setObjective(data.objective || "");

//         // Components
//         setComponentTitle(data.componentTitle || "Project");
//         setComponentOne(data.componentOne || "");
//         setComponentTwo(data.componentTwo || "");
//         setComponentThree(data.componentThree || "");
//         setComponentFour(data.componentFour || "");
//         setstackeHolder1(data.stackeHolder1 || "");
//         setstakeHolder2(data.stakeHolder2 || "");
//         setstakeHolder3(data.stakeHolder3 || "");
//         setstakeHolder4(data.stakeHolder4 || "");

//         // Achievements from project document
//         const arr = Array.isArray(data.achievements) ? data.achievements : [];
//         setAchievements(arr);

//         // Fallback to achievements endpoint if none in doc
//         if (arr.length === 0) {
//           try {
//             const a = await axios.get(`${API}/createAchiev/${id}/achievements`);
//             const arr2 = Array.isArray(a.data?.achievements)
//               ? a.data.achievements
//               : Array.isArray(a.data)
//               ? a.data
//               : [];
//             if (mounted) setAchievements(arr2);
//           } catch {
//             /* ignore */
//           }
//         }
//       } catch (err) {
//         if (mounted) setError("Failed to load project.");
//         console.error(err);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     if (id) fetchOne();
//     return () => {
//       mounted = false;
//     };
//   }, [id, API]);

//   return (
//     <>


//       {/* Top banner */}
//       <div className=" w-full">
//         <div className="bg-[#0d7cb0] w-full p-10">
//           <h1 className="text-white text-4xl">{title || "Project"}</h1>
//         </div>

//         <div className=" w-full [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
//           {/* Loading / error */}
//           {error && (
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//               <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
//                 {error}
//               </div>
//             </div>
//           )}

//           {/* SECTION 1: Project Overview */}
//           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <div>
//                 <div className="inline-flex items-center gap-2 mb-3">
//                   <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
//                   <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
//                     {title}
//                   </span>
//                 </div>
//                 <h2 className="text-4xl font-extrabold leading-tight">
//                   <span className="text-[var(--brand)]">Project Overview</span>
//                 </h2>
//                 <div className="mt-5 space-y-4 text-slate-700">
//                   {loading ? (
//                     <div className="h-16 rounded-lg bg-slate-100 animate-pulse" />
//                   ) : (
//                     <p>{overview || "—"}</p>
//                   )}
//                 </div>
//               </div>
//               <img
//                 src={normalizeName(coverImage)}
//                 alt="Energy project cover"
//                 onError={onImgError}
//                 className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
              
//             </div>
//           </section>
//  <div className="h-0.5 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/40 to-transparent" />

//           {/* GEOGRAPHIC SECTION */}

//  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <img
//                 src={normalizeName(GeographicImage)}
//                 alt="Energy project cover"
//                 onError={onImgError}
//                 className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <div>
//                 <div className="inline-flex items-center gap-2 mb-3">
//                   <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
//                   <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
//                     {geogrpahic}
//                   </span>
//                 </div>
//                 <h2 className="text-4xl font-extrabold leading-tight">
//                   <span className="text-[var(--brand)]">Project Geography</span>
//                 </h2>
//                 <div className="mt-5 space-y-4 text-slate-700">
//                   {loading ? (
//                     <div className="h-16 rounded-lg bg-slate-100 animate-pulse" />
//                   ) : (
//                     <p>{geogrpahic || "—"}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>
//           {/* GEOGRAPHIC EMD */}
//           {/* divider */}
//           <div className="h-0.5 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/40 to-transparent" />

//           {/* SECTION 2: Project Objectives */}
//           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <div>
//                 <div className="inline-flex items-center gap-2 mb-3">
//                   <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
//                   <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
//                     Objectives
//                   </span>
//                 </div>
//                 <h2 className="text-4xl font-extrabold leading-tight text-[var(--brand)]">
//                   Project Objectives
//                 </h2>
//                 <ol className="mt-6 space-y-3 text-slate-700 list-decimal pl-6">
//                   {objective ? (
//                     <li>{objective}</li>
//                   ) : (
//                     <>
//                       <li>Enhance water access and quality.</li>
//                       <li>Build community climate resilience.</li>
//                       <li>Strengthen local water institutions.</li>
//                     </>
//                   )}
//                 </ol>
//               </div>
//               <img
//                 src={normalizeName(objectiveImage)}
//                 alt="Objective illustration"
//                 onError={onImgError}
//                 className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//             </div>
//           </section>

//           {/* divider */}
//           <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-[var(--brand)]" />

//           {/* COMPONENTS GRID */}
//           <section className="relative py-14">
//             <div className="absolute inset-0 -z-10 bg-[var(--brand)]/10" />
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h2 className="text-4xl font-extrabold tracking-tight mb-8">
//                 {componentTitle || "Project"}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-8">
//                 {componentOne && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 1
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentOne}
//                     </h3>
//                   </article>
//                 )}

//                 {componentTwo && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 2
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentTwo}
//                     </h3>
//                   </article>
//                 )}

//                 {componentThree && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 3
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentThree}
//                     </h3>
//                   </article>
//                 )}

//                 {componentFour && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 4
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentFour}
//                     </h3>
//                   </article>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* ACHIEVEMENTS */}
//           <section className="py-14 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h2 className="text-4xl font-extrabold tracking-tight text-center mb-10">
//                 Achievements
//               </h2>

//               {loading ? (
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {[...Array(3)].map((_, i) => (
//                     <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
//                       <div className="h-5 w-2/3 bg-slate-100 rounded animate-pulse" />
//                       <div className="mt-3 h-4 w-full bg-slate-100 rounded animate-pulse" />
//                       <div className="mt-2 h-2 w-full bg-slate-100 rounded animate-pulse" />
//                     </div>
//                   ))}
//                 </div>
//               ) : achievements.length === 0 ? (
//                 <p className="text-center text-slate-500">No achievements yet.</p>
//               ) : (
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {achievements.map((ach, idx) => {
//                     const pct = Math.max(0, Math.min(100, Number(ach?.progress ?? 0)));
//                     return (
//                       <article
//                         key={idx}
//                         className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
//                       >
//                         <h3 className="text-lg font-bold text-slate-900">
//                           {ach?.title || "Achievement"}
//                         </h3>
//                         <p className="mt-2 text-slate-600">
//                           {ach?.detail || "—"}
//                         </p>

//                         <p className="mt-4 font-semibold text-red-600">
//                           {pct}% Done
//                         </p>
//                         <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
//                           <div
//                             className="h-2 rounded-full bg-red-500"
//                             style={{ width: `${pct}%` }}
//                           />
//                         </div>
//                       </article>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* stakeholders============== */}
//           <section className="py-14 bg-white">
//             <h1 className="text-center font-bold mb-10 text-4xl text-black">StackHolders</h1>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-10">
             
//               <img
//                 src={normalizeName(stackeHolder1)}
//                 alt="stackeholder1"
//                 onError={onImgError}
//                 className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <img
//                 src={normalizeName(stakeHolder2)}
//                 alt="stackeholder2"
//                 onError={onImgError}
//                 className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <img
//                 src={normalizeName(stakeHolder3)}
//                 alt="stackeholder3"
//                 onError={onImgError}
//                 className="w-[300px]  h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <img
//                 src={normalizeName(stakeHolder4)}
            
               
//                 className="w-[400px]  h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
            
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }



// new code
// src/components/projects/SingalProjectsEnergy.jsx
// Route: <Route path="/SingalProjectsEnergy/:id" element={<SingalProjectsWater />} />
// Link : <Link to={`/SingalProjectsEnergy/${project._id}`} className="...">Read for More</Link>

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function SingalProjectsWater() {
//   const { id } = useParams();

//   // API bases
//   const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
//   const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || API; // serves /allimages

//   // Page state
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [title, setTitle] = useState("");
//   const [overview, setOverview] = useState("");
//   const [coverImage, setCoverImage] = useState("");
//   const [objectiveImage, setObjectiveImage] = useState("");
//   const [GeographicImage, setGeographicImage] = useState("");
//   const [geogrpahic, setgeogrpahic] = useState("");
//   const [objective, setObjective] = useState("");

//   const [componentTitle, setComponentTitle] = useState("");
//   const [componentOne, setComponentOne] = useState("");
//   const [componentTwo, setComponentTwo] = useState("");
//   const [componentThree, setComponentThree] = useState("");
//   const [componentFour, setComponentFour] = useState("");
//   const [stackeHolder1, setstackeHolder1] = useState("");
//   const [stakeHolder2, setstakeHolder2] = useState("");
//   const [stakeHolder3, setstakeHolder3] = useState("");
//   const [stakeHolder4, setstakeHolder4] = useState("");

//   const [achievements, setAchievements] = useState([]);

//   // NEW: photos state
//   const [photos, setPhotos] = useState([]); // [{ Image }]
//   const [photosLoading, setPhotosLoading] = useState(true);
//   const [photosError, setPhotosError] = useState(null);

//   // Helpers
//   const normalizeName = (val) => {
//     if (!val) return "";
//     if (/^https?:\/\//i.test(val)) return val; // full URL already
//     const fname = String(val).split(/[\\/]/).pop(); // last path segment
//     return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
//   };
//   const onImgError = (e) => (e.currentTarget.src = "/placeholder.png");

//   // Fetch single project (+ achievements fallback)
//   useEffect(() => {
//     let mounted = true;

//     const fetchOne = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await axios.get(
//           `${API}/readProjectWaterSingal/waterProject/${id}`
//         );
//         const data = Array.isArray(res.data)
//           ? res.data[0]
//           : res.data?.data ?? res.data;
//         if (!mounted || !data) return;

//         // Basics
//         setTitle(data.title || "");
//         setOverview(data.overview || data.desc || "");
//         setCoverImage(data.coverImage || "");
//         setObjectiveImage(data.objectiveImage || "");
//         setGeographicImage(data.GeographicImage || "");
//         setgeogrpahic(data.geogrpahic || "");
//         setObjective(data.objective || "");

//         // Components
//         setComponentTitle(data.componentTitle || "Project");
//         setComponentOne(data.componentOne || "");
//         setComponentTwo(data.componentTwo || "");
//         setComponentThree(data.componentThree || "");
//         setComponentFour(data.componentFour || "");
//         setstackeHolder1(data.stackeHolder1 || "");
//         setstakeHolder2(data.stakeHolder2 || "");
//         setstakeHolder3(data.stakeHolder3 || "");
//         setstakeHolder4(data.stakeHolder4 || "");

//         // Achievements from project document
//         const arr = Array.isArray(data.achievements) ? data.achievements : [];
//         setAchievements(arr);

//         // Fallback to achievements endpoint if none in doc
//         if (arr.length === 0) {
//           try {
//             const a = await axios.get(`${API}/createAchiev/${id}/achievements`);
//             const arr2 = Array.isArray(a.data?.achievements)
//               ? a.data.achievements
//               : Array.isArray(a.data)
//               ? a.data
//               : [];
//             if (mounted) setAchievements(arr2);
//           } catch {
//             /* ignore */
//           }
//         }
//       } catch (err) {
//         if (mounted) setError("Failed to load project.");
//         console.error(err);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     if (id) fetchOne();
//     return () => {
//       mounted = false;
//     };
//   }, [id, API]);

//   // NEW: Fetch Water project photos
//   useEffect(() => {
//     let mounted = true;

//     const fetchPhotos = async () => {
//       if (!id) return;
//       setPhotosLoading(true);
//       setPhotosError(null);
//       try {
//         const res = await axios.get(
//           `${API}/ReadWaterProjectPhoto/${id}/photos`
//         );
//         const arr = Array.isArray(res.data?.photos)
//           ? res.data.photos
//           : Array.isArray(res.data)
//           ? res.data
//           : [];
//         if (mounted) setPhotos(arr);
//       } catch (e) {
//         console.error(e);
//         if (mounted) setPhotosError("Failed to load photos.");
//       } finally {
//         if (mounted) setPhotosLoading(false);
//       }
//     };

//     fetchPhotos();
//     return () => {
//       mounted = false;
//     };
//   }, [id, API]);

//   return (
//     <>
//       {/* Top banner */}
//       <div className=" w-full">
//         <div className="bg-[#0d7cb0] w-full p-10">
//           <h1 className="text-white text-4xl">{title || "Project"}</h1>
//         </div>

//         <div className=" w-full [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
//           {/* Loading / error */}
//           {error && (
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//               <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
//                 {error}
//               </div>
//             </div>
//           )}

//           {/* SECTION 1: Project Overview */}
//           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <div>
//                 <div className="inline-flex items-center gap-2 mb-3">
//                   <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
//                   <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
//                     {title}
//                   </span>
//                 </div>
//                 <h2 className="text-4xl font-extrabold leading-tight">
//                   <span className="text-[var(--brand)]">Project Overview</span>
//                 </h2>
//                 <div className="mt-5 space-y-4 text-slate-700">
//                   {loading ? (
//                     <div className="h-16 rounded-lg bg-slate-100 animate-pulse" />
//                   ) : (
//                     <p>{overview || "—"}</p>
//                   )}
//                 </div>
//               </div>
//               <img
//                 src={normalizeName(coverImage)}
//                 alt="Energy project cover"
//                 onError={onImgError}
//                 className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//             </div>
//           </section>

//           <div className="h-0.5 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/40 to-transparent" />

//           {/* GEOGRAPHIC SECTION */}
//           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <img
//                 src={normalizeName(GeographicImage)}
//                 alt="Energy project cover"
//                 onError={onImgError}
//                 className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <div>
//                 <div className="inline-flex items-center gap-2 mb-3">
//                   <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
//                   <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
//                     {geogrpahic}
//                   </span>
//                 </div>
//                 <h2 className="text-4xl font-extrabold leading-tight">
//                   <span className="text-[var(--brand)]">Project Geography</span>
//                 </h2>
//                 <div className="mt-5 space-y-4 text-slate-700">
//                   {loading ? (
//                     <div className="h-16 rounded-lg bg-slate-100 animate-pulse" />
//                   ) : (
//                     <p>{geogrpahic || "—"}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* divider */}
//           <div className="h-0.5 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/40 to-transparent" />

//           {/* SECTION 2: Project Objectives */}
//           <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//             <div className="grid md:grid-cols-2 gap-10 items-center">
//               <div>
//                 <div className="inline-flex items-center gap-2 mb-3">
//                   <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
//                   <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
//                     Objectives
//                   </span>
//                 </div>
//                 <h2 className="text-4xl font-extrabold leading-tight text-[var(--brand)]">
//                   Project Objectives
//                 </h2>
//                 <ol className="mt-6 space-y-3 text-slate-700 list-decimal pl-6">
//                   {objective ? (
//                     <li>{objective}</li>
//                   ) : (
//                     <>
//                       <li>Enhance water access and quality.</li>
//                       <li>Build community climate resilience.</li>
//                       <li>Strengthen local water institutions.</li>
//                     </>
//                   )}
//                 </ol>
//               </div>
//               <img
//                 src={normalizeName(objectiveImage)}
//                 alt="Objective illustration"
//                 onError={onImgError}
//                 className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//             </div>
//           </section>

//           {/* divider */}
//           <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-[var(--brand)]" />

//           {/* COMPONENTS GRID */}
//           <section className="relative py-14">
//             <div className="absolute inset-0 -z-10 bg-[var(--brand)]/10" />
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h2 className="text-4xl font-extrabold tracking-tight mb-8">
//                 {componentTitle || "Project"}
//               </h2>

//               <div className="grid md:grid-cols-2 gap-8">
//                 {componentOne && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 1
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentOne}
//                     </h3>
//                   </article>
//                 )}

//                 {componentTwo && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 2
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentTwo}
//                     </h3>
//                   </article>
//                 )}

//                 {componentThree && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 3
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentThree}
//                     </h3>
//                   </article>
//                 )}

//                 {componentFour && (
//                   <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
//                     <span className="text-sm font-semibold text-[var(--brand-dark)]">
//                       Step 4
//                     </span>
//                     <h3 className="mt-4 text-2xl font-semibold">
//                       {componentFour}
//                     </h3>
//                   </article>
//                 )}
//               </div>
//             </div>
//           </section>

//           {/* ACHIEVEMENTS */}
//           <section className="py-14 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h2 className="text-4xl font-extrabold tracking-tight text-center mb-10">
//                 Achievements
//               </h2>

//               {loading ? (
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {[...Array(3)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="rounded-2xl border border-slate-200 p-6 shadow-sm"
//                     >
//                       <div className="h-5 w-2/3 bg-slate-100 rounded animate-pulse" />
//                       <div className="mt-3 h-4 w-full bg-slate-100 rounded animate-pulse" />
//                       <div className="mt-2 h-2 w-full bg-slate-100 rounded animate-pulse" />
//                     </div>
//                   ))}
//                 </div>
//               ) : achievements.length === 0 ? (
//                 <p className="text-center text-slate-500">No achievements yet.</p>
//               ) : (
//                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {achievements.map((ach, idx) => {
//                     const pct = Math.max(
//                       0,
//                       Math.min(100, Number(ach?.progress ?? 0))
//                     );
//                     return (
//                       <article
//                         key={idx}
//                         className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
//                       >
//                         <h3 className="text-lg font-bold text-slate-900">
//                           {ach?.title || "Achievement"}
//                         </h3>
//                         <p className="mt-2 text-slate-600">
//                           {ach?.detail || "—"}
//                         </p>

//                         <p className="mt-4 font-semibold text-red-600">
//                           {pct}% Done
//                         </p>
//                         <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
//                           <div
//                             className="h-2 rounded-full bg-red-500"
//                             style={{ width: `${pct}%` }}
//                           />
//                         </div>
//                       </article>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </section>

//           {/* stakeholders============== */}
//           <section className="py-14 bg-white">
//             <h1 className="text-center font-bold mb-10 text-4xl text-black">
//               StackHolders
//             </h1>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-10">
//               <img
//                 src={normalizeName(stackeHolder1)}
//                 alt="stackeholder1"
//                 onError={onImgError}
//                 className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <img
//                 src={normalizeName(stakeHolder2)}
//                 alt="stackeholder2"
//                 onError={onImgError}
//                 className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <img
//                 src={normalizeName(stakeHolder3)}
//                 alt="stackeholder3"
//                 onError={onImgError}
//                 className="w-[300px]  h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <img
//                 src={normalizeName(stakeHolder4)}
//                 alt="stackeholder4"
//                 onError={onImgError}
//                 className="w-[400px]  h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//             </div>
//           </section>

//           {/* NEW: PROJECT PHOTOS GALLERY (Water) */}
//           <section className="py-14 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-[var(--ink)]">
//                 Project Photos
//               </h2>

//               {photosError && (
//                 <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 mb-6">
//                   {photosError}
//                 </div>
//               )}

//               {photosLoading ? (
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {[...Array(8)].map((_, idx) => (
//                     <div
//                       key={idx}
//                       className="w-full h-48 bg-slate-100 rounded-xl animate-pulse"
//                     />
//                   ))}
//                 </div>
//               ) : photos.length === 0 ? (
//                 <p className="text-slate-500">No photos uploaded yet.</p>
//               ) : (
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {photos.map((p, i) => {
//                     const src = normalizeName(p?.Image);
//                     return (
//                       <figure
//                         key={`${p?.Image || "img"}-${i}`}
//                         className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
//                         title={p?.Image}
//                       >
//                         <img
//                           src={src}
//                           alt={`Project photo ${i + 1}`}
//                           onError={onImgError}
//                           className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//                         />
//                       </figure>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MoewrFooter from "../../../pages/footer";

export default function readProjectWaterSingal() {
  const { id } = useParams();

  // Hardcoded bases (no .env)
  const API = "https://moewr-backend.onrender.com";
  const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

  // Page state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [objectiveImage, setObjectiveImage] = useState("");
  const [GeographicImage, setGeographicImage] = useState("");
  const [geogrpahic, setgeogrpahic] = useState("");
  const [objective, setObjective] = useState("");
  const [componentTitle, setComponentTitle] = useState("");
  const [componentOne, setComponentOne] = useState("");
  const [componentTwo, setComponentTwo] = useState("");
  const [componentThree, setComponentThree] = useState("");
  const [componentFour, setComponentFour] = useState("");
  const [stackeHolder1, setstackeHolder1] = useState("");
  const [stakeHolder2, setstakeHolder2] = useState("");
  const [stakeHolder3, setstakeHolder3] = useState("");
    const [StackeholderDesc, setStackeholderDesc] = useState("");
    const [stack1Title, setstack1Title] = useState("");
    const [stack1desc, setstack1desc] = useState("");
     const [stack2Title, setstack2Title] = useState("");
    const [stack2desc, setstack2desc] = useState("");
     const [stack3Title, setstack3Title] = useState("");
    const [stack3desc, setstack3desc] = useState("");
  const [stakeHolder4, setstakeHolder4] = useState("");

  const [achievements, setAchievements] = useState([]);

  // NEW: Photos state
  const [photos, setPhotos] = useState([]); // array of { Image }
  const [photosLoading, setPhotosLoading] = useState(true);
  const [photosError, setPhotosError] = useState(null);

  // --- Helpers --------------------------------------------------------------

  // Build a public R2 URL from whatever the DB stored.
  // - Keeps folders (e.g. energy/cover/xxx.jpg)
  // - Strips /r2/, document/, allimages/ prefixes
  // - Converts backslashes, trims leading slashes
  // - Encodes path segments (keeps /)
  // - If already absolute URL, returns as-is
  const toAssetUrl = (val) => {
    if (!val) return "";
    let s = String(val);

    if (/^https?:\/\//i.test(s)) return s; // already full URL

    s = s.replace(/\\/g, "/"); // windows -> url

    const docIdx = s.toLowerCase().indexOf("document/");
    if (docIdx !== -1) s = s.slice(docIdx + "document/".length);

    const allIdx = s.toLowerCase().indexOf("allimages/");
    if (allIdx !== -1 && docIdx === -1) s = s.slice(allIdx + "allimages/".length);

    const uploadsIdx = s.toLowerCase().indexOf("uploads/");
    if (uploadsIdx !== -1 && docIdx === -1 && allIdx === -1) {
      s = s.slice(uploadsIdx); // if you used uploads/ in older saves
    }

    s = s.replace(/^\/?r2\//i, "").replace(/^\/+/, "");

    const encoded = s
      .split("/")
      .filter(Boolean)
      .map(encodeURIComponent)
      .join("/");

    return `${ASSET_BASE}/${encoded}`;
  };

  const onImgError = (which, raw, tried) => (e) => {
    console.error(`Energy image failed (${which})`, { raw, tried, id });
    e.currentTarget.style.display = "none";
  };

  // --- Fetch single project (+ achievements fallback) -----------------------

  useEffect(() => {
    let mounted = true;

    const fetchOne = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API}/readProjectWaterSingal/waterProject/${id}`);  
        const data = Array.isArray(res.data) ? res.data[0] : (res.data?.data ?? res.data);
        if (!mounted || !data) return;

        // Basics
        setTitle(data.title || "");
        setOverview(data.overview || data.desc || "");
        setCoverImage(data.coverImage || "");
        setObjectiveImage(data.objectiveImage || "");
        setGeographicImage(data.GeographicImage || "");
        setgeogrpahic(data.geogrpahic || "");
        setObjective(data.objective || "");

        // Components
        setComponentTitle(data.componentTitle || "");
        setComponentOne(data.componentOne || "");
        setComponentTwo(data.componentTwo || "");
        setComponentThree(data.componentThree || "");
        setComponentFour(data.componentFour || "");

        // Stakeholders
        setstackeHolder1(data.stackeHolder1 || "");
        setstakeHolder2(data.stakeHolder2 || "");
        setstakeHolder3(data.stakeHolder3 || "");
        setstakeHolder4(data.stakeHolder4 || "");
        setStackeholderDesc(data.StackeholderDesc || "");
        setstack1Title(data.stack1Title || "");
        setstack1desc(data.stack1desc || "");
        setstack2Title(data.stack2Title || "");
        setstack2desc(data.stack2desc || "");
        setstack3Title(data.stack3Title || "");
        setstack3desc(data.stack3desc || "");
        


        // Achievements from project document
        const arr = Array.isArray(data.achievements) ? data.achievements : [];
        setAchievements(arr);

        // Debug what URLs will be used
        if (data.coverImage) {
          console.log("Energy cover (raw → url):", data.coverImage, "→", toAssetUrl(data.coverImage));
        }
        if (data.objectiveImage) {
          console.log("Energy objective (raw → url):", data.objectiveImage, "→", toAssetUrl(data.objectiveImage));
        }
        if (data.GeographicImage) {
          console.log("Energy geographic (raw → url):", data.GeographicImage, "→", toAssetUrl(data.GeographicImage));
        }

        // Fallback to achievements endpoint if none in doc
        if (arr.length === 0) {
          try {
           const a = await axios.get(`${API}/createAchiev/${id}/achievements`);
            const arr2 = Array.isArray(a.data?.achievements)
              ? a.data.achievements
              : Array.isArray(a.data)
              ? a.data
              : [];
            if (mounted) setAchievements(arr2);
          } catch {
            /* ignore */
          }
        }
      } catch (err) {
        if (mounted) setError("Failed to load project.");
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    if (id) fetchOne();
    return () => {
      mounted = false;
    };
  }, [id]);

  // --- Fetch Photos via your route: /ReadEnergyProjectPhoto/:id/photos -----

  useEffect(() => {
    let mounted = true;

    const fetchPhotos = async () => {
      if (!id) return;  
      setPhotosLoading(true);
      setPhotosError(null);
      try {
        const res = await axios.get(`${API}/ReadWaterProjectPhoto/${id}/photos`);  
        // Expecting { photos: [{ Image: "..." }, ...] } or an array directly
        const arr =
          Array.isArray(res.data?.photos) ? res.data.photos :
          Array.isArray(res.data) ? res.data : [];
        if (mounted) setPhotos(arr);
      } catch (err) {
        console.error(err);
        if (mounted) setPhotosError("Failed to load photos.");
      } finally {
        if (mounted) setPhotosLoading(false);
      }
    };

    fetchPhotos();
    return () => { mounted = false; };
  }, [id]);

  // --- UI -------------------------------------------------------------------

  return (
    <>
      {/* Top banner */}
      <div className="py-[100px] relative w-full">
        <div className="bg-[#0d7cb0] w-full p-10">
          <h1 className="text-white text-4xl">{title || "Project"}</h1>
        </div>

        <div className="pt[117px] w-full [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
          {/* Loading / error */}
          {error && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
                {error}
              </div>
            </div>
          )}

          {/* SECTION 1: Project Overview */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
                  <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
                    {title}
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold leading-tight">
                  <span className="text-[var(--brand)]">Project Overview</span>
                </h2>
                <div className="mt-5 space-y-4 text-slate-700">
                  {loading ? (
                    <div className="h-16 rounded-lg bg-slate-100 animate-pulse" />
                  ) : (
                    <p>{overview || "—"}</p>
                  )}
                </div>
              </div>

              <img
                src={toAssetUrl(coverImage)}
                alt="Energy project cover"
                onError={onImgError("cover", coverImage, toAssetUrl(coverImage))}
                className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
              />
            </div>
          </section>

          <div className="h-0.5 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/40 to-transparent" />

          {/* GEOGRAPHIC SECTION */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img
                src={toAssetUrl(GeographicImage)}
                alt="Energy project geography"
                onError={onImgError("geographic", GeographicImage, toAssetUrl(GeographicImage))}
                className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
              />
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
                  <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
                    {geogrpahic}
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold leading-tight">
                  <span className="text-[var(--brand)]">Project Geography</span>
                </h2>
                <div className="mt-5 space-y-4 text-slate-700">
                  {loading ? (
                    <div className="h-16 rounded-lg bg-slate-100 animate-pulse" />
                  ) : (
                    <p>{geogrpahic || "—"}</p>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* divider */}
          <div className="h-0.5 bg-gradient-to-r from-[var(--brand)] via-[var(--brand)]/40 to-transparent" />

          {/* SECTION 2: Project Objectives */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--brand)]" />
                  <span className="uppercase tracking-wider text-xs font-semibold text-[var(--brand-dark)]">
                    Objectives
                  </span>
                </div>
                <h2 className="text-4xl font-extrabold leading-tight text-[var(--brand)]">
                  Project Objectives
                </h2>
                <ol className="mt-6 space-y-3 text-slate-700 list-decimal pl-6">
                  {objective ? (
                    <li>{objective}</li>
                  ) : (
                    <>
                      <li>Enhance water access and quality.</li>
                      <li>Build community climate resilience.</li>
                      <li>Strengthen local water institutions.</li>
                    </>
                  )}
                </ol>
              </div>

              <img
                src={toAssetUrl(objectiveImage)}
                alt="Objective illustration"
                onError={onImgError("objective", objectiveImage, toAssetUrl(objectiveImage))}
                className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
              />
            </div>
          </section>

          {/* divider */}
          <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--brand)]/40 to-[var(--brand)]" />

          {/* COMPONENTS GRID */}
          <section className="relative py-14">
            <div className="absolute inset-0 -z-10 bg-[var(--brand)]/10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-extrabold tracking-tight mb-8">
                {componentTitle}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {componentOne && (
                  <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
                    <span className="text-sm font-semibold text-[var(--brand-dark)]">Step 1</span>
                    <h3 className="mt-4 text-2xl font-semibold">{componentOne}</h3>
                  </article>
                )}
                {componentTwo && (
                  <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
                    <span className="text-sm font-semibold text-[var(--brand-dark)]">Step 2</span>
                    <h3 className="mt-4 text-2xl font-semibold">{componentTwo}</h3>
                  </article>
                )}
                {componentThree && (
                  <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
                    <span className="text-sm font-semibold text-[var(--brand-dark)]">Step 3</span>
                    <h3 className="mt-4 text-2xl font-semibold">{componentThree}</h3>
                  </article>
                )}
                {componentFour && (
                  <article className="rounded-2xl bg-[var(--brand)]/15 backdrop-blur border border-[var(--brand)]/30 p-6 shadow-lg">
                    <span className="text-sm font-semibold text-[var(--brand-dark)]">Step 4</span>
                    <h3 className="mt-4 text-2xl font-semibold">{componentFour}</h3>
                  </article>
                )}
              </div>
            </div>
          </section>

          {/* ACHIEVEMENTS */}
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-extrabold tracking-tight text-center mb-10">
                Achievements
              </h2>

              {loading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                      <div className="h-5 w-2/3 bg-slate-100 rounded animate-pulse" />
                      <div className="mt-3 h-4 w-full bg-slate-100 rounded animate-pulse" />
                      <div className="mt-2 h-2 w-full bg-slate-100 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              ) : achievements.length === 0 ? (
                <p className="text-center text-slate-500">No achievements yet.</p>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((ach, idx) => {
                    const pct = Math.max(0, Math.min(100, Number(ach?.progress ?? 0)));
                    return (
                      <article
                        key={idx}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                      >
                        <h3 className="text-lg font-bold text-slate-900">
                          {ach?.title || "Achievement"}
                        </h3>
                        <p className="mt-2 text-slate-600">{ach?.detail || "—"}</p>

                        <p className="mt-4 font-semibold text-red-600">{pct}% Done</p>
                        <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                          <div className="h-2 rounded-full bg-red-500" style={{ width: `${pct}%` }} />
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </section>

      
      

          {/* PROJECT PHOTOS GALLERY */}
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-[var(--ink)]">
                Project Photos
              </h2>

              {photosError && (
                <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 mb-6">
                  {photosError}
                </div>
              )}

              {photosLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, idx) => (
                    <div key={idx} className="w-full h-48 bg-slate-100 rounded-xl animate-pulse" />
                  ))}
                </div>
              ) : photos.length === 0 ? (
                <p className="text-slate-500">No photos uploaded yet.</p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos.map((p, i) => {
                    const src = toAssetUrl(p?.Image);
                    return (
                      <figure
                        key={`${p?.Image || "img"}-${i}`}
                        className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
                        title={p?.Image}
                      >
                        <img
                          src={src}
                          alt={`Project photo ${i + 1}`}
                          onError={onImgError("photo", p?.Image, src)}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </figure>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
          
            {/* STAKEHOLDERS */}

          <section className="py-14 bg-white">
            <h1 className="text-center font-bold mb-10 text-4xl text-black">Project Stakeholders</h1>
            <p className="text-center m-2">{StackeholderDesc}</p>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-10">

              <div>
 <img
                src={toAssetUrl(stackeHolder1)}
                alt="stackeholder1"
                onError={onImgError("stakeholder1", stackeHolder1, toAssetUrl(stackeHolder1))}
                className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
              />
               <p className="p-5 font-bold">{stack1Title}</p>
               <p className="p-5">{stack1desc}</p>
              </div>
              
              <div>

           
              <img
                src={toAssetUrl(stakeHolder2)}
                alt="stackeholder2"
                onError={onImgError("stakeholder2", stakeHolder2, toAssetUrl(stakeHolder2))}
                className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
              />
  <p className="p-5 font-bold">{stack2Title}</p>
  <p className="p-5">{stack2desc}</p>
                 </div>

                 <div>

               
              <img
                src={toAssetUrl(stakeHolder3)}
                alt="stackeholder3"
                onError={onImgError("stakeholder3", stakeHolder3, toAssetUrl(stakeHolder3))}
                className="w-[300px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
              />
         <p className="p-5 font-bold">{stack3Title}</p>
          <p className="p-5">{stack3desc}</p>
                </div>
              {/* <img
                src={toAssetUrl(stakeHolder4)}
                alt="stackeholder4"
                onError={onImgError("stakeholder4", stakeHolder4, toAssetUrl(stakeHolder4))}
                className="w-[400px] h-[300px] object-cover rounded-2xl shadow-xl border border-slate-200"
              /> */}
            </div>
          </section>
        </div>
      </div>
      <MoewrFooter />
    </>
  );
}