// WaterAchievementsTable.jsx
import { useEffect, useState, useMemo } from "react";
import api from "../api"; // axios instance with baseURL=http://localhost:3000 (your case)
import { Link } from "react-router-dom";
import axios from "axios";


export default function WaterAchievementsTable() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // If your backend uses an /api prefix, this will pick it up automatically.
  // Works for both:
  //   - http://localhost:3000/readProjectWater/waterProject
  //   - http://localhost:3000/api/readProjectWater/waterProject
  const PATHS = useMemo(
    () => ["/readProjectWater/waterProject", "/api/readProjectWater/waterProject"],
    []
  );
  const ACHIEVEMENTS_PREFIXES = useMemo(
    () => ["/waterAchievements", "/api/waterAchievements"],
    []
  );

  const pickAchievementsPath = (base, projectId, achIndex) => {
    // Build two candidates and use the one that matches your server.
    const p1 = `${ACHIEVEMENTS_PREFIXES[0]}/${projectId}/achievements/${achIndex}`;
    const p2 = `${ACHIEVEMENTS_PREFIXES[1]}/${projectId}/achievements/${achIndex}`;
    return base === 0 ? p1 : p2;
  };

  // Try the first route; if that truly fails to connect or returns 404, try the second.
  const load = async () => {
    setLoading(true);
    setErr(null);
    try {
      let res;
      let used = 0;
      try {
        res = await api.get(PATHS[0]);
        used = 0;
      } catch (e1) {
        // If first fails (network/404/CORS), try the second
        try {
          res = await api.get(PATHS[1]);
          used = 1;
        } catch (e2) {
          console.error("Both endpoints failed:", e1, e2);
          throw e2; // surface the second error
        }
      }

      const docs = Array.isArray(res.data) ? res.data : [];
      const flat = docs.flatMap((proj) => {
        const projectId = proj?._id;
        const projectName = proj?.title || proj?.name || projectId || "—";
        const achs = Array.isArray(proj?.achievements) ? proj.achievements : [];
        return achs.map((a, achIndex) => ({
          key: `${projectId}-${achIndex}`,
          projectId,
          achIndex,
          projectName,
          title: a?.title ?? "",
          detail: a?.detail ?? "",
          progress: Number.isFinite(Number(a?.progress)) ? Number(a.progress) : 0,
          _prefixIndex: used, // remember which prefix worked so actions use the same
        }));
      });

      setRows(flat);
    } catch (e) {
      console.error("Load error:", e?.message, e);
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        e?.message ||
        "Failed to load achievements";
      setErr(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

const handleDelete = async (projectId, index) => {
  try {
    const ok = window.confirm("Delete this achievement?");
    if (!ok) return;

    // Call your backend exactly as defined:
    await axios.delete(`http://localhost:3000/Delete/${projectId}/achievements/${index}`);

    // Remove from state
    setRows((prev) => prev.filter((r) => !(r.projectId === projectId && r.achIndex === index)));

    alert("Achievement deleted");
  } catch (e) {
    console.error("Delete failed:", e);
    alert(e?.response?.data?.message || e.message || "Delete failed");
  }
};




  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 absolute left-[300px] top-[100px]">
     <Link to={"/WaterAchievementForm"}> <button className="px-5 py-2 rounded-xl bg-blue-900 text-white m-5">Add water Achievments</button></Link>
      <div className="rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Project Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Achievment Title</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Detail</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Progress</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 bg-white">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-500">Loading…</td>
              </tr>
            ) : err ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-rose-600">{err}</td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-500">
                  No achievements yet.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.key} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-900 font-medium">{r.projectName}</td>
                  <td className="px-4 py-3 text-slate-700">{r.title || "—"}</td>
                  <td className="px-4 py-3 text-slate-600 break-words">{r.detail || "—"}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      {r.progress}%
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
  onClick={() => handleDelete(r.projectId, r.achIndex)}
  className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
>
  <i className="fa-solid fa-trash mr-2" /> Delete
</button>
                     <Link to={`/WaterAchievementUpdate/${r.projectId}/${r.achIndex}`}>
  <button
    className="inline-flex items-center rounded-lg bg-[#2FA8E1] px-3 py-1.5 text-sm font-semibold text-white hover:brightness-95"
  >
    <i className="fa-solid fa-pen-to-square mr-2" /> Edit
  </button>
</Link>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
