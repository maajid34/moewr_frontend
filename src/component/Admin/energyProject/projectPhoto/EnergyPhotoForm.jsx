// src/components/projects/EnergyProjectPhotosForm.jsx
import { useEffect, useState } from "react";
import api from "../../api"; // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function EnergyProjectPhotosForm() {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [files, setFiles] = useState([]); // File[]
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  // load projects
  useEffect(() => {
    let mounted = true;
    setLoading(true);

    api
      .get("/readProjectEnergy/EnergyProject")
      .then((res) => {
        if (!mounted) return;
        setProjects(Array.isArray(res.data) ? res.data : []);
      })
      .catch((e) => {
        const m =
          e?.response?.data?.message ||
          e?.message ||
          "Failed to load projects";
        setErr(m);
      })
      .finally(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  // handle file input
  const onPickFiles = (e) => {
    setMsg(null);
    setErr(null);
    const list = Array.from(e.target.files || []);
    if (!list.length) return;
    // Optional: filter duplicates by name+size
    const existingKey = new Set(files.map((f) => `${f.name}-${f.size}`));
    const merged = [
      ...files,
      ...list.filter((f) => !existingKey.has(`${f.name}-${f.size}`)),
    ];
    setFiles(merged);
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const clearAll = () => {
    setFiles([]);
    setSelectedId("");
    setMsg(null);
    setErr(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setErr(null);

    if (!selectedId) return setErr("Please select a project.");
    if (files.length === 0) return setErr("Please choose at least one image.");

    const form = new FormData();
    // Server accepts photos OR Photos — we’ll send both for safety
    files.forEach((f) => form.append("photos", f));
    files.forEach((f) => form.append("Photos", f));

    setSubmitting(true);
    try {
      await api.post(`/energyProject/${selectedId}/photos`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMsg("Photos uploaded ✅");
      setFiles([]);
      // optional: navigate to project details/gallery
      // navigate(`/SingalProjectsEnergy/${selectedId}`);
    } catch (e) {
      setErr(
        e?.response?.data?.message ||
          e?.response?.data?.error ||
          "Failed to upload photos"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto absolute left-[400px] top-[100px] w-[100%] p-6 [--brand:#2FA8E1] [--brand-dark:#0A7FB8]">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">
          Add Project Photos
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Select a project and upload one or more images.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Project select */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Project <span className="text-rose-600">*</span>
            </label>
            <select
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              disabled={loading}
              required
            >
              <option value="">{loading ? "Loading…" : "Select a project"}</option>
              {projects.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.title || p.name || p._id}
                </option>
              ))}
            </select>
          </div>

          {/* File input */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Photos <span className="text-rose-600">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={onPickFiles}
              className="mt-2 block w-full text-sm text-slate-700 file:mr-3 file:rounded-lg file:border file:border-slate-200 file:bg-white file:px-4 file:py-2.5 file:text-sm file:font-medium hover:file:bg-slate-50 focus:outline-none"
            />
            <p className="mt-1 text-xs text-slate-500">
              You can select up to 20 images at once.
            </p>

            {/* Thumbnails */}
            {files.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                {files.map((f, idx) => {
                  const url = URL.createObjectURL(f);
                  return (
                    <div
                      key={`${f.name}-${idx}`}
                      className="relative overflow-hidden rounded-xl border border-slate-200"
                    >
                      <img
                        src={url}
                        alt={f.name}
                        className="w-full h-36 object-cover"
                        onLoad={() => URL.revokeObjectURL(url)}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-[11px] px-2 py-1 truncate">
                        {f.name}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="absolute top-2 right-2 rounded-md bg-white/90 px-2 py-1 text-[11px] font-semibold text-rose-600 hover:bg-white"
                        aria-label="Remove"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Alerts */}
          {err && <div className="text-sm text-rose-600">{err}</div>}
          {msg && <div className="text-sm text-emerald-600">{msg}</div>}

          {/* Actions */}
          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              disabled={submitting || !selectedId || files.length === 0}
              className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-white hover:bg-[var(--brand-dark)] disabled:opacity-60"
            >
              {submitting ? "Uploading…" : "Upload Photos"}
            </button>
            <button
              type="button"
              onClick={clearAll}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => selectedId && navigate(`/SingalProjectsEnergy/${selectedId}`)}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
            >
              View Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
