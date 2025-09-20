import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3000";
const LIST_URL = `${API_BASE}/ReadAssess/DocumentFile`; // backend endpoint

export default function AssessmentsPost() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(LIST_URL);
        setDocs(res.data?.data || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load documents.");
      } finally {
        setLoading(false);
      }
    };
    fetchDocs();
  }, []);

  if (loading) return <p className="p-6 text-slate-500">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  // Group documents by category
  const categories = {
    water: docs.filter((d) => d.category?.toLowerCase() === "water"),
    energy: docs.filter((d) => d.category?.toLowerCase() === "energy"),
    other: docs.filter(
      (d) =>
        d.category?.toLowerCase() !== "water" &&
        d.category?.toLowerCase() !== "energy"
    ),
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <h1 className="text-3xl font-bold">Documents Repository</h1>

      {/* Water Reports */}
      <CategorySection title="💧 Water Reports" items={categories.water} />

      {/* Energy Reports */}
      <CategorySection title="⚡ Energy Reports" items={categories.energy} />

      {/* Other Reports */}
      {categories.other.length > 0 && (
        <CategorySection title="📁 Other Reports" items={categories.other} />
      )}
    </div>
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
  const title = doc.title || "Untitled";
  const description = doc.description || "No description.";

  // ✅ Now backend returns fileUrl, use that directly
  const viewHref = doc.fileUrl
    ? doc.fileUrl
    : `${API_BASE}/uploads/docs/${encodeURIComponent(
        doc.category || "general"
      )}/${encodeURIComponent(doc.filename || "")}`;

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <p className="text-xs text-gray-500 mt-1">
        Category: {doc.category || "general"}
      </p>
      <div className="mt-3 flex gap-2">
        <a
          href={viewHref}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          View
        </a>
        <Link
          to={`/documents/${doc._id}`}
          className="px-3 py-1 border rounded hover:bg-gray-50"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
