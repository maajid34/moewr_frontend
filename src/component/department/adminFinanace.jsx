import MoewrFooter from "../../pages/footer";


export default function AdminFinace() {
  return (

    <>

    <div className="[--brand:#2FA8E1] left-[100px] top-[120px] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
      {/* ===== Header / Intro ===== */}
      <header id="intro" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--ink)] via-[var(--ink)] to-[var(--brand-dark)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--brand)]" />
              Ministry of Energy &amp; Water Resources – Jubaland
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight">
              Administration, HR &amp; Finance Department
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              Efficient administration, trusted human resource management and transparent financial stewardship
              that power the Ministry’s mission.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#mandates"
                className="px-5 py-3 rounded-lg bg-[var(--brand)] text-white font-semibold hover:bg-[var(--brand-dark)] transition"
              >
                Explore Mandates
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 shadow-md">
              {/* Decorative illustration */}
              <svg viewBox="0 0 200 200" className="w-full h-full text-[color:var(--brand)]/80">
                <defs>
                  <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="#2FA8E1" />
                    <stop offset="1" stopColor="#0D7CB0" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="70" fill="url(#g)" opacity=".15" />
                <g fill="none" stroke="url(#g)" strokeWidth="6" strokeLinecap="round">
                  <path d="M60 120c10-30 70-30 80 0" />
                  <path d="M80 85a20 20 0 1040 0 20 20 0 10-40 0" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[var(--brand)] via-[color:rgba(47,168,225,0.2)] to-transparent" />

      {/* ===== Section 2: Vision & Mission ===== */}
      <section id="vision-mission" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]">
                  <path fill="currentColor" d="M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3Zm0 3a6 6 0 0 1 6 6h-2a4 4 0 1 0-4 4v2a6 6 0 0 1 0-12Z"/>
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="mt-4 text-slate-700">
              To be a leading department in efficient administration, excellent talent development, and
              transparent finance that accelerates the Ministry’s impact for the people of Jubaland.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--brand)]/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[var(--brand)]">
                  <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5h-2v6h5v-2h-3V7Z"/>
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="mt-4 text-slate-700">
              Provide high-quality administrative, HR, and financial services so every ministry team can operate
              efficiently, responsibly, and in line with national priorities.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Mandates ===== */}
      <section id="mandates" className="bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-bold">Department Mandates</h3>
          <p className="mt-2 text-slate-700">Core responsibilities that guide our day-to-day work.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["01", "Administrative Oversight", "Coordinate internal operations, logistics, and records."],
              ["02", "Human Resources", "Recruitment, onboarding, performance & staff welfare."],
              ["03", "Finance Management", "Budgeting, accounting, reporting, and compliance."],
              ["04", "Policy & Procedures", "Develop and implement policies for efficient service."],
              ["05", "Governance & Audit Readiness", "Ensure adherence to national regulations & audits."]
            ].map(([num, title, desc]) => (
              <div key={num} className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition">
                <div className="w-9 h-9 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
                  <span className="text-[var(--brand)] font-bold">{num}</span>
                </div>
                <h4 className="mt-4 font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 4: Main Tasks ===== */}
      <section id="tasks" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h3 className="text-2xl md:text-3xl font-bold">Departmental Main Tasks</h3>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            ["Administration", "Logistics, facility management & records."],
            ["HR Management", "Recruitment, performance & training."],
            ["Finance", "Budgeting, accounting & reporting."],
            ["Policy Development", "Guidelines & SOPs for all units."],
            ["Compliance & Risk", "Controls, audits & risk mitigation."]
          ].map(([title, desc]) => (
            <div key={title} className="p-5 border rounded-xl bg-white hover:shadow-md transition">
              <h4 className="font-semibold">{title}</h4>
              <p className="mt-2 text-sm text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Section 5: Our Values ===== */}
      <section id="values" className="bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-bold">Our Values</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Sustainability", "Environmentally and financially sound practices."],
              ["Integrity", "Honesty & ethics in all operations."],
              ["Innovation", "Better processes & continuous improvement."],
              ["Transparency", "Open communication & accountability."],
              ["Collaboration", "Work together to achieve common goals."],
              ["Professionalism", "High standards and respectful conduct."],
              ["Accountability", "Responsible stewardship of resources."],
              ["Equity", "Fair, inclusive workplace for all."]
            ].map(([title, desc]) => (
              <div key={title} className="p-5 bg-white border rounded-xl">
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 6: Leadership / Team ===== */}
      <section id="team" className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[16/11] rounded-2xl bg-gradient-to-br from-[var(--brand)]/15 to-[var(--brand-dark)]/10 border border-slate-200 flex items-center justify-center">
            <span className="text-slate-700">Leadership Photo / Placeholder</span>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Department Leadership</h3>
            <p className="mt-3 text-slate-700">
              The leadership team ensures strategy, culture and compliance remain aligned with the Ministry’s goals.
              We foster a supportive environment for staff growth and service excellence.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border bg-white">
                <h4 className="font-semibold">Director</h4>
                <p className="text-sm text-slate-700">Administration, HR &amp; Finance</p>
              </div>
              <div className="p-4 rounded-xl border bg-white">
                <h4 className="font-semibold">Contacts</h4>
                <p className="text-sm text-slate-700">email@example.so · +252 XXX XXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 7: Other Sectors We Support ===== */}
      <section id="support" className="bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-bold">Other Sectors We Support</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Ministry Laboratory", "Procurement & staffing support."],
              ["Warehouse", "Inventory & asset coordination."],
              ["Integration & Coordination", "Cross-departmental planning."],
              ["Assets & Control", "Audit-ready tracking & custody."],
              ["Field Security Clearance", "Mission & site access support."],
              ["Field Work Support", "Logistics & allowances."],
              ["Office Stationaries", "Efficient, timely provision."],
              ["Training & Workshops", "Capacity building for teams."]
            ].map(([title, desc]) => (
              <div key={title} className="p-6 bg-white border rounded-xl">
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-slate-700">{desc}</p>
              </div>
            ))}

            {/* Contact CTA */}
            <div id="contact" className="md:col-span-2 lg:col-span-4 mt-4 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-dark)] text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold">Need something from Admin/HR/Finance?</h4>
                  <p className="text-white/85">We’re here to help. Reach out for requests, clarifications or support.</p>
                </div>
                <a
                  href="mailto:info@moewr.gov.so"
                  className="px-5 py-3 rounded-lg bg-white text-[var(--ink)] font-semibold hover:opacity-90 transition"
                >
                  info@moewr.gov.so
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
       </>
  );
}
