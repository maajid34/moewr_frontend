// // src/pages/SingalProjectsEvent.jsx
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function SingalProjectsEvent() {
//   const { id } = useParams();

//   // API bases
//   const API =  "https://moewr-backend.onrender.com";
//   const IMG_BASE =  "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev"; // serves /allimages

//   // State aligned with your schema
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [title, setTitle] = useState("");
//   const [ministry, setMinistry] = useState("");
//   const [description, setDescription] = useState("");
//   const [moreDescription, setMoreDescription] = useState("");
//   const [coverImage, setCoverImage] = useState("");
//   const [objectiveImage, setObjectiveImage] = useState("");

//   const normalizeName = (val) => {
//     if (!val) return "";
//     if (/^https?:\/\//i.test(val)) return val; // already full URL
//     const fname = String(val).split(/[\\/]/).pop();
//     return `${IMG_BASE}/${encodeURIComponent(fname)}`;
//   };
//   const onImgError = (e) => (e.currentTarget.src = "/placeholder.png");

//   useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         setLoading(true);
//         setError("");
//         const res = await axios.get(`${API}/readProjectEventSingal/Event/${id}`);
//         const d = res.data; // controller returns the doc directly
//         if (!mounted || !d) return;

//         setTitle(d.title ?? "");
//         setMinistry(d.ministry ?? "");
//         setDescription(d.description ?? "");
//         setMoreDescription(d.moreDescription ?? "");
//         setCoverImage(d.coverImage ?? "");
//         setObjectiveImage(d.objectiveImage ?? "");
//       } catch (err) {
//         console.error(err);
//         if (mounted) setError("Failed to load project.");
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, [id, API]);

//   return (
//     <>


//       <div className="py-[110px] w-full">
//         {/* Banner (Title + Ministry) */}
//         <div className="bg-[#0d7cb0] w-full py-12 px-6">
//           <div className="max-w-5xl mx-auto">
//             <h1 className="text-white text-4xl font-extrabold leading-tight">
//               {title || "Event Project"}
//             </h1>
//             {ministry && (
//               <p className="text-white/80 mt-2 text-sm">
//                 By {ministry}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="w-full [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
//           {/* Error */}
//           {error && (
//             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
//               <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
//                 {error}
//               </div>
//             </div>
//           )}

//           {/* Content column: image → text → image (like the screenshot) */}
//           <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//             {/* 1) First image (cover) */}
//             {coverImage && (
//               <img
//                 src={normalizeName(coverImage)}
//                 alt={title || "Event cover"}
//                 onError={onImgError}
//                 className="w-full max-h-[520px] object-cover rounded-xl shadow border border-slate-200"
//               />
//             )}

//             {/* 2) Description / body text */}
//             <div className="mt-8 text-slate-800 leading-7 break-words"
//                  style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>
//               {loading ? (
//                 <div className="space-y-3">
//                   <div className="h-5 w-2/3 bg-slate-100 rounded animate-pulse" />
//                   <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
//                   <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
//                 </div>
//               ) : (
//                 <>
//                   {description && <p className="mb-6">{description}</p>}
//                   {moreDescription && <p className="mb-0">{moreDescription}</p>}
//                   {!description && !moreDescription && <p>—</p>}
//                 </>
//               )}
//             </div>

//             {/* 3) Second image (objective) */}
//             {objectiveImage && (
//               <img
//                 src={normalizeName(objectiveImage)}
//                 alt="Event secondary"
//                 onError={onImgError}
//                 className="mt-10 w-full max-h-[520px] object-cover rounded-xl shadow border border-slate-200"
//               />
//             )}
//           </section>
//         </div>
//       </div>



//     </>
//   );
// }


// updated code code kore waa id aan online image lahayn

// src/pages/SingalProjectsEvent.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MoewrFooter from "../../pages/footer";

