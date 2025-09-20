import img1 from '../../assets/ministry/438127713_730651179278094_8456837217631644785_n.jpg'
import img2 from '../../assets/ministry/Deputy Minister2.jpg'
import img3 from '../../assets/ministry/Director General.jpg'
import Header from '../../pages/header';


export default function Minister() {
  return (
    <>
    
    <div className="[--navy:#002B5C] pt-[117px] [--blue:#007BFF] [--gold:#FFD43B]">
      {/* ================= MINISTER PROFILE ================= */}
      <section
        id="minister"
        className="relative py-12 md:py-16 bg-gradient-to-b from-[var(--navy)]/5 via-white to-white"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--gold)] via-[#33b1ff] to-[var(--gold)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:gap-14 md:grid-cols-2 items-start">
          {/* LEFT: photo + identity + contacts */}
          <div className="space-y-6">
            <img
              src={img1}
              alt="H.E. Ahmed Hussein Baraki, Minister of Energy & Water Resources – Jubaland"
              className="w-full max-w-md rounded-2xl shadow-lg ring-1 ring-[var(--blue)]/20 mx-auto md:mx-0"
            />

            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--navy)]">
                H.E. Ahmed Hussein Baraki
              </h1>
              <p className="mt-1 text-sm md:text-base font-medium text-[var(--blue)]">
                Minister of Energy & Water Resources – Jubaland State, Somalia
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p className="text-slate-600">
                  Email:{" "}
                  <a
                    href="mailto:minister.moewr@jubalandstate.so"
                    className="text-[var(--blue)] underline hover:text-[var(--navy)]"
                  >
                    minister.moewr@jubalandstate.so
                  </a>
                </p>
                <p className="text-slate-600">
                  Phone:{" "}
                  <a
                    href="tel:+252613639816"
                    className="text-[var(--blue)] hover:text-[var(--navy)]"
                  >
                    (+252) 613 639 816
                  </a>
                  <span className="text-slate-400"> / </span>
                  <a
                    href="tel:+254746666992"
                    className="text-[var(--blue)] hover:text-[var(--navy)]"
                  >
                    (+254) 746 666 992
                  </a>
                </p>
              </div>

              {/* Social buttons */}
              <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--blue)] text-white hover:bg-[#0a6df0] shadow transition"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3l7.4 9.8L3.4 21h2.3l6-6.9 4.7 6.9H21l-7.7-11L20.6 3h-2.3l-5.6 6.5L8.5 3H3z" />
                  </svg>
                  Twitter
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white transition"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.06C22 6.53 17.52 2 12 2S2 6.53 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: biography */}
          <article className="bg-white/80 backdrop-blur rounded-2xl border border-[var(--blue)]/20 shadow-sm p-6 md:p-8">
            <h2 className="text-3xl font-extrabold text-[var(--navy)]">Biography</h2>
            <div className="mt-2 h-1 w-24 bg-[var(--gold)] rounded"></div>

            <div className="mt-5 space-y-4 leading-relaxed text-slate-700">
              <p>
                H.E. Ahmed Hussein Barake, the Minister of Energy & Water Resources of Jubaland
                State – Somalia, was born in Kismayo in 1977 and raised in Jilib District. During
                the civil war he migrated to Kenya and later to the USA, where he graduated from
                Metro State University in St. Paul, MN with a degree in Business Management.
              </p>
              <p>
                After 22 years in Minneapolis in management and business administration, he returned
                to Kismayo in 2018 and was appointed Minister in 2021. The Ministry leads programs
                across energy and water sectors for the benefit of Jubaland citizens, including
                urban water supply & sanitation, borehole drilling, the formation of the Jubaland
                Water Agency (JUWA), a state-of-the-art water laboratory, and the Somali Electricity
                Sector Recovery Project.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= MINISTER MESSAGE ================= */}
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--gold)] via-[#33b1ff] to-[var(--gold)]"></div>

        <div className="grid lg:grid-cols-2">
          {/* LEFT: full-bleed image */}
          <figure className="relative h-[320px] md:h-[420px] lg:h-full">
            <img
              src={img1}
              alt="H.E. Ahmed Hussein Baraki"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 lg:hidden bg-[var(--navy)]/20"></div>
          </figure>

          {/* RIGHT: message panel */}
          <div className="bg-gradient-to-br from-[var(--navy)] to-[#063a7a] text-white">
            <div className="max-w-3xl mx-auto px-6 py-10 md:py-14">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Minister Message
              </h2>
              <div className="mt-3 h-1 w-24 bg-[var(--gold)] rounded"></div>

              <div className="mt-8 space-y-5 leading-relaxed text-white/90">
                <p>Dear Citizens of Jubaland, Partners and all Stakeholders of Water & Energy,</p>
                <p>
                  It is with great honor and responsibility that I address you today as the
                  Minister of Energy & Water Resources. Our country—Somalia at large, and
                  Jubaland State in particular—stands at a critical juncture where sustainable
                  development and the efficient use of our resources are more important than ever.
                </p>
                <p>
                  Our Ministry will focus on implementing key initiatives aimed at improving access
                  to clean and reliable energy, ensuring sustainable water management, and
                  supporting the development of renewable energy sources. These efforts are not
                  just about meeting the needs of today, but also about securing a better future
                  for our children.
                </p>
                <p>
                  We are committed to working closely with local communities, businesses, and
                  international partners to achieve these goals. Our aim is to ensure that every
                  household in Jubaland has access to clean water and reliable energy—fundamental
                  rights for all.
                </p>
                <p>
                  I call upon all citizens and stakeholders to support our initiatives, to be
                  mindful of our precious resources, and to participate in the sustainable
                  development of our region. Together, we can build a brighter and more prosperous
                  future for Jubaland.
                </p>
              </div>

              {/* signature */}
              <div className="mt-10">
                <p className="font-semibold">With best regards,</p>
                <p className="mt-4 font-semibold">H.E. Ahmed H. Baraki</p>
                <p className="text-white/80">Minister of Energy & Water Resources</p>
                <p className="text-white/80">Jubaland State of Somalia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* deputy director */}
