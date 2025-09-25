// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export default function Eventproject() {
//   const [Data, setData] = useState([]);     // will hold the array from res.data.items
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(1);      // optional simple pagination (matches backend)
//   const [total, setTotal] = useState(0);
//   const [limit, setLimit] = useState(50);

//   const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           `https://moewr-backend.onrender.com/readProjectEvent/Event?page=${page}&limit=${limit}`
//         );
//         // ✅ your controller sends { items, page, limit, total }
//         setData(Array.isArray(res.data?.items) ? res.data.items : []);
//         setTotal(res.data?.total ?? 0);
//         setLimit(res.data?.limit ?? 50);
//       } catch (e) {
//         console.error("Error fetching events:", e);
//         setError("Failed to load events.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, [page, limit]);

//   if (loading) return <p className="p-6 text-slate-500">Loading…</p>;
//   if (error) return <p className="p-6 text-red-600">{error}</p>;

//   return (
//     <>
//       <div className="w-full">
//         <div className="bg-[#0d7cb0] w-full p-10">
//           <h1 className="text-white text-4xl">Water Projects</h1>
//         </div>

//         <section id="projects" className="bg-white/70 border-y">
//           <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//             <div className="flex items-end justify-between gap-4">
//               <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">
//                 Ongoing / Pipeline Projects
//               </h2>
//               {/* Simple page info */}
//               <span className="text-sm text-slate-500">
//                 {Data.length} of {total}
//               </span>
//             </div>

//             <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//               {Data.length === 0 ? (
//                 <p className="text-slate-500">No projects found.</p>
//               ) : (
//                 Data.map((item) => (
//                   <article
//                     key={item._id || item.id}
//                     className="rounded-xl border bg-white p-6"
//                     data-aos="zoom-in"
//                     data-aos-delay="150"
//                   >
//                     {/* Optional cover image if provided by backend */}
//                     {item.coverImage && (
//                       // <img
//                       //   src={item.coverImage.startsWith("http")
//                       //     ? item.coverImage
//                       //     : `/${item.coverImage}`}
//                       //   alt={item.title}
//                       //   className="mb-4 h-40 w-full object-cover rounded-lg"
//                       // />

//                       <img
//   src={`${ASSET_BASE}/${item.coverImage}`}
//   alt={item.title}
//   className="mb-4 h-40 w-full object-cover rounded-lg"
// />
//                     )}

//                     <h3 className="font-semibold text-lg">{item.title}</h3>
//                      <p
//     className="mt-2 text-sm text-slate-600 break-words overflow-hidden"  // ← wrap & hide overflow
//     style={{
//       display: "-webkit-box",
//       WebkitLineClamp: 3,            // ← show up to 3 lines
//       WebkitBoxOrient: "vertical",
//       overflow: "hidden",
//       overflowWrap: "anywhere",      // ← wrap super-long tokens
//       wordBreak: "break-word"
//     }}
//   >
//     {item.description}
//   </p>

//                     <Link
//                       to={`/SingalProjectsEvent/${item._id || item.id}`}
//                       className="mt-10 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
//                     >
//                       Read for More
//                     </Link>
//                   </article>
//                 ))
//               )}
//             </div>

//             {/* Minimal pagination controls (optional) */}
//             {total > limit && (
//               <div className="mt-8 flex items-center gap-3">
//                 <button
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   disabled={page === 1}
//                   className="px-3 py-2 rounded border disabled:opacity-50"
//                 >
//                   Prev
//                 </button>
//                 <span className="text-sm text-slate-600">Page {page}</span>
//                 <button
//                   onClick={() => {
//                     const maxPage = Math.max(1, Math.ceil(total / limit));
//                     setPage((p) => Math.min(maxPage, p + 1));
//                   }}
//                   disabled={page * limit >= total}
//                   className="px-3 py-2 rounded border disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }


// latest online images 

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MoewrFooter from "../../pages/footer";
// import img1 from '../../assets/Energy/bg.jpg'
import img1 from '../../assets/home-g.jpg'

export default function Eventproject() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(50);

  // Hardcoded bases (no .env)
  const API_BASE = "https://moewr-backend.onrender.com";
  const ASSET_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

  // Build a safe asset URL from whatever the backend saved
  const toAssetUrl = (v) => {
    if (!v) return "";
    if (typeof v !== "string") v = String(v);

    // already full URL (http/https) → use as is
    if (/^https?:\/\//i.test(v)) return v;

    // some records stored like "/r2/event/cover/xxx.jpg" → strip "/r2/" and any leading slashes
    const cleaned = v.replace(/^\/?r2\//i, "").replace(/^\/+/, "");

    const full = `${ASSET_BASE}/${cleaned}`;
    return full;
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${API_BASE}/readProjectEvent/Event?page=${page}&limit=${limit}`
        );
        const items = Array.isArray(res.data?.items) ? res.data.items : [];
        setData(items);
        setTotal(res.data?.total ?? 0);
        setLimit(res.data?.limit ?? 50);

        // Debug: show what images we’ll try to load
        items.forEach((it) => {
          if (it?.coverImage) {
            console.log("Event image:", {
              id: it._id || it.id,
              raw: it.coverImage,
              url: toAssetUrl(it.coverImage),
            });
          }
        });
      } catch (e) {
        console.error("Error fetching events:", e);
        setError("Failed to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [page, limit]);

  if (loading) return <p className="p-6 text-slate-500">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (

    <>
  
    <div className="w-full">

      <div
                    className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
                    style={{ backgroundImage: `url(${img1})` }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
                  
                    {/* Content */}
                    <div className="relative flex items-center justify-center h-full">
                      <h1 className="text-white text-3xl text-center font-bold">
                        EVENT/NEWS
                      </h1>
                    </div>
       </div>
    

      <section id="projects" className="bg-white/70 border-y">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">
              Event
            </h2>
            <span className="text-sm text-slate-500">
              {data.length} of {total}
            </span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.length === 0 ? (
              <p className="text-slate-500">No projects found.</p>
            ) : (
              data.map((item) => {
                const imgSrc = toAssetUrl(item.coverImage);

                return (
                  <article
                    key={item._id || item.id}
                    className="rounded-xl border bg-white p-6"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                  >
                    {item.coverImage && (
                      <img
                        src={imgSrc}
                        alt={item.title}
                        className="mb-4 h-40 w-full object-cover rounded-lg"
                        loading="lazy"
                        onError={(e) => {
                          console.error("Image failed to load", {
                            id: item._id || item.id,
                            raw: item.coverImage,
                            tried: imgSrc,
                          });
                          // Optional: show a neutral placeholder if you have one
                          // e.currentTarget.src = "/placeholder.jpg";
                          // Or hide the broken image:
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}

                    <h3 className="font-semibold text-lg">{item.title}</h3>

                    {item.description && (
                      <p
                        className="mt-2 text-sm text-slate-600 break-words overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          overflowWrap: "anywhere",
                          wordBreak: "break-word",
                        }}
                      >
                        {item.description}
                      </p>
                    )}

                   <Link
  to={`/SingalProjectsEvent/${item._id || item.id}`}
  className="mt-10 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
>
  Read for More
</Link>
                  </article>
                );
              })
            )}
          </div>

          {total > limit && (
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-2 rounded border disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-sm text-slate-600">Page {page}</span>
              <button
                onClick={() => {
                  const maxPage = Math.max(1, Math.ceil(total / limit));
                  setPage((p) => Math.min(maxPage, p + 1));
                }}
                disabled={page * limit >= total}
                className="px-3 py-2 rounded border disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>

<MoewrFooter />
      </>
  );
}
