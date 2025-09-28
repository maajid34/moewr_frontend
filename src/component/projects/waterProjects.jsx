import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
// import img1 from '../../assets/Energy/bg.jpg'
import img1 from '../../assets/home-g.jpg'

import { Link, useNavigate } from "react-router-dom";
import MoewrFooter from "../../pages/footer";


export default function WaterProject() {
   const [Data, setData] = useState([])
     
   const handleReadData = () =>{

     axios.get("https://moewr-backend.onrender.com/readProjectWater/waterProject").then((res) =>{
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
<div
              className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
              style={{ backgroundImage: `url(${img1})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
            
              {/* Content */}
              <div className="relative flex items-center justify-center h-full">
                <h1 className="text-white text-3xl text-center font-bold">
                  WATER PROJECTS
                </h1>
              </div>
 </div>


<section id="projects" className="bg-white/70 border-y ">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">WATER PROJECTS</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Project card */}
          
{
    Data.map((item)=>{ 
    
           
         return  <article className="rounded-xl border bg-white p-6 shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="zoom-in" data-aos-delay="150">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>

              <div className="flex justify-between ">
              <Link
  to={`/SingalProjectsWater/${item._id}`}
  className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
>
  Read for More
</Link>
<button className="mt-4 inline-block px-3 py-2 rounded-md text-black border border-black bg-white hover:bg-[#0A7FB8">{item.projectSatge}</button>
              </div>

            </article>
            
    })

  }
     </div>
        </div>
      </section>
      </div>

      <MoewrFooter />
      </>
  )
  }