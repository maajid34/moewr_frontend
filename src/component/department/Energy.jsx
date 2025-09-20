import img1 from '../../assets/Energy/bg.jpg'
import MoewrFooter from '../../pages/footer';
import Header from '../../pages/header';
export default function Energy() {
  return (
    <>
   
    <div className="[--brand:#2FA8E1] top-[100px] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
      <div id="top" className="sr-only">Top</div>

      {/* ===== 1) BACKGROUND SECTION ===== */}
      <section id="background" className="relative">
        <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Left: Image */}
            <figure className="relative">
              <img
                src={img1}
                alt="Solar mini-plant site"
                className="w-full h-72 md:h-[26rem] lg:h-[30rem] object-cover rounded-2xl shadow-md ring-1 ring-slate-200"
              />
              {/* subtle brand accent */}
              <span className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-[var(--brand)] opacity-70 blur-xl pointer-events-none" />
            </figure>

            {/* Right: Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                Background
              </h2>
              <span className="mt-3 block w-16 h-1 rounded-full bg-[var(--brand)]" />

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Jubaland’s energy sector is characterized by a mix of traditional and modern energy
                  sources, with a growing emphasis on renewable energy. The majority of the population
                  relies on diesel generators and biomass for electricity and cooking, while efforts are
                  underway to expand access to cleaner and more sustainable energy solutions. The sector
                  faces challenges such as inadequate infrastructure, high electricity costs, and limited
                  grid connectivity. However, with abundant solar and wind resources, Jubaland has
                  significant potential for renewable energy development.
                </p>
                <p>
                  The government is actively working to attract investments in renewable energy projects,
                  improve electrification rates, and enhance energy efficiency across the state.
                </p>
                <p>
                  The Energy Department within the Ministry of Energy and Water Resources plays a vital
                  role in shaping Jubaland’s energy future. It is responsible for developing policies,
                  regulating the energy sector, overseeing infrastructure projects, and ensuring the
                  sustainable and reliable supply of electricity. The department includes key personnel
                  such as the Director, Officers, Electrical Engineers, Renewable Energy Specialists,
                  Planning Teams, Technicians, and an Electromechanical Team. These professionals
                  collaborate to drive energy security, enhance access to electricity, and promote
                  renewable energy adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 2) SERVICES / STATS ===== */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Services</h2>
        <p className="mt-2 text-slate-600 max-w-3xl" data-aos="fade-up" data-aos-delay="50">
          Key interventions the Ministry delivers with partners for communities and institutions.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* card */}
          <div className="rounded-xl bg-white p-6 shadow-sm border" data-aos="zoom-in">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🧰</div>
            <h3 className="mt-4 text-xl font-semibold">25,000 People</h3>
            <p className="mt-1 text-slate-600 text-sm">Hygiene kits distributed to enhance well-being and quality of life.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border" data-aos="zoom-in" data-aos-delay="50">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🕳️</div>
            <h3 className="mt-4 text-xl font-semibold">92 Boreholes</h3>
            <p className="mt-1 text-slate-600 text-sm">Constructed/rehabilitated in Lower Juba &amp; Gedo.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🪜</div>
            <h3 className="mt-4 text-xl font-semibold">251 Shallow Wells</h3>
            <p className="mt-1 text-slate-600 text-sm">Improving household access to reliable water.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm border" data-aos="zoom-in" data-aos-delay="150">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] text-white grid place-items-center text-2xl font-bold">🚰</div>
            <h3 className="mt-4 text-xl font-semibold">226 Water Kiosks</h3>
            <p className="mt-1 text-slate-600 text-sm">Installed for IDPs and vulnerable settlements.</p>
          </div>
        </div>
      </section>

      {/* ===== 3) ENERGY DEPARTMENT INTRO ===== */}
      <section id="energy" className="bg-white/70 border-y">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20 grid gap-10 lg:grid-cols-2">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold tracking-tight">Energy Department</h2>
            <p className="mt-4 text-slate-700">
              Ensuring sustainable energy for communities—driving growth, reliability and resilience through
              renewable energy adoption and effective sector governance.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Renewable energy &amp; energy efficiency promotion</li>
              <li>• Private sector engagement and regulations</li>
              <li>• Rural electrification &amp; infrastructure development</li>
            </ul>
          </div>
          <div className="relative" data-aos="fade-left">
            <img
              className="w-full h-72 lg:h-[22rem] object-cover rounded-xl ring-1 ring-slate-200"
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
              alt="Solar installation"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] shadow-lg hidden md:block" />
          </div>
        </div>
      </section>

      {/* ===== 4) VALUES ===== */}
      <section id="values" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Our values</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="bg-white border rounded-xl p-6" data-aos="fade-up">
            <h3 className="font-semibold text-lg">Sustainability</h3>
            <p className="mt-2 text-sm text-slate-600">We prioritize long-term resource availability through responsible practices.</p>
          </div>
          <div className="bg-white border rounded-xl p-6" data-aos="fade-up" data-aos-delay="50">
            <h3 className="font-semibold text-lg">Community Engagement</h3>
            <p className="mt-2 text-sm text-slate-600">We co-design solutions with communities for real impact.</p>
          </div>
          <div className="bg-white border rounded-xl p-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-semibold text-lg">Innovation</h3>
            <p className="mt-2 text-sm text-slate-600">We adopt new ideas and technologies to meet future needs.</p>
          </div>
          <div className="bg-white border rounded-xl p-6" data-aos="fade-up" data-aos-delay="150">
            <h3 className="font-semibold text-lg">Transparency</h3>
            <p className="mt-2 text-sm text-slate-600">We maintain open communication and accountability.</p>
          </div>
          <div className="bg-white border rounded-xl p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-semibold text-lg">Collaboration</h3>
            <p className="mt-2 text-sm text-slate-600">We partner with stakeholders to achieve common goals.</p>
          </div>
        </div>
      </section>

      {/* ===== 5) ONGOING / PIPELINE PROJECTS ===== */}
      <section id="projects" className="bg-white/70 border-y">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Ongoing / pipeline Projects</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Project card */}
            <article className="rounded-xl border bg-white p-6" data-aos="zoom-in">
              <h3 className="font-semibold text-lg">Kismaayo Urban WSS Project</h3>
              <p className="mt-2 text-sm text-slate-600">Urban supply &amp; sanitation upgrade.</p>
              <a className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[var(--brand-dark)]" href="#">Read for More</a>
            </article>
            <article className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="50">
              <h3 className="font-semibold text-lg">HoA GW4R</h3>
              <p className="mt-2 text-sm text-slate-600">Groundwater &amp; resilience works.</p>
              <a className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[var(--brand-dark)]" href="#">Read for More</a>
            </article>
            <article className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="font-semibold text-lg">Barwaaqo</h3>
              <p className="mt-2 text-sm text-slate-600">WASH infrastructure expansion.</p>
              <a className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[var(--brand-dark)]" href="#">Read for More</a>
            </article>
            <article className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="150">
              <h3 className="font-semibold text-lg">Kobciye</h3>
              <p className="mt-2 text-sm text-slate-600">Solar, storage &amp; mini-grids.</p>
              <a className="mt-4 inline-block px-3 py-2 rounded-md text-white bg-[var(--brand-dark)]" href="#">Read for More</a>
            </article>
          </div>
        </div>
      </section>

      {/* ===== 6) VISION / MISSION / OBJECTIVES ===== */}
      <section id="vmo" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="bg-white border rounded-2xl p-8" data-aos="fade-right">
            <div className="text-5xl">👁️</div>
            <h3 className="mt-3 text-2xl font-bold">Vision</h3>
            <p className="mt-2 text-slate-700 text-sm">
              To be a leading institution driving sustainable and inclusive energy &amp; water transformation in Jubaland State.
            </p>
          </div>
          <div className="bg-white border rounded-2xl p-8" data-aos="fade-up">
            <div className="text-5xl">🎯</div>
            <h3 className="mt-3 text-2xl font-bold">Mission</h3>
            <p className="mt-2 text-slate-700 text-sm">
              Ensure reliable, affordable, sustainable access to energy &amp; water through policy, infrastructure and innovation.
            </p>
          </div>
          <div className="bg-white border rounded-2xl p-8" data-aos="fade-left">
            <div className="text-5xl">📈</div>
            <h3 className="mt-3 text-2xl font-bold">Objectives</h3>
            <p className="mt-2 text-slate-700 text-sm">
              Expand access, modernize the sector, support private engagement and enable clean-energy transitions.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 7) DEPARTMENT MANDATES ===== */}
      <section id="mandates" className="bg-white/70 border-y">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Department Mandates</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-white p-6" data-aos="zoom-in">
              <h3 className="font-semibold">Policy &amp; Strategy</h3>
              <p className="text-sm mt-2 text-slate-600">Energy &amp; water security, sustainability.</p>
            </div>
            <div className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="50">
              <h3 className="font-semibold">Regulation &amp; Oversight</h3>
              <p className="text-sm mt-2 text-slate-600">Production, transmission, distribution.</p>
            </div>
            <div className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="100">
              <h3 className="font-semibold">Renewables &amp; Efficiency</h3>
              <p className="text-sm mt-2 text-slate-600">Promotion of clean technologies.</p>
            </div>
            <div className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="150">
              <h3 className="font-semibold">Investment Facilitation</h3>
              <p className="text-sm mt-2 text-slate-600">PPP and private sector mobilization.</p>
            </div>
            <div className="rounded-xl border bg-white p-6" data-aos="zoom-in" data-aos-delay="200">
              <h3 className="font-semibold">Cooperation</h3>
              <p className="text-sm mt-2 text-slate-600">Regional &amp; international coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8) ENERGY DEMAND & SUPPLY ===== */}
      <section id="demand" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Energy Demand &amp; Supply</h2>
        <p className="mt-4 text-slate-700" data-aos="fade-up" data-aos-delay="50">
          Demand is rising with urbanization and economic activity while supply remains costly and unreliable due to diesel reliance.
          Renewables and mini-grids are gaining traction to serve households, commerce and public services.
        </p>
        <img
          className="mt-8 w-full h-64 object-cover rounded-xl ring-1 ring-slate-200"
          data-aos="zoom-in"
          src="https://images.unsplash.com/photo-1585655850132-3d8f0b6bb5a5?q=80&w=1600&auto=format&fit=crop"
          alt="Energy landscape"
        />
      </section>

      {/* ===== 9) POWER DEMAND TABLE ===== */}
      <section id="table" className="bg-white/70 border-y">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Jubaland Power Demand (Sample)</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border bg-white" data-aos="fade-up" data-aos-delay="50">
            <table className="min-w-[800px] w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3">S/N</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">Load (kW)</th>
                  <th className="px-4 py-3">Total Load (kW)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Residential Housing</td>
                  <td className="px-4 py-3">400,000</td>
                  <td className="px-4 py-3">1.5</td>
                  <td className="px-4 py-3">600,000</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">Kismaayo Airport</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">1,000</td>
                  <td className="px-4 py-3">1,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">Medical Centers</td>
                  <td className="px-4 py-3">170</td>
                  <td className="px-4 py-3">20</td>
                  <td className="px-4 py-3">3,400</td>
                </tr>
                <tr className="bg-slate-50/60">
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">Schools</td>
                  <td className="px-4 py-3">150</td>
                  <td className="px-4 py-3">15</td>
                  <td className="px-4 py-3">2,250</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">Industry</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">1,000</td>
                  <td className="px-4 py-3">1,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== 10) ACTIVITIES GALLERY ===== */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight" data-aos="fade-up">Activities Photos</h2>
          <a href="#top" className="hidden md:inline-flex px-3 py-2 rounded-md text-white bg-[var(--brand-dark)]" data-aos="fade-up">
            Back to top
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1597007241171-237e37f2f2a8?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1567433918013-56066b03b8d1?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558985040-ed4d5029d997?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581094374553-f6a7d4b6e8ea?q=80&w=1600&auto=format&fit=crop",
          ].map((src, i) => (
            <img
              key={i}
              data-aos="zoom-in"
              className="w-full h-56 object-cover rounded-xl ring-1 ring-slate-200"
              src={src}
              alt={`Activity ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </div>
     </>
  );
}
