

// import axios from "axios";

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Brand: #2FA8E1 (brand) / #0A7FB8 (brand-dark) / #002B5C (ink)
// export default function WaterProjectFormUI() {

//  const [title, setTitle] = useState("");
//  const [desc, setDesc] = useState("");
//   const [overview, setOverview] = useState("");
//   const [coverImage, setCoverImage] = useState("");
//   const [objectiveImage, setObjectiveImage] = useState("");
//    const [GeographicImage, setGeographicImage] = useState("");
//   const [geogrpahic, setgeogrpahic] = useState("");
//   const [objective, setObjective] = useState("");
//   const [componentTitle, setComponentTitle] = useState("");
//   const [componentOne, setComponentOne] = useState("");
//   const [componentTwo, setComponentTwo] = useState("");
//   const [componentThree, setComponentThree] = useState("");
//   const [componentFour, setComponentFour] = useState("");
//   const [achievements, setAchievements] = useState("");
//    const [stackeHolder1, setstackeHolder1] = useState("");
//     const [stakeHolder2, setstakeHolder2] = useState("");
//     const [stakeHolder3, setstakeHolder3] = useState(""); 
//     const [stakeHolder4, setstakeHolder4] = useState(""); 


//  const formData = new FormData()

//   formData.append("title",title)
//   formData.append("desc",desc)
//   formData.append("overview",overview)
//   formData.append("coverImage",coverImage)
//   formData.append("objectiveImage",objectiveImage)
//   formData.append("GeographicImage",GeographicImage)
//   formData.append("geogrpahic",geogrpahic)
//   formData.append("objective",objective)
//   formData.append("componentTitle",componentTitle)
//   formData.append("componentOne",componentOne)
//   formData.append("componentTwo",componentTwo)
//   formData.append("componentThree",componentThree)
//   formData.append("componentFour",componentFour)
//  formData.append("stackeHolder1",stackeHolder1)
//   formData.append("stakeHolder2",stakeHolder2)
//   formData.append("stakeHolder3",stakeHolder3)
//   formData.append("stakeHolder4",stakeHolder4)
//   formData.append("achievements",achievements)

//   const navigate = useNavigate()

//    const handleCreateProEnergy = (e) =>{
//     e.preventDefault()
//     axios.post("https://moewr-backend.onrender.com/createProjectWater/waterProject",formData).then(() =>{
//       alert("success saved")
//        navigate("/WaterProjectTable")
//     })   


//   }

//   //   useEffect(() =>{
//   //   handleCreateProEnergy()
//   // },[])
//   return (
//     <>
    
//       <div className="absolute left-[300px] top-[100px] min-h-screen w-[calc(100%-300px)] bg-slate-50 text-slate-800 [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
//         {/* Page */}
//         <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
//           <form
//             className="space-y-8"
//             // onSubmit={(e) => e.preventDefault()}
//             method="post"
//             encType="multipart/form-data"
//             noValidate
//           >
//             {/* Hero card */}
//             <section className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
//               <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand)]/10" />
//               <div className="absolute -right-32 top-6 h-48 w-48 rounded-full bg-[var(--brand-dark)]/10" />
//               <div className="px-5 sm:px-8 py-6">
//                 <div className="flex items-center gap-3">
//                   <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] rounded-full bg-[var(--brand)]/10 text-[var(--brand)] font-semibold">
//                     Water Project
//                   </span>
//                   <span className="text-xs text-slate-500">Fill all required fields (*)</span>
//                 </div>
//                 <h2 className="mt-3 text-2xl font-extrabold text-[var(--ink)]">Project Water Entry</h2>

//                 <div className="mt-6 grid gap-5 md:grid-cols-2">
//                   {/* Title */}
//                   <div>
//                     <label htmlFor="title" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                       Title <span className="text-rose-600">*</span>
//                     </label>
//                     <input   value={title} onChange={(t) => setTitle(t.target.value)}
//                       id="title"
//                       name="title"
//                       type="text"
//                       required
//                       placeholder="e.g., Kobciye Mini-Grid Expansion"
//                       className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                     <p className="mt-1 text-xs text-slate-500">Unique, concise, and descriptive.</p>
//                   </div>

