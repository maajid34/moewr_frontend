
// import { useEffect, useState } from 'react';
// import img1 from '../../assets/home-g.jpg'
// // import img2 from '../../assets/Energy/energy.jpg'
// import MoewrFooter from '../../pages/footer';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function Energy() {
//    const [Data, setdata] = useState([])
//    const handleReadData = () =>{

//      axios.get("https://moewr-backend.onrender.com/readProjectEnergy/EnergyProject").then((res) =>{
//       setdata(res.data)
      
      
             
//     }).catch((err) => {
//     console.error("Error fetching medicine data:", err);
//   });

// }
//  useEffect(() =>{
//     handleReadData()
//   },[])
//   return (
//     <>
   
//     <div className="[--brand:#2FA8E1] top-[100px] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
//         <div
//               className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
//               style={{ backgroundImage: `url(${img1})` }}
//             >
//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
            
//               {/* Content */}
//               <div className="relative flex items-center justify-center h-full">
//                 <h1 className="text-white text-3xl text-center font-bold">
//                    ENERGY DEPARTMENT
//                 </h1>
//               </div>
//             </div>
//       <div id="top" className="sr-only">Top</div>

//       {/* ===== 1) BACKGROUND SECTION ===== */}
//       <section id="background" className="relative">
//         <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
//           <div className="grid gap-10 md:grid-cols-2 items-center">
//             {/* Left: Image */}
//             <figure className="relative">
//               <img
//                 src="https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/9d498117-3179-4718-81f4-f1c7fe8e892b/Pillar%201%20Energy%20Transition%20wind%20energy%20solar%20panels%20dreamstime.png?auto=compress%2Cformat&w=1440"
//                 alt="Solar mini-plant site"
//                 className="w-full h-72 md:h-[26rem] lg:h-[30rem] object-cover rounded-2xl shadow-md ring-1 ring-slate-200"
//               />
//               {/* subtle brand accent */}
//               <span className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-[var(--brand)] opacity-70 blur-xl pointer-events-none" />
//             </figure>

//             {/* Right: Content */}
//             <div className="max-w-2xl">
//               <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
//                 Background
//               </h2>
//               <span className="mt-3 block w-16 h-1 rounded-full bg-[var(--brand)]" />

//               <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
//                 <p>
//                 Jubaland's energy sector is characterized by a mix of traditional and modern energy sources, with a growing emphasis on renewable energy. Most of the population relies on diesel generators and biomass for electricity and cooking, while efforts are underway to expand access to cleaner and more sustainable energy solutions. The sector faces challenges such as inadequate infrastructure, high electricity costs, and limited grid connectivity. However, with abundant solar and wind resources, Jubaland has significant potential for renewable energy development. The government is actively working to attract investments in renewable energy projects, improve electrification rates, and enhance energy efficiency across the state.
// The Energy Department within the Ministry of Energy and Water Resources plays a vital role in shaping Jubaland’s energy future. It is responsible for developing policies, regulating the energy sector, overseeing infrastructure projects, and ensuring the sustainable and reliable supply of electricity. The department includes key personnel such as the Director, Officers, Electrical Engineers, Renewable Energy Specialists, Planning Teams, Technicians, and an Electromechanical Team. These professionals collaborate to drive energy security, enhance access to electricity, and promote renewable energy adoption.

//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//   {/* ===== 6) VISION / MISSION / OBJECTIVES ===== */}
//       <section id="vmo" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//         <div className="grid gap-10 lg:grid-cols-2 m-10">
//           <div className="bg-white border rounded-2xl p-8  shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="fade-right">
//             <div className="text-5xl">👁️</div>
//             <h3 className="mt-3 text-2xl font-bold">Vision</h3>
//             <p className="mt-2 text-slate-700 text-sm">
//              To become a leading institution in energy sector transformation, driving economic growth and social development through sustainable,
//               innovative, and inclusive energy solutions in Jubaland State
//             </p>
//           </div>
//           <div className="bg-white border rounded-2xl p-8  shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="fade-up">
//             <div className="text-5xl">🎯</div>
//             <h3 className="mt-3 text-2xl font-bold">Mission</h3>
//             <p className="mt-2 text-slate-700 text-sm">
              
// To ensure reliable, affordable, and sustainable energy access for all 
// citizens of Jubaland by developing a resilient energy infrastructure, promoting investment in renewable energy, and implementing policies that support economic growth and environmental sustainability.

//             </p>
//           </div>
//           <div className="bg-white border rounded-2xl p-8  shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="fade-left">
//             <div className="text-5xl">📈</div>
//             <h3 className="mt-3 text-2xl font-bold">Objectives</h3>
//             <p className="mt-2 text-slate-700 text-sm">
//              The Energy Department's primary objective is to expand energy access, ensure sustainability, and promote renewable energy adoption through policy development, regulatory oversight, and strategic investments. The department seeks to modernize the energy sector, support private sector engagement, and facilitate the transition
//               to clean energy sources to meet the growing demands of citizens, businesses, and industries
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* ===== 2) SERVICES / STATS ===== */}
//       <section id="services" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//         <h2 className="text-3xl font-bold tracking-tight text-center m-5" data-aos="fade-up">Services</h2>
      
