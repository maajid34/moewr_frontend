// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const API_BASE = "https://moewr-backend.onrender.com";
// const LIST_URL = `${API_BASE}/ReadAssess/DocumentFile`; // backend endpoint

// export default function AssessmentsPost() {
//   const [docs, setDocs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(LIST_URL);
//         setDocs(res.data?.data || []);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Failed to load documents.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDocs();
//   }, []);

//   if (loading) return <p className="p-6 text-slate-500">Loading…</p>;
//   if (error) return <p className="p-6 text-red-600">{error}</p>;

//   // Group documents by category
//   const categories = {
//     water: docs.filter((d) => d.category?.toLowerCase() === "water"),
//     energy: docs.filter((d) => d.category?.toLowerCase() === "energy"),
//     other: docs.filter(
//       (d) =>
//         d.category?.toLowerCase() !== "water" &&
//         d.category?.toLowerCase() !== "energy"
//     ),
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-12">
//       <h1 className="text-3xl font-bold">Documents Repository</h1>

//       {/* Water Reports */}
//       <CategorySection title="💧 Water Reports" items={categories.water} />

//       {/* Energy Reports */}
//       <CategorySection title="⚡ Energy Reports" items={categories.energy} />

//       {/* Other Reports */}
//       {categories.other.length > 0 && (
//         <CategorySection title="📁 Other Reports" items={categories.other} />
//       )}
//     </div>
//   );
// }

