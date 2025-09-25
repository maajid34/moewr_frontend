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
              <p className="mt-4 text-[var(--brand-dark)] font-semibold">
                Welcome to the Department of Water for the Ministry of Energy &amp; Water Resources of Jubaland.
              </p>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
                <p>
                  The Water Department is responsible for policy formulation and implementation, programs and regulations
                  related to water resources, ensuring sustainable use and access to clean water across Jubaland.
                </p>
                <p>
                  Our projects strengthen resilience, expand services, and foster a healthy, sustainable environment for all.
                </p>
              </div>
            </div>
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

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {/* Card examples */}
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
                Hygiene kits distributed to improve well-being &amp; quality of life.
              </p>
            </div>

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
              <p className="mt-2 text-slate-600">Constructed/rehabilitated across Lower Juba &amp; Gedo.</p>
            </div>

            {/* add remaining service cards... */}
          </div>
        </div>
      </section>

      {/* ========== 3) ENERGY DEPARTMENT – STATEMENT ========== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl border border-[var(--brand)]/30 p-6 md:p-10 bg-gradient-to-br from-[var(--brand)]/5 via-white to-white">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl bg-gradient-to-b from-[var(--brand)] to-[var(--brand-dark)]"></div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] mb-4">Energy Department</h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              The Department of Energy is dedicated to ensuring sustainable energy for our community. We harness
              renewable resources to support growth and development and to transform Jubaland’s energy landscape.
              Together, we can create a brighter, more sustainable future for all.
            </p>
          </div>
        </div>
      </section>

      {/* ========== 4) OUR VALUES GRID ========== */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">Our values</h2>
            <div className="mx-auto mt-3 h-1 w-24 bg-[var(--brand)] rounded"></div>
          </header>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Sustainability</h3>
              <p className="mt-2 text-slate-700">
                We prioritize practices that ensure long-term availability of energy &amp; water resources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Community Engagement</h3>
              <p className="mt-2 text-slate-700">
                We work with local communities to understand needs and deliver effective solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Innovation</h3>
              <p className="mt-2 text-slate-700">
                We embrace new ideas and technologies to improve services and meet future challenges.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)]">Transparency</h3>
              <p className="mt-2 text-slate-700">
                We maintain accountability and open communication in all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5) ONGOING / PIPELINE PROJECTS ========== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">Ongoing / Pipeline Projects</h2>
            <div className="mt-3 h-1 w-24 bg-[var(--brand)] rounded"></div>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

            {/* ...add other project cards similarly */}
          </div>
        </div>
      </section>
    </div>
<MoewrFooter />
    
    </>
  );
}