<section className="mt-[20px] relative overflow-hidden bg-white">
  {/* thin brand accent on top */}
  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand)] via-[var(--brand-dark)] to-[var(--brand)]"></div>

  <div className="grid lg:grid-cols-2">
    {/* LEFT: image */}
    <figure className="relative h-[300px] md:h-[420px] lg:h-full">
      <img
        src={img2}
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
          Deputy Minister of Energy &amp; Water Resources – Jubaland State, Somalia
        </p>

        <div className="mt-6 space-y-3 text-slate-700">
          <p>
            <span className="font-semibold text-[var(--ink)]">Expertise:</span> Network Administration &amp; Data Management (8 years); Business Administration &amp; Accounting.
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
            The Deputy Minister of Energy and Water Resources was appointed by Presidential Decree to
            support the ministry in leadership, strategic planning, and community-focused delivery.
          </p>
          <p>
            H.E. Mustafe Haji Mohamed Ahmed is a business entrepreneur with deep experience across
            business administration, networking, and data management.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--brand)] text-slate-900 font-semibold shadow hover:bg-[var(--brand-dark)] hover:text-white transition"
          >
            {/* facebook icon */}
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

      {/* general director */}
      <section className="mt-[20px] relative overflow-hidden bg-white [--brand:#2FA8E1] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
  {/* thin brand accent on top */}
  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand)] via-[var(--brand-dark)] to-[var(--brand)]"></div>

  <div className="grid lg:grid-cols-2">
    {/* LEFT: full-bleed photo */}
    <figure className="relative h-[300px] md:h-[420px] lg:h-full">
      <img
        src={img3}
        alt="Ahmed Osman Siyah"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 lg:hidden bg-[var(--brand-dark)]/10"></div>
    </figure>

    {/* RIGHT: content panel */}
    <div className="bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 py-10 md:py-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--ink)] text-center md:text-left">
          Ahmed Osman Siyah
        </h2>
        <p className="mt-2 text-center md:text-left text-[var(--brand-dark)] font-medium">
          Director General – Ministry of Energy &amp; Water Resources, Jubaland
        </p>

        {/* meta */}
        <div className="mt-6 space-y-3 text-slate-700">
          <p>
            <span className="font-semibold text-[var(--ink)]">Expertise:</span> Education, climate
            change, environmental sustainability; 10+ years across Education, Energy &amp; Water
            sectors.
          </p>
          <p>
            <span className="font-semibold text-[var(--ink)]">Email:</span>{" "}
            <a
              href="mailto:dg-moewr@jubalandstate.so"
              className="text-[var(--brand-dark)] underline hover:text-[var(--brand)]"
            >
              dg-moewr@jubalandstate.so
            </a>
            <span className="block md:inline md:ml-2">
              <span className="font-semibold text-[var(--ink)]">Phone:</span> (+252) 618 549 958 / +252
              61 995 0037
            </span>
          </p>
        </div>

        {/* bio */}
        <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
          <p>
            The Director General leads MEWR operations and formerly served with the Ministry of
            Education of Jubaland. He brings extensive leadership experience and a strong record of
            service to the Jubaland community, both in humanitarian principles and government
            operations.
          </p>
          <p>
            He holds a graduate master’s in Education, Climate Change, and Environmental
            Sustainability and is committed to strengthening resilient public services for all
            citizens.
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

  {/* diagonal brand footer stripe */}
  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[var(--brand-dark)] transform -skew-y-2 origin-left"></div>
</section>

    </div>
  
    
</>
  );
}