export default function SingalProjectsEvent() {
  const { id } = useParams();

  // Hardcoded bases (no .env)
  const API = "https://moewr-backend.onrender.com";
  const IMG_BASE = "https://pub-4fea174e190a460d8db367c215cf12ad.r2.dev";

  // State aligned with your schema
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [ministry, setMinistry] = useState("");
  const [description, setDescription] = useState("");
  const [moreDescription, setMoreDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [objectiveImage, setObjectiveImage] = useState("");

  /**
   * Build a public R2 URL from whatever the DB stored.
   * - Keeps subfolders (e.g. event/cover/xxx.jpg)
   * - Strips /r2/, document/, allimages/ prefixes
   * - Converts backslashes to forward slashes
   * - Encodes path segments safely
   * - If already an absolute URL (http/https), returns as-is
   */
  const toAssetUrl = (val) => {
    if (!val) return "";
    let s = String(val);

    // already a full URL
    if (/^https?:\/\//i.test(s)) return s;

    // normalize slashes
    s = s.replace(/\\/g, "/");

    // keep only after known folders if present
    const docIdx = s.toLowerCase().indexOf("document/");
    if (docIdx !== -1) s = s.slice(docIdx + "document/".length);

    const allIdx = s.toLowerCase().indexOf("allimages/");
    if (allIdx !== -1 && docIdx === -1) s = s.slice(allIdx + "allimages/".length);

    const uploadsIdx = s.toLowerCase().indexOf("uploads/");
    if (uploadsIdx !== -1 && docIdx === -1 && allIdx === -1) {
      s = s.slice(uploadsIdx); // leave "uploads/..." if that's how you stored it
    }

    // strip /r2/ prefix and any leading slash
    s = s.replace(/^\/?r2\//i, "").replace(/^\/+/, "");

    // encode safely but keep slashes
    const encoded = s
      .split("/")
      .filter(Boolean)
      .map(encodeURIComponent)
      .join("/");

    return `${IMG_BASE}/${encoded}`;
  };

  const onImgError = (which, raw, tried) => (e) => {
    console.error(`Image failed (${which})`, { raw, tried, id });
    // Optionally hide broken image or set a placeholder
    e.currentTarget.style.display = "none";
    // e.currentTarget.src = "/placeholder.png";
  };

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(`${API}/readProjectEventSingal/Event/${id}`);
        const d = res.data; // controller returns doc directly
        if (!mounted || !d) return;

        setTitle(d.title ?? "");
        setMinistry(d.ministry ?? "");
        setDescription(d.description ?? "");
        setMoreDescription(d.moreDescription ?? "");
        setCoverImage(d.coverImage ?? "");
        setObjectiveImage(d.objectiveImage ?? "");

        // Debug what URLs will be used
        if (d.coverImage) {
          console.log("Cover (raw → url):", d.coverImage, "→", toAssetUrl(d.coverImage));
        }
        if (d.objectiveImage) {
          console.log("Objective (raw → url):", d.objectiveImage, "→", toAssetUrl(d.objectiveImage));
        }
      } catch (err) {
        console.error(err);
        if (mounted) setError("Failed to load project.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <>
      <div className="py-[110px] w-full">
        {/* Banner (Title + Ministry) */}
        <div className="bg-[#0d7cb0] w-full py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-white text-4xl font-extrabold leading-tight">
              {title || "Event Project"}
            </h1>
            {ministry && (
              <p className="text-white/80 mt-2 text-sm">By {ministry}</p>
            )}
          </div>
        </div>

        <div className="w-full [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
          {/* Error */}
          {error && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
                {error}
              </div>
            </div>
          )}

          {/* Content column: image → text → image */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* 1) First image (cover) */}
            {coverImage && (
              <img
                src={toAssetUrl(coverImage)}
                alt={title || "Event cover"}
                onError={onImgError("cover", coverImage, toAssetUrl(coverImage))}
                className="w-full max-h-[520px] object-cover rounded-xl shadow border border-slate-200"
              />
            )}

            {/* 2) Description / body text */}
            <div
              className="mt-8 text-slate-800 leading-7 break-words"
              style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
            >
              {loading ? (
                <div className="space-y-3">
                  <div className="h-5 w-2/3 bg-slate-100 rounded animate-pulse" />
                  <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
                </div>
              ) : (
                <>
                  {description && <p className="mb-6">{description}</p>}
                  {moreDescription && <p className="mb-0">{moreDescription}</p>}
                  {!description && !moreDescription && <p>—</p>}
                </>
              )}
            </div>

            {/* 3) Second image (objective) */}
            {objectiveImage && (
              <img
                src={toAssetUrl(objectiveImage)}
                alt="Event secondary"
                onError={onImgError(
                  "objective",
                  objectiveImage,
                  toAssetUrl(objectiveImage)
                )}
                className="mt-10 w-full max-h-[520px] object-cover rounded-xl shadow border border-slate-200"
              />
            )}
          </section>
        </div>
      </div>
      <MoewrFooter />
    </>
  );
}
