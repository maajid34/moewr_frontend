import img1 from '../../assets/ministry/439306470_731757755834103_6853657526537567726_n.jpg'
import img2 from '../../assets/ministry/439314024_731753735834505_3108729683842183827_n.jpg'
import img3 from '../../assets/ministry/439342725_731753875834491_2696523946108817244_n.jpg'
import img4 from '../../assets/ministry/439342725_731753875834491_2696523946108817244_n.jpg'
import img5 from '../../assets/ministry/439407412_731757455834133_8830332398067939096_n.jpg'
import img6 from '../../assets/ministry/440857034_741170791559466_7162602447336400347_n.jpg'
import service1 from '../../assets/home/service1.png'
import service2 from '../../assets/home/service2.jpg'
import service3 from '../../assets/home/service3.jpg'


// ministers images
import min1 from '../../assets/ministry/438127713_730651179278094_8456837217631644785_n.jpg'
import min2 from '../../assets/ministry/Deputy Minister2.jpg'
import min3 from '../../assets/ministry/Director General.jpg'


export default function Ministry() {
  return (

    <>
      <main className="[--brand:#2FA8E1] pt-[117px] [--brand-dark:#0A7FB8] top-[100px] bg-white text-slate-900 ">
<div
  className="relative p-10 bg-cover bg-center h-96"
  style={{ backgroundImage: `url(${img1})` }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>

  {/* Content */}
  <div className="relative flex items-center justify-center h-full">
    <h1 className="text-white text-3xl text-center font-bold">
      ABOUT MINISTRY
    </h1>
  </div>
</div>


      {/* ================= 1) ABOUT HERO ================= */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          {/* Left: Ministry Building Image */}
          <img
            src={img1}
            alt="MOEWR Jubaland Headquarters"
            className="rounded-2xl shadow-lg border-4 border-[var(--brand)]"
          />

          {/* Right: About Us Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-[var(--brand)] mb-4">About Us</h2>
            <p className="text-lg font-semibold text-[var(--brand)] mb-3">
              Welcome to the Ministry of Energy & Water Resources of Jubaland.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ministry of Energy & Water Resources is one among the Jubaland State Ministries established in 2014 with responsibility for two core sectors:
              {" "}
              <span className="font-medium text-[var(--brand-dark)]">Water Resources</span>
              {" "}
              and {" "}
              <span className="font-medium text-[var(--brand-dark)]">Energy</span>.
              The ministry ensures equitable development, exploration, and distribution of energy and water to the people of Jubaland.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The Ministry is responsible for the formulation, direction, and coordination of state energy and water resources. It is tasked with creating institutions that manage water resources and deliver energy and water services for the benefit of Jubaland communities.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 2) VISION & MISSION ================= */}
      <section className="py-16 bg-[#2FA8E1]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <article className="rounded-2xl bg-white shadow-sm border border-[#2FA8E1]/30 p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A7FB8]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2FA8E1]"></span>
                Our Vision
              </div>
              <h3 className="mt-2 text-3xl font-extrabold text-[#2FA8E1]">Our Vision</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                To provide adequate, safe and affordable water, hygiene and sanitation for all. An energy industry that contributes to revenue streams and the socio-economic development of the state.
              </p>
            </article>

            {/* Mission */}
            <article className="rounded-2xl bg-white shadow-sm border border-[#2FA8E1]/30 p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0A7FB8]">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2FA8E1]"></span>
                Our Mission
              </div>
              <h3 className="mt-2 text-3xl font-extrabold text-[#2FA8E1]">Our Mission</h3>
              <p className="mt-4 text-slate-700 leading-relaxed">
                To have a significant role in the socio-economic development of the people of Jubbaland State of Somalia through development and management of its water and energy resources in a sustainable manner; through provision of quality and equitable supplies in the entire state and by contributing significantly to food security and increased resilience to drought and natural disaster.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= 3) MINISTRY MANDATES ================= */}
      <section className="py-16 bg-[#2FA8E1]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#2FA8E1]">
            Ministry Mandates
          </h2>
          <div className="mt-2 h-1 w-24 mx-auto rounded bg-[#2FA8E1]"></div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <article className="group rounded-2xl bg-white border border-[#2FA8E1]/30 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-6 px-2 items-center rounded-full text-xs font-semibold bg-[#2FA8E1]/10 text-[#2FA8E1]">1</span>
                <span className="sr-only">Regulate & Set Policy</span>
              </div>
              <div className="mt-4">
                {/* icon: policy */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-14 h-14 text-[#2FA8E1]">
                  <path fill="currentColor" d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm9 1.5V8h5.5L15 3.5ZM8 10h8v2H8v-2Zm0 4h8v2H8v-2Z" />
                </svg>
                <h3 className="mt-4 font-semibold text-slate-900">
                  Regulate & Set policy for Energy & Water Resources sectors
                </h3>
              </div>
            </article>

            {/* 2 */}
            <article className="group rounded-2xl bg-white border border-[#2FA8E1]/30 p-6 shadow-sm hover:shadow-md transition">
              <span className="inline-flex h-6 px-2 items-center rounded-full text-xs font-semibold bg-[#2FA8E1]/10 text-[#2FA8E1]">2</span>
              <div className="mt-4">
                {/* icon: implement */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-14 h-14 text-[#2FA8E1]">
                  <path fill="currentColor" d="M3 5h18v12H3V5Zm2 2v8h14V7H5Zm-2 12h18v2H3v-2Zm9-8a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 11Zm0-6 2 3H10l2-3Z" />
                </svg>
                <h3 className="mt-4 font-semibold text-slate-900">
                  Implement & Facilitate development of the Energy & Water sectors
                </h3>
              </div>
            </article>

            {/* 3 */}
            <article className="group rounded-2xl bg-white border border-[#2FA8E1]/30 p-6 shadow-sm hover:shadow-md transition">
              <span className="inline-flex h-6 px-2 items-center rounded-full text-xs font-semibold bg-[#2FA8E1]/10 text-[#2FA8E1]">3</span>
              <div className="mt-4">
                {/* icon: monitoring */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-14 h-14 text-[#2FA8E1]">
                  <path fill="currentColor" d="M3 3h2v16h16v2H3V3Zm6 12 3-4 3 3 4-5 2 2-6 7-3-3-3 3-2-3Z" />
                </svg>
                <h3 className="mt-4 font-semibold text-slate-900">Provide Monitoring & Evaluation for sectoral activities</h3>
              </div>
            </article>

            {/* 4 */}
            <article className="group rounded-2xl bg-white border border-[#2FA8E1]/30 p-6 shadow-sm hover:shadow-md transition">
              <span className="inline-flex h-6 px-2 items-center rounded-full text-xs font-semibold bg-[#2FA8E1]/10 text-[#2FA8E1]">4</span>
              <div className="mt-4">
                {/* icon: access */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-14 h-14 text-[#2FA8E1]">
                  <path fill="currentColor" d="M4 3h16v14H4V3Zm2 2v10h12V5H6Zm-2 14h16v2H4v-2Zm7-11h2v3h3v2h-3v3h-2v-3H8v-2h3V8Z" />
                </svg>
                <h3 className="mt-4 font-semibold text-slate-900">
                  Ensure access to reliable clean energy, water resources & sewerage for society
                </h3>
              </div>
            </article>

            {/* 5 */}
            <article className="group rounded-2xl bg-white border border-[#2FA8E1]/30 p-6 shadow-sm hover:shadow-md transition">
              <span className="inline-flex h-6 px-2 items-center rounded-full text-xs font-semibold bg-[#2FA8E1]/10 text-[#2FA8E1]">5</span>
              <div className="mt-4">
                {/* icon: promote */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-14 h-14 text-[#2FA8E1]">
                  <path fill="currentColor" d="M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8Zm-1-6h2v3h-2V2Zm8.485 3.515 1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121ZM2 11h3v2H2v-2Zm16.364 6.95 2.121 2.121-1.414 1.414-2.121-2.121 1.414-1.414Z" />
                </svg>
                <h3 className="mt-4 font-semibold text-slate-900">Promote development of water & energy resources</h3>
              </div>
            </article>

            {/* 6 */}
            <article className="group rounded-2xl bg-white border border-[#2FA8E1]/30 p-6 shadow-sm hover:shadow-md transition">
              <span className="inline-flex h-6 px-2 items-center rounded-full text-xs font-semibold bg-[#2FA8E1]/10 text-[#2FA8E1]">6</span>
              <div className="mt-4">
                {/* icon: funding */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-14 h-14 text-[#2FA8E1]">
                  <path fill="currentColor" d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4Zm1 16.9V20h-2v-2.1a4 4 0 0 1-3-3.9h2a2 2 0 0 0 4 0c0-.9-.6-1.6-2-2-2.7-.7-4-1.9-4-4 0-2 1.5-3.4 3-3.8V4h2v2.2c1.5.4 3 1.6 3 3.8h-2c0-1.2-.8-2-2-2s-2 .6-2 1.7c0 .8.5 1.4 2 1.8 2.7.7 4 2 4 4.3a4 4 0 0 1-3 3.9Z" />
                </svg>
                <h3 className="mt-4 font-semibold text-slate-900">Enhance resources mobilization for sectoral funding</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= 4) DEPARTMENTS (variant A) ================= */}
      <section className="py-16 bg-[var(--brand)]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--brand)]">Departments</h2>
          <div className="h-1 w-24 bg-[var(--brand)] mx-auto mt-2 rounded"></div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Admin, HR & Finance",
                text:
                  "Provides administration and financial support, drives internal policy and governance for all directorates.",
                cta: "Read more",
              },
              {
                title: "Water Department",
                text:
                  "Plans and delivers equitable water supply: boreholes, sand dams, storage and rural water systems across districts.",
                cta: "Read more",
              },
              {
                title: "Energy Department",
                text:
                  "Develops the energy sector and improves access to reliable, affordable electricity for communities.",
                cta: "More info",
              },
              {
                title: "Planning & Policy",
                text:
                  "Leads research, monitoring & evaluation, policy and regulatory frameworks for energy and water sectors.",
                cta: "Read more",
              },
            ].map((d, i) => (
              <article
                key={i}
                className="group rounded-2xl bg-white p-6 border border-[var(--brand)]/30 shadow-sm hover:shadow-xl transition hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-[var(--brand)] group-hover:text-[var(--brand-dark)]">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{d.text}</p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white bg-[var(--brand)] hover:bg-[var(--brand-dark)] px-4 py-2 rounded-lg transition"
                  href="#"
                >
                  {d.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5) MINISTRY ACHIEVEMENTS ================= */}
      <section id="achievements" className="py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 text-black">
          <div className="text-center mb-10" data-aos="fade-up">
           
            <h2 className="section-title mt-2 text-2xl font-bold">Ministry Achievements</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in">
              <div className="font-bold">2 MW</div>
              <p className="mt-1">Our projects have added over 2 MW of renewable energy to the grid.</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="50">
              <div className="font-bold">500,000 People</div>
              <p className="mt-1">We have provided clean water access to over 500,000 people..</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="100">
              <div className="font-bold">20 Projects Completed</div>
              <p className="mt-1">We have successfully completed over 20 energy and water projects whilst running more than 10 Projects</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="150">
              <div className="font-bold">2,000 - Public Streetlights</div>
              <p className="mt-1">with support from partners we have installed 2,000 Solar Streetlights in 9 districts of Jubaland State Somalia</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="200">
              <div className="font-bold">43,277 People</div>
              <p className="mt-1">Distributed Hygeine kits to Access essential health services to improve well-being and quality of life in our community.</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="250">
              <div className="font-bold">277 Shallow Wells</div>
              <p className="mt-1">We have Constructed over 277 Shallow wells and Maintain them with support from our Humanitarian Partners.</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="300">
              <div className="font-bold">92 Boreholes</div>
              <p className="mt-1">We have Constructed/Rehabilitated over 92 Boreholes in two Regions of Jubaland (Lower Juba & Gedo) in 12 Districts..</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="350">
              <div className="font-bold">226 Water Kiosks</div>
              <p className="mt-1">Constructed over 226 Water Kiosks in 12 Districts of Jubaland.</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="400">
              <div className="font-bold">38 Water Pan</div>
              <p className="mt-1">Constructed over 38 water Pan</p>
            </div>
            <div className="rounded-2xl p-6 bg-[#2FA8E1] text-white shadow-sm" data-aos="zoom-in" data-aos-delay="400">
              <div className="font-bold">790 Barkad</div>
              <p className="mt-1">Constructed over 790 Barkad</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6) OUR SERVICES ================= */}
  
  <section id="services" className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10" data-aos="fade-up">
            
            <h2 className="section-title mt-2 text-2xl font-bold">Our services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden  border shadow-md border-slate-800  shadow-slate-900 " data-aos="fade-up">
              <img className="h-40  w-80 object-cover" src="data:image/png;base64,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" alt="" />
              <div className="p-5">
                <h4 className="font-bold">Energy Policy Planning</h4>
                <p className="text-slate-600 mt-1">We help governments create forward-thinking energy policies that ensure sustainable development</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden  border shadow-md border-slate-800  shadow-slate-900" data-aos="fade-up" data-aos-delay="50">
              <img className="h-40 w-full object-cover" src="data:image/png;base64,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" alt="" />
              <div className="p-5">
                <h4 className="font-bold">Resource Management</h4>
                <p className="text-slate-600 mt-1">Our team provides strategies for effective management of natural resources to promote environmental balance</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden  border shadow-md border-slate-800  shadow-slate-900 " data-aos="fade-up" data-aos-delay="100">
              <img className="h-40 w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2YGYgkKrBfyct-Jsq6eKjIX6zNqBEwgFoC8JQgaY2bVCiO4&s" alt="" />
              <div className="p-5">
                <h4 className="font-bold">Water Supply Solutions</h4>
                <p className="text-slate-600 mt-1">We deliver comprehensive solutions for ensuring clean and consistent water supply to communities.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border shadow-md border-slate-800  shadow-slate-900" data-aos="fade-up">
              <img className="h-40 w-full object-cover" src={service1} alt="" />
              <div className="p-5">
                <h4 className="font-bold">Renewable Energy Projects</h4>
                <p className="text-slate-600 mt-1">Join us in promoting renewable energy by developing wind, solar, and hydroelectric projects.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden  border shadow-md border-slate-800  shadow-slate-900" data-aos="fade-up" data-aos-delay="50">
              <img className="h-40 w-full object-cover" src={service2} alt="" />
              <div className="p-5">
                <h4 className="font-bold">Infrastructure Development</h4>
                <p className="text-slate-600 mt-1">Our experts oversee the design and implementation of efficient energy and water infrastructure.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-800  shadow-slate-900" data-aos="fade-up" data-aos-delay="100">
              <img className="h-40 w-full object-cover" src={service3} alt="" />
              <div className="p-5">
                <h4 className="font-bold">Community Training</h4>
                <p className="text-slate-600 mt-1">We offer training programs to educate communities on sustainable energy practices and resource conservation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= 7) MINISTRY OFFICIALS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--brand)]">Ministry Officials</h2>
          <div className="h-1 w-24 bg-[var(--brand)] mx-auto mt-2 rounded"></div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Official card */}
            <article className="rounded-2xl border border-[var(--brand)]/30 bg-white shadow-sm overflow-hidden">
              <img
                src={min1}
                alt="Minister portrait"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-5">
                <h3 className="text-[var(--brand)] font-semibold underline decoration-[var(--brand)]/30">
                  H.E. Ahmed H. Baraki
                </h3>
                <p className="text-sm mt-1">Minister of Energy & Water Resources – Jubaland</p>
                <p className="text-xs text-slate-600 mt-2">
                  Email:{" "}
                  <a
                    href="mailto:minister.moewr@jubalandstate.so"
                    className="text-[var(--brand)] hover:text-[var(--brand-dark)]"
                  >
                    minister.moewr@jubalandstate.so
                  </a>
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-xs px-3 py-1 rounded bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                >
                  Facebook
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-[var(--brand)]/30 bg-white shadow-sm overflow-hidden">
              <img
                src={min2}
                alt="Deputy Minister portrait"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-5">
                <h3 className="text-[var(--brand)] font-semibold underline decoration-[var(--brand)]/30">
                  H.E. Mustafe Haji Mohamed
                </h3>
                <p className="text-sm mt-1">Deputy Minister, MOEWR – Jubaland</p>
                <p className="text-xs text-slate-600 mt-2">
                  Email:{" "}
                  <a
                    href="mailto:deputyminister-moemw@jubalandstate.so"
                    className="text-[var(--brand)] hover:text-[var(--brand-dark)]"
                  >
                    deputyminister-moemw@jubalandstate.so
                  </a>
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-xs px-3 py-1 rounded bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                >
                  Facebook
                </a>
              </div>
            </article>

            <article className="rounded-2xl border border-[var(--brand)]/30 bg-white shadow-sm overflow-hidden">
              <img
                src={min3}
                alt="Director General portrait"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-5">
                <h3 className="text-[var(--brand)] font-semibold underline decoration-[var(--brand)]/30">
                  Ahmed Osman Siyah
                </h3>
                <p className="text-sm mt-1">Director General – MOEWR, Jubaland</p>
                <p className="text-xs text-slate-600 mt-2">
                  Email:{" "}
                  <a
                    href="mailto:dg-moewr@jubalandstate.so"
                    className="text-[var(--brand)] hover:text-[var(--brand-dark)]"
                  >
                    dg-moewr@jubalandstate.so
                  </a>
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-xs px-3 py-1 rounded bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                >
                  Facebook
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
      </>
  );
}
