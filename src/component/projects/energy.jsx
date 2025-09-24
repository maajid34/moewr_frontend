// import { useState } from "react";
// import { useEffect } from "react";
// import axios from 'axios'

// import { Link } from "react-router-dom";


// export default function EnergyProject() {
//    const [Data, setData] = useState([])
//      const [coverImage, setCoverImage] = useState("");


//         if (data.coverImage) {
//           console.log("Energy cover (raw → url):", data.coverImage, "→", toAssetUrl(data.coverImage));
//         }
//    const handleReadData = () =>{

//      axios.get("https://moewr-backend.onrender.com/readProjectEnergy/EnergyProject").then((res) =>{
//       setData(res.data)
      
      
             
//     }).catch((err) => {
//     console.error("Error fetching medicine data:", err);
//   });

// }

//    useEffect(() =>{
//     handleReadData()
//   },[])
//   return (


// <>


// <div className="top-[120px] w-[100%]">


// <div className="bg-[#0d7cb0] w-[100%] p-10 ">
// <h1 className="text-white text-4xl">Energy Projects</h1>
// </div>
// <section id="projects" className="bg-white/70 border-y ">
//         <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//           <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Ongoing / pipeline Projects</h2>
//           <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {/* Project card */}
          
// {
//     Data.map((item)=>{ 
    
           
//          return  <article className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="150">
//               <h3 className="font-semibold text-lg">{item.title}</h3>
//                    <img
//                 src={toAssetUrl(setCoverImage)}
//                 alt="Energy project geography"
//                 onError={onImgError("setCoverImage", setCoverImage, toAssetUrl(setCoverImage))}
//                 className="w-[600px] h-[400px] object-cover rounded-2xl shadow-xl border border-slate-200"
//               />
//               <div></div>
//               <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
//               <Link
//   to={`/SingalProjectsEnergy/${item._id}`}
//   className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
// >
//   Read for More
// </Link>
//             </article>
            
//     })

//   }
//      </div>
//         </div>
//       </section>
//       </div>
//       </>
//   )
//   }


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function EnergyProject() {
  const [Data, setData] = useState([]);

  // ---- Configure these for your setup ----
  const API = "https://moewr-backend.onrender.com";
  // If your server serves static uploads like: app.use("/allimages", express.static(UPLOAD_DIR))
  const BACKEND_FILE_BASE = `${API}/allimages`;
  // Optional: if some images are on R2, set the bucket public base here
  const R2_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";
  const PLACEHOLDER =
    "https://dummyimage.com/600x400/edf2f7/94a3b8.png&text=No+Image";

  function toAssetUrl(raw) {
    if (!raw) return PLACEHOLDER;
    const s = String(raw).trim();

    // Already a full URL?
    if (/^https?:\/\//i.test(s)) return s;

    // r2://bucket/key → convert to public URL if you use this scheme
    if (s.startsWith("r2://")) {
      const key = s.replace(/^r2:\/\//, "");
      return `${R2_BASE}/${key}`;
    }

    // Absolute backend path: "/uploads/..." or "/allimages/..."
    if (s.startsWith("/")) return `${API}${s}`;

    // Common relative paths from your backend
    if (s.startsWith("uploads/") || s.startsWith("images/"))
      return `${API}/${s}`;

    // Fallback: your /allimages static mount
    return `${BACKEND_FILE_BASE}/${s}`;
  }

  const onImgError = (e) => {
    e.currentTarget.src = PLACEHOLDER;
    e.currentTarget.onerror = null; // avoid loops
  };

  const handleReadData = async () => {
    try {
      const res = await axios.get(
        "https://moewr-backend.onrender.com/readProjectEnergy/EnergyProject"
      );
      setData(res.data || []);
      // Debug the first item’s cover:
      if (Array.isArray(res.data) && res.data[0]?.coverImage) {
        const raw = res.data[0].coverImage;
        // eslint-disable-next-line no-console
        console.log("Energy cover (raw → url):", raw, "→", toAssetUrl(raw));
      }
    } catch (err) {
      console.error("Error fetching energy data:", err);
    }
  };

  useEffect(() => {
    handleReadData();
  }, []);

  return (
    <>
      <div className="top-[120px] w-full">
        <div className="bg-[#0d7cb0] w-full p-10">
          <h1 className="text-white text-4xl">Energy Projects</h1>
        </div>

        <section id="projects" className="bg-white/70 border-y">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">
              Ongoing / pipeline Projects
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {Data.map((item) => {
                const imgSrc = toAssetUrl(item?.coverImage);
                return (
                  <article
                    key={item?._id || item?.id || imgSrc}
                    className="rounded-xl border bg-white p-6"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    <h3 className="font-semibold text-lg">{item?.title}</h3>

                    <img
                      src={imgSrc}
                      alt={item?.title || "Energy project image"}
                      onError={onImgError}
                      className="mt-3 w-full aspect-[3/2] object-cover rounded-2xl shadow-xl border border-slate-200"
                      loading="lazy"
                    />

                    <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                      {item?.desc}
                    </p>

                    <Link
                      to={`/SingalProjectsEnergy/${item?._id}`}
                      className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
                    >
                      Read for More
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