//         <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 m-10">
//           {/* card */}
//           <div className="rounded-xl bg-white p-6 border  shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="zoom-in">
//             <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🧰</div>
//             <h3 className="mt-4 text-xl font-semibold">25,000 People</h3>
//             <p className="mt-1 text-slate-600 text-sm">Hygiene kits distributed to enhance well-being and quality of life.</p>
//           </div>
//           <div className="rounded-xl bg-white p-6  shadow-md box-shadow-slate-800 border-[var(--brand-dark)] border" data-aos="zoom-in" data-aos-delay="50">
//             <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🕳️</div>
//             <h3 className="mt-4 text-xl font-semibold">92 Boreholes</h3>
//             <p className="mt-1 text-slate-600 text-sm">Constructed/rehabilitated in Lower Juba &amp; Gedo.</p>
//           </div>
//           <div className="rounded-xl bg-white p-6  shadow-md box-shadow-slate-800 border-[var(--brand-dark)] border" data-aos="zoom-in" data-aos-delay="100">
//             <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🪜</div>
//             <h3 className="mt-4 text-xl font-semibold">251 Shallow Wells</h3>
//             <p className="mt-1 text-slate-600 text-sm">Improving household access to reliable water.</p>
//           </div>
//           <div className="rounded-xl bg-white p-6  shadow-md box-shadow-slate-800 border-[var(--brand-dark)] border" data-aos="zoom-in" data-aos-delay="150">
//             <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🚰</div>
//             <h3 className="mt-4 text-xl font-semibold">226 Water Kiosks</h3>
//             <p className="mt-1 text-slate-600 text-sm">Installed for IDPs and vulnerable settlements.</p>
//           </div>
//         </div>
//       </section>
//  {/* ===== 7) DEPARTMENT MANDATES ===== */}
//       <section id="mandates" className="bg-white/70 border-y">
//   <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//     <h2
//       className="text-3xl font-bold tracking-tight text-center m-5"
//       data-aos="fade-up"
//     >
//       Department Mandates
//     </h2>

//     <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 m-10">
//       {/* 1. Policy & Strategy */}
//       <div
//         className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]"
//         data-aos="zoom-in"
//       >
//         <h3 className="font-semibold">Policy &amp; Strategy</h3>
//         <p className="text-sm mt-2 text-slate-600">
//           Developing and implementing energy policies and strategies to ensure
//           energy security and sustainability.
//         </p>
//       </div>

//       {/* 2. Regulation & Oversight */}
//       <div
//         className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]"
//         data-aos="zoom-in"
//         data-aos-delay="50"
//       >
//         <h3 className="font-semibold">Regulation &amp; Oversight</h3>
//         <p className="text-sm mt-2 text-slate-600">
//           Regulating and overseeing energy production, transmission,
//           distribution, and consumption.
//         </p>
//       </div>

//       {/* 3. Renewables & Efficiency */}
//       <div
//         className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]"
//         data-aos="zoom-in"
//         data-aos-delay="100"
//       >
//         <h3 className="font-semibold">Renewables &amp; Efficiency</h3>
//         <p className="text-sm mt-2 text-slate-600">
//           Promoting renewable energy and energy efficiency practices.
//         </p>
//       </div>

//       {/* 4. Investment Facilitation */}
//       <div
//         className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]"
//         data-aos="zoom-in"
//         data-aos-delay="150"
//       >
//         <h3 className="font-semibold">Investment Facilitation</h3>
//         <p className="text-sm mt-2 text-slate-600">
//           Facilitating investment in energy infrastructure and projects.
//         </p>
//       </div>

//       {/* 5. Cooperation */}
//       <div
//         className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]"
//         data-aos="zoom-in"
//         data-aos-delay="200"
//       >
//         <h3 className="font-semibold">Cooperation</h3>
//         <p className="text-sm mt-2 text-slate-600">
//           Collaborating with regional and international bodies on
//           energy-related matters.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>


// {/* ===== 8) ENERGY DEMAND & SUPPLY ===== */}
// <section id="energy-demand" className="bg-slate-50 border-y">
//   <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//     <h2
//       className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8"
//       data-aos="fade-up"
//     >
//       Energy Demand and Supply
//     </h2>
//     <div className="mx-auto mt-3 mb-12 h-1 w-24 bg-[var(--brand)] rounded"></div>

//     <div className="prose max-w-4xl mx-auto text-slate-700 leading-relaxed" data-aos="fade-up">
//       <p>
//         Energy demand in Jubaland has been steadily increasing due to population
//         growth, urbanization, and economic activities such as agriculture,
//         fisheries, and small industries. However, the supply remains
//         insufficient, unreliable, and expensive, with electricity tariffs among
//         the highest in the region due to reliance on costly diesel fuel.
//       </p>

//       <h3 className="mt-8 text-xl font-bold text-[var(--brand-dark)]">Key Energy Demand Sectors</h3>
//       <ul className="list-disc pl-6 mt-3 space-y-2">
//         <li>
//           <strong>Households</strong> – Primarily rely on biomass and diesel
//           generators for lighting and cooking.
//         </li>
//         <li>
//           <strong>Commercial and Industrial</strong> – Businesses, including
//           small manufacturing, fishing, and retail, require stable electricity
//           supply but face high costs and frequent outages.
//         </li>
//         <li>
//           <strong>Public Services</strong> – Health centers, schools, and
//           government institutions struggle with unreliable electricity, limiting
//           service delivery.
//         </li>
//       </ul>

//       <p className="mt-6">
//         Despite growing demand, the current installed power generation capacity
//         is inadequate, and grid extension remains slow due to financing and
//         technical constraints. The renewable energy sector, particularly solar
//         power, is gaining traction, with small-scale solar home systems and
//         mini-grids being introduced in some areas.
//       </p>
//     </div>
//   </div>
// </section>

// {/* ===== 9) JUBALAND POWER DEMAND ===== */}
// <section id="power-demand" className="bg-white border-y">
//   <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//     <h2
//       className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8"
//       data-aos="fade-up"
//     >
//       Jubaland Power Demand
//     </h2>
//     <div className="mx-auto mt-3 mb-12 h-1 w-24 bg-[var(--brand)] rounded"></div>

