import MoewrFooter from "../../pages/footer";
// import img2 from '../../assets/Energy/energy.jpg'
import img1 from '../../assets/adminFinananc.png'
import img2 from '../../assets/adminLeader.png'



export default function AdminFinace() {
  return (

    <>

    <div className="[--brand:#2FA8E1] left-[100px] top-[120px] [--brand-dark:#0A7FB8] [--ink:#002B5C]">
 
      {/* ===== Header / Intro ===== */}
      <header id="intro" className="relative overflow-hidden ">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--ink)] via-[var(--ink)] to-[var(--brand-dark)]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--brand)]" />
             Administration, HR, and Finance Department
            </span>
            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight">
            Welcome to the Department of Administration, HR, and Finance for the Ministry of Energy & Water Resources of Jubaland.
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
             The Department of Administration, HR, and Finance is a crucial arm of the Ministry of 
             Energy & Water Resources. It ensures that the ministry's operations are efficient, effective, and aligned with its strategic objectives. This department manages all administrative functions, human resources, and financial management, providing essential support to the ministry’s other departments.
            </p>
           
           
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 shadow-md">
              {/* Decorative illustration */}
             
             <img src={img1} alt="" className="ml-[100px] mt-[50px]" />
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
              To be a leading department in delivering efficient administrative, human resource, and financial management services, 
              supporting the Ministry of Energy & Water Resources in achieving its goals.
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
             To provide high-quality administrative, HR, and financial services that enable the Ministry 
             of Energy & Water Resources to function optimally and achieve its strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Section 3: Mandates ===== */}
      <section id="mandates" className="bg-slate-50/60">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
    <h3 className="text-2xl md:text-3xl font-bold text-center text-[var(--brand-dark)]">
      Department Mandates
    </h3>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        [
          "01",
          "Administrative Oversight",
          "Oversee all administrative tasks within the ministry, ensuring smooth day-to-day operations."
        ],
        [
          "02",
          "Human Resources",
          "Manage recruitment, training, staff development, and employee welfare."
        ],
        [
          "03",
          "Finance Management",
          "Handle budgeting, accounting, financial reporting, and compliance."
        ],
        [
          "04",
          "Policy & Procedures",
          "Develop and implement policies and procedures that enhance operational efficiency."
        ],
        [
          "05",
          "Governance & Compliance",
          "Ensure adherence to government regulations and internal policies."
        ]
      ].map(([num, title, desc]) => (
        <div
          key={num}
          className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200"
        >
          <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
            <span className="text-[var(--brand)] font-bold">{num}</span>
          </div>
          <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">
            {title}
          </h4>
          <p className="mt-2 text-sm text-slate-700">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ===== Section 4: Main Tasks ===== */}
      <section id="tasks" className="bg-slate-50/60">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
    <h3 className="text-2xl md:text-3xl font-bold text-center text-[var(--brand-dark)]">
      Departmental Main Tasks
    </h3>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        [
          "Administrative Functions",
          "Managing office logistics, procurement, facility management, and record-keeping."
        ],
        [
          "Human Resources Management",
          "Overseeing recruitment, employee relations, payroll, benefits, performance management, and training programs."
        ],
        [
          "Financial Management",
          "Budget preparation, financial planning, accounting, auditing, and financial reporting."
        ],
        [
          "Policy Development",
          "Formulating and updating policies related to administration, HR, and finance."
        ],
        [
          "Compliance and Risk Management",
          "Ensuring adherence to legal and regulatory requirements, managing risks, and implementing internal controls."
        ]
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200"
        >
          <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
            <span className="text-[var(--brand)] font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">
            {title}
          </h4>
          <p className="mt-2 text-sm text-slate-700">{desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ===== Section 5: Our Values ===== */}
      <section id="values" className="bg-slate-50/60">
  <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
    <h3 className="text-2xl md:text-3xl font-bold text-center text-[var(--brand-dark)]">
      Our Values
    </h3>

    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Sustainability */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">01</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Sustainability</h4>
        <p className="mt-2 text-sm text-slate-700">
          Incorporating environmentally and financially sustainable practices in departmental operations.
        </p>
      </div>

      {/* Integrity */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">02</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Integrity</h4>
        <p className="mt-2 text-sm text-slate-700">
          Upholding the highest standards of honesty and ethical behavior in all departmental operations and decisions.
        </p>
      </div>

      {/* Innovation */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">03</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Innovation</h4>
        <p className="mt-2 text-sm text-slate-700">
          Promoting creativity and continuous improvement in administrative, HR, and financial practices.
        </p>
      </div>

      {/* Transparency */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">04</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Transparency</h4>
        <p className="mt-2 text-sm text-slate-700">
          Ensuring openness and clear communication in all processes, fostering trust among employees and stakeholders.
        </p>
      </div>

      {/* Collaboration & Efficiency */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">05</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Collaboration & Efficiency</h4>
        <p className="mt-2 text-sm text-slate-700">
          Streamlining processes and procedures to maximize productivity and minimize waste of time and resources.
          <br />Collaboration: Encouraging teamwork and cooperation both within the department and with other departments to achieve common goals.
        </p>
      </div>

      {/* Professionalism */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">06</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Professionalism</h4>
        <p className="mt-2 text-sm text-slate-700">
          Maintaining a high level of expertise, competence, and respectful conduct in all interactions and tasks.
        </p>
      </div>

      {/* Accountability */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">07</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Accountability</h4>
        <p className="mt-2 text-sm text-slate-700">
          Taking responsibility for actions and decisions, ensuring that resources are used efficiently and effectively.
        </p>
      </div>

      {/* Confidentiality */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">08</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Confidentiality</h4>
        <p className="mt-2 text-sm text-slate-700">
          Safeguarding sensitive information and respecting the privacy of all individuals and the organization.
        </p>
      </div>

      {/* Equity */}
      <div className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition duration-200">
        <div className="w-10 h-10 rounded-md bg-[var(--brand)]/10 flex items-center justify-center">
          <span className="text-[var(--brand)] font-bold">09</span>
        </div>
        <h4 className="mt-4 font-semibold text-[var(--brand-dark)]">Equity</h4>
        <p className="mt-2 text-sm text-slate-700">
          Ensuring fair and equal treatment of all employees, fostering an inclusive workplace environment.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ===== Section 6: Leadership / Team ===== */}
     <section
  id="team"
  className="max-w-7xl mx-auto px-4 md:px-6 py-16"
>
  <div className="grid md:grid-cols-2 gap-8 items-center">
    
    {/* Left Side Image */}
    <div className="aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200 shadow-md">
      <img
        src={img2}
        alt="Department Leadership"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Side Content */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-dark)]">
        Department Leadership
      </h3>
      <p className="mt-3 text-slate-700">
        The leadership team ensures strategy, culture and compliance remain aligned with the Ministry’s goals.
        We foster a supportive environment for staff growth and service excellence.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border bg-white hover:shadow-md transition">
          <h4 className="font-semibold text-[var(--brand-dark)]">Director</h4>
          <p className="text-sm text-slate-700">
            Administration, HR &amp; Finance
          </p>
        </div>
        <div className="p-4 rounded-xl border bg-white hover:shadow-md transition">
          <h4 className="font-semibold text-[var(--brand-dark)]">Contacts</h4>
          <p className="text-sm text-slate-700">
            email@example.so · +252 XXX XXX
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ===== Section 7: Other Sectors We Support ===== */}
      
    </div>

    <MoewrFooter />
       </>
  );
}
