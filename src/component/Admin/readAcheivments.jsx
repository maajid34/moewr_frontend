import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function TenderProgressCardUI() {
  const { id } = useParams(); // expects a route like: /project/:id/achievements
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  const [projectTitle, setProjectTitle] = useState("");
  const [achievements, setAchievements] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    setError("");
    axios
      .get(`${API}/${id}/achievements`) // matches your router.get("/:id/achievements", ...)
      .then((res) => {
        const data = res.data || {};
        setProjectTitle(data.title || "");
        setAchievements(Array.isArray(data.achievements) ? data.achievements : []);
      })
      .catch(() => setError("Failed to load achievements"));
  }, [API, id]);

  if (error) {
    return <div className="p-4 text-rose-600">{error}</div>;
  }

  if (!achievements.length) {
    return (
      <div className="max-w-sm ">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-extrabold text-slate-900">
            {projectTitle || "Project Achievements"}
          </h3>
          <p className="mt-2 text-slate-600">No achievements yet.</p>
        </article>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((a, idx) => {
        const pct = Number(a.progress ?? 0);
        const clamped = Math.max(0, Math.min(100, isNaN(pct) ? 0 : pct));

        return (
          <div key={idx} className="max-w-sm">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-900">
                {a.title || "Achievement"}
              </h3>

              {a.detail && (
                <p className="mt-2 text-slate-600">
                  {a.detail}
                </p>
              )}

              {/* Progress text */}
              <p className="mt-4 font-semibold text-red-600">
                {clamped}% Done
              </p>

              {/* Progress bar */}
              <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                <div
                  className="h-2 rounded-full bg-red-500"
                  style={{ width: `${clamped}%` }}
                />
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
