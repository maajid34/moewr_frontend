import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";

export default function LoginForm() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    if (!Email || !Password) {
      setErr("Please provide Email and Password.");
      return;
    }

    try {
      setLoading(true);
      // your controller returns: { message, Admin: {...}, token }
      const res = await api.post("/customerLogin/Admin", { Email, Password });
      const token = res.data?.token;

      if (!token) {
        setErr("No token returned. Check server response.");
        return;
      }

      // store token (NOTE: your server sets expiresIn: "40s", that’s very short)
      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(res.data?.Admin || {}));

      // redirect (adjust to your dashboard route)
      navigate("/dashboard");
    } catch (e) {
      console.error(e);
      const m =
        e.response?.data?.message ||
        (e.response?.status === 500 ? "Invalid Email or Password." : "Login failed.");
      setErr(m);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] grid place-items-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 p-6 bg-white border rounded-xl shadow">
        <h1 className="text-2xl font-bold">Login</h1>

        {err && <p className="text-red-700 bg-red-50 p-2 rounded">{err}</p>}

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Login"}
        </button>

        <p className="text-xs text-slate-500">
          Tip: your JWT expiry is set to <strong>40s</strong> in the backend. That’s very short for a real app.
        </p>
      </form>
    </div>
  );
}
