import img1 from '../../assets/water/images.jpg'
import MoewrFooter from '../../pages/footer';
export default function WaterLabaratory() {
  return (
    <>
    <div
                  className="relative p-10 bg-cover bg-center h-52  mt-[80px]"
                  style={{ backgroundImage: `url(${img1})` }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2FA8E1] to-[#0A7FB8] opacity-80"></div>
        
                  {/* Content */}
                  <div className="relative flex items-center justify-center h-full">
                    <h1 className="text-white text-3xl text-center font-bold">
                     Water Labaratory
                    </h1>
                  </div>
                </div>
    <section className="bg-white pt-[60px] md:pt-[10px]">
        
      {/* ========== 1) HERO — Laboratory Services ========== */}
      <section className="bg-white pt-[110px] md:pt-[140px]">
      {/* ===== Section 1: Overview (image left, text right) ===== */}
      <div className="grid md:grid-cols-2 items-stretch gap-6 px-5">
        {/* Image */}
        <div className="w-full">
          <img
            src="https://cdn.durable.co/blocks/eYJvG1dio4oEZmSEbHWnTJTQMT2rIrzYrfuhejUBCzajto8eLLBz2vzQq8nrMyaF.jpg"  /* replace with your URL */
            alt="MoEWR Laboratory team"
            className="w-full h-[260px] md:h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="rounded-xl bg-slate-50 p-6 md:p-10 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#122E53" }}>
            Overview
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
            {/* Paste your full overview text below (keep paragraphs as-is) */}
            <p>
              The Laboratory of the Ministry of Energy and Water Resources was established in
              November 2021 with the support from International Organization for Migration (IOM)…
            </p>
            <p>
              The establishment of the MoEWR laboratory marked a significant milestone…
            </p>
            <p>
              The laboratory staff have undergone rigorous training and testing conducted by
              external water quality experts… 
            </p>
          </div>
        </div>
      </div>

      {/* ===== Section 2: Laboratory Services (text left purple, image right) ===== */}
      <div className="grid md:grid-cols-2 items-stretch gap-6 px-5 mt-10">
        {/* Purple text panel */}
        <div className="rounded-xl p-6 md:p-10 text-white"
             style={{ backgroundColor: "#5b21b6" }}>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Laboratory Services</h2>
          <p className="text-sm md:text-base font-semibold mb-6 opacity-90">
            Services Provided For The Ministry
          </p>
          <div className="space-y-4 leading-relaxed text-justify">
            {/* Paste your full services text below (do not shorten) */}
            <p>
              The primary role of the Ministry of Energy and Water Resources (MoEWR) laboratory is
              to conduct comprehensive water quality tests on publicly managed water sources across
              Jubaland’s districts…
            </p>
            <p>
              The dedicated lab team meticulously collects and analyzes water samples from various
              sources routinely…
            </p>
            <p>
              When test results indicate that the water quality does not conform to WHO standards,
              the laboratory team immediately springs into action…
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="https://cdn.durable.co/blocks/2alI1p9fT4EFjTbtlTwX1Nyg7uYAOjIrfCR0QgzbaOBTVnFB717Tx50IkgHgqfsj.jpg"  /* replace with your URL */
            alt="MoEWR lab services"
            className="w-full h-[260px] md:h-[420px] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
      <div className="grid md:grid-cols-2 items-stretch gap-6 px-5">
        <div className="w-full">
          <img
            src="https://cdn.durable.co/blocks/08KNhjSBs23nyNnutFSvo9l5G9IDmXa6JdDRiVgGvuszo54M3xFu8R1Jm3dBIiTv.jpg"
            alt="MoEWR Laboratory in action"
            className="w-full h-[260px] md:h-[420px] object-cover rounded-xl"
          />
        </div>

        <div className="rounded-xl bg-[#2FA8E1] text-white p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Laboratory Services</h1>
          <h2 className="text-base md:text-lg font-semibold mb-4">
            Services Provided For External Parties
          </h2>
          <p className="text-justify leading-relaxed">
            The Ministry of Energy and Water Resources (MoEWR) laboratory’s scope of work extends
            far beyond its governmental duties, embodying a spirit of collaboration and community
            service that significantly enhances its impact. The laboratory works with a variety of
            non-governmental organizations (NGOs) and private Water Service Providers (WSPs),
            playing a crucial role in diverse water quality initiatives across Jubaland. In its
            collaboration with NGOs, the laboratory conducts essential water-quality tests that
            support emergency water trucking operations. These operations are critical in times of
            crisis, such as droughts or other emergencies, where immediate access to safe drinking
            water can be a matter of life and death. The lab’s rigorous testing ensures that the
            water trucked into affected areas is free from contaminants and safe for human
            consumption, thereby safeguarding public health during vulnerable periods. Moreover, the
            lab’s expertise is pivotal in the rehabilitation and construction of water sources
            undertaken by various NGOs. As these organizations work to restore and build new water
            infrastructure, the laboratory provides the necessary water quality assessments to
            ensure that these sources are viable and meet health standards. By doing so, the lab
            helps secure long-term, sustainable access to safe drinking water for communities across
            Jubaland.
          </p>
        </div>
      </div>

      {/* ========== 2) Mandates ========== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10" style={{ color: "#122E53" }}>
            Mandates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Scientific Analysis */}
            <div className="text-center">
              <div className="mx-auto mb-5 w-24 h-24 grid place-items-center text-[#122E53]">
                {/* monitor/analytics icon */}
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8"/><path d="M12 17v4"/>
                  <path d="M6 13l2-3 3 2 3-4 3 5"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#122E53" }}>Scientific Analysis</h3>
              <p className="text-slate-700 max-w-xs mx-auto">
                Conduct scientific analysis of water samples for physical, chemical, and biological parameters.
              </p>
            </div>

            {/* Compliance */}
            <div className="text-center">
              <div className="mx-auto mb-5 w-24 h-24 grid place-items-center text-[#2FA8E1]">
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="14" height="16" rx="2"/>
                  <path d="M7 8h6M7 12h6M7 16h4"/><path d="M17 8l4-2v12l-4-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#122E53" }}>Compliance</h3>
              <p className="text-slate-700 max-w-xs mx-auto">
                Ensure compliance with national and international water quality standards.
              </p>
            </div>

            {/* Water Resources Data */}
            <div className="text-center">
              <div className="mx-auto mb-5 w-24 h-24 grid place-items-center text-[#21C55D]">
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="4" rx="2"/><rect x="3" y="10" width="18" height="4" rx="2"/>
                  <rect x="3" y="16" width="18" height="4" rx="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#122E53" }}>Water Resources Data</h3>
              <p className="text-slate-700 max-w-xs mx-auto">
                Provide reliable data for water resource management and decision-making.
              </p>
            </div>

            {/* Water Safety */}
            <div className="text-center">
              <div className="mx-auto mb-5 w-24 h-24 grid place-items-center text-[#84CC16]">
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18s2-2 6-2 6 2 12 2V6H3z"/><path d="M7 10c2 0 2 2 4 2s2-2 4-2 2 2 4 2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#122E53" }}>Water Safety</h3>
              <p className="text-slate-700 max-w-xs mx-auto">
                Support water safety plans and environmental protection initiatives.
              </p>
            </div>
          </div>

          {/* Collaboration (centered on its own row) */}
          <div className="grid grid-cols-1 place-items-center mt-10">
            <div className="text-center">
              <div className="mx-auto mb-5 w-24 h-24 grid place-items-center text-[#A855F7]">
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="12" cy="17" r="3"/>
                  <path d="M7 10v2a5 5 0 0 0 10 0v-2"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#122E53" }}>
                Collaboration with Stakeholders
              </h3>
              <p className="text-slate-700 max-w-xl mx-auto">
                Collaborate with other ministries and stakeholders for sustainable water resource management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3) Water Laboratory Management Procedures (8 mini-sections) ========== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8" style={{ color: "#122E53" }}>
            Water Laboratory Management Procedures for the Ministry of Energy & Water Resources of Jubaland
          </h2>
          <p className="text-center text-slate-600 max-w-4xl mx-auto mb-10">
            Effective management procedures for the Water Laboratory ensure smooth operations, accuracy in
            water quality testing, and compliance with health and safety standards. Below are the detailed
            management procedures:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample Collection and Handling */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Sample Collection and Handling Procedures
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Standardized Containers:</strong> Ensure that samples are collected in sterilized, approved containers to avoid contamination.</li>
                <li><strong>Labeling:</strong> Each sample must be labeled with the date, time, location, and sample type.</li>
                <li><strong>Preservation:</strong> Use appropriate preservation techniques depending on the type of analysis (e.g., cooling for microbiological tests).</li>
                <li><strong>Transportation:</strong> Samples should be transported to the lab in a timely manner while maintaining required environmental conditions.</li>
                <li><strong>Chain of Custody:</strong> A documented chain of custody must accompany each sample from collection to analysis, ensuring accountability.</li>
              </ul>
            </div>

            {/* Testing and Analysis Procedures */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Testing and Analysis Procedures
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Standard Operating Procedures (SOPs):</strong> The lab follows standardized procedures for all tests, including pH, turbidity, dissolved oxygen, TDS, and bacteriological tests.</li>
                <li><strong>Equipment Calibration:</strong> All equipment must be regularly calibrated according to the manufacturer’s guidelines to ensure accuracy.</li>
                <li><strong>Quality Control:</strong> Implement internal quality control measures, such as running control samples, to verify test accuracy.</li>
                <li><strong>Analyst Training:</strong> Only qualified analysts should perform tests, and they must be regularly trained and updated on new methodologies.</li>
              </ul>
            </div>

            {/* Data Management */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Data Management and Reporting
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Data Entry:</strong> Results from water testing should be recorded promptly in the laboratory’s database or management system.</li>
                <li><strong>Data Validation:</strong> Analysts should review all results for accuracy before final submission.</li>
                <li><strong>Report Generation:</strong> Detailed water quality reports, including graphical data where necessary, should be generated and shared with stakeholders.</li>
                <li><strong>Data Retention:</strong> All data and reports should be securely stored for a period in compliance with national standards.</li>
              </ul>
            </div>

            {/* Health and Safety */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Health and Safety Procedures
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>PPE:</strong> All staff must wear appropriate PPE during sample handling and analysis.</li>
                <li><strong>Lab Safety Protocols:</strong> Follow all safety protocols to prevent accidents and contamination.</li>
                <li><strong>Waste Disposal:</strong> Implement appropriate disposal methods for chemical and biological wastes.</li>
                <li><strong>Emergency Procedures:</strong> Clearly define emergency response procedures for accidents and include location of safety equipment.</li>
              </ul>
            </div>

            {/* Maintenance */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Maintenance of Equipment and Infrastructure
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Preventative Maintenance Schedule:</strong> Create and follow a maintenance schedule for all lab equipment.</li>
                <li><strong>Inventory Management:</strong> Keep an updated inventory of all reagents, chemicals, and lab supplies.</li>
                <li><strong>Lab Cleaning:</strong> Regular cleaning and disinfection of the laboratory to maintain operational hygiene.</li>
              </ul>
            </div>

            {/* Stakeholder Coordination */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Stakeholder Coordination
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>External Audit:</strong> Facilitate external audits or reviews to help regulators and partners verify compliance.</li>
                <li><strong>Collaborative Research:</strong> Engage with universities and institutions to drive research and development efforts.</li>
              </ul>
            </div>

            {/* Compliance */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Compliance with Regulatory Standards
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>National Guidelines:</strong> Adhere to guidelines from Jubaland’s MoEWR and national environmental regulations.</li>
                <li><strong>International Standards:</strong> Follow relevant international standards such as ISO 17025 where applicable.</li>
              </ul>
            </div>

            {/* Continuous Improvement */}
            <div className="rounded-2xl bg-white border p-6">
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#122E53" }}>
                Continuous Improvement
              </h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
                <li><strong>Staff Training:</strong> Conduct regular training programs for lab staff.</li>
                <li><strong>Technological Upgrades:</strong> Monitor advances in testing technology and upgrade lab equipment accordingly.</li>
                <li><strong>Feedback Mechanism:</strong> Establish feedback channels with stakeholders and communities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 4) Procedures to Acquire Samples (3 media cards) ========== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10" style={{ color: "#122E53" }}>
            Procedures to acquire samples for water quality test
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card A */}
            <div>
              <img src="/images/sample-locations.jpg" alt="Selecting sampling locations"
                   className="w-full h-[220px] object-cover rounded-xl mb-4"/>
              <h3 className="text-xl font-semibold text-center mb-2" style={{ color: "#122E53" }}>
                Selecting Sampling Locations:
              </h3>
              <p className="text-center text-slate-700">
                Identifying appropriate sampling points that represent the water source or area of interest.
              </p>
            </div>

            {/* Card B */}
            <div>
              <img src="/images/sample-collection.jpg" alt="Sample collection"
                   className="w-full h-[220px] object-cover rounded-xl mb-4"/>
              <h3 className="text-xl font-semibold text-center mb-2" style={{ color: "#122E53" }}>
                Sample Collection:
              </h3>
              <p className="text-center text-slate-700">
                Collecting water samples following proper sampling techniques to ensure accuracy and reliability.
              </p>
            </div>

            {/* Card C */}
            <div>
              <img src="/images/sample-preservation.jpg" alt="Sample preservation"
                   className="w-full h-[220px] object-cover rounded-xl mb-4"/>
              <h3 className="text-xl font-semibold text-center mb-2" style={{ color: "#122E53" }}>
                Sample Preservation:
              </h3>
              <p className="text-center text-slate-700">
                Preserving samples using sterile sampling bottles and preservation techniques to maintain
                their integrity during transportation and storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5) Testing Parameters (Physical / Chemical / Biological) ========== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10" style={{ color: "#122E53" }}>
            Testing Parameters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Physical */}
            <div className="text-center">
              <div className="mx-auto w-24 h-24 text-[#2FA8E1] mb-5">
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>
                  <path d="M7 14h10M8.5 11h7M9.5 8h5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#122E53" }}>Physical</h3>
              <ul className="text-left inline-block text-slate-700">
                <li>• PH</li>
                <li>• Temperature</li>
                <li>• Color</li>
                <li>• Turbidity</li>
                <li>• Taste and odor</li>
                <li>• Electrical Conductivity</li>
              </ul>
            </div>

            {/* Chemical */}
            <div className="text-center">
              <div className="mx-auto w-24 h-24 text-[#10B981] mb-5">
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="6" height="10" rx="2"/><path d="M10 12v10"/>
                  <rect x="13" y="7" width="6" height="10" rx="2"/><path d="M16 17v5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#122E53" }}>Chemical</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-slate-700">
                <ul>
                  <li>• Total Dissolved Solids</li><li>• Chlorides</li><li>• Iron &amp; Manganese</li>
                  <li>• Magnesium</li><li>• Nitrates</li><li>• Ammonia</li><li>• Free Residual Chlorine</li>
                </ul>
                <ul>
                  <li>• Total Hardness</li><li>• PH</li><li>• Calcium</li>
                  <li>• Sulphates</li><li>• Nitrites</li><li>• Fluoride</li>
                </ul>
              </div>
            </div>

            {/* Biological */}
            <div className="text-center">
              <div className="mx-auto w-24 h-24 text-[#F59E0B] mb-5">
                <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="4"/><circle cx="16" cy="8" r="1.5"/>
                  <path d="M8 12v8M6 16h4"/>
                  <rect x="14" y="14" width="6" height="8" rx="2"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ color: "#122E53" }}>Biological</h3>
              <ul className="text-left inline-block text-slate-700">
                <li>• Total coliforms</li>
                <li>• Fecal Coliforms</li>
                <li>• E. coli</li>
                <li>• Total viable counts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6) Achievements (4 cards) ========== */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-10" style={{ color: "#122E53" }}>
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1 */}
            <div className="rounded-2xl border p-6">
              <div className="w-14 h-14 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1] grid place-items-center mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/><path d="M9 14l3-3 3 3"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#122E53" }}>
                Testing and Treatment of Over 200 Water Sources
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Since its inception, the MoEWR laboratory has tested and treated more than 200 water
                sources across districts, ensuring many now meet WHO guidelines for safe drinking water.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-2xl border p-6">
              <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] grid place-items-center mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h18M6 7v13M18 7v13M3 17h18"/><path d="M8 11h4M8 15h8"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#122E53" }}>
                Empowering Communities Through Educational Awareness Campaigns
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Workshops and outreach programs engage communities with practical advice and
                demonstrations on safeguarding water supplies and hygiene practices.
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border p-6">
              <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] grid place-items-center mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l8 4v6c0 5-8 8-8 8s-8-3-8-8V6l8-4z"/><path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#122E53" }}>
                Continuous Monitoring of Water Service Providers
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Regular evaluation and reporting on water quality strengthen accountability and help
                identify and address lapses in provision, protecting public health.
              </p>
            </div>

            {/* 4 */}
            <div className="rounded-2xl border p-6">
              <div className="w-14 h-14 rounded-xl bg-[#6366F1]/10 text-[#6366F1] grid place-items-center mb-4">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20v-6a8 8 0 0 1 16 0v6"/><path d="M12 14v6"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "#122E53" }}>
                Creating Healthier Communities and Preventing Disease Spread
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                By promoting good hygiene and ensuring water sources meet standards, the lab helps reduce
                waterborne illnesses and improve overall public health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 7) Activity Photos (gallery) ========== */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#122E53" }}>
            Activity Photos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <img className="w-full h-[220px] md:h-[260px] object-cover rounded-lg" src="/images/act-1.jpg" alt="Lab photo 1"/>
            <img className="w-full h-[220px] md:h-[260px] object-cover rounded-lg" src="/images/act-2.jpg" alt="Lab photo 2"/>
            <img className="w-full h-[220px] md:h-[260px] object-cover rounded-lg" src="/images/act-3.jpg" alt="Lab photo 3"/>
            <img className="w-full h-[220px] md:h-[260px] object-cover rounded-lg" src="/images/act-4.jpg" alt="Lab photo 4"/>
            <img className="w-full h-[220px] md:h-[260px] object-cover rounded-lg" src="/images/act-5.jpg" alt="Lab photo 5"/>
            <img className="w-full h-[220px] md:h-[260px] object-cover rounded-lg" src="/images/act-6.jpg" alt="Lab photo 6"/>
          </div>
        </div>
      </section>
    </section>
    <MoewrFooter />
     </>
  );
}
