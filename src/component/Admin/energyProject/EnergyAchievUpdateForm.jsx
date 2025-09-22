// src/components/water/WaterAchievementUpdate.jsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EnergyAchievementUpdate() {
  const { id, index } = useParams(); // route: /WaterAchievementUpdate/:id/:index
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);

  // ---- Load existing achievement (defensive parsing) ----
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setErr(null);

    const url = `${API}/ReadSingalEnergyAchiev/${id}/achievements/${index}`;
    axios
      .get(url)
      .then((res) => {
        if (!mounted) return;

        // DEBUG: see the server payload in the console once
        console.log("GET achievement payload:", res.data);

        let a = null;
        const d = res.data;

        // Handle common shapes
        if (Array.isArray(d)) {
          a = d[0] ?? null;
        } else if (d && typeof d === "object") {
          // try nested fields first
          a =
            d.achievement ??
            d.data ??
            d.result ??
            d.item ??
            d; // fall back to the object itself
          if (Array.isArray(a)) a = a[0] ?? null;
        }

        if (!a || typeof a !== "object") {
          setErr("Achievement not found.");
          return;
        }

        setTitle(a.title ?? "");
        setDetail(a.detail ?? "");
        setProgress(Number(a.progress) || 0);
      })
      .catch((e) => {
        if (!mounted) return;
        console.error("Load error:", e);
        setErr(
          e?.response?.data?.message ||
            e?.message ||
            "Failed to load achievement"
        );
      })
      .finally(() => {
        mounted && setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [API, id, index]);

  // ---- Submit update ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setMsg(null);

    if (!title.trim()) return setErr("Title is required.");
    const p = Math.max(0, Math.min(100, Number(progress) || 0));

    setSaving(true);
    try {
      await axios.patch(`${API}/UpdateEnergyAchiev/${id}/achievements/${index}`, {
        title: title.trim(),
        detail: detail.trim(),
        progress: p,
      });
      setMsg("Achievement updated ✅");
      setTimeout(() => navigate("/EnergyAchievementsTable"), 700);
    } catch (e) {
      console.error("Update error:", e);
      setErr(
        e?.response?.data?.message ||
          e?.response?.data?.error ||
          "Update failed"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="absolute left-[300px] top-[120px] p-6 text-slate-700">
        Loading achievement…
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto absolute left-[400px] top-[100px] w-full p-6 [--brand:#2FA8E1] [--brand-dark:#0A7FB8]">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <h2 className="text-2xl font-extrabold text-[var(--brand-dark)]">
          Update Water Achievement
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Edit achievement details and save.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Title <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Detail
            </label>
            <textarea
              rows={3}
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
              placeholder="Short description…"
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
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="mt-2 w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand)]"
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
              disabled={saving}
              className="rounded-xl bg-[var(--brand)] px-5 py-2.5 text-white hover:bg-[var(--brand-dark)] disabled:opacity-60"
            >
              {saving ? "Saving…" : "Update Achievement"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/WaterAchievementsTable")}
              className="rounded-xl border border-slate-200 px-5 py-2.5 text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
