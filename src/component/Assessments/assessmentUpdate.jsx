// src/pages/DocumentUpdateForm.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API_BASE = "http://localhost:3000";

export default function AssessmentUpdateForm() {
  const { id } = useParams();              // <-- expects route like /documents/edit/:id
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving]   = useState(false);
  const [error, setError]     = useState("");

  const [title, setTitle]           = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory]     = useState("general");
  const [file, setFile]             = useState(null);
  const [currentFileUrl, setCurrentFileUrl] = useState("");
  const [currentFilename, setCurrentFilename] = useState("");

  // Load existing doc
  useEffect(() => {
    const fetchOne = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE}/ReadAssess/DocumentFile/${id}`);
        const d = res.data?.data || {};
        setTitle(d.title || "");
        setDescription(d.description || "");
        setCategory(d.category || "general");
        setCurrentFilename(d.filename || "");
        setCurrentFileUrl(d.fileUrl || (d.path ? `${API_BASE}/${d.path}` : ""));
      } catch (e) {
        console.error(e);
        setError("Failed to load document.");
      } finally {
        setLoading(false);
      }
    };
    fetchOne();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      setError("");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      // Only send file if user selected a new one
      if (file) formData.append("file", file);

      await axios.put(`${API_BASE}/UpdateAssess/DocumentFile/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Optional: go back or show success
      navigate("/AssessmentDashsPost");  // <- if you have a list page
      alert("✅ Document updated");
      setFile(null);
      // refresh current data
      const res = await axios.get(`${API_BASE}/ReadAssess/DocumentFile/${id}`);
      const d = res.data?.data || {};
      setCurrentFilename(d.filename || "");
      setCurrentFileUrl(d.fileUrl || (d.path ? `${API_BASE}/${d.path}` : ""));
    } catch (e) {
      console.error(e);
      setError("Failed to update document.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6 text-slate-500">Loading…</p>;
  if (error)   return <p className="p-6 text-red-600">{error}</p>;

  return (
    <div className="max-w-xl mx-auto absolute top-[100px] left-[300px] p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Update Document</h1>
        <Link to="/AssessmentDashsPost" className="text-sm text-blue-600 hover:underline">
          Back to list
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="p-6 border rounded bg-white shadow space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="water">Water</option>
            <option value="energy">Energy</option>
            <option value="tenders">Tenders</option>
            <option value="reports">Reports</option>
            <option value="general">General</option>
          </select>
        </div>

        {/* Current file preview/link */}
        <div className="text-sm">
          <span className="font-medium">Current file:</span>{" "}
          {currentFileUrl ? (
            <a
              href={currentFileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {currentFilename || "Open file"}
            </a>
          ) : (
            <span className="text-slate-500">None</span>
          )}
        </div>

        {/* Replace with new file (optional) */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Replace file (optional)
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
          <p className="text-xs text-slate-500 mt-1">
            Leave empty to keep the existing file.
          </p>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
