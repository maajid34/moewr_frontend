// src/components/DashboardCards.jsx
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DashboardCards() {
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  // --- axios client with token ---
  const http = useMemo(() => {
    const inst = axios.create({ baseURL: API });
    try {
      const admin = JSON.parse(localStorage.getItem("admin") || "{}");
      if (admin?.token) {
        inst.defaults.headers.common.Authorization = `Bearer ${admin.token}`;
      }
    } catch {}
    return inst;
  }, [API]);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const [totalWater, setTotalWater] = useState(0);
  const [totalEnergy, setTotalEnergy] = useState(0);
  const [totalWaterAchievements, setTotalWaterAchievements] = useState(0);

  // robust counter for various achievement shapes
  const countAchievements = (ach) => {
    if (!ach) return 0;

    if (Array.isArray(ach)) {
      // array of strings or objects
      return ach.length;
    }
    if (typeof ach === "object") {
      // single object like {title, detail, progress}
      return 1;
    }
    if (typeof ach === "string") {
      // count non-empty lines (supports bullets or plain lines)
      const lines = ach
        .split(/\r?\n/)
        .map((s) => s.replace(/^[-*•]\s*/, "").trim())
        .filter(Boolean);
      return lines.length;
    }
    return 0;
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setErr(null);
      try {
        // Energy projects
        const energyRes = await http.get("/readProjectEnergy/EnergyProject");
        const energyList = Array.isArray(energyRes.data)
          ? energyRes.data
          : Array.isArray(energyRes.data?.data)
          ? energyRes.data.data
          : [];
        if (!mounted) return;
        setTotalEnergy(energyList.length);

        // Water projects (adjust this route if yours differs)
        const waterRes = await http.get("/readProjectWater/WaterProject");
        const waterList = Array.isArray(waterRes.data)
          ? waterRes.data
          : Array.isArray(waterRes.data?.data)
          ? waterRes.data.data
          : [];
        if (!mounted) return;

        setTotalWater(waterList.length);

        const achSum = waterList.reduce(
          (sum, p) => sum + countAchievements(p?.achievements),
          0
        );
        setTotalWaterAchievements(achSum);
      } catch (e) {
        console.error(e);
        if (mounted) setErr("Failed to load dashboard stats.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [http]);

  return (
    <section className="absolute left-[300px] top-[100px] w-[calc(100%-300px)] px-6">
      {err && (
        <div className="mb-4 rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
          {err}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Water Projects */}
        <StatCard
          title="Total Water Projects"
          value={loading ? "…" : totalWater}
          accent="bg-sky-100 text-sky-700"
          to="/WaterProjectsTable" // optional route
        />

        {/* Energy Projects */}
        <StatCard
          title="Total Energy Projects"
          value={loading ? "…" : totalEnergy}
          accent="bg-emerald-100 text-emerald-700"
          to="/EnergyProjectTable" // optional route
        />

        {/* Water Achievements */}
        <StatCard
          title="Water Projects Achievements"
          value={loading ? "…" : totalWaterAchievements}
          accent="bg-amber-100 text-amber-700"
          to="/WaterProjectsTable" // optional route
        />
      </div>
    </section>
  );
}

function StatCard({ title, value, accent, to }) {
  const content = (
    <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
      <div className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${accent}`}>
        {title}
      </div>
      <div className="mt-4 text-4xl font-extrabold text-slate-800">{value}</div>
      <div className="mt-1 text-xs text-slate-500">Updated just now</div>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}
