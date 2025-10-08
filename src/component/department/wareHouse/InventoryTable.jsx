import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function InventoryTable() {
  const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

  // axios with token (if you use admin auth later)
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

  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const fetchItems = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await http.get("/api/inventory", {
        params: { q, sort: "sn" },
      });
      setItems(
        Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.data)
          ? res.data.data
          : []
      );
    } catch (e) {
      setErr(e?.response?.data?.message || "Failed to load items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const brand = "#2FA8E1";

  const fmt = (n) =>
    typeof n === "number"
      ? n.toLocaleString()
      : Number(n || 0).toLocaleString();

  return (
    <section className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className="rounded-2xl px-6 py-6 shadow-md"
          style={{ backgroundColor: brand }}
        >
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">
            Current stock level in the warehouse 2025
          </h1>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search item…"
            className="rounded-xl border border-slate-300 px-4 py-2 outline-none focus:ring-2"
            style={{ boxShadow: "inset 0 0 0 9999px #ffffff" }}
          />
          <button
            onClick={fetchItems}
            className="px-4 py-2 rounded-xl text-white font-semibold shadow"
            style={{ backgroundColor: brand }}
          >
            Search
          </button>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-x-auto rounded-2xl shadow-lg ring-1 ring-black/5">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                {[
                  "S/N",
                  "Item",
                  "Unit",
                  "Stock in",
                  "Stock out",
                  "Current Stock Balance",
                ].map((th, i) => (
                  <th
                    key={i}
                    className="px-4 py-4 text-white text-sm md:text-base font-bold"
                    style={{
                      backgroundColor: brand,
                      borderRight: "2px solid #0A7FB8",
                    }}
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td className="px-4 py-6" colSpan={6}>
                    Loading…
                  </td>
                </tr>
              )}
              {err && !loading && (
                <tr>
                  <td className="px-4 py-6 text-red-600" colSpan={6}>
                    {err}
                  </td>
                </tr>
              )}
              {!loading &&
                !err &&
                items.map((row, idx) => {
                  const current =
                    (row.currentBalance ??
                      (Number(row.stockIn || 0) - Number(row.stockOut || 0))) |
                    0;

                  return (
                    <tr
                      key={row._id || idx}
                      className={idx % 2 ? "bg-slate-50" : "bg-white"}
                      style={{ borderTop: "2px solid #0A7FB8" }}
                    >
                      <td className="px-4 py-4 font-semibold">{row.sn}</td>
                      <td className="px-4 py-4">{row.item}</td>
                      <td className="px-4 py-4">{row.unit}</td>
                      <td className="px-4 py-4">{fmt(row.stockIn)}</td>
                      <td className="px-4 py-4">{fmt(row.stockOut)}</td>
                      <td className="px-4 py-4 font-bold">{fmt(current)}</td>
                    </tr>
                  );
                })}
              {!loading && !err && items.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={6}>
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
