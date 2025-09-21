import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

import { Link } from "react-router-dom";


export default function EnergyProject() {
   const [Data, setData] = useState([])
   const handleReadData = () =>{

     axios.get("https://moewr-backend.onrender.com/readProjectEnergy/EnergyProject").then((res) =>{
      setData(res.data)
      
      
             
    }).catch((err) => {
    console.error("Error fetching medicine data:", err);
  });

}

   useEffect(() =>{
    handleReadData()
  },[])
  return (


<>


<div className="top-[120px] w-[100%]">


<div className="bg-[#0d7cb0] w-[100%] p-10 ">
<h1 className="text-white text-4xl">Energy Projects</h1>
</div>
<section id="projects" className="bg-white/70 border-y ">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Ongoing / pipeline Projects</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Project card */}
          
{
    Data.map((item)=>{ 
    
           
         return  <article className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="150">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <Link
  to={`/SingalProjectsEnergy/${item._id}`}
  className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
>
  Read for More
</Link>
            </article>
            
    })

  }
     </div>
        </div>
      </section>
      </div>
      </>
  )
  }