//     {/* Table */}
//     <div className="overflow-x-auto" data-aos="fade-up">
//       <table className="min-w-full border border-slate-200 text-sm text-left">
//         <thead className="bg-slate-100 text-[var(--ink)]">
//           <tr>
//             <th className="px-4 py-2 border">S/N</th>
//             <th className="px-4 py-2 border">Description</th>
//             <th className="px-4 py-2 border">Quantity</th>
//             <th className="px-4 py-2 border">Load (kW)</th>
//             <th className="px-4 py-2 border">Total Load (kW)</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y">
//           <tr>
//             <td className="px-4 py-2">1</td>
//             <td className="px-4 py-2">Residential Housing</td>
//             <td className="px-4 py-2">400,000</td>
//             <td className="px-4 py-2">1.5</td>
//             <td className="px-4 py-2">600,000</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">2</td>
//             <td className="px-4 py-2">Kismaayo Airport</td>
//             <td className="px-4 py-2">1</td>
//             <td className="px-4 py-2">1,000</td>
//             <td className="px-4 py-2">1,000</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">3</td>
//             <td className="px-4 py-2">Other Local Airports</td>
//             <td className="px-4 py-2">6</td>
//             <td className="px-4 py-2">50</td>
//             <td className="px-4 py-2">300</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">4</td>
//             <td className="px-4 py-2">Kismaayo Sea Port</td>
//             <td className="px-4 py-2">1</td>
//             <td className="px-4 py-2">1,500</td>
//             <td className="px-4 py-2">1,500</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">5</td>
//             <td className="px-4 py-2">Schools</td>
//             <td className="px-4 py-2">150</td>
//             <td className="px-4 py-2">15</td>
//             <td className="px-4 py-2">2,250</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">6</td>
//             <td className="px-4 py-2">Kismaayo Hospital</td>
//             <td className="px-4 py-2">1</td>
//             <td className="px-4 py-2">500</td>
//             <td className="px-4 py-2">500</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">7</td>
//             <td className="px-4 py-2">Other District Hospitals</td>
//             <td className="px-4 py-2">9</td>
//             <td className="px-4 py-2">50</td>
//             <td className="px-4 py-2">450</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">8</td>
//             <td className="px-4 py-2">Medical Centers</td>
//             <td className="px-4 py-2">170</td>
//             <td className="px-4 py-2">20</td>
//             <td className="px-4 py-2">3,400</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">9</td>
//             <td className="px-4 py-2">Industry</td>
//             <td className="px-4 py-2">1</td>
//             <td className="px-4 py-2">1,000</td>
//             <td className="px-4 py-2">1,000</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">10</td>
//             <td className="px-4 py-2">Agriculture</td>
//             <td className="px-4 py-2">5</td>
//             <td className="px-4 py-2">1,500</td>
//             <td className="px-4 py-2">7,500</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">11</td>
//             <td className="px-4 py-2">Ministries</td>
//             <td className="px-4 py-2">27</td>
//             <td className="px-4 py-2">250</td>
//             <td className="px-4 py-2">6,750</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">12</td>
//             <td className="px-4 py-2">Water Treatment Plant</td>
//             <td className="px-4 py-2">2</td>
//             <td className="px-4 py-2">1,000</td>
//             <td className="px-4 py-2">2,000</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2">13</td>
//             <td className="px-4 py-2">Hotels</td>
//             <td className="px-4 py-2">20</td>
//             <td className="px-4 py-2">300</td>
//             <td className="px-4 py-2">6,000</td>
//           </tr>
//         </tbody>
//         <tfoot className="bg-slate-100 font-semibold">
//           <tr>
//             <td className="px-4 py-2 text-right" colSpan="4">
//               Total
//             </td>
//             <td className="px-4 py-2">632,650</td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>

//     {/* Rationale */}
//     <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up">
//       <h3 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">
//         Rationale for the Reform of Energy Sector
//       </h3>
//       <ul className="list-decimal pl-6 space-y-2 text-slate-700">
//         <li>
//           Expanding access to affordable and reliable energy through investments
//           in renewable energy and grid development.
//         </li>
//         <li>
//           Reducing dependence on costly diesel generators by promoting solar,
//           wind, and hybrid energy solutions.
//         </li>
//         <li>
//           Enhancing regulatory and policy frameworks to attract private sector
//           investment and improve sector governance.
//         </li>
//         <li>
//           Developing human capital by training professionals and technicians in
//           energy management and renewable energy technologies.
//         </li>
//         <li>
//           Strengthening public-private partnerships (PPPs) to leverage resources,
//           expertise, and funding for large-scale energy projects.
//         </li>
//         <li>
//           Improving rural electrification by deploying off-grid solar solutions
//           and mini-grids in underserved areas.
//         </li>
//         <li>
//           Increasing energy efficiency and environmental sustainability by
//           promoting clean cooking technologies and reducing reliance on biomass.
//         </li>
//       </ul>
//     </div>
//   </div>
// </section>

// {/* ===== 10) INSTITUTIONAL STRENGTHENING FRAMEWORK ===== */}
// <section id="institutional-framework" className="bg-slate-50 border-y">
//   <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//     <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
//       Institutional Strengthening Framework
//     </h2>
//     <div className="mx-auto mt-3 mb-10 h-1 w-24 bg-[var(--brand)] rounded"></div>

//     <div className="grid gap-8 lg:grid-cols-2">
//       {/* LEFT CARD — CURRENT FRAMEWORK */}
//       <article
//         className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm"
//         data-aos="fade-right"
//       >
//         <h3 className="text-2xl font-bold text-[var(--ink)]">
//           Current Institutional Strengthening Framework
//         </h3>
//         <p className="mt-1 text-sm text-slate-500">
//           Roles as presently practiced by the Ministry and ESPs.
//         </p>

