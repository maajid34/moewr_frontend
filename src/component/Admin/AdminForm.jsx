import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./Dashboard";



export default function AdminForm() {
      const [Custname, setName] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
     const navigate = useNavigate()
      function handleInsert(e){

          e.preventDefault()
        axios.post("https://moewr-backend.onrender.com/createAdmin", {
            name:Custname,
            email:email,
            password:password
        }).then((res) =>{
              navigate("/AdminLogin")
            alert("registered succes")
          
        }).catch((error) =>{
            // if(error.res){
            //     alert(error.res.error)
            // }else{
            //      alert('server error')
            // }

            if(error){
                alert("email or password is invalid")
            }
        })
      }
  return (
<>
 <AdminSidebar />
    <section className="mx-auto absolute top-[100px] left-[300px] w-full max-w-2xl px-4 py-12 text-slate-100">
      <h1 className="mb-6 text-2xl font-bold text-white">Customer Form</h1>
      <form className="space-y-6 rounded-2xl border border-white/10 bg-[#0a243c]/60 p-6 shadow-lg">
        <div>
          <label className="mb-2 block text-sm text-slate-300">Full Name</label>
          <input value={Custname} onChange={(e) => setName(e.target.value)}
          required
            type="text"
            placeholder="Enter full name"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm text-slate-300">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email address"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none"
          />
        </div>
     
        
       
        <div>
          <label className="mb-2 block text-sm text-slate-300">Pasword</label>
          <input  value={password} onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Enter postal code"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none"
          />
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <button type="reset" className="rounded-xl bg-white/5 px-5 py-2 text-sm font-semibold text-slate-200 ring-1 ring-white/10 hover:bg-white/10">Cancel</button>
          <button onClick={(e) => handleInsert(e)} type="submit"  className="rounded-xl bg-[#F59E0B] px-5 py-2 text-sm font-semibold text-white hover:brightness-110">Submit</button>
        </div>
      </form>
    </section>
</>
   
  );
}
