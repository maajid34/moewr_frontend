import { Link } from "react-router-dom";
import logo from "../assets/tamarta.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState({
    about: false,
    departments: false,
    projects: false,
  });

  const toggle = (key) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#2FA8E1]">
      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between p-2">
        {/* Logo + brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MOEWR"
            className="h-[64px] w-[64px] rounded-full object-cover sm:h-[80px] sm:w-[80px]"
          />
          <span className="hidden text-xl font-semibold text-white sm:block">
            MOEWR – Jubaland
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-white sm:flex">
          <Link to="/" className="text-lg hover:opacity-90">
            Dashboard
          </Link>

          {/* About */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-lg">
              About
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-[15px] mt-2 hidden w-60 rounded-md bg-white py-2 text-sm text-black shadow-md group-hover:block">
              <Link to="/Ministry" className="block px-4 py-2 hover:bg-gray-100">Ministry</Link>
              <Link to="/minister" className="block px-4 py-2 hover:bg-gray-100">Leadership</Link>
              <span className="block px-4 py-2 hover:bg-gray-100">General Director</span>
            </div>
          </div>

          {/* Departments */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-lg">
              Departments
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-[15px] mt-2 hidden w-60 rounded-md bg-white py-2 text-sm text-black shadow-md group-hover:block">
              <Link to="/water" className="block px-4 py-2 hover:bg-gray-100">Water</Link>
              <Link to="/Energy" className="block px-4 py-2 hover:bg-gray-100">Energy</Link>
              <Link to="/PlanningPolicy" className="block px-4 py-2 hover:bg-gray-100">Policy &amp; Planning</Link>
              <Link to="/Admin&finace" className="block px-4 py-2 hover:bg-gray-100">Admin &amp; Finance</Link>
            </div>
          </div>

          {/* Projects */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-lg">
              Projects
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-[15px] mt-2 hidden w-48 rounded-md bg-white py-2 text-sm text-black shadow-md group-hover:block">
              <Link to="/EnergyProject" className="block px-4 py-2 hover:bg-gray-100">Energy</Link>
              <Link to="/WaterProject" className="block px-4 py-2 hover:bg-gray-100">Water</Link>
            </div>
          </div>

          <Link to="/AssessmentsPost" className="text-lg hover:opacity-90">Publications</Link>
          <Link to="/EventPost" className="text-lg hover:opacity-90">Events</Link>

          <Link
            to="/contact"
            className="rounded-lg bg-white px-4 py-2 text-[#2FA8E1] hover:opacity-90"
          >
            Contact us
          </Link>
        </nav>

        {/* Mobile toggler */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/* Using inline SVGs so you don't rely on Font Awesome */}
          {isOpen ? (
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <nav className="space-y-4 bg-[#2FA8E1] px-5 pb-6 pt-3 text-white">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-xl">
            Dashboard
          </Link>

          {/* About (click) */}
          <div>
            <button
              onClick={() => toggle("about")}
              className="flex w-full items-center justify-between text-left text-xl"
            >
              <span>About</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={open.about ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
            {open.about && (
              <div className="mt-2 space-y-2 rounded-md bg-white p-2 text-black">
                <Link to="/Ministry" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Ministry</Link>
                <Link to="/minister" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Leadership</Link>
                <span className="block rounded px-2 py-1 hover:bg-gray-100">General Director</span>
              </div>
            )}
          </div>

          {/* Projects (click) */}
          <div>
            <button
              onClick={() => toggle("projects")}
              className="flex w-full items-center justify-between text-left text-xl"
            >
              <span>Projects</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={open.projects ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
            {open.projects && (
              <div className="mt-2 space-y-2 rounded-md bg-white p-2 text-black">
                <Link to="/EnergyProject" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Energy</Link>
                <Link to="/WaterProject" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Water</Link>
              </div>
            )}
          </div>

          {/* Departments (click) */}
          <div>
            <button
              onClick={() => toggle("departments")}
              className="flex w-full items-center justify-between text-left text-xl"
            >
              <span>Departments</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={open.departments ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
            {open.departments && (
              <div className="mt-2 space-y-2 rounded-md bg-white p-2 text-black">
                <Link to="/water" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Water</Link>
                <Link to="/Energy" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Energy</Link>
                <Link to="/PlanningPolicy" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Policy &amp; Planning</Link>
                <Link to="/Admin&finace" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1 hover:bg-gray-100">Admin &amp; Finance</Link>
              </div>
            )}
          </div>

          <Link to="/AssessmentsPost" onClick={() => setIsOpen(false)} className="block text-xl">
            Assessment
          </Link>
          <Link to="/EventPost" onClick={() => setIsOpen(false)} className="block text-xl">
            Events
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-block rounded-lg bg-white px-4 py-2 text-[#2FA8E1]"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
