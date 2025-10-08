import { useMemo, useState } from "react";
import axios from "axios";

export default function InventoryCreateForm() {
  const API = "https://moewr-backend.onrender.com";
  const ENDPOINT = "/insert/inventory"; // change to "/api/inventory" if your server uses that

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

  const [form, setForm] = useState({
    sn: "",
    item: "",
    unit: "Carton",
    stockIn: "",
    stockOut: "",
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState(null);

  const brand = "#2FA8E1";

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);
    setSaving(true);
    try {
      const payload = {
        sn: Number(form.sn || 0),
        item: form.item.trim(),
        unit: form.unit,
        stockIn: Number(form.stockIn || 0),
        stockOut: Number(form.stockOut || 0),
      };
      await http.post(ENDPOINT, payload);
      setMsg({ type: "ok", text: "Item added." });
      setForm({ sn: "", item: "", unit: "Carton", stockIn: "", stockOut: "" });
    } catch (err) {
      setMsg({
        type: "err",
        text: err?.response?.data?.message || "Failed to create item",
      });
    } finally {
      setSaving(false);
      setTimeout(() => setMsg(null), 3000);
    }
  };

  return (
    <section className="mt-8 absolute left-[400px] top-10">
      <div className="rounded-2xl overflow-hidden shadow ring-1 ring-black/5">
        <div
          className="px-6 py-4 text-white font-bold text-xl"
          style={{ backgroundColor: brand }}
        >
          Add Inventory Item
        </div>

        <form onSubmit={onSubmit} className="px-6 py-6 bg-white">
          {msg && (
            <div
              className={`mb-4 rounded-lg px-3 py-2 text-sm ${
                msg.type === "ok"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {msg.text}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">S/N</label>
              <input
                name="sn"
                type="number"
                min={0}
                value={form.sn}
                onChange={onChange}
                placeholder="1"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Item</label>
              <input
                name="item"
                type="text"
                value={form.item}
                onChange={onChange}
                placeholder="Aqua tab"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Unit</label>
              <select
                name="unit"
                value={form.unit}
                onChange={onChange}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
              >
                {["Box", "Carton", "Bag", "Bottle", "Piece", "Kg", "Litre", "Pack"].map(
                  (u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  )
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Stock in</label>
              <input
                name="stockIn"
                type="number"
                min={0}
                value={form.stockIn}
                onChange={onChange}
                placeholder="504"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Stock out</label>
              <input
                name="stockOut"
                type="number"
                min={0}
                value={form.stockOut}
                onChange={onChange}
                placeholder="176"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2 rounded-lg text-white font-semibold shadow disabled:opacity-60"
              style={{ backgroundColor: brand }}
            >
              {saving ? "Saving…" : "Add Item"}
            </button>

            <button
              type="button"
              onClick={() =>
                setForm({ sn: "", item: "", unit: "Carton", stockIn: "", stockOut: "" })
              }
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