//                   {/* Component Title */}
//                   <div>
//                     <label htmlFor="componentTitle" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                       Component Title <span className="text-rose-600">*</span>
//                     </label>
//                     <input   value={componentTitle} onChange={(t) => setComponentTitle(t.target.value)}
//                       id="componentTitle"
//                       name="componentTitle"
//                       type="text"
                    
                     
//                       className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                   </div>

//                   {/* Description */}
//                   <div className="md:col-span-2">
//                     <label htmlFor="desc" className="flex items-center gap-2 text-sm font-medium text-slate-700">
//                       Short Description <span className="text-rose-600">*</span>
//                     </label>
//                     <textarea   value={desc} onChange={(t) => setDesc(t.target.value)}
//                       id="desc"
//                       name="desc"
//                       required
//                       rows={3}
//                       placeholder="One-paragraph summary describing the project scope and significance."
//                       className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                     <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
//                       <span>Use clear language for public readers.</span>
//                       <span>0 / 300</span>
//                     </div>
//                   </div>

//                   {/* Overview */}
//                   <div className="md:col-span-2">
//                     <label htmlFor="overview" className="text-sm font-medium text-slate-700">Overview</label>
//                     <textarea   value={overview} onChange={(t) => setOverview(t.target.value)}
//                       id="overview"
//                       name="overview"
                    
//                       placeholder=""
//                       className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                     <p className="mt-1 text-xs text-slate-500">Optional. Appears on the project page below the description.</p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Media */}
//             <section className="grid lg:grid-cols-2 gap-6">
//               {/* Cover Image */}
//               <div className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold text-[var(--ink)]">OverView Image <span className="text-rose-600">*</span></h3>
//                 <p className="text-xs text-slate-500">Main image displayed on cards and detail page.</p>

//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
//                   </div>
             

//                   <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
//                     Upload OverView Image
//                     <input  onChange={(t) => setCoverImage(t.target.files[0])}
//                       type="file"
//                       name="coverImage"
//                       id="coverImage"
//                       required
//                       accept="image/*"
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>

//               {/* Objective Image */}
//               <div className="rounded-2xl border bg-white shadow-sm p-5">
               

//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h5.5L14 3.5Z"/></svg>
//                   </div>
              

//                   <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)]/10 cursor-pointer">
//                     Upload 
//                     <input  onChange={(t) => setObjectiveImage(t.target.files[0])}
//                       type="file"
//                       name="objectiveImage"
//                       id="objectiveImage"
//                       accept="image/*"
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>

              
//               {/* geographic image */}
//                             <div className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold text-[var(--ink)]">Geagraphic image <span className="text-rose-600">*</span></h3>
//                 <p className="text-xs text-slate-500">Main image displayed on cards and detail page.</p>

//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
//                   </div>
             

//                   <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                 
//                     <input  onChange={(t) => setGeographicImage(t.target.files[0])}
//                       type="file"
//                       name="geographic"
//                       id="coverImage"
//                       required
                      
//                     />
//                   </label>
//                 </div>
//               </div>
//             </section>

//             {/* Objective */}
//             <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold text-[var(--ink)]">Objective <span className="text-rose-600">*</span></h3>
//                 <span className="inline-flex h-2 w-24 rounded-full bg-[var(--brand)]" />
//               </div>
//               <textarea   value={objective} onChange={(t) => setObjective(t.target.value)}
//                 rows={4}
//                 id="objective"
//                 name="objective"
//                 required
                
//                 className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               />
//               <div className="mt-1 text-xs text-slate-500 text-right">0 / 600</div>
//             </section>
//               {/* geographic text */}
//             <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold text-[var(--ink)]">Geogrphic <span className="text-rose-600">*</span></h3>
//                 <span className="inline-flex h-2 w-24 rounded-full bg-[var(--brand)]" />
//               </div>
//               <textarea   value={geogrpahic} onChange={(t) => setgeogrpahic(t.target.value)}
//                 rows={4}
//                 id="objective"
//                 name="geogrpahic"
//                 required
                
