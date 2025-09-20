// src/components/projects/EnergyProjectPhotosTable.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import api from "../../api"; // axios instance with baseURL
import axios from "axios";
import { Link } from "react-router-dom";

export default function EnergyProjectPhotosTable() {
  const [projects, setProjects] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedProjectName, setSelectedProjectName] = useState("");
  const [rows, setRows] = useState([]); // [{ Image }]
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);
  const [uploading, setUploading] = useState(false);

  // hidden input for replace (edit one)
  const replaceFileRef = useRef(null);
  const replaceTargetIndexRef = useRef(null);

  // hidden input for quick-append
  const appendFileRef = useRef(null);

  const PATHS = useMemo(
    () => ({
      projects: ["/readProjectEnergy/EnergyProject", "/api/readProjectEnergy/EnergyProject"],
      readPhotos: (id) => [`/ReadEnergyProjectPhoto/${id}/photos`, `/api/ReadEnergyProjectPhoto/${id}/photos`],
      postPhotos: (id) => [`/energyProject/${id}/photos`, `/api/energyProject/${id}/photos`],
      deletePhoto: (id) => [`/energyProject/${id}/photos`, `/api/energyProject/${id}/photos`], // body: {index} or {imageName}
    }),
    []
  );

  // util: normalize display src (same as in your detail page)
  const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
  const normalizeName = (val) => {
    if (!val) return "";
    if (/^https?:\/\//i.test(val)) return val;
    const fname = String(val).split(/[\\/]/).pop();
    return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
  };

  // load projects for select
  useEffect(() => {
    let mounted = true;
    (async () => {
      setErr(null);
      try {
        let res;
        try {
          res = await api.get(PATHS.projects[0]);
        } catch {
          res = await api.get(PATHS.projects[1]);
        }
        if (!mounted) return;
        const docs = Array.isArray(res.data) ? res.data : [];
        setProjects(docs);
      } catch (e) {
        setErr(e?.response?.data?.message || e?.message || "Failed to load projects");
      }
    })();
    return () => (mounted = false);
  }, [PATHS]);

  // load photos for selected project
  const loadPhotos = async (projectId) => {
    if (!projectId) return;
    setLoading(true);
    setErr(null);
    setMsg(null);
    try {
      let res;
      try {
        res = await api.get(PATHS.readPhotos(projectId)[0]);
      } catch {
        res = await api.get(PATHS.readPhotos(projectId)[1]);
      }
      const arr = Array.isArray(res.data?.photos)
        ? res.data.photos
        : Array.isArray(res.data)
        ? res.data
        : [];
      setRows(arr);
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Failed to load photos");
    } finally {
      setLoading(false);
    }
  };

  // on project change
  const handlePickProject = (e) => {
    const pid = e.target.value;
    setSelectedId(pid);
    setSelectedProjectName(
      projects.find((p) => p._id === pid)?.title || projects.find((p) => p._id === pid)?.name || pid
    );
    if (pid) loadPhotos(pid);
  };

  // delete by index
  const handleDelete = async (index) => {
    if (!selectedId && selectedId !== "0") return;
    const ok = window.confirm("Delete this photo?");
    if (!ok) return;
    setErr(null);
    setMsg(null);
    try {
      // Use raw axios with absolute URL to avoid any interceptor edge cases
      const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
      // Your controller accepts JSON body { index } or { imageName }
      await axios.delete(`${base}${PATHS.deletePhoto(selectedId)[0]}`, {
        data: { index },
      }).catch(async () => {
        // fallback to /api prefix if needed
        await axios.delete(`${base}${PATHS.deletePhoto(selectedId)[1]}`, {
          data: { index },
        });
      });

      // remove locally
      setRows((prev) => prev.filter((_, i) => i !== index));
      setMsg("Photo deleted ✅");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Delete failed");
    }
  };

  // start replace flow: pick file
  const startReplace = (index) => {
    replaceTargetIndexRef.current = index;
    replaceFileRef.current?.click();
  };

  // when replacement file chosen: delete old index then append new photo
  const onPickReplaceFile = async (e) => {
    const file = (e.target.files && e.target.files[0]) || null;
    e.target.value = ""; // reset input
    if (!file) return;

    const idx = replaceTargetIndexRef.current;
    if (idx == null) return;

    setUploading(true);
    setErr(null);
    setMsg(null);

    try {
      // 1) delete existing at index
      const base = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
      await axios
        .delete(`${base}${PATHS.deletePhoto(selectedId)[0]}`, { data: { index: idx } })
        .catch(async () => {
          await axios.delete(`${base}${PATHS.deletePhoto(selectedId)[1]}`, { data: { index: idx } });
        });

      // 2) append the new one
      const form = new FormData();
      form.append("photos", file);
      await api
        .post(PATHS.postPhotos(selectedId)[0], form, { headers: { "Content-Type": "multipart/form-data" } })
        .catch(async () => {
          await api.post(PATHS.postPhotos(selectedId)[1], form, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        });

      // reload list to reflect new order/state
      await loadPhotos(selectedId);
      setMsg("Photo replaced ✅");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Replace failed");
    } finally {
      setUploading(false);
    }
  };

  // Quick-append multiple photos
  const startAppend = () => appendFileRef.current?.click();
  const onPickAppendFiles = async (e) => {
    const list = Array.from(e.target.files || []);
    e.target.value = "";
    if (!list.length) return;

    setUploading(true);
    setErr(null);
    setMsg(null);

    try {
      const form = new FormData();
      list.forEach((f) => form.append("photos", f));
      await api
        .post(PATHS.postPhotos(selectedId)[0], form, { headers: { "Content-Type": "multipart/form-data" } })
        .catch(async () => {
          await api.post(PATHS.postPhotos(selectedId)[1], form, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        });

      await loadPhotos(selectedId);
      setMsg("Photos appended ✅");
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 absolute left-[300px] top-[100px]">
      {/* Controls header */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <select
          className="rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={selectedId}
          onChange={handlePickProject}
        >
          <option value="">{projects.length ? "Select a project…" : "Loading projects…"}</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title || p.name || p._id}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={!selectedId || uploading}
          onClick={startAppend}
          className="rounded-xl bg-blue-900 px-5 py-2 text-white hover:brightness-110 disabled:opacity-60"
        >
          {uploading ? "Working…" : "Add Photos"}
        </button>

        {selectedId && (
          <Link to={`/SingalProjectsEnergy/${selectedId}`}>
            <button className="rounded-xl border border-slate-200 px-5 py-2 text-slate-700 hover:bg-slate-50">
              View Project
            </button>
          </Link>
        )}
      </div>

      {/* Alerts */}
      {err && <div className="mb-3 text-sm text-rose-600">{err}</div>}
      {msg && <div className="mb-3 text-sm text-emerald-600">{msg}</div>}

      {/* Table */}
      <div className="rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Project</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Preview</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Image</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {!selectedId ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-500">
                  Select a project to view photos.
                </td>
              </tr>
            ) : loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-500">Loading…</td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-500">
                  No photos uploaded yet.
                </td>
              </tr>
            ) : (
              rows.map((p, i) => {
                const name = p?.Image ? String(p.Image).split(/[\\/]/).pop() : "—";
                return (
                  <tr key={`${name}-${i}`} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-700">{i}</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">
                      {selectedProjectName || selectedId}
                    </td>
                    <td className="px-4 py-3">
                      <img
                        src={normalizeName(p?.Image)}
                        alt={name}
                        className="w-20 h-16 object-cover rounded-md border border-slate-200"
                        onError={(e) => (e.currentTarget.src = "/placeholder.png")}
                      />
                    </td>
                    <td className="px-4 py-3 text-slate-600 break-all">{name}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startReplace(i)}
                          disabled={uploading}
                          className="inline-flex items-center rounded-lg bg-[#2FA8E1] px-3 py-1.5 text-sm font-semibold text-white hover:brightness-95 disabled:opacity-60"
                        >
                          <i className="fa-solid fa-pen-to-square mr-2" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(i)}
                          disabled={uploading}
                          className="inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 disabled:opacity-60"
                        >
                          <i className="fa-solid fa-trash mr-2" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Hidden file pickers */}
      <input
        ref={replaceFileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onPickReplaceFile}
      />
      <input
        ref={appendFileRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={onPickAppendFiles}
      />
    </div>
  );
}
