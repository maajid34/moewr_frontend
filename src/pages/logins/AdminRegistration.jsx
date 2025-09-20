import { useState } from "react";
import { api } from "../api";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");    // backend expects `Email`
  const [Password, setPassword] = useState("");// backend expects `Password`
  const [role, setRole] = useState("user");   // optional (your schema default is "user")

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setMsg("");

    if (!name || !Email || !Password) {
      setErr("Please fill all required fields.");
      return;
    }
    if (Password.length < 6) {
      setErr("Password should be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      // your controller reads: {name, Email, Password}
      const res = await api.post("/createAdmin/Admin", {
        name,
        Email,
        Password,
        role, // your controller ignores role now, but schema supports it
      });
      setMsg(`✅ Registered: ${res.data?.name || name}`);
      setName("");
      setEmail("");
      setPassword("");
      setRole("user");
    } catch (e) {
      console.error(e);
      const m = e.response?.data?.message || "Registration failed.";
      setErr(m);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60vh] grid place-items-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 p-6 bg-white border rounded-xl shadow">
        <h1 className="text-2xl font-bold">Create Account</h1>

        {msg && <p className="text-green-700 bg-green-50 p-2 rounded">{msg}</p>}
        {err && <p className="text-red-700 bg-red-50 p-2 rounded">{err}</p>}

        <div>
          <label className="block text-sm mb-1">Full Name</label>
          <input
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
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

        <div>
          <label className="block text-sm mb-1">Role (optional)</label>
          <select
            className="w-full border p-2 rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Creating…" : "Create Account"}
        </button>
      </form>
    </div>
  );
}
