import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function InventoryTable() {
  const API = "https://moewr-backend.onrender.com";

  // axios with token
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

  // edit mode
  const [editingId, setEditingId] = useState(null);
  const [edit, setEdit] = useState({
    sn: "",
    item: "",
    unit: "Carton",
    stockIn: "",
    stockOut: "",
  });

  const brand = "#2FA8E1";
  const brandDark = "#0A7FB8";
  const UNITS = ["Box", "Carton", "Bag", "Bottle", "Piece", "Kg", "Litre", "Pack"];

  const fmt = (n) =>
    typeof n === "number" ? n.toLocaleString() : Number(n || 0).toLocaleString();

  const fetchItems = async () => {
    setLoading(true);
    setErr(null);
    try {
      const res = await http.get("/read/inventory", { params: { q, sort: "sn" } });
      const list = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.data)
        ? res.data.data
        : [];
      setItems(list);
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

  const startEdit = (row) => {
    setEditingId(row._id);
    setEdit({
      sn: row.sn ?? "",
      item: row.item ?? "",
      unit: row.unit ?? "Carton",
      stockIn: row.stockIn ?? "",
      stockOut: row.stockOut ?? "",
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEdit({ sn: "", item: "", unit: "Carton", stockIn: "", stockOut: "" });
  };

  const saveEdit = async (id) => {
    try {
      const payload = {
        sn: Number(edit.sn || 0),
        item: String(edit.item || "").trim(),
        unit: edit.unit,
        stockIn: Number(edit.stockIn || 0),
        stockOut: Number(edit.stockOut || 0),
      };
      const res = await http.put(`/update/inventory/${id}`, payload);
      const updated = res.data;
      // update local list without refetch
      setItems((prev) =>
        prev.map((it) => (it._id === id ? { ...it, ...updated } : it))
      );
      cancelEdit();
    } catch (e) {
      alert(e?.response?.data?.message || "Failed to update item");
    }
  };

  const deleteItem = async (id) => {
    const ok = window.confirm("Delete this item?");
    if (!ok) return;
    try {
      await http.delete(`/delete/inventory/${id}`);
      setItems((prev) => prev.filter((it) => it._id !== id));
    } catch (e) {
      alert(e?.response?.data?.message || "Failed to delete item");
    }
  };

  return (
    <section className="pt-24 pb-12 absolute left-[300px] top-10">
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className="rounded-2xl px-6 py-6 shadow-md"
          style={{ backgroundColor: brand }}
        >
          <h1 className="text-white text-3xl md:text-4xl font-extrabold">
            Current stock level in the warehouse 
          </h1>
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-between flex-wrap items-center gap-3">
            <div>

           
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
             <button
            
            className="px-4 py-2 rounded-xl text-white font-semibold shadow"
            style={{ backgroundColor: brand }}
          >
            <Link to={"/InventoryCreateForm"}>Add Eventory</Link>
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
                  "Actions",
                ].map((th, i) => (
                  <th
                    key={i}
                    className="px-4 py-4 text-white text-sm md:text-base font-bold"
                    style={{
                      backgroundColor: brand,
                      borderRight: "2px solid " + brandDark,
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
                  <td className="px-4 py-6" colSpan={7}>
                    Loading…
                  </td>
                </tr>
              )}
              {err && !loading && (
                <tr>
                  <td className="px-4 py-6 text-red-600" colSpan={7}>
                    {err}
                  </td>
                </tr>
              )}

              {!loading &&
                !err &&
                items.map((row, idx) => {
                  const current =
                    row.currentBalance ??
                    (Number(row.stockIn || 0) - Number(row.stockOut || 0));

                  const isEditing = editingId === row._id;

                  return (
                    <tr
                      key={row._id || idx}
                      className={idx % 2 ? "bg-slate-50" : "bg-white"}
                      style={{ borderTop: "2px solid " + brandDark }}
                    >
                      {/* S/N */}
                      <td className="px-4 py-3 font-semibold">
                        {isEditing ? (
                          <input
                            type="number"
                            min={0}
                            className="w-24 rounded-lg border border-slate-300 px-2 py-1 outline-none focus:ring-2 focus:ring-sky-300"
                            value={edit.sn}
                            onChange={(e) =>
                              setEdit((f) => ({ ...f, sn: e.target.value }))
                            }
                          />
                        ) : (
                          row.sn
                        )}
                      </td>

                      {/* Item */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            className="w-full max-w-xs rounded-lg border border-slate-300 px-2 py-1 outline-none focus:ring-2 focus:ring-sky-300"
                            value={edit.item}
                            onChange={(e) =>
                              setEdit((f) => ({ ...f, item: e.target.value }))
                            }
                          />
                        ) : (
                          row.item
                        )}
                      </td>

                      {/* Unit */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <select
                            className="rounded-lg border border-slate-300 px-2 py-1 outline-none focus:ring-2 focus:ring-sky-300"
                            value={edit.unit}
                            onChange={(e) =>
                              setEdit((f) => ({ ...f, unit: e.target.value }))
                            }
                          >
                            {UNITS.map((u) => (
                              <option key={u} value={u}>
                                {u}
                              </option>
                            ))}
                          </select>
                        ) : (
                          row.unit
                        )}
                      </td>

                      {/* Stock in */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="number"
                            min={0}
                            className="w-28 rounded-lg border border-slate-300 px-2 py-1 outline-none focus:ring-2 focus:ring-sky-300"
                            value={edit.stockIn}
                            onChange={(e) =>
                              setEdit((f) => ({ ...f, stockIn: e.target.value }))
                            }
                          />
                        ) : (
                          fmt(row.stockIn)
                        )}
                      </td>

                      {/* Stock out */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="number"
                            min={0}
                            className="w-28 rounded-lg border border-slate-300 px-2 py-1 outline-none focus:ring-2 focus:ring-sky-300"
                            value={edit.stockOut}
                            onChange={(e) =>
                              setEdit((f) => ({ ...f, stockOut: e.target.value }))
                            }
                          />
                        ) : (
                          fmt(row.stockOut)
                        )}
                      </td>

                      {/* Balance */}
                      <td className="px-4 py-3 font-bold">{fmt(current)}</td>

                      {/* Actions */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => saveEdit(row._id)}
                              className="px-3 py-1 rounded-lg text-white font-semibold"
                              style={{ backgroundColor: brand }}
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="px-3 py-1 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => startEdit(row)}
                              className="px-3 py-1 rounded-lg text-white font-semibold"
                              style={{ backgroundColor: brand }}
                            >
                              Update
                            </button>
                            <button
                              onClick={() => deleteItem(row._id)}
                              className="px-3 py-1 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-500"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}

              {!loading && !err && items.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={7}>
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
