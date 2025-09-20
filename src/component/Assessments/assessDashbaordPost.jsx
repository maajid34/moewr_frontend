// 

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3000";
const LIST_URL = `${API_BASE}/ReadAssess/DocumentFile`;

export default function AssessmentDashsPost() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(null);

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

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this document?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`${API_BASE}/DeleteAssess/DocumentFile/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`Delete failed (${res.status})`);
      // remove from local state
      setDocs((prev) => prev.filter((d) => d._id !== id));
    } catch (e) {
      console.error(e);
      alert(e.message || "Could not delete");
    } finally {
      setDeleting(null);
    }
  };

  if (loading) return <p className="p-6 text-slate-500">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

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
    <div className="max-w-7xl mx-auto p-6 absolute top-[200px] left-[300px] w-full space-y-12">
      <Link to="/DocumentManagerForm">
        <button className="bg-blue-900 px-6 py-2 rounded-xl text-white text-xl font-bold">
          Add New Assessments
        </button>
      </Link>

      <h1 className="text-3xl font-bold">Documents Repository</h1>

      <CategorySection
        title="💧 Water Reports"
        items={categories.water}
        onDelete={handleDelete}
        deleting={deleting}
      />
      <CategorySection
        title="⚡ Energy Reports"
        items={categories.energy}
        onDelete={handleDelete}
        deleting={deleting}
      />
      {categories.other.length > 0 && (
        <CategorySection
          title="📁 Other Reports"
          items={categories.other}
          onDelete={handleDelete}
          deleting={deleting}
        />
      )}
    </div>
  );
}

function CategorySection({ title, items, onDelete, deleting }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No documents found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((doc) => (
            <DocCard
              key={doc._id || doc.id}
              doc={doc}
              onDelete={onDelete}
              deleting={deleting}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function DocCard({ doc, onDelete, deleting }) {
  const title = doc.title || "Untitled";
  const description = doc.description || "No description.";

  const viewHref = doc.fileUrl
    ? doc.fileUrl
    : `${API_BASE}/uploads/docs/${encodeURIComponent(
        doc.category || "general"
      )}/${encodeURIComponent(doc.filename || "")}`;

  const isDeleting = deleting === doc._id;

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

      <div className="flex space-x-5 m-10">
        <button
          onClick={() => onDelete(doc._id)}
          disabled={isDeleting}
          className="bg-red-600 px-6 py-2 rounded-xl text-white text-xl font-bold disabled:opacity-60 hover:bg-red-700"
        >
          {isDeleting ? "Deleting…" : "Delete"}
        </button>

        <Link to={`/AssessmentUpdateForm/${doc._id}`}>
          <button className="bg-blue-900 px-6 py-2 rounded-xl text-white text-xl font-bold hover:bg-blue-700">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}
