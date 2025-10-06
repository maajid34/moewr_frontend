// import img1 from '../../assets/man-writing-notebook.jpg'
// import img2 from '../../assets/planbg.png'
// import MoewrFooter from '../../pages/footer';
// import Header from '../../pages/header';
// export default function PlanningPolicy() {
//   return (
//     <>

//     <div className="[--brand:#2FA8E1]  top-[120px] [--brand-dark:#0A7FB8]">
//        <div
//                     className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
//                     style={{ backgroundImage: `url(${img1})` }}
//                   >
//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
                  
//                     {/* Content */}
//                     <div className="relative flex items-center justify-center h-full">
//                       <h1 className="text-white text-3xl text-center font-bold">
//                          PLANNING AND POLICY
//                       </h1>
//                     </div>
//                   </div>
//       {/* ========== 1) INTRO ========== */}
//       <section id="intro" className="relative">
//         <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2">
//           {/* Image */}
//           <div className="h-[46vh] sm:h-[56vh] lg:h-[72vh] bg-[var(--brand)]/5">
//             <img
//               src={img2}
//               alt="Planning & Policy — MOEWR Jubaland"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Text */}
//           <div className="px-6 sm:px-8 lg:px-12 py-10 lg:py-16 flex items-center">
//             <div>
             

//               <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
//             Planning & Policy Department
//               </h1>
//               <p className='text-xl font-semibold'>Welcome to the Department of Planning & Policy for the Ministry of Energy & Water Resources of Jubaland.</p>

//               <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
//                The Department of Planning & Policy is a critical unit within the Ministry of Energy & Water Resources in Jubaland. It is responsible for the strategic planning, policy formulation, and coordination of all activities related to energy and water resources of the state. The department ensures that all initiatives align with the
//                 broader goals of sustainable development, efficient resource management, and socio-economic growth.
//               </p>

            
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== 2) VISION & MISSION ========== */}
//       <section id="vm" className="py-14 sm:py-16 bg-[var(--brand)]/5">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Vision */}
//             <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
//               <div className="flex items-center gap-3">
//                 <span className="w-10 h-10 rounded-lg bg-[var(--brand)]/15 ring-1 ring-[var(--brand)]/20" />
//                 <h2 className="text-2xl font-bold text-slate-900">Vision</h2>
//               </div>
//               <p className="mt-4 text-gray-700">
//                 To be a leading entity in the formulation of innovative, sustainable, and inclusive policies for the 
//                 efficient management of energy and water resources in Jubaland.
//               </p>
//             </div>

//             {/* Mission */}
//             <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
//               <div className="flex items-center gap-3">
//                 <span className="w-10 h-10 rounded-lg bg-[var(--brand)]/15 ring-1 ring-[var(--brand)]/20" />
//                 <h2 className="text-2xl font-bold text-slate-900">Mission</h2>
//               </div>
//               <p className="mt-4 text-gray-700">
//                 To develop and implement evidence-based policies and strategic plans that enhance the sustainable use of energy and water resources, promote economic development, 
//                 and improve the quality of life for the people of Jubaland.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========== 3) DEPARTMENT MANDATES ========== */}
//      <section id="mandates" className="py-14 sm:py-16">
//   <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//     <div className="flex items-end justify-between flex-wrap gap-4">
//       <h2 className="text-3xl font-extrabold text-slate-900">Department Mandates</h2>
//       <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
//     </div>

//     {/* Top row: 3 cards */}
//     <div className="mt-8 grid md:grid-cols-3 gap-6">
//       {/* Card 1 */}
//       <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
//         <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path strokeWidth="1.5" d="M4 4h16v16H4z" />
//           <path strokeWidth="1.5" d="M8 8h8M8 12h8M8 16h5" />
//         </svg>
//         <h3 className="mt-4 font-semibold text-lg text-slate-900">Policy Development</h3>
//         <p className="mt-2 text-gray-700 text-[15px]">
//           Developing and overseeing the implementation of policies related to energy and water resources.
//         </p>
//       </div>

//       {/* Card 2 */}
//       <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
//         <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
//           <path strokeWidth="1.5" d="M6 21v-2a6 6 0 0112 0v2" />
//         </svg>
//         <h3 className="mt-4 font-semibold text-lg text-slate-900">Planning Coordination</h3>
//         <p className="mt-2 text-gray-700 text-[15px]">
//           Coordinating the planning processes for energy and water projects across the region.
//         </p>
//       </div>

