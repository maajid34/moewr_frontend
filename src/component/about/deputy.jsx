import Header from "../../pages/header";

export default function Deputy() {
  return (
    <>
  
    <section className="relative overflow-hidden bg-white [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
      {/* thin brand accent on top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand)] via-[var(--brand-dark)] to-[var(--brand)]"></div>

      <div className="grid lg:grid-cols-2">
        {/* LEFT: image */}
        <figure className="relative h-[300px] md:h-[420px] lg:h-full">
          <img
            src="../../assets/waziir/Deputy Minister2.jpg"
            alt="H.E. Mustafe Haji Mohamed"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* subtle overlay only on small screens for readability */}
          <div className="absolute inset-0 lg:hidden bg-[var(--brand-dark)]/10"></div>
        </figure>

        {/* RIGHT: content */}
        <div className="bg-slate-50">
          <div className="max-w-3xl mx-auto px-6 py-10 md:py-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)]">
              H.E. Mustafe Haji Mohamed
            </h2>
            <p className="mt-2 text-[var(--brand-dark)] font-medium">
              Deputy Minister of Energy & Water Resources – Jubaland State, Somalia
            </p>

            <div className="mt-6 space-y-3 text-slate-700">
              <p>
                <span className="font-semibold text-[var(--ink)]">Expertise:</span> Network Administration & Data Management (8 years); Business Administration & Accounting.
              </p>
              <p>
                <span className="font-semibold text-[var(--ink)]">Experience:</span> 20 Years
              </p>
              <p>
                <span className="font-semibold text-[var(--ink)]">Email:</span>{" "}
                <a
                  href="mailto:deputyminister-momew@jubalandstate.so"
                  className="text-[var(--brand-dark)] underline hover:text-[var(--brand)]"
                >
                  deputyminister-momew@jubalandstate.so
                </a>
              </p>
              <p>
                <span className="font-semibold text-[var(--ink)]">Tel:</span> (+252) 612 536 316
              </p>
            </div>

            <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
              <p>
                The Deputy Minister of Energy and Water Resources was appointed by Presidential
                Decree to support the ministry in leadership, strategic planning, and
                community-focused delivery.
              </p>
              <p>
                H.E. Mustafe Haji Mohamed Ahmed is a business entrepreneur with deep experience
                across business administration, networking, and data management.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold shadow hover:bg-[var(--brand-dark)] hover:text-white transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M22 12.06C22 6.53 17.52 2 12 2S2 6.53 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
  );
}