//         <div className="mt-6 grid gap-6 sm:grid-cols-2">
//           {/* Ministry */}
//           <div>
//             <h4 className="font-semibold text-[var(--brand-dark)]">
//               Role of the Ministry of Energy &amp; Water Resources – Jubaland
//             </h4>
//             <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
//               <li>Regulation, tariffs &amp; guidelines</li>
//               <li>Policy formulation</li>
//               <li>Energy tribunal</li>
//               <li>Resources mobilization / financing</li>
//               <li>Oversight and coordination</li>
//               <li>Strategic development</li>
//               <li>Infrastructure development and implementation</li>
//               <li>Asset holding and management</li>
//               <li>Energy quality monitoring</li>
//               <li>Permit and licensing</li>
//               <li>
//                 Monitoring of concession agreements with ESPs and Energy Partners
//               </li>
//             </ul>
//           </div>

//           {/* ESPs */}
//           <div>
//             <h4 className="font-semibold text-[var(--brand-dark)]">
//               Role of the Electricity Service Providers (ESPs)
//             </h4>
//             <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
//               <li>Electricity generation</li>
//               <li>Service delivery – distribution of electricity to households</li>
//               <li>Development &amp; management of distribution systems</li>
//               <li>Household last mile connections</li>
//               <li>Electricity meters</li>
//               <li>Custom billing</li>
//             </ul>
//           </div>
//         </div>
//       </article>

//       {/* RIGHT CARD — FUTURE PLANNED FRAMEWORK */}
//       <article
//         className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm"
//         data-aos="fade-left"
//       >
//         <h3 className="text-2xl font-bold text-[var(--ink)]">
//           Future Planned Institutional Strengthening Framework
//         </h3>
//         <p className="mt-1 text-sm text-slate-500">
//           Target structure with clearly defined roles for the Ministry, JEDA, and ESPs.
//         </p>

//         <div className="mt-6 grid gap-6 md:grid-cols-3">
//           {/* Ministry */}
//           <div>
//             <h4 className="font-semibold text-[var(--brand-dark)]">
//               Role of the Ministry of Energy &amp; Water Resources – Jubaland
//             </h4>
//             <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
//               <li>Regulation, tariffs &amp; guidelines</li>
//               <li>Policy formulation</li>
//               <li>Energy tribunal</li>
//               <li>Resources mobilization / financing</li>
//               <li>Oversight and coordination</li>
//               <li>Strategic development</li>
//             </ul>
//           </div>

//           {/* JEDA */}
//           <div>
//             <h4 className="font-semibold text-[var(--brand-dark)]">
//               Role of the Jubaland Energy Development Agency (JEDA)
//             </h4>
//             <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
//               <li>Infrastructure development and implementation</li>
//               <li>Asset holding and management</li>
//               <li>Energy quality monitoring</li>
//               <li>Electricity generation</li>
//               <li>Permit and licensing</li>
//               <li>
//                 Monitoring of concession agreements with ESPs and Energy Partners
//               </li>
//             </ul>
//           </div>

//           {/* ESPs */}
//           <div>
//             <h4 className="font-semibold text-[var(--brand-dark)]">
//               Role of the Electricity Service Providers (ESPs)
//             </h4>
//             <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
//               <li>Service delivery – distribution of electricity to households</li>
//               <li>Development &amp; management of distribution systems</li>
//               <li>Household last mile connections</li>
//               <li>Electricity meters</li>
//               <li>Custom billing</li>
//             </ul>
//           </div>
//         </div>
//       </article>
//     </div>
//   </div>
// </section>
// {/* ===== 11) ACHIEVEMENTS SUMMARY ===== */}
// <section id="achievements" className="bg-white py-16 lg:py-20 border-y">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6">
//     <header className="text-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">
//         Achievements Summary
//       </h2>
//       <div className="mx-auto mt-3 h-1 w-24 bg-[var(--brand)] rounded"></div>
//     </header>

//     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//       {/* 1. Public Streetlights */}
//       <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-12 h-12 mx-auto text-[var(--brand-dark)]"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         >
//           <path d="M12 3v6m0 0l3-3m-3 3l-3-3M4 21h16M7 21a5 5 0 0 1 10 0" />
//         </svg>
//         <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">
//           2,000 Public Streetlights
//         </h3>
//         <p className="mt-2 text-slate-600">
//           With support from partners we have installed 2,000 Solar Streetlights
//           in 9 districts of Jubaland State Somalia.
//         </p>
//       </div>

//       {/* 2. PV & Storage */}
//       <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-12 h-12 mx-auto text-[var(--brand-dark)]"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         >
//           <path d="M3 13h18M3 7h18M5 17h14l-2 4H7l-2-4z" />
//         </svg>
//         <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">
//           12MW of PV &amp; 13MW Storage
//         </h3>
//         <p className="mt-2 text-slate-600">
//           We have added 12MW of Solar Power and 13.4MW of Battery Storage to the
//           existing power of Jubaland.
//         </p>
//       </div>

//       {/* 3. 11 Districts */}
//       <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-12 h-12 mx-auto text-[var(--brand-dark)]"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         >
//           <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4v4l3 3" />
//         </svg>
//         <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">11 Districts</h3>
//         <p className="mt-2 text-slate-600">
//           Enhancing energy infrastructure to boost development. We served 11
//           districts in Lower Juba &amp; Gedo of Jubaland State – Somalia.
//         </p>
//       </div>