//       {/* Card 3 */}
//       <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
//         <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h10" />
//           <path strokeWidth="1.5" d="M18 16l2 2 4-4" />
//         </svg>
//         <h3 className="mt-4 font-semibold text-lg text-slate-900">Regulatory Compliance</h3>
//         <p className="mt-2 text-gray-700 text-[15px]">
//           Ensuring compliance with national and State regulations and standards.
//         </p>
//       </div>
//     </div>

//     {/* Bottom row: 2 cards */}
//     <div className="mt-6 grid md:grid-cols-2 gap-6">
//       {/* Card 4 */}
//       <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
//         <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <circle cx="8" cy="8" r="3" strokeWidth="1.5" />
//           <circle cx="16" cy="16" r="3" strokeWidth="1.5" />
//           <path strokeWidth="1.5" d="M13 7l5-5M6 18l-4 4" />
//         </svg>
//         <h3 className="mt-4 font-semibold text-lg text-slate-900">Policy Advisory</h3>
//         <p className="mt-2 text-gray-700 text-[15px]">
//           Providing policy advice to the Ministry on matters related to energy and water.
//         </p>
//       </div>

//       {/* Card 5 */}
//       <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
//         <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <path strokeWidth="1.5" d="M4 20h16M4 4h16M8 4v16M16 4v16" />
//         </svg>
//         <h3 className="mt-4 font-semibold text-lg text-slate-900">Monitoring &amp; Evaluation</h3>
//         <p className="mt-2 text-gray-700 text-[15px]">
//           Monitoring and evaluating the impact of implemented policies and strategies.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* ========== 4) DEPARTMENT ACTIVITIES ========== */}
//    <section id="activities" className="py-14 sm:py-16 bg-[var(--brand)]/5">
//   <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//     <div className="flex items-end justify-between flex-wrap gap-4">
//       <h2 className="text-3xl font-extrabold text-slate-900">Department Activities</h2>
//       <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
//     </div>

//     <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {/* Activity 1 */}
//       <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition">
//         <div className="flex items-center gap-3">
//           <span className="w-8 h-8 rounded-full bg-[var(--brand)] ring-2 ring-[var(--brand)]/30 flex items-center justify-center text-white text-sm font-bold">
//             1
//           </span>
//           <p className="font-semibold text-slate-900">
//             Conducting research and analysis to inform policy development.
//           </p>
//         </div>
//       </div>

//       {/* Activity 2 */}
//       <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition">
//         <div className="flex items-center gap-3">
//           <span className="w-8 h-8 rounded-full bg-[var(--brand)] ring-2 ring-[var(--brand)]/30 flex items-center justify-center text-white text-sm font-bold">
//             2
//           </span>
//           <p className="font-semibold text-slate-900">
//             Drafting and reviewing policies and regulations related to energy and water management.
//           </p>
//         </div>
//       </div>

//       {/* Activity 3 */}
//       <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition">
//         <div className="flex items-center gap-3">
//           <span className="w-8 h-8 rounded-full bg-[var(--brand)] ring-2 ring-[var(--brand)]/30 flex items-center justify-center text-white text-sm font-bold">
//             3
//           </span>
//           <p className="font-semibold text-slate-900">
//             Collaborating with other departments and stakeholders to ensure integrated planning and policy coherence.
//           </p>
//         </div>
//       </div>

//       {/* Activity 4 */}
//       <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition">
//         <div className="flex items-center gap-3">
//           <span className="w-8 h-8 rounded-full bg-[var(--brand)] ring-2 ring-[var(--brand)]/30 flex items-center justify-center text-white text-sm font-bold">
//             4
//           </span>
//           <p className="font-semibold text-slate-900">
//             Organizing workshops, seminars, and training sessions for capacity building.
//           </p>
//         </div>
//       </div>

//       {/* Activity 5 */}
//       <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition">
//         <div className="flex items-center gap-3">
//           <span className="w-8 h-8 rounded-full bg-[var(--brand)] ring-2 ring-[var(--brand)]/30 flex items-center justify-center text-white text-sm font-bold">
//             5
//           </span>
//           <p className="font-semibold text-slate-900">
//             Monitoring and evaluating the effectiveness of existing policies and recommending adjustments as needed.
//           </p>
//         </div>
//       </div>

//       {/* Activity 6 */}
//       <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition">
//         <div className="flex items-center gap-3">
//           <span className="w-8 h-8 rounded-full bg-[var(--brand)] ring-2 ring-[var(--brand)]/30 flex items-center justify-center text-white text-sm font-bold">
//             6
//           </span>
//           <p className="font-semibold text-slate-900">
//             Preparing annual and long-term strategic plans for the Ministry.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//       {/* ========== 5) STUDIES ========== */}
//    <section id="studies" className="py-14 sm:py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         <div className="flex items-end justify-between flex-wrap gap-4">
//           <h2 className="text-3xl font-extrabold text-slate-900">Studies</h2>
//           <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
//         </div>

