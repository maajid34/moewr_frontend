import MoewrFooter from "../../pages/footer";
import img1 from '../../assets/water/images.jpg'

// components/BackgroundSection.jsx
export default function Warehouse() {
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
                         Ware House
                        </h1>
                      </div>
                    </div>
    <section className="bg-white pt-[120px] md:pt-[170px]">
      {/* =================== Section 1 =================== */}
      <div className="grid md:grid-cols-2 items-stretch gap-6 px-5">
        {/* Left image */}
        <div className="w-full">
          <img
            src="https://cdn.durable.co/blocks/15avgbsxI9BKZTzd8kfih4i0DFrZIMpFkdSXPAEYC8VgIhUbsgZKxz7jtK1HhhsC.jpg"
            alt="MOEWR Warehouse"
            className="w-full h-[260px] md:h-[380px] object-cover rounded-xl"
          />
        </div>

        {/* Right text */}
        <div className="bg-[#2FA8E1] text-white p-6 md:p-10 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Background</h2>
          <p className="leading-relaxed text-justify">
            The Jubaland Ministry of Energy and Water Resources Warehouse was built
            with fund support from the African Development Bank (AFDB) with
            implementation of the International Organization for Migration (IOM)
            project of Kismaayo Urban Water Supply and Sanitation. The warehouse
            is a vital component in meeting the ministry&apos;s comprehensive mandate
            for the state. As the central hub for the distribution and management
            of WASH (Water, Sanitation, and Hygiene) supplies, the warehouse plays
            a crucial role in ensuring the accessibility and equitable distribution
            of these essential resources to communities across Jubaland. [...]
          </p>
        </div>
      </div>

      {/* =================== Section 2 =================== */}
      <div className="grid md:grid-cols-2 items-stretch gap-6 px-5 mt-8">
        {/* Left text */}
        <div className="bg-[#122E53] text-white p-6 md:p-10 rounded-xl order-2 md:order-1">
          <p className="leading-relaxed text-justify">
            Furthermore, the warehouse&apos;s role in dispatching equipment and
            materials for water infrastructure projects, such as building water
            kiosks and constructing rural water supply systems, directly supports
            the ministry&apos;s mandate to develop and maintain the state&apos;s water
            infrastructure. Beyond its water-centric responsibilities, the
            warehouse also plays a crucial role in the ministry&apos;s energy sector
            mandate. [...]
          </p>
        </div>

        {/* Right image */}
        <div className="order-1 md:order-2 w-full">
          <img
            src="https://cdn.durable.co/blocks/36bBMiz166p2uibBC0s2jIW14xoMvaKNFTYNIaq10vd8bsHLCWBCcbb9YTixJDRU.jpg"
            alt="MOEWR Distribution"
            className="w-full h-[260px] md:h-[380px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* =================== Warehouse Management Procedures =================== */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-8 text-center">
            <h1
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: '#122E53' }}
            >
              Warehouse Management Procedures
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">Overview</p>
            <p className="mt-4 text-slate-700 leading-relaxed max-w-5xl mx-auto text-justify">
              Warehouse management procedures ensure efficient handling, storage, and distribution
              of materials and equipment within the warehouse of the Ministry of Energy & Water
              Resources of Jubaland. These procedures aim to maintain an organized flow of inventory
              and ensure accountability, timely usage, and security of warehouse items.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Receipt of Goods */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* clipboard list */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path d="M9 12h6M9 16h6" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Receipt of Goods
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Inspection:</strong> Upon arrival of goods, they are inspected for quantity and quality, cross-checking them with the procurement or delivery order.</li>
                <li><strong>Documentation:</strong> Received items are logged into the inventory system and proper records are maintained, including delivery notes, invoices, and goods received notes (GRN).</li>
                <li><strong>Labeling:</strong> Each item is labeled with relevant information, including description, date received, and stock-keeping unit (SKU) if applicable.</li>
              </ul>
            </div>

            {/* Storage and Organization */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* boxes */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 8l-9 4-9-4 9-4 9 4z" />
                    <path d="M3 8v8l9 4 9-4V8" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Storage and Organization
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Categorization:</strong> Items are categorized according to their use (e.g., equipment, tools, consumables, spare parts). Critical items may be assigned priority storage locations.</li>
                <li><strong>Shelving and Placement:</strong> Goods are placed on shelves or designated areas following a clear layout plan to avoid clutter and to ensure ease of access. Heavier items are placed on lower shelves, while lighter or fragile items are stored on higher or specialized shelves.</li>
                <li><strong>Inventory Zones:</strong> The warehouse is divided into zones for efficient management, such as receiving, storage, and dispatch zones.</li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* package check */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 16l2 2 4-4" />
                    <path d="M21 8l-9 4-9-4 9-4 9 4z" />
                    <path d="M3 8v8l9 4 9-4V8" />
                    <path d="M12 12v8" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Inventory Management
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Stock Control:</strong> A regular stock-check process is in place to track inventory levels. Stock reports are generated periodically (weekly or monthly).</li>
                <li><strong>Re-order Levels:</strong> Each item has a pre-determined reorder level. When stock reaches this level, procurement is initiated to avoid shortages.</li>
                <li><strong>Inventory Rotation (FIFO):</strong> A First-In-First-Out (FIFO) system is employed to minimize waste and ensure that older stock is used first, especially for items with expiry dates.</li>
                <li><strong>Discrepancies:</strong> In case of any discrepancies between recorded and actual stock, investigations are conducted, and corrective actions are taken.</li>
              </ul>
            </div>

            {/* Security Measures */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* shield */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Security Measures
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Access Control:</strong> Only authorized personnel have access to the warehouse. Entry and exit logs are maintained for tracking.</li>
                <li><strong>Surveillance:</strong> Security cameras and other monitoring systems are in place to ensure constant surveillance and prevent theft or loss.</li>
                <li><strong>Key Holders:</strong> The warehouse is kept locked when not in use. A limited number of key holders are designated to maintain security.</li>
              </ul>
            </div>

            {/* Issuing and Dispatch of Goods */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* send */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Issuing and Dispatch of Goods
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Issuance Requests:</strong> Departments or sections of the Ministry submit requisition forms for items needed from the warehouse.</li>
                <li><strong>Approval Process:</strong> Issuance is approved by the Warehouse Manager or designated authority before any item is dispatched.</li>
                <li><strong>Log and Record-Keeping:</strong> Each dispatched item is recorded in the inventory system, with the details of the department, person collecting the goods, and purpose of the item clearly logged.</li>
              </ul>
            </div>

            {/* Returns and Handling of Damaged Goods */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* rotate */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Returns and Handling of Damaged Goods
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Return Procedure:</strong> Any unused or defective items returned to the warehouse must be accompanied by a return form and inspected before being added back into inventory.</li>
                <li><strong>Damaged Goods:</strong> Damaged or expired goods are documented, removed from active inventory, and disposed of according to established disposal procedures.</li>
              </ul>
            </div>

            {/* Maintenance of Warehouse and Equipment */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* wrench */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 2l-6 6" />
                    <path d="M16 2l6 6" />
                    <path d="M7 10l-5 5 7 7 5-5" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Maintenance of Warehouse and Equipment
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Cleaning Schedule:</strong> The warehouse is regularly cleaned and organized to ensure a safe and functional workspace.</li>
                <li><strong>Equipment Maintenance:</strong> Forklifts, trolleys, and other equipment used for handling materials are regularly serviced to ensure smooth operation and avoid breakdowns.</li>
              </ul>
            </div>

            {/* Health and Safety */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* heart pulse */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 12A10 10 0 1 1 12 2" />
                    <path d="M22 12h-4l-3 5-3-10-3 5H2" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Health and Safety
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Hazardous Materials:</strong> Special procedures are in place for handling hazardous materials, including appropriate storage and labeling.</li>
                <li><strong>Safety Gear:</strong> Personnel working in the warehouse must wear proper safety gear (e.g., gloves, safety boots, helmets).</li>
                <li><strong>Emergency Exits:</strong> The warehouse layout includes clearly marked emergency exits and pathways to avoid accidents.</li>
              </ul>
            </div>

            {/* Reporting and Auditing */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* file chart */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 16v-4" />
                    <path d="M12 16v-6" />
                    <path d="M16 16v-2" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Reporting and Auditing
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Weekly/Monthly Reports:</strong> Reports summarizing stock levels, inventory movement, and warehouse activity are prepared and submitted to management.</li>
                <li><strong>Audits:</strong> Regular internal and external audits are conducted to ensure compliance with warehouse policies and inventory accuracy.</li>
              </ul>
            </div>

            {/* Continuous Improvement */}
            <div className="rounded-2xl border bg-white shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-3 rounded-xl bg-[#2FA8E1]/10 text-[#2FA8E1]">
                  {/* layers */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2l9 5-9 5-9-5 9-5z" />
                    <path d="M3 12l9 5 9-5" />
                    <path d="M3 17l9 5 9-5" />
                  </svg>
                </span>
                <h3 className="font-semibold text-lg" style={{ color: '#122E53' }}>
                  Continuous Improvement
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm leading-relaxed">
                <li><strong>Staff Training:</strong> Warehouse staff receive regular training on inventory systems, safety protocols, and best practices in warehouse management.</li>
                <li><strong>Review and Update of Procedures:</strong> Warehouse procedures are periodically reviewed and updated to improve efficiency, address operational challenges, and incorporate lessons learned.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =================== Operation Items Stored =================== */}
      <section className="w-full bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold mb-8" style={{ color: '#122E53' }}>
            Operation Items Stored in the Warehouse
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 6 small cards (same as before)… */}
            {/* Card 1 */}
            <div className="rounded-2xl border shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#2FA8E1]/10 grid place-items-center text-[#2FA8E1]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2s7 8 7 12a7 7 0 0 1-14 0c0-4 7-12 7-12z" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">Water treatment chemicals</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#2FA8E1]/10 grid place-items-center text-[#2FA8E1]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Energy equipment such as solar panels, generators, and transformers
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#2FA8E1]/10 grid place-items-center text-[#2FA8E1]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14.7 6.3a3 3 0 1 1 4.24 4.24L10 20H6v-4l8.7-9.7z" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Construction tools and materials for infrastructure development
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#2FA8E1]/10 grid place-items-center text-[#2FA8E1]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7a5 5 0 0 1 5 5M7 12a5 5 0 0 1 5-5M12 17a5 5 0 0 1-5-5M17 12a5 5 0 0 1-5 5" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Spare parts for water pumps, vehicles, and energy systems
              </p>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#2FA8E1]/10 grid place-items-center text-[#2FA8E1]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 3v10M11 3v10M15 6v7M19 8v5" />
                  <path d="M3 14v3a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Safety gear and protective equipment for field workers
              </p>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#2FA8E1]/10 grid place-items-center text-[#2FA8E1]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 21h8a2 2 0 0 0 2-2v-6H6v6a2 2 0 0 0 2 2z" />
                  <path d="M6 7h12v6H6z" />
                  <path d="M9 7V4h6v3" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Office supplies and consumables for the ministry’s operations
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
<MoewrFooter/>
    </>
  );
}