//       {/* 4. Public Institutions */}
//       <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-12 h-12 mx-auto text-[var(--brand-dark)]"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         >
//           <path d="M4 21v-8l8-4 8 4v8M4 10l8-4 8 4" />
//         </svg>
//         <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">
//           79 Public Institutions
//         </h3>
//         <p className="mt-2 text-slate-600">
//           We electrified 79 Public Institutions including 42 Education
//           Facilities, 34 Health Facilities, and 5 other institutions across
//           Jubaland.
//         </p>
//       </div>
//     </div>
//   </div>
// </section>

   

//       {/* ===== 5) ONGOING / PIPELINE PROJECTS ===== */}


//       <section id="projects" className="bg-white/70 border-y ">
//               <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//                 <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">ENERGY PROJECTS</h2>
//                 <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
//                   {/* Project card */}
                
//       {
//           Data.map((item)=>{ 
          
                 
//                return  <article className="rounded-xl border bg-white p-6 shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="zoom-in" data-aos-delay="150">
//                     <h3 className="font-bold text-lg">{item.title}</h3>
                         
                    
//                     <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
      
//       <div className="flex justify-between p-5">
//                   <Link to={`/SingalProjectsEnergy/${item._id}`}
//         className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
//       >
//         Read for More
//       </Link>
//       <button className="mt-4 inline-block px-3 py-2 rounded-md text-black border border-black bg-white hover:bg-[#0A7FB8">{item.projectSatge}</button>
//       </div>
        
      
//                   </article>
                  
//           })
      
//         }
//            </div>
//               </div>
//             </section>

    

//      {/* ===== REGULATIONS & POLICIES ===== */}
// <section id="regulations" className="bg-slate-50 border-y">
//   <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//     <h2
//       className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8"
//       data-aos="fade-up"
//     >
//       Regulations and Policies
//     </h2>
//     <div className="mx-auto mt-3 mb-12 h-1 w-24 bg-[var(--brand)] rounded"></div>

//     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//       {/* National Energy Act */}
//       <article
//         className="rounded-xl border bg-white p-6 text-center shadow-md hover:shadow-lg transition"
//         data-aos="zoom-in"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-12 h-12 mx-auto text-[var(--brand-dark)]"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         >
//           <path d="M12 6V4m0 16v-2m8-6h2M2 12h2m13.657-7.657-1.414 1.414M6.343 17.657l-1.414 1.414M18.364 18.364l-1.414-1.414M7.757 7.757 6.343 6.343" />
//         </svg>
//         <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">
//           National Energy Act
//         </h3>
//       </article>

//       {/* Electricity Licensing */}
//       <article
//         className="rounded-xl border bg-white p-6 text-center shadow-md hover:shadow-lg transition"
//         data-aos="zoom-in"
//         data-aos-delay="100"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-12 h-12 mx-auto text-[var(--brand-dark)]"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         >
//           <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 14.93A6.93 6.93 0 1 1 18.93 10 6.938 6.938 0 0 1 12 16.93Zm.75-9.18V7a.75.75 0 0 0-1.5 0v.75H10a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.25H14a.75.75 0 0 0 0-1.5h-1.25Z" />
//         </svg>
//         <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">
//           Electricity Licensing Regulation — 2023
//         </h3>
//       </article>

//       {/* Electricity Tariffs */}
//       <article
//         className="rounded-xl border bg-white p-6 text-center shadow-md hover:shadow-lg transition"
//         data-aos="zoom-in"
//         data-aos-delay="200"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-12 h-12 mx-auto text-[var(--brand-dark)]"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         >
//           <path d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12c2.21 0 4-1.343 4-3s-1.79-3-4-3-4 1.343-4 3 1.79 3 4 3z" />
//         </svg>
//         <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">
//           Electricity Tariffs Regulation — 2023
//         </h3>
//       </article>
//     </div>
//   </div>
// </section>



 
      

//       {/* ===== 10) ACTIVITIES GALLERY ===== */}
//       {/* <section id="gallery" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
//         <div className="flex items-center justify-between">
//           <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Activities Photos</h2>
//           <a href="#top" className="hidden md:inline-flex px-3 py-2 rounded-md text-white bg-[var(--brand-dark)]" data-aos="fade-up">
//             Back to top
//           </a>
//         </div>

//         <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {[
//             "https://images.unsplash.com/photo-1597007241171-237e37f2f2a8?q=80&w=1600&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1567433918013-56066b03b8d1?q=80&w=1600&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1558985040-ed4d5029d997?q=80&w=1600&auto=format&fit=crop",
//             "https://images.unsplash.com/photo-1581094374553-f6a7d4b6e8ea?q=80&w=1600&auto=format&fit=crop",
//           ].map((src, i) => (
//             <img
//               key={i}
//               data-aos="zoom-in"
//               className="w-full h-56 object-cover rounded-xl ring-1 ring-slate-200"
//               src={src}
//               alt={`Activity ${i + 1}`}
//               loading="lazy"
//             />
//           ))}
//         </div>
//       </section> */}
//     </div>

//     <MoewrFooter />
//      </>
//   );
// }