//         {/* States */}
//         {loading && <p className="mt-8 text-slate-500">Loading…</p>}
//         {!loading && err && <p className="mt-8 text-red-600">{err}</p>}

//         {!loading && !err && (
//           <div className="mt-8 grid md:grid-cols-3 gap-6">
//             {studies.length === 0 ? (
//               <div className="col-span-full rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
//                 No assessment studies found.
//               </div>
//             ) : (
//               studies.map((doc) => {
//                 const href = fileUrlOf(doc);
//                 const label = badge(doc.filename, doc.mimetype);
//                 const title = doc.title || doc.filename || "Untitled study";
//                 return (
//                   <div
//                     key={doc._id || doc.id || doc.filename}
//                     className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition"
//                   >
//                     {/* Simple icon */}
//                     <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
//                       <path strokeWidth="1.5" d="M8 7h8M8 11h8M8 15h5" />
//                     </svg>

//                     <div className="mt-4 flex items-start justify-between gap-3">
//                       <h3 className="font-semibold text-slate-900 line-clamp-2">{title}</h3>
//                       <span className="text-[10px] px-2 py-1 bg-slate-100 rounded uppercase tracking-wide">{label}</span>
//                     </div>

//                     <p className="mt-2 text-sm text-slate-600 line-clamp-3">
//                       {doc.description || "Assessment/Study document."}
//                     </p>

//                     <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-500">
//                       <div>
//                         <dt className="font-medium text-slate-700">Category</dt>
//                         <dd>{doc.category || "—"}</dd>
//                       </div>
//                       <div>
//                         <dt className="font-medium text-slate-700">Updated</dt>
//                         <dd>{fmtDate(doc.updatedAt || doc.createdAt)}</dd>
//                       </div>
//                     </dl>

//                     <div className="mt-4 flex flex-wrap gap-2">
//                       <a
//                         href={href}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="px-3 py-1.5 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand)]/90"
//                       >
//                         View
//                       </a>
//                       <a
//                         href={href}
//                         download
//                         className="px-3 py-1.5 rounded-md border border-[var(--brand)] text-[var(--brand)] text-sm font-semibold hover:bg-[var(--brand)]/10"
//                       >
//                         Download
//                       </a>
//                     </div>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         )}
//       </div>
//     </section>
 

//       {/* ========== 6) ACTS & POLICIES ========== */}
//       <section id="policies" className="py-14 sm:py-16 bg-[var(--brand)]/5">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//           <div className="flex items-end justify-between flex-wrap gap-4">
//             <h2 className="text-3xl font-extrabold text-slate-900">Acts &amp; Policies of the Ministry</h2>
//             <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
//           </div>

//           <div className="mt-8 grid md:grid-cols-2 gap-6">
//             {/* Policy Card */}
//             <article className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm flex items-center gap-4">
//               <span className="w-12 h-12 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold">
//                 PDF
//               </span>
//               <div className="flex-1">
//                 <h3 className="font-semibold text-slate-900">Finance Policy &amp; Procedures</h3>
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   <a
//                     href="#"
//                     className="px-3 py-1.5 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)]"
//                   >
//                     Download
//                   </a>
//                   <a
//                     href="#"
//                     className="px-3 py-1.5 rounded-md border border-[var(--brand)] text-[var(--brand)] text-sm font-semibold hover:bg-[var(--brand)]/10"
//                   >
//                     View
//                   </a>
//                 </div>
//               </div>
//             </article>

//             <article className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm flex items-center gap-4">
//               <span className="w-12 h-12 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold">
//                 PDF
//               </span>
//               <div className="flex-1">
//                 <h3 className="font-semibold text-slate-900">Human Resource Policy &amp; Procedures</h3>
//                 <div className="mt-3 flex flex-wrap gap-2">
//                   <a
//                     href="#"
//                     className="px-3 py-1.5 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)]"
//                   >
//                     Download
//                   </a>
//                   <a
//                     href="#"
//                     className="px-3 py-1.5 rounded-md border border-[var(--brand)] text-[var(--brand)] text-sm font-semibold hover:bg-[var(--brand)]/10"
//                   >
//                     View
//                   </a>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//       </section>
//     </div>
//     <MoewrFooter />
//         </>
//   );
// }
import { useEffect, useState, useMemo } from "react";
import axios from "axios";

