import img1 from '../../assets/water/images.jpg'
import MoewrFooter from '../../pages/footer';
import Header from '../../pages/header';

export default function Water() {
  return (

    <>
    
    <div className="[--brand:#2FA8E1]  [--brand-dark:#0A7FB8] [--ink:#002B5C]">
      <div
        className="relative p-10 bg-cover bg-center h-52 mb-10 mt-[80px]"
        style={{ backgroundImage: `url(${img1})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
      
        {/* Content */}
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-3xl text-center font-bold">
            ABOUT WATER DEPARTMENT
          </h1>
        </div>
      </div>
      {/* ========== 1) WATER DEPARTMENT – HERO SPLIT ========== */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand)] via-[var(--brand-dark)] to-[var(--brand)]"></div>

        <div className="grid lg:grid-cols-2">
          {/* Left image */}
          <figure className="relative h-[280px] sm:h-[360px] lg:h-full">
            <img
              src={img1}
              alt="Water Department field team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 lg:hidden bg-[var(--brand-dark)]/10"></div>
          </figure>

          {/* Right copy */}
          <div className="bg-slate-50">
            <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">
                Water Department
              </h2>
              <h2 className='text-2xl mx-auto px-6 py-4 md:py-8'>Overview</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
                <p>
                 The Water Department, under the Ministry of Energy and Water Resources of Jubaland State - Somalia, is responsible for the formulation and implementation of policies, programs, and regulations related to Water resources,
The Water Department plays a vital role in managing the region's water resources, ensuring sustainable use, and providing access to clean water. Projects aligned with their objectives help to advance their mission of fostering a healthy, sustainable, and resilient environment in Jubaland.

                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
{/* vison and mission */}
<section id="vmo" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-1 m-10">
          <div className="bg-white border rounded-2xl p-8  shadow-md box-shadow-slate-800 border-[var(--brand-dark)]" data-aos="fade-right">
            <div className="text-5xl">👁️</div>
            <h3 className="mt-3 text-2xl font-bold">Our Vision</h3>
            <p className="mt-2 text-slate-700 text-sm">
              Our mission is to ensure sustainable energy for all by promoting efficient use, fostering innovation, and empowering communities in Jubaland and beyond.
            </p>
          </div>
          
         
        </div>
      </section>


      {/* ========== 2) SERVICES / STATS ========== */}
  <section className="py-12 md:py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <header className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">Services</h2>
      <div className="mx-auto mt-3 h-1 w-24 bg-[var(--brand)] rounded"></div>
    </header>

    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {/* 25,000 People */}
      <div className="text-center">
        <svg
          className="w-20 h-20 mx-auto text-[var(--brand-dark)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 19h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-.6-1.2A2 2 0 0 0 12.6 4H9.4a2 2 0 0 0-1.8 1.2L7 6H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" />
          <path d="M9 13h6M9 10h6M9 16h3" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">25,000 People</h3>
        <p className="mt-2 text-slate-600">
          Distributed Hygiene kits to access essential health services and improve well-being &amp; quality of life.
        </p>
      </div>

      {/* 92 Boreholes */}
      <div className="text-center">
        <svg
          className="w-20 h-20 mx-auto text-[var(--brand-dark)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 20V4M19 20V8m-7 12V6" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">92 Boreholes</h3>
        <p className="mt-2 text-slate-600">
          Constructed/Rehabilitated across Lower Juba &amp; Gedo in 12 Districts.
        </p>
      </div>

      {/* 251 Shallow Wells */}
      <div className="text-center">
        <svg
          className="w-20 h-20 mx-auto text-[var(--brand-dark)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">251 Shallow Wells</h3>
        <p className="mt-2 text-slate-600">
          Constructed/Rehabilitated over 251 Shallow Wells in Jubaland.
        </p>
      </div>

      {/* 226 Water Kiosks */}
      <div className="text-center">
        <svg
          className="w-20 h-20 mx-auto text-[var(--brand-dark)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M4 20h16V8H4v12Z" />
          <path d="M10 20V4h4v16" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">226 Water Kiosks</h3>
        <p className="mt-2 text-slate-600">
          Constructed over 226 Water Kiosks serving IDPs in Jubaland.
        </p>
      </div>

      {/* 38 Water Ban */}
      <div className="text-center">
        <svg
          className="w-20 h-20 mx-auto text-[var(--brand-dark)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M12 3v18m9-9H3" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">38 Water Ban</h3>
        <p className="mt-2 text-slate-600">
          Constructed over 38 Water Bans to improve water distribution.
        </p>
      </div>

      {/* 790 Barkad */}
      <div className="text-center">
        <svg
          className="w-20 h-20 mx-auto text-[var(--brand-dark)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18M3 14h18" />
        </svg>
        <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">790 Barkad</h3>
        <p className="mt-2 text-slate-600">
          Constructed over 790 Barkad to enhance water storage across Jubaland.
        </p>
      </div>
    </div>
  </div>
</section>



      {/* ========== 4) OUR VALUES GRID ========== */}
     <section className="py-12 md:py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <header className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">Our Values</h2>
      <div className="mx-auto mt-3 h-1 w-24 bg-[var(--brand)] rounded"></div>
    </header>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {/* Sustainability */}
      <div className=' border border-black box-shadow-black p-5'>
        <h3 className="text-xl font-bold text-[var(--brand-dark)]">Sustainability</h3>
        <p className="mt-2 text-slate-700">
          We prioritize sustainable practices to ensure the long-term availability of energy &amp; water resources for Jubaland.
        </p>
      </div>

      {/* Community Engagement */}
      <div className=' border border-black box-shadow-black p-5'>
        <h3 className="text-xl font-bold text-[var(--brand-dark)]">Community Engagement</h3>
        <p className="mt-2 text-slate-700">
          We work closely with local communities to understand their needs and provide effective solutions.
        </p>
      </div>

      {/* Innovation */}
      <div className=' border border-black box-shadow-black p-5'>
        <h3 className="text-xl font-bold text-[var(--brand-dark)]">Innovation</h3>
        <p className="mt-2 text-slate-700">
          We encourage new ideas and technologies to improve our services and meet future challenges.
        </p>
      </div>

      {/* Transparency */}
      <div className=' border border-black box-shadow-black p-5'>
        <h3 className="text-xl font-bold text-[var(--brand-dark)]">Transparency</h3>
        <p className="mt-2 text-slate-700">
          We maintain open communication and accountability in all our operations.
        </p>
      </div>
      <div className=' border border-black box-shadow-black p-5'>
        <h3 className="text-xl font-bold text-[var(--brand-dark)]">Collaboration</h3>
        <p className="mt-2 text-slate-700">
          •We partner with various stakeholders to achieve common goals and enhance service delivery.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* ========== 5) ONGOING / PIPELINE PROJECTS ========== */}
     <section className="py-12 md:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <header className="mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">
        Ongoing / Pipeline Projects
      </h2>
      <div className="mt-3 h-1 w-24 bg-[var(--brand)] rounded"></div>
    </header>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* 1. Kismaayo Urban Water Supply & Sanitation */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">
          Kismaayo Urban Water Supply &amp; Sanitation
        </h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>

      {/* 2. HoA GW4R Project */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">HoA GW4R Project</h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>

      {/* 3. Barwaaqo Project */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">Barwaaqo Project</h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>

      {/* 4. KOBCIYE Project */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">KOBCIYE Project</h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>

      {/* 5. SCRP Project */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">SCRP Project</h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>

      {/* 6. Luglow Water Supply Project */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">
          Luglow Water Supply Project
        </h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>

      {/* 7. Emergency Response - Luuq */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">
          Emergency Response - Luuq
        </h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>

      {/* 8. Water Sources Strategic Monitoring */}
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:shadow-md transition">
        <h3 className="text-xl font-bold text-[var(--ink)]">
          Water Sources Strategic Monitoring
        </h3>
        <a
          href="#"
          className="mt-4 inline-block px-3 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold hover:bg-[var(--brand-dark)] hover:text-white transition"
        >
          Read for More
        </a>
      </article>
    </div>
  </div>
</section>

    </div>
<MoewrFooter />
    
    </>
  );
}
