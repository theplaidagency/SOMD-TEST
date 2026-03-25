import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Footer({ blok }: { blok: any }) {
  return (
    <footer {...storyblokEditable(blok)} className="bg-white relative">
      {/* Red arc decoration at top */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,120 Q720,-40 1440,120"
            fill="none"
            stroke="#C8102E"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-12 pt-16 pb-8">
        <div className="flex items-start justify-between mb-20">
          {/* Logo + Contact */}
          <div className="w-[214px]">
            <Image
              src="/images/logo-horizontal.png"
              alt="Special Olympics Maryland"
              width={199}
              height={70}
              className="mb-6"
            />
            <p className="text-somd-black text-base leading-relaxed mb-4">
              {blok.address || "3701 Commerce Drive #103\nBaltimore, Maryland 21227"}
            </p>
            <p className="text-somd-black text-base mb-8">
              {blok.phone || "410-242-1515"}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {["facebook", "instagram", "linkedin", "youtube", "twitter", "tiktok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-6 h-6 text-somd-black hover:text-somd-red transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fillOpacity="0.15" />
                    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">
                      {social[0].toUpperCase()}
                    </text>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="flex gap-24">
            <div>
              <h3 className="font-ubuntu font-bold text-sm text-somd-black mb-4 uppercase tracking-wider">
                About Us
              </h3>
              <nav className="flex flex-col gap-3">
                {["Contact Us", "Mission, Vision, & Values", "Board Roster", "Staff Directory", "Careers"].map((link) => (
                  <a key={link} href="#" className="text-somd-black/70 text-sm hover:text-somd-red transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="font-ubuntu font-bold text-sm text-somd-black mb-4 uppercase tracking-wider">
                Get Involved
              </h3>
              <nav className="flex flex-col gap-3">
                {["Be an Athlete", "Be a Volunteer", "Be a Coach", "Be a Corporate Partner"].map((link) => (
                  <a key={link} href="#" className="text-somd-black/70 text-sm hover:text-somd-red transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="font-ubuntu font-bold text-sm text-somd-black mb-4 uppercase tracking-wider">
                Resources
              </h3>
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-somd-black/70 text-sm hover:text-somd-red transition-colors">
                  Resource Hub
                </a>
              </nav>
            </div>
          </div>

          {/* Donate button */}
          <a
            href="#"
            className="bg-somd-red text-white font-medium px-10 py-3 rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            Donate
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
          <p className="text-somd-black/50 text-sm">
            {blok.copyright || "© 2025 Copyright Special Olympics Maryland. All Rights Reserved."}
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "Site Map"].map((link) => (
              <a key={link} href="#" className="text-somd-black/50 text-sm hover:text-somd-red transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