import img1 from '../../assets/man-writing-notebook.jpg';
import img2 from '../../assets/planbg.png';
import MoewrFooter from '../../pages/footer';
import Header from '../../pages/header';

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";
const LIST_URL  = `${API_BASE.replace(/\/+$/,"")}/ReadAssess/DocumentFile`;

// ========== HELPERS ==========
const fmtDate = (s) => {
  const d = new Date(s);
  return isNaN(d) ? "—" : d.toLocaleDateString();
};
const ext = (name="") => (String(name).toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] || "");
const badge = (name="", mimetype="") => {
  const e = ext(name); const mt = String(mimetype||"").toLowerCase();
  if (mt.includes("pdf") || e === "pdf") return "PDF";
  if (mt.includes("word") || ["doc","docx"].includes(e)) return "Word";
  if (mt.includes("excel") || mt.includes("spreadsheet") || ["xls","xlsx","csv"].includes(e)) return "Excel";
  if (mt.includes("powerpoint") || mt.includes("presentation") || ["ppt","pptx"].includes(e)) return "PPT";
  return e ? e.toUpperCase() : "FILE";
};
function fileUrlOf(doc={}){
  if (doc.fileUrl) return doc.fileUrl;
  if (doc.path && !/^https?:\/\//i.test(doc.path)) {
    return `${API_BASE.replace(/\/+$/,"")}/${String(doc.path).replace(/^\/+/, "")}`;
  }
  return doc.path || "#";
}

export default function PlanningPolicy() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(LIST_URL, { withCredentials: false, timeout: 20000 });
        const payload = Array.isArray(res.data) ? res.data : (res.data?.data ?? []);
        if (alive) setDocs(Array.isArray(payload) ? payload : []);
      } catch (e) {
        console.error("Fetch error:", e);
        if (alive) setErr("Failed to load documents.");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // Group docs by category (all categories)
  const grouped = useMemo(() => {
    const out = {};
    docs.forEach((d) => {
      const cat = (d.category || "Uncategorized").trim();
      if (!out[cat]) out[cat] = [];
      out[cat].push(d);
    });
    return out;
  }, [docs]);

  return (
    <>
      <div className="[--brand:#2FA8E1]  top-[120px] [--brand-dark:#0A7FB8]">
        <div
          className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-white text-3xl text-center font-bold">
              PLANNING AND POLICY
            </h1>
          </div>
        </div>

        {/* Other sections (Intro, Vision, Mandates, Activities) unchanged */}

        {/* ========== STUDIES / DOCUMENTS ========== */}
        <section id="studies" className="py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h2 className="text-3xl font-extrabold text-slate-900">Studies & Documents</h2>
              <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
            </div>

            {loading && <p className="mt-8 text-slate-500">Loading…</p>}
            {!loading && err && <p className="mt-8 text-red-600">{err}</p>}

            {!loading && !err && (
              Object.keys(grouped).length === 0 ? (
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
                  No documents found.
                </div>
              ) : (
                Object.entries(grouped).map(([category, list]) => (
                  <div key={category} className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4 capitalize">{category} Documents</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {list.map((doc) => {
                        const href = fileUrlOf(doc);
                        const label = badge(doc.filename, doc.mimetype);
                        const title = doc.title || doc.filename || "Untitled document";
                        return (
                          <div
                            key={doc._id || doc.id || doc.filename}
                            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition"
                          >
                            <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
                              <path strokeWidth="1.5" d="M8 7h8M8 11h8M8 15h5" />
                            </svg>

                            <div className="mt-4 flex items-start justify-between gap-3">
                              <h3 className="font-semibold text-slate-900 line-clamp-2">{title}</h3>
                              <span className="text-[10px] px-2 py-1 bg-slate-100 rounded uppercase tracking-wide">{label}</span>
                            </div>

                            <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                              {doc.description || "—"}
                            </p>

                            <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-500">
                              <div>
                                <dt className="font-medium text-slate-700">Category</dt>
                                <dd>{doc.category || "—"}</dd>
                              </div>
                              <div>
                                <dt className="font-medium text-slate-700">Updated</dt>
                                <dd>{fmtDate(doc.updatedAt || doc.createdAt)}</dd>
                              </div>
                            </dl>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1.5 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand)]/90"
                              >
                                View
                              </a>
                              <a
                                href={href}
                                download
                                className="px-3 py-1.5 rounded-md border border-[var(--brand)] text-[var(--brand)] text-sm font-semibold hover:bg-[var(--brand)]/10"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )
            )}
          </div>
        </section>

        {/* ========== ACTS & POLICIES (unchanged) ========== */}
      </div>
      <MoewrFooter />
    </>
  );
}

