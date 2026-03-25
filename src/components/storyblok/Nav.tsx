import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Nav({ blok }: { blok: any }) {
  return (
    <header {...storyblokEditable(blok)} className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-12 h-10">
          <a href="#" className="text-sm text-somd-black hover:text-somd-red transition-colors">
            {blok.top_link_text || "Find a Local Program"} <span className="ml-1">&rsaquo;</span>
          </a>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-somd-black hover:text-somd-red transition-colors">
              Be an Athlete <span className="ml-1">&rsaquo;</span>
            </a>
            <a href="#" className="text-sm text-somd-black hover:text-somd-red transition-colors">
              Be a Volunteer <span className="ml-1">&rsaquo;</span>
            </a>
            <a href="#" className="text-sm text-somd-black hover:text-somd-red transition-colors">
              Be a Supporter <span className="ml-1">&rsaquo;</span>
            </a>
            <button className="text-somd-black hover:text-somd-red transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-somd-dark">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-12 h-20">
          <div className="flex items-center gap-10">
            <a href="/" className="shrink-0">
              <Image
                src="/images/logo-horizontal.png"
                alt="Special Olympics Maryland"
                width={160}
                height={56}
                className="h-14 w-auto"
              />
            </a>
            <nav className="hidden lg:flex items-center gap-8">
              {["Sports & Programs", "Get Involved", "Events", "Stories", "About Us", "Resources"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-white/90 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item}
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-white/80 border border-white/30 rounded-full px-5 py-2 hover:bg-white/10 transition-colors"
            >
              Athlete Login
            </a>
            <a
              href="#"
              className="text-sm text-white bg-somd-red rounded-full px-6 py-2 font-medium hover:bg-red-700 transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
