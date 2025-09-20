import img1 from '../../assets/ministry/439306470_731757755834103_6853657526537567726_n.jpg'
import img2 from '../../assets/ministry/439314024_731753735834505_3108729683842183827_n.jpg'
import img3 from '../../assets/ministry/439342725_731753875834491_2696523946108817244_n.jpg'
import img4 from '../../assets/ministry/439342725_731753875834491_2696523946108817244_n.jpg'
import img5 from '../../assets/ministry/439407412_731757455834133_8830332398067939096_n.jpg'
import img6 from '../../assets/ministry/440857034_741170791559466_7162602447336400347_n.jpg'


// ministers images
import min1 from '../../assets/ministry/438127713_730651179278094_8456837217631644785_n.jpg'
import min2 from '../../assets/ministry/Deputy Minister2.jpg'
import min3 from '../../assets/ministry/Director General.jpg'


export default function Ministry() {
  return (

    <>
      <main className="[--brand:#2FA8E1] pt-[117px] [--brand-dark:#0A7FB8] top-[100px] bg-white text-slate-900 ">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--brand)]">
            Ministry Achievements in Summary
          </h2>
          <div className="h-1 w-24 bg-[var(--brand)] mx-auto mt-2 rounded"></div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Metric Card */}
            {[
              {
                icon: (
                  <path fill="currentColor" d="M7 2h10l2 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V2Zm2 6h6v2H9V8Zm0 4h6v2H9v-2Zm0 4h6v2H9v-2Z" />
                ),
                title: "10 MW",
                text: "Added renewable capacity to the grid.",
                cta: "Learn more",
              },
              {
                icon: (
                  <path fill="currentColor" d="M12 12a5 5 0 1 1 .001-9.999A5 5 0 0 1 12 12Zm-9 9a9 9 0 0 1 18 0H3Z" />
                ),
                title: "500,000 People",
                text: "Gained access to safe water.",
                cta: "Learn more",
              },
              {
                icon: (
                  <path fill="currentColor" d="M4 4h16v4H4V4Zm0 6h10v4H4v-4Zm0 6h16v4H4v-4Z" />
                ),
                title: "20 Projects Completed",
                text: "Energy & water initiatives across districts.",
                cta: "Learn more",
              },
              {
                icon: (
                  <path fill="currentColor" d="M9 21V8l12-3v13l-12 3ZM7 8H3v13h4V8Z" />
                ),
                title: "2,000 Streetlights",
                text: "Installed across nine districts.",
                cta: "Learn more",
              },
              {
                icon: (
                  <path fill="currentColor" d="M6 2h12v6H6V2Zm-2 8h16v12H4V10Zm4 2v8h8v-8H8Z" />
                ),
                title: "92 Boreholes",
                text: "Constructed/rehabilitated in two regions.",
                cta: "Contact us",
              },
              {
                icon: (
                  <path fill="currentColor" d="M12 3 4 7v14h16V7l-8-4Zm0 2.2L17.5 8H6.5L12 5.2ZM6 10h12v9H6v-9Z" />
                ),
                title: "226 Water Kiosks",
                text: "Serving communities across 12 districts.",
                cta: "Contact us",
              },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-[var(--brand)]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-[var(--brand)]">{m.icon}</svg>
                </div>
                <p className="mt-4 font-semibold">{m.title}</p>
                <p className="text-sm text-slate-600">{m.text}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-xs px-3 py-1 rounded bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                >
                  {m.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 6) OUR SERVICES ================= */}
      <section className="py-16 bg-[var(--brand)]/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[var(--brand)]">Our Services</h2>
          <div className="h-1 w-24 bg-[var(--brand)] mx-auto mt-2 rounded"></div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Service item */}
            <div>
              <img
                src={img2}
                alt="Energy policy planning"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow"
              />
              <h3 className="mt-4 font-semibold">Energy Policy Planning</h3>
              <p className="text-sm text-slate-600">Forward-thinking energy policies for sustainable development.</p>
            </div>
            <div>
              <img
                src={img3}
                alt="Resource management"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow"
              />
              <h3 className="mt-4 font-semibold">Resource Management</h3>
              <p className="text-sm text-slate-600">Strategies for effective and balanced natural resource use.</p>
            </div>
            <div>
              <img
                src={img3}
                alt="Water supply solutions"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow"
              />
              <h3 className="mt-4 font-semibold">Water Supply Solutions</h3>
              <p className="text-sm text-slate-600">Reliable water systems for communities and institutions.</p>
            </div>
            <div>
              <img
                src={img4}
                alt="Renewable energy projects"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow"
              />
              <h3 className="mt-4 font-semibold">Renewable Energy Projects</h3>
              <p className="text-sm text-slate-600">Solar, wind and hydro initiatives to expand clean energy.</p>
            </div>
            <div>
              <img
                src={img5}
                alt="Infrastructure development"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow"
              />
              <h3 className="mt-4 font-semibold">Infrastructure Development</h3>
              <p className="text-sm text-slate-600">Design & implementation of efficient energy and water infrastructure.</p>
            </div>
            <div>
              <img
                src={img6}
                alt="Community training"
                className="w-full rounded-xl object-cover aspect-[4/3] shadow"
              />
              <h3 className="mt-4 font-semibold">Community Training Programs</h3>
              <p className="text-sm text-slate-600">Training on sustainable energy practices and water conservation.</p>
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