//                 className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               />
//               <div className="mt-1 text-xs text-slate-500 text-right">0 / 600</div>
//             </section>

//             {/* Components */}
//             <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//               <h3 className="font-semibold text-[var(--ink)]">Project Components</h3>
              
//               <div className="mt-5 grid md:grid-cols-2 gap-5">
               
                  
//                     <input    value={componentOne} onChange={(t) => setComponentOne(t.target.value)}
                    
                    
                      
//                       type="text"
                    
//                       className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                     <input    value={componentTwo} onChange={(t) => setComponentTwo(t.target.value)}
                    
                    
                      
//                       type="text"
                    
//                       className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                     <input    value={componentThree} onChange={(t) => setComponentThree(t.target.value)}
                    
                    
                      
//                       type="text"
                    
//                       className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                     <input    value={componentFour} onChange={(t) => setComponentFour(t.target.value)}
                    
                    
                      
//                       type="text"
                    
//                       className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//                     />
//                   </div>
            
            
//             </section>

//             {/* Achievements */}
//             <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold text-[var(--ink)]">Achievements <span className="text-rose-600">*</span></h3>
//                 <div className="flex items-center gap-2">
//                   <span className="text-xs text-slate-500 hidden sm:inline">Bullets encouraged</span>
//                   <span className="inline-flex h-2 w-16 rounded-full bg-[var(--brand)]/60" />
//                 </div>
//               </div>
//               <textarea   value={achievements} onChange={(t) => setAchievements(t.target.value)}
//                 rows={5}
//                 id="achievements"
//                 name="achievements"
//                 required
                
//                 className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               />
//               <div className="mt-1 text-xs text-slate-500 text-right">0 / 800</div>
//             </section>



//                      {/*stakeholders  */}

                  
//             <section className="grid lg:grid-cols-2 gap-6">
//               {/*  stackeholder one */}
//               <div className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold text-[var(--ink)]">Stackeholder 1 <span className="text-rose-600">*</span></h3>


//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
//                   </div>
             

//                   <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                   
//                     <input  onChange={(t) => setstackeHolder1(t.target.files[0])}
//                       type="file"
//                       name="coverImage"
//                       id="coverImage"
//                       required
                      
//                     />
//                   </label>
//                 </div>
//               </div>
//                 {/* stakeholder2 */}
//                 <div className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold text-[var(--ink)]">Stackeholder 2 <span className="text-rose-600">*</span></h3>
                

//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
//                   </div>
             

//                   <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                   
//                     <input  onChange={(t) => setstakeHolder2(t.target.files[0])}
//                       type="file"
//                       name="coverImage"
//                       id="coverImage"
//                       required
                  
//                     />
//                   </label>
//                 </div>
//               </div>

//                 {/* stakeholder3 */}
//                 <div className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold text-[var(--ink)]">Stackeholder 3 <span className="text-rose-600">*</span></h3>
                

//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
//                   </div>
             

//                   <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                  
//                     <input  onChange={(t) => setstakeHolder3(t.target.files[0])}
//                       type="file"
//                       name="coverImage"
//                       id="coverImage"
//                       required
                   
//                     />
//                   </label>
//                 </div>
//               </div>

//                 {/* stakeholder 4*/}
//                 <div className="rounded-2xl border bg-white shadow-sm p-5">
//                 <h3 className="font-semibold text-[var(--ink)]">Stackeholder 4 <span className="text-rose-600">*</span></h3>
               

//                 <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
//                   <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
//                   </div>
             

//                   <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                   
//                     <input  onChange={(t) => setstakeHolder4(t.target.files[0])}
//                       type="file"
//                       name="stackeholder4"
//                       id="coverImage"
                     
                      
//                     />
//                   </label>
//                 </div>
//               </div>
                
             
//             </section>

