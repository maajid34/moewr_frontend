// src/pages/SingalProjectsEvent.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingalProjectsEvent() {
  const { id } = useParams();

  // API bases
  const API = import.meta.env.VITE_API_BASE_URL || "https://moewr-backend.onrender.com";
  const IMG_BASE = import.meta.env.VITE_IMG_BASE_URL || API; // serves /allimages

  // State aligned with your schema
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [ministry, setMinistry] = useState("");
  const [description, setDescription] = useState("");
  const [moreDescription, setMoreDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [objectiveImage, setObjectiveImage] = useState("");

  const normalizeName = (val) => {
    if (!val) return "";
    if (/^https?:\/\//i.test(val)) return val; // already full URL
    const fname = String(val).split(/[\\/]/).pop();
    return `${IMG_BASE}/allimages/${encodeURIComponent(fname)}`;
  };
  const onImgError = (e) => (e.currentTarget.src = "/placeholder.png");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(`${API}/readProjectEventSingal/Event/${id}`);
        const d = res.data; // controller returns the doc directly
        if (!mounted || !d) return;

        setTitle(d.title ?? "");
        setMinistry(d.ministry ?? "");
        setDescription(d.description ?? "");
        setMoreDescription(d.moreDescription ?? "");
        setCoverImage(d.coverImage ?? "");
        setObjectiveImage(d.objectiveImage ?? "");
      } catch (err) {
        console.error(err);
        if (mounted) setError("Failed to load project.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id, API]);

  return (
    <>


      <div className="py-[110px] w-full">
        {/* Banner (Title + Ministry) */}
        <div className="bg-[#0d7cb0] w-full py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-white text-4xl font-extrabold leading-tight">
              {title || "Event Project"}
            </h1>
            {ministry && (
              <p className="text-white/80 mt-2 text-sm">
                By {ministry}
              </p>
            )}
          </div>
        </div>

        <div className="w-full [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
          {/* Error */}
          {error && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <div className="rounded-md bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3">
                {error}
              </div>
            </div>
          )}

          {/* Content column: image → text → image (like the screenshot) */}
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* 1) First image (cover) */}
            {coverImage && (
              <img
                src={normalizeName(coverImage)}
                alt={title || "Event cover"}
                onError={onImgError}
                className="w-full max-h-[520px] object-cover rounded-xl shadow border border-slate-200"
              />
            )}

            {/* 2) Description / body text */}
            <div className="mt-8 text-slate-800 leading-7 break-words"
                 style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>
              {loading ? (
                <div className="space-y-3">
                  <div className="h-5 w-2/3 bg-slate-100 rounded animate-pulse" />
                  <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-slate-100 rounded animate-pulse" />
                </div>
              ) : (
                <>
                  {description && <p className="mb-6">{description}</p>}
                  {moreDescription && <p className="mb-0">{moreDescription}</p>}
                  {!description && !moreDescription && <p>—</p>}
                </>
              )}
            </div>

            {/* 3) Second image (objective) */}
            {objectiveImage && (
              <img
                src={normalizeName(objectiveImage)}
                alt="Event secondary"
                onError={onImgError}
                className="mt-10 w-full max-h-[520px] object-cover rounded-xl shadow border border-slate-200"
              />
            )}
          </section>
        </div>
      </div>



    </>
  );
}
