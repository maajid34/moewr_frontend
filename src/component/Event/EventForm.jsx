// src/components/events/EventCreateForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EventCreateForm() {
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const navigate = useNavigate();

  // Text fields
  const [title, setTitle] = useState("");
  const [ministry, setMinistry] = useState("");
  const [description, setDescription] = useState("");
  const [moreDescription, setMoreDescription] = useState("");

  // Files
  const [coverImage, setCoverImage] = useState(null);          // required
  const [objectiveImage, setObjectiveImage] = useState(null);  // optional

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);

  const onPickCover = (e) => {
    setCoverImage(e.target.files?.[0] || null);
  };
  const onPickObjective = (e) => {
    setObjectiveImage(e.target.files?.[0] || null);
  };

  const resetForm = () => {
    setTitle("");
    setMinistry("");
    setDescription("");
    setMoreDescription("");
    setCoverImage(null);
    setObjectiveImage(null);
    setErr(null);
    setMsg(null);
    // also clear file inputs visually
    document.getElementById("coverInput")?.value && (document.getElementById("coverInput").value = "");
    document.getElementById("objectiveInput")?.value && (document.getElementById("objectiveInput").value = "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setMsg(null);

    if (!title.trim()) return setErr("Title is required.");
    if (!coverImage) return setErr("Cover image is required.");

    const fd = new FormData();
    // Field names should match your multer/route expectations.
    // If your backend expects exactly these names, you're set.
    fd.append("title", title.trim());
    fd.append("ministry", ministry.trim());
    fd.append("description", description.trim());
    fd.append("moreDescription", moreDescription.trim());
    fd.append("coverImage", coverImage); // required
    if (objectiveImage) fd.append("objectiveImage", objectiveImage); // optional

    setSubmitting(true);
    try {
      const res = await fetch(`${API}/createProjectEvent/Event`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || data?.error || `Request failed (${res.status})`);
      }

      setMsg("Event created successfully ✅");
      // Optional: navigate to a list/table page when done
      // navigate("/EventsTable");
      resetForm();
    } catch (e) {
      setErr(e.message || "Failed to create event");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="absolute top-10 left-[400px] w-full max-w-3xl mx-auto p-6 [--brand:#2FA8E1] [--brand-dark:#0A7FB8]">
        
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">Create Event</h2>
        <p className="text-sm text-slate-600 mt-1">Fill the details and upload images. Cover image is required.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Title <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="e.g., National Energy Summit 2025"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <p className="text-xs text-slate-500 mt-1">Must be unique.</p>
          </div>

          {/* Ministry */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Ministry</label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="e.g., Ministry of Energy & Water Resources"
              value={ministry}
              onChange={(e) => setMinistry(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Short Description</label>
            <textarea
              rows={3}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="Brief summary of the event…"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* More Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700">More Description</label>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="Additional details, agenda, speakers, logistics…"
              value={moreDescription}
              onChange={(e) => setMoreDescription(e.target.value)}
            />
          </div>

          {/* Cover Image (required) */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Cover Image <span className="text-rose-600">*</span>
            </label>
            <input
              id="coverInput"
              type="file"
              accept="image/*"
              onChange={onPickCover}
              className="mt-2 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--brand)] file:px-4 file:py-2 file:text-white hover:file:bg-[var(--brand-dark)]"
              required
            />
            {coverImage && (
              <div className="mt-3">
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover preview"
                  className="h-36 w-full max-w-xs rounded-lg object-cover border"
                />
              </div>
            )}
          </div>

          {/* Objective Image (optional) */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Objective Image (optional)</label>
            <input
              id="objectiveInput"
              type="file"
              accept="image/*"
              onChange={onPickObjective}
              className="mt-2 block w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--brand)] file:px-4 file:py-2 file:text-white hover:file:bg-[var(--brand-dark)]"
            />
            {objectiveImage && (
              <div className="mt-3">
                <img
                  src={URL.createObjectURL(objectiveImage)}
                  alt="Objective preview"
                  className="h-36 w-full max-w-xs rounded-lg object-cover border"
                />
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
              disabled={submitting}
              className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-white hover:bg-[var(--brand-dark)] disabled:opacity-60"
            >
              {submitting ? "Saving…" : "Create Event"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