//             {/* Sticky spacer + actions */}
//             <div className="h-2" />
//             <div className="flex items-center justify-end gap-3 pt-2">
//               <button
//                 type="reset"
//                 className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
//               >
//                 Cancel
//               </button>
//               <button onClick={handleCreateProEnergy}
//                 type="submit"
//                 className="rounded-xl bg-[#536878] px-5 py-2.5 text-white hover:bg-[#495c6a]"
//                 title="UI only — wire this to your POST route later"
//               >
//                 Save Project
//               </button>
//             </div>
//           </form>
//         </main>
//       </div>
//     </>
//   );
// }


import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Brand: #2FA8E1 (brand) / #0A7FB8 (brand-dark) / #002B5C (ink)
export default function WaterProjectFormUI() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [overview, setOverview] = useState("");

  const [coverImage, setCoverImage] = useState(null);
  const [objectiveImage, setObjectiveImage] = useState(null);
  const [GeographicImage, setGeographicImage] = useState(null);

  const [geogrpahic, setgeogrpahic] = useState("");
  const [objective, setObjective] = useState("");

  const [componentTitle, setComponentTitle] = useState("");
  const [componentOne, setComponentOne] = useState("");
  const [componentTwo, setComponentTwo] = useState("");
  const [componentThree, setComponentThree] = useState("");
  const [componentFour, setComponentFour] = useState("");

  const [achievements, setAchievements] = useState("");

  const [stackeHolder1, setstackeHolder1] = useState(null);
  const [stakeHolder2, setstakeHolder2] = useState(null);
  const [stakeHolder3, setstakeHolder3] = useState(null);
  const [stakeHolder4, setstakeHolder4] = useState(null);

  // NEW: multi photo gallery
  const [projectPhotos, setProjectPhotos] = useState([]); // File[]
  const [photoPreviews, setPhotoPreviews] = useState([]); // blob URLs

  const navigate = useNavigate();

  const handlePhotosChange = (e) => {
    const files = Array.from(e.target.files || []);
    // cleanup old previews
    photoPreviews.forEach((u) => URL.revokeObjectURL(u));
    setProjectPhotos(files);
    setPhotoPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  const handleCreateProEnergy = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // text
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("overview", overview);
    formData.append("geogrpahic", geogrpahic);
    formData.append("objective", objective);
    formData.append("componentTitle", componentTitle);
    formData.append("componentOne", componentOne);
    formData.append("componentTwo", componentTwo);
    formData.append("componentThree", componentThree);
    formData.append("componentFour", componentFour);
    formData.append("achievements", achievements);

    // files (single)
    if (coverImage) formData.append("coverImage", coverImage);
    if (objectiveImage) formData.append("objectiveImage", objectiveImage);
    if (GeographicImage) formData.append("GeographicImage", GeographicImage);
    if (stackeHolder1) formData.append("stackeHolder1", stackeHolder1);
    if (stakeHolder2) formData.append("stakeHolder2", stakeHolder2);
    if (stakeHolder3) formData.append("stakeHolder3", stakeHolder3);
    if (stakeHolder4) formData.append("stakeHolder4", stakeHolder4);

    // NEW: gallery photos
    // If your backend expects "projectPhotos[]", change the key below.
    for (const f of projectPhotos) formData.append("projectPhotos", f);

    try {
      await axios.post(
        "https://moewr-backend.onrender.com/createProjectWater/waterProject",
        formData
        // axios will set multipart boundary automatically
      );
      alert("success saved");
      navigate("/WaterProjectTable");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to save project");
    }
  };

  return (
    <>
      <div className="absolute left-[300px] top-[100px] min-h-screen w-[calc(100%-300px)] bg-slate-50 text-slate-800 [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <form className="space-y-8" method="post" encType="multipart/form-data" noValidate onSubmit={handleCreateProEnergy}>
            {/* Hero card */}
            <section className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand)]/10" />
              <div className="absolute -right-32 top-6 h-48 w-48 rounded-full bg-[var(--brand-dark)]/10" />
              <div className="px-5 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] rounded-full bg-[var(--brand)]/10 text-[var(--brand)] font-semibold">
                    Water Project
                  </span>
                  <span className="text-xs text-slate-500">Fill all required fields (*)</span>
                </div>
                <h2 className="mt-3 text-2xl font-extrabold text-[var(--ink)]">Project Water Entry</h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="title" className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      Title <span className="text-rose-600">*</span>
                    </label>
                    <input
                      value={title}
                      onChange={(t) => setTitle(t.target.value)}
                      id="title"
                      name="title"
                      type="text"
                      required
                      placeholder="Enter ProjectTitle"
                      className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  
                  </div>

                  <div>
                    <label htmlFor="componentTitle" className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      Component Title <span className="text-rose-600">*</span>
                    </label>
                    <input
                      value={componentTitle}
                      onChange={(t) => setComponentTitle(t.target.value)}
                      id="componentTitle"
                      name="componentTitle"
                      type="text"
                      className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="desc" className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      Short Description <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      value={desc}
                      onChange={(t) => setDesc(t.target.value)}
                      id="desc"
                      name="desc"
                      required
                      rows={3}
                      placeholder="One-paragraph summary describing the project scope and significance."
                      className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                    <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                     
                      <span>0 / 900</span>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="overview" className="text-sm font-medium text-slate-700">Overview</label>
                    <textarea
                      value={overview}
                      onChange={(t) => setOverview(t.target.value)}
                      id="overview"
                      name="overview"
                      className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
                    />
                 
                  </div>
                </div>
              </div>
            </section>

            {/* Media */}
            <section className="grid lg:grid-cols-2 gap-6">
              {/* Cover Image */}
              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold text-[var(--ink)]">Overview Image <span className="text-rose-600">*</span></h3>
                

                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
                  </div>

                  <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                    Upload Overview Image
                    <input
                      onChange={(t) => setCoverImage(t.target.files?.[0] || null)}
                      type="file"
                      name="coverImage"
                      id="coverImage"
                      required
                  
                    />
                  </label>
                </div>
              </div>

              {/* Objective Image */}
              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h5.5L14 3.5Z"/></svg>
                  </div>
                  <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)]/10 cursor-pointer">
                    Upload Objective Image
                    <input
                      onChange={(t) => setObjectiveImage(t.target.files?.[0] || null)}
                      type="file"
                      name="objectiveImage"
                      id="objectiveImage"
                      accept="image/*"
                  
                    />
                  </label>
                </div>
              </div>

              {/* Geographic image */}
              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold text-[var(--ink)]">Geographic image <span className="text-rose-600">*</span></h3>
                <p className="text-xs text-slate-500">Shown in the geographic section.</p>

                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-[var(--brand)]/10 grid place-items-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]"><path fill="currentColor" d="M11 2h2v9h3l-4 4-4-4h3V2Zm-6 9v9h14v-9h2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9h2Z"/></svg>
                  </div>
                  <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                    Upload Geographic Image
                    <input
                      onChange={(t) => setGeographicImage(t.target.files?.[0] || null)}
                      type="file"
                      name="GeographicImage"
                      id="GeographicImage"
                      required
                      accept="image/*"
                  
                    />
                  </label>
                </div>
              </div>
            </section>

         

            {/* Objective */}
            <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--ink)]">Objective <span className="text-rose-600">*</span></h3>
                <span className="inline-flex h-2 w-24 rounded-full bg-[var(--brand)]" />
              </div>
              <textarea
                value={objective}
                onChange={(t) => setObjective(t.target.value)}
                rows={4}
                id="objective"
                name="objective"
                required
                className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
              <div className="mt-1 text-xs text-slate-500 text-right">0 / 600</div>
            </section>

            {/* geographic text */}
            <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--ink)]">Geographic <span className="text-rose-600">*</span></h3>
                <span className="inline-flex h-2 w-24 rounded-full bg-[var(--brand)]" />
              </div>
              <textarea
                value={geogrpahic}
                onChange={(t) => setgeogrpahic(t.target.value)}
                rows={4}
                id="geogrpahic"
                name="geogrpahic"
                required
                className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
              <div className="mt-1 text-xs text-slate-500 text-right">0 / 600</div>
            </section>

            {/* Components */}
            <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
              <h3 className="font-semibold text-[var(--ink)]">Project Components</h3>
              <div className="mt-5 grid md:grid-cols-2 gap-5">
                <input value={componentOne} onChange={(t) => setComponentOne(t.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                <input value={componentTwo} onChange={(t) => setComponentTwo(t.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                <input value={componentThree} onChange={(t) => setComponentThree(t.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
                <input value={componentFour} onChange={(t) => setComponentFour(t.target.value)} type="text" className="w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]" />
              </div>
            </section>

            {/* Achievements */}
            <section className="rounded-2xl border bg-white shadow-sm p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[var(--ink)]">Achievements <span className="text-rose-600">*</span></h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 hidden sm:inline">Bullets encouraged</span>
                  <span className="inline-flex h-2 w-16 rounded-full bg-[var(--brand)]/60" />
                </div>
              </div>
              <textarea
                value={achievements}
                onChange={(t) => setAchievements(t.target.value)}
                rows={5}
                id="achievements"
                name="achievements"
                required
                className="mt-4 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              />
              <div className="mt-1 text-xs text-slate-500 text-right">0 / 800</div>
            </section>
    
   {/* NEW: Project Photos (Gallery) */}
            <section className="rounded-2xl border bg-white shadow-sm p-5">
              <h3 className="font-semibold text-[var(--ink)]">Project Photos (Gallery)</h3>
              <p className="text-xs text-slate-500">Upload multiple photos that showcase the project.</p>

              <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                <label className="inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                  Add Photos
                  <input
                    type="file"
                    id="projectPhotos"
                    name="projectPhotos"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handlePhotosChange}
                  />
                </label>

                {photoPreviews.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {photoPreviews.map((src, i) => (
                      <div key={i} className="aspect-square overflow-hidden rounded-lg border">
                        <img src={src} alt={`photo ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>


            {/* Stakeholders */}
            <section className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold text-[var(--ink)]">Stakeholder 1 <span className="text-rose-600">*</span></h3>
                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                    Upload Stakeholder 1
                    <input
                      onChange={(t) => setstackeHolder1(t.target.files?.[0] || null)}
                      type="file"
                      name="stackeHolder1"
                      id="stackeHolder1"
                      required
                      accept="image/*"
                  
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold text-[var(--ink)]">Stakeholder 2 <span className="text-rose-600">*</span></h3>
                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                    Upload Stakeholder 2
                    <input
                      onChange={(t) => setstakeHolder2(t.target.files?.[0] || null)}
                      type="file"
                      name="stakeHolder2"
                      id="stakeHolder2"
                      required
                      accept="image/*"
                 
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold text-[var(--ink)]">Stakeholder 3 <span className="text-rose-600">*</span></h3>
                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                    Upload Stakeholder 3
                    <input
                      onChange={(t) => setstakeHolder3(t.target.files?.[0] || null)}
                      type="file"
                      name="stakeHolder3"
                      id="stakeHolder3"
                      required
                      accept="image/*"
                  
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border bg-white shadow-sm p-5">
                <h3 className="font-semibold text-[var(--ink)]">Stakeholder 4</h3>
                <div className="mt-4 rounded-xl border border-dashed p-6 text-center">
                  <label className="mt-3 inline-block text-xs px-3 py-2 rounded-md bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] cursor-pointer">
                    Upload Stakeholder 4
                    <input
                      onChange={(t) => setstakeHolder4(t.target.files?.[0] || null)}
                      type="file"
                      name="stakeHolder4"
                      id="stakeHolder4"
                      accept="image/*"
                    
                    />
                  </label>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="h-2" />
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="reset"
                className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-[#536878] px-5 py-2.5 text-white hover:bg-[#495c6a]"
                title="Save project"
              >
                Save Project
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
