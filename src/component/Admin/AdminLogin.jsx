// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // UI-only LOGIN form component. No logic, no props, no state.
// // TailwindCSS classes only.

// export default function AdminLogin() {
   
//       const [email, setEmail] = useState("")
//       const [password, setPassword] = useState("")
//      const navigate = useNavigate()
//       function handleInsert(e){

//           e.preventDefault()
//         axios.post("http://localhost:3000/customerLogin/Admin", {
            
//             Email:email,
//             Password:password
//         }).then((res) =>{
//           alert("Login successfully")
//           localStorage.setItem("admin",  JSON.stringify(res))
//           navigate("/Dashboard")
//         }).catch((error) =>{
//             // if(error.res){
//             //     alert(error.res.error)
//             // }else{
//             //      alert('server error')
//             // }

//             if(error){
//                 alert("email or password is invalid")
//             }
//         })
//       }
//   return (
//     <section className="mx-auto flex min-h-screen max-w-md items-center justify-center  px-4">
//       <div className="w-full rounded-2xl border border-white/10 bg-[#0a243c]/60 p-8 shadow-lg">
//         <h1 className="mb-6 text-center text-2xl font-bold text-white">Login</h1>
//         <form className="space-y-6">
//           <div>
//             <label className="mb-2 block text-sm text-slate-300">Email</label>
//             <input value={email} onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter your email"
//               className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none"
//             />
//           </div>
//           <div>
//             <label className="mb-2 block text-sm text-slate-300">Password</label>
//             <input value={password} onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Enter your password"
//               className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none"
//             />
//           </div>
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center gap-2 text-slate-300">
//               <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/5" />
//               Remember me
//             </label>
//             <a href="#" className="text-[#F59E0B] hover:underline">Forgot password?</a>
//           </div>
//           <button onClick={(e) => handleInsert(e)}   type="submit" className="w-full rounded-xl bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white hover:brightness-110">Login</button>
//         </form>
//         <p className="mt-6 text-center text-sm text-slate-400">
//           Don’t have an account? <a href="#" className="font-semibold text-[#F59E0B] hover:underline">Sign up</a>
//         </p>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API =  "https://moewr-backend.onrender.com";

  const handleInsert = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post(`${API}/customerLogin`, {
        email: email,
        password: password,
      });

      alert("Login successfully");

      // ✅ Save only the token (and optional user info) to localStorage
      localStorage.setItem(
        "admin",
        JSON.stringify({
          token: res.data.token,     // <-- token returned by backend
          user: res.data.user || {}, // optional extra info
        })
      );

      navigate("/Dashboard");
    } catch (err) {
      console.error(err);
      setError("Email or password is invalid");
    }
  };

  return (
    <section className="mx-auto flex min-h-screen max-w-md items-center justify-center px-4">
      <div className="w-full rounded-2xl border border-white/10 bg-[#0a243c]/60 p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">Login</h1>

        <form className="space-y-6" onSubmit={handleInsert}>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/5" />
              Remember me
            </label>
            <a href="#" className="text-[#F59E0B] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            Login
          </button>

          {error && (
            <p className="mt-3 text-center text-sm text-rose-400">
              {error}
            </p>
          )}
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don’t have an account?{" "}
          <a href="#" className="font-semibold text-[#F59E0B] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
}

