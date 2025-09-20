import img1 from '../../assets/man-writing-notebook.jpg'
import MoewrFooter from '../../pages/footer';
import Header from '../../pages/header';
export default function PlanningPolicy() {
  return (
    <>

    <div className="[--brand:#2FA8E1]  top-[120px] [--brand-dark:#0A7FB8]">
      {/* ========== 1) INTRO ========== */}
      <section id="intro" className="relative">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="h-[46vh] sm:h-[56vh] lg:h-[72vh] bg-[var(--brand)]/5">
            <img
              src={img1}
              alt="Planning & Policy — MOEWR Jubaland"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="px-6 sm:px-8 lg:px-12 py-10 lg:py-16 flex items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-white font-semibold px-3 py-1.5 rounded-full text-xs bg-[var(--brand)] shadow-sm">
                Ministry of Energy &amp; Water Resources – Jubaland
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Planning &amp; Policy Department
              </h1>

              <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
                The Department of Planning &amp; Policy is a critical unit responsible for the
                strategic planning, policy formulation, coordination and oversight of activities
                related to energy and water resources. We align all initiatives with the broader
                goals of sustainable development, efficient resource management, and socio-economic growth.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="#vm"
                  className="inline-flex items-center rounded-lg bg-[var(--brand)] text-white px-4 py-2.5 font-semibold hover:bg-[var(--brand-dark)] transition"
                >
                  Our Vision &amp; Mission
                </a>
                <a
                  href="#mandates"
                  className="inline-flex items-center rounded-lg border border-[var(--brand)] text-[var(--brand)] px-4 py-2.5 font-semibold hover:bg-[var(--brand)]/10 transition"
                >
                  Department Mandates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2) VISION & MISSION ========== */}
      <section id="vm" className="py-14 sm:py-16 bg-[var(--brand)]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--brand)]/15 ring-1 ring-[var(--brand)]/20" />
                <h2 className="text-2xl font-bold text-slate-900">Vision</h2>
              </div>
              <p className="mt-4 text-gray-700">
                To be a leading entity in the formulation of innovative, sustainable, and inclusive
                policies for the efficient management of energy and water resources in Jubaland.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--brand)]/15 ring-1 ring-[var(--brand)]/20" />
                <h2 className="text-2xl font-bold text-slate-900">Mission</h2>
              </div>
              <p className="mt-4 text-gray-700">
                To develop and implement evidence-based policies and strategic plans that enhance the
                sustainable use of energy and water resources, promote economic development, and
                improve the quality of life for the people of Jubaland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3) DEPARTMENT MANDATES ========== */}
      <section id="mandates" className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Department Mandates</h2>
            <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" d="M4 4h16v16H4z" />
                <path strokeWidth="1.5" d="M8 8h8M8 12h8M8 16h5" />
              </svg>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">Policy Development</h3>
              <p className="mt-2 text-gray-700 text-[15px]">
                Develop and oversee implementation of policies related to energy and water resources.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
                <path strokeWidth="1.5" d="M6 21v-2a6 6 0 0112 0v2" />
              </svg>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">Planning Coordination</h3>
              <p className="mt-2 text-gray-700 text-[15px]">
                Coordinate planning processes for energy and water projects across the region.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h10" />
                <path strokeWidth="1.5" d="M18 16l2 2 4-4" />
              </svg>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">Regulatory Compliance</h3>
              <p className="mt-2 text-gray-700 text-[15px]">
                Ensure compliance with national and State regulations and standards.
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="8" cy="8" r="3" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="3" strokeWidth="1.5" />
                <path strokeWidth="1.5" d="M13 7l5-5M6 18l-4 4" />
              </svg>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">Policy Advisory</h3>
              <p className="mt-2 text-gray-700 text-[15px]">
                Provide policy advice to the Ministry on energy and water matters.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" d="M4 20h16M4 4h16M8 4v16M16 4v16" />
              </svg>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">Monitoring &amp; Evaluation</h3>
              <p className="mt-2 text-gray-700 text-[15px]">
                Monitor and evaluate the impact of implemented policies and strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4) DEPARTMENT ACTIVITIES ========== */}
      <section id="activities" className="py-14 sm:py-16 bg-[var(--brand)]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Department Activities</h2>
            <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Research & policy analysis for development.",
              "Drafting & reviewing energy and water regulations.",
              "Cross-department & stakeholder collaboration.",
              "Workshops, seminars & training for capacity building.",
              "M&E of existing policies; update recommendations.",
              "Long-term strategic planning for the Ministry.",
            ].map((text, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[var(--brand)] ring-2 ring-[var(--brand)]/30 flex items-center justify-center text-white text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="font-semibold text-slate-900">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 5) STUDIES ========== */}
      <section id="studies" className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Studies</h2>
            <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Feasibility studies for energy & water projects.",
                icon: (
                  <>
                    <path strokeWidth="1.5" d="M4 5h12v14H4z" />
                    <path strokeWidth="1.5" d="M16 7h4v10h-4z" />
                  </>
                ),
              },
              {
                title: "Environmental & social impact assessments.",
                icon: (
                  <>
                    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
                    <path strokeWidth="1.5" d="M8 12h8M8 8h8M8 16h5" />
                  </>
                ),
              },
              {
                title: "Sectorial studies on demand & supply.",
                icon: (
                  <>
                    <path strokeWidth="1.5" d="M4 18c4-8 12-8 16 0" />
                    <circle cx="8" cy="10" r="2" strokeWidth="1.5" />
                    <circle cx="16" cy="10" r="2" strokeWidth="1.5" />
                  </>
                ),
              },
              {
                title: "Sustainable practices & technologies research.",
                icon: (
                  <>
                    <path strokeWidth="1.5" d="M4 19l4-4 3 3 7-7" />
                    <path strokeWidth="1.5" d="M4 5h16" />
                  </>
                ),
              },
              {
                title: "Policy impact evaluation studies.",
                icon: (
                  <>
                    <rect x="4" y="3" width="16" height="18" rx="2" strokeWidth="1.5" />
                    <path strokeWidth="1.5" d="M8 7h8M8 11h8M8 15h5" />
                  </>
                ),
              },
              {
                title: "Additional evidence-building special studies.",
                icon: (
                  <>
                    <path strokeWidth="1.5" d="M6 6h12v12H6z" />
                    <path strokeWidth="1.5" d="M9 9h6v6H9z" />
                  </>
                ),
              },
            ].map(({ title, icon }, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <svg className="w-10 h-10 text-[var(--brand)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {icon}
                </svg>
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 6) ACTS & POLICIES ========== */}
      <section id="policies" className="py-14 sm:py-16 bg-[var(--brand)]/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-extrabold text-slate-900">Acts &amp; Policies of the Ministry</h2>
            <span className="inline-flex h-2 w-28 rounded-full bg-[var(--brand)]" />
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Policy Card */}
            <article className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold">
                PDF
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Finance Policy &amp; Procedures</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="px-3 py-1.5 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)]"
                  >
                    Download
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1.5 rounded-md border border-[var(--brand)] text-[var(--brand)] text-sm font-semibold hover:bg-[var(--brand)]/10"
                  >
                    View
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-2xl bg-white border border-slate-100 p-6 shadow-sm flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center font-bold">
                PDF
              </span>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Human Resource Policy &amp; Procedures</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="px-3 py-1.5 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)]"
                  >
                    Download
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1.5 rounded-md border border-[var(--brand)] text-[var(--brand)] text-sm font-semibold hover:bg-[var(--brand)]/10"
                  >
                    View
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
        </>
  );
}
