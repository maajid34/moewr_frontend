

// src/components/DashboardCards.jsx
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function DashboardCards() {
  const API = "https://moewr-backend.onrender.com";

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

  // NEW: energy breakdown
  const [totalEnergyCompleted, setTotalEnergyCompleted] = useState(0);
  const [totalEnergyImplementation, setTotalEnergyImplementation] = useState(0);
  // NEW: Water breakdown
  const [totalWaterCompleted, setTotalWaterCompleted] = useState(0);
  const [totalWaterImplementation, setTotalWaterImplementation] = useState(0);

  // robust counter for various achievement shapes
  const countAchievements = (ach) => {
    if (!ach) return 0;

    if (Array.isArray(ach)) return ach.length;
    if (typeof ach === "object") return 1;

    if (typeof ach === "string") {
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

        // NEW: compute completed & implementation counts from energyList
        const completed = energyList.filter(
          (p) => p.projectSatge === "Project Completed"
        ).length;

        const implementation = energyList.filter(
          (p) =>
            p.projectSatge === "Implementation Stage" ||
            p.projectSatge === "On-going Project"
        ).length;


        setTotalEnergyCompleted(completed);
        setTotalEnergyImplementation(implementation);


     

        // Water projects
        const waterRes = await http.get("/readProjectWater/WaterProject");
        const waterList = Array.isArray(waterRes.data)
          ? waterRes.data
          : Array.isArray(waterRes.data?.data)
          ? waterRes.data.data
          : [];
        if (!mounted) return;

        setTotalWater(waterList.length);


           // water complete and implemetation
   const completeds = waterList.filter(
          (p) => p.projectStage === "Project Completed"
        ).length;

        const implementations = waterList.filter(
          (p) =>
            p.projectStage === "Implementation Stage" ||
            p.projectStage === "On-going Project"
        ).length;


        setTotalWaterCompleted(completeds);
        setTotalWaterImplementation(implementations);

        // water project complted liste end

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
          to="/WaterProjectsTable"
        />

        {/* Energy Projects */}
        <StatCard
          title="Total Energy Projects"
          value={loading ? "…" : totalEnergy}
          accent="bg-emerald-100 text-emerald-700"
          to="/EnergyProjectTable"
        />

        {/* Water Achievements */}
        <StatCard
          title="Water Projects Achievements"
          value={loading ? "…" : totalWaterAchievements}
          accent="bg-amber-100 text-amber-700"
          to="/WaterProjectsTable"
        />

        {/* NEW: Energy Completed (brand chip) */}
        <StatCard
          title="Energy Projects Completed"
          value={loading ? "…" : totalEnergyCompleted}
          accent="bg-[#E6F6FD] text-[#0A7FB8]" // brand-light bg + brand-dark text
          to="/EnergyProjectTable"
        />

        {/* NEW: Energy Implementation (brand chip) */}
        <StatCard
          title="Energy Projects Implementation"
          value={loading ? "…" : totalEnergyImplementation}
          accent="bg-[#E6F6FD] text-[#2FA8E1]" // brand-light bg + brand primary text
          to="/EnergyProjectTable"
        />
        {/* NEW: Water Implementation (brand chip) */}
        <StatCard
          title="Water Projects Implementation"
          value={loading ? "…" : totalWaterImplementation}
          accent="bg-[#E6F6FD] text-[#2FA8E1]" // brand-light bg + brand primary text
          to="/EnergyProjectTable"
        />
        {/* NEW: Water Completed (brand chip) */}
        <StatCard
          title="Water Projects Completed"
          value={loading ? "…" : totalWaterCompleted}
          accent="bg-[#E6F6FD] text-[#2FA8E1]" // brand-light bg + brand primary text
          to="/EnergyProjectTable"
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