// function CategorySection({ title, items }) {
//   return (
//     <section>
//       <h2 className="text-2xl font-semibold mb-4">{title}</h2>
//       {items.length === 0 ? (
//         <p className="text-gray-500">No documents found.</p>
//       ) : (
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {items.map((doc) => (
//             <DocCard key={doc._id || doc.id} doc={doc} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// function DocCard({ doc }) {
//   const title = doc.title || "Untitled";
//   const description = doc.description || "No description.";

//   // ✅ Now backend returns fileUrl, use that directly
//   const viewHref = doc.fileUrl
//     ? doc.fileUrl
//     : `${API_BASE}/uploads/docs/${encodeURIComponent(
//         doc.category || "general"
//       )}/${encodeURIComponent(doc.filename || "")}`;

//   return (
//     <div className="border rounded-lg p-4 bg-white shadow">
//       <h3 className="font-semibold">{title}</h3>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
//       <p className="text-xs text-gray-500 mt-1">
//         Category: {doc.category || "general"}
//       </p>
//       <div className="mt-3 flex gap-2">
//         <a
//           href={viewHref}
//           target="_blank"
//           rel="noreferrer"
//           className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
//         >
//           View
//         </a>
//         <Link
//           to={`/documents/${doc._id}`}
//           className="px-3 py-1 border rounded hover:bg-gray-50"
//         >
//           Details
//         </Link>
//       </div>
//     </div>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import img1 from '../../assets/Energy/bg.jpg'
import img1 from '../../assets/home-g.jpg'
import MoewrFooter from "../../pages/footer";

// ----- Config -----
const API_BASE = "https://moewr-backend.onrender.com";
const LIST_URL = `${API_BASE}/ReadAssess/DocumentFile`;

// Optional: if backend returns "/r2/..." and you want to force a public base here
// set VITE_R2_PUBLIC_BASE in your frontend .env (e.g. https://pub-xxxxx.r2.dev or your custom domain)
const R2_PUBLIC_BASE = import.meta.env.VITE_R2_PUBLIC_BASE?.replace(/\/+$/, "");

// Helpers
const fmtSize = (bytes) =>
  typeof bytes === "number" && bytes >= 0
    ? (bytes / (1024 * 1024)).toFixed(2) + " MB"
    : "—";

const fmtDate = (s) => {
  try {
    return new Date(s).toLocaleDateString();
  } catch {
    return "—";
  }
};

const extFromName = (name = "") => {
  const m = name.toLowerCase().match(/\.([a-z0-9]+)$/);
  return m ? m[1] : "";
};

const typeBadge = (name = "", mimetype = "") => {
  const ext = extFromName(name);
  if (/pdf/.test(mimetype) || ext === "pdf") return "PDF";
  if (/word|officedocument\.word|msword/.test(mimetype) || ["doc", "docx"].includes(ext)) return "Word";
  if (/excel|spreadsheet/.test(mimetype) || ["xls", "xlsx", "csv"].includes(ext)) return "Excel";
  if (/powerpoint|presentation/.test(mimetype) || ["ppt", "pptx"].includes(ext)) return "PowerPoint";
  return ext ? ext.toUpperCase() : "FILE";
};

// Build a final URL to open
function buildViewUrl(doc) {
  // Prefer explicit fileUrl from backend
  if (doc.fileUrl) {
    // If backend sent "/r2/…", allow frontend to mount a base
    if (doc.fileUrl.startsWith("/r2/") && R2_PUBLIC_BASE) {
      return `${R2_PUBLIC_BASE}${doc.fileUrl.replace(/^\/+/, "/")}`;
    }
    return doc.fileUrl;
  }
  // Legacy fallback (disk path)
  if (doc.path && !doc.path.startsWith("http")) {
    return `${API_BASE}/${doc.path.replace(/^\/+/, "")}`;
  }
  return doc.path || "#";
}

export default function AssessmentsPost() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(LIST_URL, { withCredentials: false });
        if (alive) setDocs(res.data?.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
        if (alive) setError("Failed to load documents.");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const categories = useMemo(() => {
    const by = (c) => (docs || []).filter((d) => (d.category || "").toLowerCase() === c);
    const lower = (s) => (s || "").toLowerCase();
    return {
      water: by("water"),
      energy: by("energy"),
      other: (docs || []).filter(
        (d) => !["water", "energy"].includes(lower(d.category))
      ),
    };
  }, [docs]);

  if (loading) return <p className="p-6 text-slate-500">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  return (

    <>
    <div
              className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
              style={{ backgroundImage: `url(${img1})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
            
              {/* Content */}
              <div className="relative flex items-center justify-center h-full">
                <h1 className="text-white text-3xl text-center font-bold">
                  ASSESSMENTS DOCUMENTS
                </h1>
              </div>
 </div>
   
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Documents Repository</h1>
        <small className="text-slate-500">{docs.length} total</small>
      </header>

      <CategorySection title="💧 Water Reports" items={categories.water} />
      <CategorySection title="⚡ Energy Reports" items={categories.energy} />
      {categories.other.length > 0 && (
        <CategorySection title="📁 Other Reports" items={categories.other} />
      )}
    </div>
<MoewrFooter />
     </>
  );
}

function CategorySection({ title, items }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No documents found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((doc) => (
            <DocCard key={doc._id || doc.id} doc={doc} />
          ))}
        </div>
      )}
    </section>
  );
}

function DocCard({ doc }) {
  const viewHref = buildViewUrl(doc);
  const title = doc.title || doc.filename || "Untitled";
  const description = doc.description || "No description.";
  const badge = typeBadge(doc.filename, doc.mimetype);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(viewHref);
      alert("Link copied");
    } catch {
      alert("Could not copy link");
    }
  };

  return (
    <>

    <div className="border rounded-lg p-4 bg-white shadow-sm flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-tight">{title}</h3>
        <span className="text-[10px] px-2 py-1 bg-slate-100 rounded uppercase tracking-wide">
          {badge}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>

      <dl className="mt-3 text-xs text-gray-500 grid grid-cols-2 gap-x-4 gap-y-1">
        <div>
          <dt className="font-medium text-gray-700">Category</dt>
          <dd>{doc.category || "general"}</dd>
        </div>
        <div>
          <dt className="font-medium text-gray-700">Size</dt>
          <dd>{fmtSize(doc.size)}</dd>
        </div>
        <div>
          <dt className="font-medium text-gray-700">Updated</dt>
          <dd>{fmtDate(doc.updatedAt || doc.createdAt)}</dd>
        </div>
        <div>
          <dt className="font-medium text-gray-700">Filename</dt>
          <dd title={doc.filename} className="truncate">{doc.filename || "—"}</dd>
        </div>
      </dl>

      <div className="mt-4 flex gap-2">
        <a
          href={viewHref}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          View
        </a>
        <a
          href={viewHref}
          target="_blank"
          rel="noreferrer"
          download
          className="px-3 py-1.5 border rounded hover:bg-gray-50"
        >
          Download
        </a>
        <button
          onClick={onCopy}
          className="px-3 py-1.5 border rounded hover:bg-gray-50"
          type="button"
        >
          Copy Link
        </button>
        <Link
          to={`/documents/${doc._id}`}
          className="ml-auto px-3 py-1.5 border rounded hover:bg-gray-50"
        >
          Details
        </Link>
      </div>
    </div>



      </>
      
  );
}