// latest
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../../assets/home-g.jpg';
import MoewrFooter from '../../pages/footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Energy() {
  const { t } = useTranslation('energy');

  const [Data, setdata] = useState([]);
  const handleReadData = () => {
    axios
      .get('https://moewr-backend.onrender.com/readProjectEnergy/EnergyProject')
      .then((res) => setdata(res.data))
      .catch((err) => console.error('Error fetching energy data:', err));
  };

  useEffect(() => {
    handleReadData();
  }, []);

  return (
    <>
      <div className="[--brand:#2FA8E1] top-[100px] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
        <div
          className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-white text-3xl text-center font-bold">
              {t('hero.title')}
            </h1>
          </div>
        </div>

        <div id="top" className="sr-only">{t('hero.top')}</div>

        {/* ===== 1) BACKGROUND ===== */}
        <section id="background" className="relative">
          <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <figure className="relative">
                <img
                  src="https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/9d498117-3179-4718-81f4-f1c7fe8e892b/Pillar%201%20Energy%20Transition%20wind%20energy%20solar%20panels%20dreamstime.png?auto=compress%2Cformat&w=1440"
                  alt={t('background.alt')}
                  className="w-full h-72 md:h-[26rem] lg:h-[30rem] object-cover rounded-2xl shadow-md ring-1 ring-slate-200"
                />
                <span className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-[var(--brand)] opacity-70 blur-xl pointer-events-none" />
              </figure>

              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                  {t('background.title')}
                </h2>
                <span className="mt-3 block w-16 h-1 rounded-full bg-[var(--brand)]" />
                <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                  <p>{t('background.p1')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 6) VISION / MISSION / OBJECTIVES ===== */}
        <section id="vmo" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 m-10">
            <div className="bg-white border rounded-2xl p-8 shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="fade-right">
              <div className="text-5xl">👁️</div>
              <h3 className="mt-3 text-2xl font-bold">{t('vmo.vision.title')}</h3>
              <p className="mt-2 text-slate-700 text-sm">{t('vmo.vision.text')}</p>
            </div>
            <div className="bg-white border rounded-2xl p-8 shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="fade-up">
              <div className="text-5xl">🎯</div>
              <h3 className="mt-3 text-2xl font-bold">{t('vmo.mission.title')}</h3>
              <p className="mt-2 text-slate-700 text-sm">{t('vmo.mission.text')}</p>
            </div>
            <div className="bg-white border rounded-2xl p-8 shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="fade-left">
              <div className="text-5xl">📈</div>
              <h3 className="mt-3 text-2xl font-bold">{t('vmo.objectives.title')}</h3>
              <p className="mt-2 text-slate-700 text-sm">{t('vmo.objectives.text')}</p>
            </div>
          </div>
        </section>

        {/* ===== 2) SERVICES =====
      <section id="services" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-center m-5" data-aos="fade-up">
            {t('services.title')}
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 m-10">
            <div className="rounded-xl bg-white p-6 border shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="zoom-in">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🧰</div>
              <h3 className="mt-4 text-xl font-semibold">{t('services.cards.people.title')}</h3>
              <p className="mt-1 text-slate-600 text-sm">{t('services.cards.people.text')}</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md box-shadow-slate-800 border-[var(--brand-dark)] border" data-aos="zoom-in" data-aos-delay="50">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🕳️</div>
              <h3 className="mt-4 text-xl font-semibold">{t('services.cards.boreholes.title')}</h3>
              <p className="mt-1 text-slate-600 text-sm">{t('services.cards.boreholes.text')}</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md box-shadow-slate-800 border-[var(--brand-dark)] border" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🪜</div>
              <h3 className="mt-4 text-xl font-semibold">{t('services.cards.shallowWells.title')}</h3>
              <p className="mt-1 text-slate-600 text-sm">{t('services.cards.shallowWells.text')}</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md box-shadow-slate-800 border-[var(--brand-dark)] border" data-aos="zoom-in" data-aos-delay="150">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🚰</div>
              <h3 className="mt-4 text-xl font-semibold">{t('services.cards.kiosks.title')}</h3>
              <p className="mt-1 text-slate-600 text-sm">{t('services.cards.kiosks.text')}</p>
            </div>
          </div>
        </section> */}

        {/* ===== 7) DEPARTMENT MANDATES ===== */}
        <section id="mandates" className="bg-white/70 border-y">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-center m-5" data-aos="fade-up">
              {t('mandates.title')}
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 m-10">
              <div className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]" data-aos="zoom-in">
                <h3 className="font-semibold">{t('mandates.items.policy.title')}</h3>
                <p className="text-sm mt-2 text-slate-600">{t('mandates.items.policy.text')}</p>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]" data-aos="zoom-in" data-aos-delay="50">
                <h3 className="font-semibold">{t('mandates.items.regulation.title')}</h3>
                <p className="text-sm mt-2 text-slate-600">{t('mandates.items.regulation.text')}</p>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]" data-aos="zoom-in" data-aos-delay="100">
                <h3 className="font-semibold">{t('mandates.items.renewables.title')}</h3>
                <p className="text-sm mt-2 text-slate-600">{t('mandates.items.renewables.text')}</p>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]" data-aos="zoom-in" data-aos-delay="150">
                <h3 className="font-semibold">{t('mandates.items.investment.title')}</h3>
                <p className="text-sm mt-2 text-slate-600">{t('mandates.items.investment.text')}</p>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-md border-[var(--brand-dark)]" data-aos="zoom-in" data-aos-delay="200">
                <h3 className="font-semibold">{t('mandates.items.cooperation.title')}</h3>
                <p className="text-sm mt-2 text-slate-600">{t('mandates.items.cooperation.text')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 8) ENERGY DEMAND & SUPPLY ===== */}
        <section id="energy-demand" className="bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8" data-aos="fade-up">
              {t('demand.title')}
            </h2>
            <div className="mx-auto mt-3 mb-12 h-1 w-24 bg-[var(--brand)] rounded"></div>

            <div className="prose max-w-4xl mx-auto text-slate-700 leading-relaxed" data-aos="fade-up">
              <p>{t('demand.p1')}</p>

              <h3 className="mt-8 text-xl font-bold text-[var(--brand-dark)]">{t('demand.sectorsTitle')}</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>{t('demand.sectors.households')}</li>
                <li>{t('demand.sectors.commercial')}</li>
                <li>{t('demand.sectors.public')}</li>
              </ul>

              <p className="mt-6">{t('demand.p2')}</p>
            </div>
          </div>
        </section>

        {/* ===== 9) JUBALAND POWER DEMAND ===== */}
        <section id="power-demand" className="bg-white border-y">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8" data-aos="fade-up">
              {t('power.title')}
            </h2>
            <div className="mx-auto mt-3 mb-12 h-1 w-24 bg-[var(--brand)] rounded"></div>

            <div className="overflow-x-auto" data-aos="fade-up">
              <table className="min-w-full border border-slate-200 text-sm text-left">
                <thead className="bg-slate-100 text-[var(--ink)]">
                  <tr>
                    <th className="px-4 py-2 border">{t('power.table.sn')}</th>
                    <th className="px-4 py-2 border">{t('power.table.desc')}</th>
                    <th className="px-4 py-2 border">{t('power.table.qty')}</th>
                    <th className="px-4 py-2 border">{t('power.table.load')}</th>
                    <th className="px-4 py-2 border">{t('power.table.total')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr><td className="px-4 py-2">1</td><td className="px-4 py-2">{t('power.rows.residential')}</td><td className="px-4 py-2">400,000</td><td className="px-4 py-2">1.5</td><td className="px-4 py-2">600,000</td></tr>
                  <tr><td className="px-4 py-2">2</td><td className="px-4 py-2">{t('power.rows.kismayoAirport')}</td><td className="px-4 py-2">1</td><td className="px-4 py-2">1,000</td><td className="px-4 py-2">1,000</td></tr>
                  <tr><td className="px-4 py-2">3</td><td className="px-4 py-2">{t('power.rows.otherAirports')}</td><td className="px-4 py-2">6</td><td className="px-4 py-2">50</td><td className="px-4 py-2">300</td></tr>
                  <tr><td className="px-4 py-2">4</td><td className="px-4 py-2">{t('power.rows.seaPort')}</td><td className="px-4 py-2">1</td><td className="px-4 py-2">1,500</td><td className="px-4 py-2">1,500</td></tr>
                  <tr><td className="px-4 py-2">5</td><td className="px-4 py-2">{t('power.rows.schools')}</td><td className="px-4 py-2">150</td><td className="px-4 py-2">15</td><td className="px-4 py-2">2,250</td></tr>
                  <tr><td className="px-4 py-2">6</td><td className="px-4 py-2">{t('power.rows.kismayoHospital')}</td><td className="px-4 py-2">1</td><td className="px-4 py-2">500</td><td className="px-4 py-2">500</td></tr>
                  <tr><td className="px-4 py-2">7</td><td className="px-4 py-2">{t('power.rows.otherHospitals')}</td><td className="px-4 py-2">9</td><td className="px-4 py-2">50</td><td className="px-4 py-2">450</td></tr>
                  <tr><td className="px-4 py-2">8</td><td className="px-4 py-2">{t('power.rows.medicalCenters')}</td><td className="px-4 py-2">170</td><td className="px-4 py-2">20</td><td className="px-4 py-2">3,400</td></tr>
                  <tr><td className="px-4 py-2">9</td><td className="px-4 py-2">{t('power.rows.industry')}</td><td className="px-4 py-2">1</td><td className="px-4 py-2">1,000</td><td className="px-4 py-2">1,000</td></tr>
                  <tr><td className="px-4 py-2">10</td><td className="px-4 py-2">{t('power.rows.agriculture')}</td><td className="px-4 py-2">5</td><td className="px-4 py-2">1,500</td><td className="px-4 py-2">7,500</td></tr>
                  <tr><td className="px-4 py-2">11</td><td className="px-4 py-2">{t('power.rows.ministries')}</td><td className="px-4 py-2">27</td><td className="px-4 py-2">250</td><td className="px-4 py-2">6,750</td></tr>
                  <tr><td className="px-4 py-2">12</td><td className="px-4 py-2">{t('power.rows.treatment')}</td><td className="px-4 py-2">2</td><td className="px-4 py-2">1,000</td><td className="px-4 py-2">2,000</td></tr>
                  <tr><td className="px-4 py-2">13</td><td className="px-4 py-2">{t('power.rows.hotels')}</td><td className="px-4 py-2">20</td><td className="px-4 py-2">300</td><td className="px-4 py-2">6,000</td></tr>
                </tbody>
                <tfoot className="bg-slate-100 font-semibold">
                  <tr>
                    <td className="px-4 py-2 text-right" colSpan="4">
                      {t('power.table.sum')}
                    </td>
                    <td className="px-4 py-2">632,650</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-16 max-w-4xl mx-auto" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">
                {t('power.rationale.title')}
              </h3>
              <ul className="list-decimal pl-6 space-y-2 text-slate-700">
                <li>{t('power.rationale.items.0')}</li>
                <li>{t('power.rationale.items.1')}</li>
                <li>{t('power.rationale.items.2')}</li>
                <li>{t('power.rationale.items.3')}</li>
                <li>{t('power.rationale.items.4')}</li>
                <li>{t('power.rationale.items.5')}</li>
                <li>{t('power.rationale.items.6')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== 10) INSTITUTIONAL STRENGTHENING FRAMEWORK ===== */}
        <section id="institutional-framework" className="bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
              {t('framework.title')}
            </h2>
            <div className="mx-auto mt-3 mb-10 h-1 w-24 bg-[var(--brand)] rounded"></div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* LEFT — CURRENT */}
              <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm" data-aos="fade-right">
                <h3 className="text-2xl font-bold text-[var(--ink)]">
                  {t('framework.current.title')}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{t('framework.current.note')}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-[var(--brand-dark)]">
                      {t('framework.current.ministry.title')}
                    </h4>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                      {t('framework.current.ministry.items', { returnObjects: true }).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--brand-dark)]">
                      {t('framework.current.esps.title')}
                    </h4>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                      {t('framework.current.esps.items', { returnObjects: true }).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* RIGHT — FUTURE */}
              <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm" data-aos="fade-left">
                <h3 className="text-2xl font-bold text-[var(--ink)]">
                  {t('framework.future.title')}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{t('framework.future.note')}</p>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="font-semibold text-[var(--brand-dark)]">
                      {t('framework.future.ministry.title')}
                    </h4>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                      {t('framework.future.ministry.items', { returnObjects: true }).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--brand-dark)]">
                      {t('framework.future.jeda.title')}
                    </h4>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                      {t('framework.future.jeda.items', { returnObjects: true }).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--brand-dark)]">
                      {t('framework.future.esps.title')}
                    </h4>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-slate-700">
                      {t('framework.future.esps.items', { returnObjects: true }).map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===== 11) ACHIEVEMENTS SUMMARY ===== */}
        <section id="achievements" className="bg-white py-16 lg:py-20 border-y">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">
                {t('achievements.title')}
              </h2>
              <div className="mx-auto mt-3 h-1 w-24 bg-[var(--brand)] rounded"></div>
            </header>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-[var(--brand-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v6m0 0l3-3m-3 3l-3-3M4 21h16M7 21a5 5 0 0 1 10 0" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">{t('achievements.items.streetlights.title')}</h3>
                <p className="mt-2 text-slate-600">{t('achievements.items.streetlights.text')}</p>
              </div>

              <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-[var(--brand-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 13h18M3 7h18M5 17h14l-2 4H7l-2-4z" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">{t('achievements.items.pv.title')}</h3>
                <p className="mt-2 text-slate-600">{t('achievements.items.pv.text')}</p>
              </div>

              <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-[var(--brand-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4v4l3 3" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">{t('achievements.items.districts.title')}</h3>
                <p className="mt-2 text-slate-600">{t('achievements.items.districts.text')}</p>
              </div>

              <div className="rounded-xl border bg-slate-50 p-6 text-center shadow-sm hover:shadow-md transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-[var(--brand-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 21v-8l8-4 8 4v8M4 10l8-4 8 4" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">{t('achievements.items.institutions.title')}</h3>
                <p className="mt-2 text-slate-600">{t('achievements.items.institutions.text')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5) ONGOING / PIPELINE PROJECTS ===== */}
        <section id="projects" className="bg-white/70 border-y ">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">
              {t('projects.title')}
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {Data.map((item) => (
                <article
                  key={item._id}
                  className="rounded-xl border bg-white p-6 shadow-md box-shadow-slate-800 border-[var(--brand-dark)]"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  {/* translate backend strings if there is a matching key; else show original */}
                  <h3 className="font-bold text-lg">
                    {t(`dynamic.${item.title}`, { defaultValue: item.title })}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {t(`dynamic.${item.desc}`, { defaultValue: item.desc })}
                  </p>

                  <div className="flex justify-between p-5">
                    <Link
                      to={`/SingalProjectsEnergy/${item._id}`}
                      className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[#2FA8E1] hover:bg-[#0A7FB8]"
                    >
                      {t('common.readMore')}
                    </Link>
                    {/* fixed missing bracket in hover class */}
                    <button className="mt-4 inline-block px-3 py-2 rounded-md text-black border border-black bg-white hover:bg-[#0A7FB8]">
                      {t(`dynamic.${item.projectSatge}`, { defaultValue: item.projectSatge })}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== REGULATIONS & POLICIES ===== */}
        <section id="regulations" className="bg-slate-50 border-y">
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8" data-aos="fade-up">
              {t('regs.title')}
            </h2>
            <div className="mx-auto mt-3 mb-12 h-1 w-24 bg-[var(--brand)] rounded"></div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-xl border bg-white p-6 text-center shadow-md hover:shadow-lg transition" data-aos="zoom-in">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-[var(--brand-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6V4m0 16v-2m8-6h2M2 12h2m13.657-7.657-1.414 1.414M6.343 17.657l-1.414 1.414M18.364 18.364l-1.414-1.414M7.757 7.757 6.343 6.343" />
                </svg>
                <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">{t('regs.cards.act')}</h3>
              </article>

              <article className="rounded-xl border bg-white p-6 text-center shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-[var(--brand-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 14.93A6.93 6.93 0 1 1 18.93 10 6.938 6.938 0 0 1 12 16.93Zm.75-9.18V7a.75.75 0 0 0-1.5 0v.75H10a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.25H14a.75.75 0 0 0 0-1.5h-1.25Z" />
                </svg>
                <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">{t('regs.cards.licensing')}</h3>
              </article>

              <article className="rounded-xl border bg-white p-6 text-center shadow-md hover:shadow-lg transition" data-aos="zoom-in" data-aos-delay="200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto text-[var(--brand-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 8c-2.21 0-4 1.343-4 3s1.79 3 4 3 4 1.343 4 3-1.79 3-4 3m0-12c2.21 0 4-1.343 4-3s-1.79-3-4-3-4 1.343-4 3 1.79 3 4 3z" />
                </svg>
                <h3 className="mt-4 text-lg font-bold text-[var(--ink)]">{t('regs.cards.tariffs')}</h3>
              </article>
            </div>
          </div>
        </section>

        {/* gallery remains commented in your code */}
      </div>

      <MoewrFooter />
    </>
  );
}
