// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function ProjectAchievementForm() {
//   const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

//   const [projects, setProjects] = useState([]);
//   const [selectedId, setSelectedId] = useState("");
//   const [title, setTitle] = useState("");
//   const [detail, setDetail] = useState("");
//   const [progress, setProgress] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [msg, setMsg] = useState(null);
//   const [err, setErr] = useState(null);

//   useEffect(() => {
//     let mounted = true;
//     setLoading(true);
//     axios
//       .get(`${API}/readProjectEnergy/EnergyProject`)
//       .then((res) => {
//         if (!mounted) return;
//         setProjects(Array.isArray(res.data) ? res.data : []);
//       })
//       .catch((e) =>
//         setErr(e?.response?.data?.message || "Failed to load projects")
//       )
//       .finally(() => setLoading(false));
//     return () => (mounted = false);
//   }, [API]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMsg(null);
//     setErr(null);
//     if (!selectedId) return setErr("Please select a project.");
//     if (!title.trim()) return setErr("Achievement title is required.");

//     const p = Math.max(0, Math.min(100, Number(progress || 0)));

//     setSubmitting(true);
//     try {
//       // ✅ FIXED URL (matches your router)
//       await axios.post(`${API}/createAchiev/${selectedId}/achievements`, {
//         title: title.trim(),
//         detail: detail.trim(),
//         progress: p,
//       });
//       setMsg("Achievement added ✅");
//       setTitle("");
//       setDetail("");
//       setProgress("");
//     } catch (e) {
//       setErr(
//         e?.response?.data?.message ||
//           e?.response?.data?.error ||
//           "Failed to add achievement"
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto absolute left-[400px] top-[100px] w-[100%] p-6 [--brand:#2FA8E1] [--brand-dark:#0A7FB8]">
//       <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
//         <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">
//           Add Project Achievement
//         </h2>
//         <p className="text-sm text-slate-600 mt-1">
//           Select a project and record a new achievement.
//         </p>

//         <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-slate-700">
//               Project <span className="text-rose-600">*</span>
//             </label>
//             <select
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               value={selectedId}
//               onChange={(e) => setSelectedId(e.target.value)}
//               disabled={loading}
//               required
//             >
//               <option value="">
//                 {loading ? "Loading…" : "Select a project"}
//               </option>
//               {projects.map((p) => (
//                 <option key={p._id} value={p._id}>
//                   {p.title || p.name || p._id}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700">
//               Achievement Title <span className="text-rose-600">*</span>
//             </label>
//             <input
//               type="text"
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               placeholder="e.g., Baseline Survey Completed"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700">
//               Detail
//             </label>
//             <textarea
//               rows={3}
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               placeholder="Short description of this achievement…"
//               value={detail}
//               onChange={(e) => setDetail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-slate-700">
//               Progress (%)
//             </label>
//             <input
//               type="number"
//               min="0"
//               max="100"
//               className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
//               placeholder="0–100"
//               value={progress}
//               onChange={(e) => setProgress(e.target.value)}
//             />
//             <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
//               <div
//                 className="h-2 rounded-full bg-[var(--brand)] transition-all"
//                 style={{
//                   width: `${Math.max(0, Math.min(100, Number(progress || 0)))}%`,
//                 }}
//               />
//             </div>
//           </div>

//           {err && <div className="text-sm text-rose-600">{err}</div>}
//           {msg && <div className="text-sm text-emerald-600">{msg}</div>}

//           <div className="pt-2 flex gap-3">
//             <button
//               type="submit"
//               disabled={submitting}
//               className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-white hover:bg-[var(--brand-dark)] disabled:opacity-60"
//             >
//               {submitting ? "Saving…" : "Add Achievement"}
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 setTitle("");
//                 setDetail("");
//                 setProgress("");
//               }}
//               className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
//             >
//               Clear
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import api from "../api"; // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function WaterAchievementForm() {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [progress, setProgress] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);


const navigate = useNavigate()

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    api
      .get("/readProjectWater/waterProject")
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setErr(null);

    if (!selectedId) return setErr("Please select a project.");
    if (!title.trim()) return setErr("Achievement title is required.");

    const p = Math.max(0, Math.min(100, Number(progress || 0)));

    setSubmitting(true);
    try {
      await api.post(`/createWaterAchiev/${selectedId}/achievements`, {
        title: title.trim(),
        detail: detail.trim(),
        progress: p,
      });
      setMsg("Achievement added ✅");
      navigate("/WaterAchievementsTable")
      setTitle("");
      setDetail("");
      setProgress("");
    } catch (e) {
      setErr(
        e?.response?.data?.message ||
          e?.response?.data?.error ||
          "Failed to add achievement"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto absolute left-[400px] top-[100px] w-[100%] p-6 [--brand:#2FA8E1] [--brand-dark:#0A7FB8]">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">
          Add Water Achievement
        </h2>
        <p className="text-sm text-slate-600 mt76 -1">
          Select a project and record a new achievement.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
              <option value="">
                {loading ? "Loading…" : "Select a project"}
              </option>
              {projects.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.title || p.name || p._id}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Achievement Title <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="e.g., Baseline Survey Completed"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Detail
            </label>
            <textarea
              rows={3}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="Short description of this achievement…"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Progress (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="0–100"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
            <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-[var(--brand)] transition-all"
                style={{
                  width: `${Math.max(0, Math.min(100, Number(progress || 0)))}%`,
                }}
              />
            </div>
          </div>

          {err && <div className="text-sm text-rose-600">{err}</div>}
          {msg && <div className="text-sm text-emerald-600">{msg}</div>}

          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-white hover:bg-[var(--brand-dark)] disabled:opacity-60"
            >
              {submitting ? "Saving…" : "Add Achievement"}
            </button>
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setDetail("");
                setProgress("");
              }}
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

