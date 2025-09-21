import { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "https://moewr-backend.onrender.com";

export default function DocumentManagerForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("general");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const [docs, setDocs] = useState([]);

  // ✅ Fetch documents on load
  useEffect(() => {
    fetchDocs();
  }, []);

  const fetchDocs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/ReadAssess/DocumentFile`);
      setDocs(res.data?.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("⚠ Please choose a file");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("file", file);

    try {
      const res = await axios.post(
        `${API_BASE}/createAssess/DocumentFile`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(`✅ Uploaded: ${res.data?.data?.title}`);
      setTitle("");
      setDescription("");
      setCategory("general");
      setFile(null);

      // refresh list
      fetchDocs();
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Failed to upload");
    }
  };

  return (
    <div className=" max-w-3xl mx-auto absolute top-[200px] left-[400px] w-full space-y-8">
      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="p-6 border rounded bg-white shadow space-y-4"
      >
        <h2 className="text-xl font-bold">Upload Document</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          rows="3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="water">Water</option>
          <option value="energy">Energy</option>
          <option value="tenders">Tenders</option>
          <option value="reports">Reports</option>
          <option value="general">General</option>
        </select>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full"
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload
        </button>

        {message && <p className="text-sm mt-2">{message}</p>}
      </form>

      {/* Documents List */}
      {/* <div>
        <h2 className="text-xl font-bold mb-4">Uploaded Documents</h2>
        {docs.length === 0 ? (
          <p className="text-gray-500">No documents uploaded yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {docs.map((doc) => (
              <div
                key={doc._id}
                className="p-4 border rounded bg-white shadow"
              >
                <h3 className="font-semibold">{doc.title}</h3>
                <p className="text-sm text-gray-600">{doc.description}</p>
                <p className="text-xs text-gray-500">
                  Category: {doc.category}
                </p>
                <a
                  href={doc.fileUrl || `${API_BASE}/${doc.path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  View / Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
