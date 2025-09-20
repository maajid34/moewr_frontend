import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardCards from "./home";

export default function AdminSidebar() {
  const [open, setOpen] = useState(true); 
  //  const getCustomer = localStorage.getItem("admin")
  const handleLogOut = () =>{
    localStorage.clear()
  }

  // useEffect(() =>{
  //   handleLogOut()
  // },[])// sidebar toggle for mobile

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Left: brand + hamburger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white text-[var(--ink,#002B5C)] hover:bg-slate-50 md:hidden"
              aria-label="Toggle sidebar"
            >
              <i className="fa-solid fa-bars" />
            </button>
            <div className="hidden h-10 w-10 md:grid place-items-center rounded-xl bg-[#2FA8E1] text-white font-bold shadow-sm">
              ME
            </div>
            <div className="leading-tight">
              <p className="text-xs text-slate-500">
                Ministry of Energy & Water Resources — Jubaland
              </p>
              <h1 className="text-sm font-semibold text-[var(--ink,#002B5C)]">
                Admin Portal
              </h1>
            </div>
          </div>

          {/* Center: search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input
                type="text"
                placeholder="Search…"
                className="w-full rounded-xl border border-slate-200 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2FA8E1]/40"
              />
            </div>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden md:inline-flex h-10 items-center gap-2 rounded-xl bg-[#2FA8E1] px-3 text-white hover:bg-[#0A7FB8] transition"
            >
              <i className="fa-solid fa-plus"></i>
              <span className="text-sm font-medium">New</span>
            </button>
            <button
              type="button"
              className="relative grid h-10 w-10 place-items-center rounded-xl border bg-white hover:bg-slate-50"
              aria-label="Notifications"
            >
              <i className="fa-regular fa-bell"></i>
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>
            </button>
            <button
              type="button"
              className="flex h-10 items-center gap-2 rounded-xl border bg-white px-2 hover:bg-slate-50"
            >
              <img
                alt="avatar"
                className="h-7 w-7 rounded-full object-cover"
                src="https://i.pravatar.cc/100?img=5"
              />
              <span className="hidden text-sm font-medium md:inline">Admin</span>
              <i className="fa-solid fa-chevron-down hidden md:inline text-xs text-slate-500"></i>
            </button>
            {/* <div>
             <Link to={"/AdminLogin"}> <button onClick={handleLogOut} className="bg-[#2FA8E1] px-6 py-2 rounded-2xl text-white">LogOut</button></Link>
            </div> */}
             <div>
        
          </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 z-30 h-[calc(100vh-4rem)] w-64 bg-[#2FA8E1] text-white shadow-xl transition-transform duration-300 md:top-0 md:h-screen md:translate-x-0 ${open ? "translate-x-0 md:mt-0" : "-translate-x-full md:translate-x-0 md:mt-0"}`}
      >
        {/* Sidebar header for desktop */}
        <div className="hidden h-16 items-center justify-center bg-[#0A7FB8] text-lg font-semibold tracking-wide md:flex">
          Menu
        </div>

        <nav className="mt-4 px-3 md:mt-6">
          <div className="space-y-1">
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-house text-base" />
              <Link to={"/DashboardCards"}><span>Dashboard</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-bolt text-base" />
             <Link to={"/EnergyProjectTable"}> <span>Energy Projects</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-award text-base" />
              <Link to={"/ProjectAchievementForm"}><span>Energy Achievements</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-award text-base" />
              <Link to={"/WaterAchievementsTable"}><span>Water Achiev Table</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-award text-base" />
              <Link to={"/EnergyAchievementsTable"}><span>Energy Achiev Table</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-droplet text-base" />
             <Link to={"/WaterProjectTable"}> <span>Water Projects</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-trophy text-base" />
              <Link to={"/WaterAchievementForm"}><span>Water Achievements</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-calendar-days text-base" />
            <Link to={"/EventTable"}><span>Events</span></Link> 
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-user text-base" />
              <Link to={"/AssessmentDashsPost"}><span>Assessments</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-user text-base" />
              <Link to={"/EnergyProjectPhotosTable"}><span>EnergyProjectPhoto</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-user text-base" />
              <Link to={"/WaterProjectPhotosTable"}><span>WaterProjectPhoto</span></Link>
            </button>
            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-user text-base" />
              <Link to={"/AdminForm"}><span>Users</span></Link>
            </button>

            {/* Divider */}
            <div className="mt-3 border-t border-white/20 pt-3"></div>

            <button type="button" className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-gear text-base" />
              <span>Settings</span>
            </button>
            <button onClick={handleLogOut}    type="button"  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition">
              <i className="fa-solid fa-right-from-bracket text-base" />
             <Link to={"/AdminLogin"}><span>Logout</span></Link>
            </button>
          </div>
        </nav>
      </aside>

    </div>
  );
}
