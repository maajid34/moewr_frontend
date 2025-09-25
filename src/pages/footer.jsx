export default function MoewrFooter() {
  return (
    <footer className="bg-[#2FA8E1] text-slate-900 w-full  mt-10">
      {/* Top mini-nav */}
      <div className="border-b border-[#0A1A3F]/20">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row items-center justify-between px-4 py-3 text-sm">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[#0A1A3F] transition">About</a>
            <a href="#" className="hover:text-[#0A1A3F] transition">Departments</a>
            <a href="#" className="hover:text-[#0A1A3F] transition">Events</a>
            <a href="#" className="hover:text-[#0A1A3F] transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-slate-900/70">Follow us</span>

            <a href="#" aria-label="Facebook" className="p-1.5 rounded-full bg-white/70 hover:bg-white transition text-[#0A1A3F]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22 12.06C22 6.53 17.52 2 12 2S2 6.53 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.9h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94z"/>
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="p-1.5 rounded-full bg-white/70 hover:bg-white transition text-[#0A1A3F]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M3 3l7.2 9.6L3.5 21h2.2l5.7-6.6 4.6 6.6H21l-7.6-10.9L20.3 3h-2.2l-5.2 6-4.2-6H3z"/>
              </svg>
            </a>

            <a href="#" aria-label="YouTube" className="p-1.5 rounded-full bg-white/70 hover:bg-white transition text-[#0A1A3F]">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M23.5 7.1a3.4 3.4 0 0 0-2.4-2.4C19.2 4 12 4 12 4s-7.2 0-9.1.7A3.4 3.4 0 0 0 .5 7.1 35 35 0 0 0 0 12a35 35 0 0 0 .5 4.9 3.4 3.4 0 0 0 2.4 2.4C4.8 20 12 20 12 20s7.2 0 9.1-.7a3.4 3.4 0 0 0 2.4-2.4A35 35 0 0 0 24 12a35 35 0 0 0-.5-4.9zM9.8 15.3V8.7L15.8 12l-6 3.3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2FA8E1] via-[#2FA8E1] to-[#7FD6F5]" />
        <div className="relative max-w-7xl mx-auto grid gap-10 md:grid-cols-3 px-4 py-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">MoEWR</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-900/80">
              <span className="font-medium">Address:</span>HQ , PORT ROAD OPPOSITE MADINA HOTEL KISMAYO

            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 text-[#0A1A3F]">
                  <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 11h5v-2h-4V7h-2v6Z"/>
                </svg>
                <span><span className="text-slate-900/70">Opening Hours:</span> Sat–Thu: 8:00 am – 6:00 pm</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 text-[#0A1A3F]">
                  <path fill="currentColor" d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.7 0 1.3.6 1.3 1.3V20c0 .7-.6 1.3-1.3 1.3C9.8 21.3 2.7 14.2 2.7 5.3 2.7 4.6 3.3 4 4 4h3.1c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.6 3.1.1.4 0 .9-.3 1.2l-2.1 2.2Z"/>
                </svg>
                <span>Phone: 252 619993378
</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 text-[#0A1A3F]">
                  <path fill="currentColor" d="M6.6 10.8a15.6 15.6 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2 .6 3.1.6.7 0 1.3.6 1.3 1.3V20c0 .7-.6 1.3-1.3 1.3C9.8 21.3 2.7 14.2 2.7 5.3 2.7 4.6 3.3 4 4 4h3.1c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.1.6 3.1.1.4 0 .9-.3 1.2l-2.1 2.2Z"/>
                </svg>
                <span>LandLine:03496941

</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 text-[#0A1A3F]">
                  <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
                </svg>
                <span>
                  Email:{" "}
                  <a href="mailto:Info@moewr-jubalandstate.so " className="hover:text-[#0A1A3F] underline decoration-[#0A1A3F]/40">
                   Info@moewr-jubalandstate.so 
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          {/* <div>
            <h3 className="text-lg font-semibold tracking-wide">MoEWR FMS</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="group flex items-start gap-2 hover:text-[#0A1A3F]"><span className="text-[#0A1A3F]">›</span><span>MoEWR Puntland</span></a></li>
              <li><a href="#" className="group flex items-start gap-2 hover:text-[#0A1A3F]"><span className="text-[#0A1A3F]">›</span><span>MOEM – Somaliland</span></a></li>
              <li><a href="#" className="group flex items-start gap-2 hover:text-[#0A1A3F]"><span className="text-[#0A1A3F]">›</span><span>MOEWR – Southwest State of Somalia</span></a></li>
              <li><a href="#" className="group flex items-start gap-2 hover:text-[#0A1A3F]"><span className="text-[#0A1A3F]">›</span><span>MOEWR – Galmudug</span></a></li>

            </ul>
          </div> */}

      
      
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0A1A3F]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-slate-900/70">
          Ministry of Energy &amp; Water Resources Of Jubaland © 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
