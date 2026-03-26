import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function CalendarView({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)}>
      {/* Hero Banner */}
      <div className="relative bg-somd-red py-20 px-6 text-center overflow-hidden">
        {blok.background_image?.filename && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url(${blok.background_image.filename})`,
            }}
          />
        )}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-ubuntu text-5xl md:text-6xl font-bold text-white mb-4">
            {blok.headline || "Calendar"}
          </h1>
          {blok.subtitle && (
            <p className="font-inter text-white/90 text-lg leading-relaxed max-w-xl mx-auto">
              {blok.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="font-ubuntu text-3xl md:text-4xl font-bold text-somd-dark mb-3">
            Join an Upcoming Event or Activity
          </h2>
          <p className="font-inter text-somd-dark/60 text-base max-w-2xl">
            Browse our calendar to find events, training opportunities, and activities happening near you.
          </p>
        </div>

        {/* Toggle + Mini Calendar Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Toggle Buttons */}
          <div className="flex gap-3">
            <button className="bg-somd-red text-white font-inter font-medium px-6 py-2.5 rounded-full text-sm">
              Today
            </button>
            <button className="border border-somd-dark/20 text-somd-dark font-inter font-medium px-6 py-2.5 rounded-full text-sm hover:bg-somd-light-gray transition-colors">
              Upcoming
            </button>
          </div>

          {/* Mini Calendar Placeholder */}
          <div className="w-full md:w-[280px] bg-somd-light-gray rounded-xl p-5 shrink-0">
            <div className="flex items-center justify-between mb-4">
              <span className="font-ubuntu font-bold text-somd-dark text-sm">March 2026</span>
              <div className="flex gap-2">
                <span className="text-somd-dark/40 cursor-pointer">&lsaquo;</span>
                <span className="text-somd-dark/40 cursor-pointer">&rsaquo;</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-inter">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <span key={i} className="text-somd-dark/40 font-medium py-1">
                  {d}
                </span>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <span
                  key={i}
                  className={`py-1 rounded-full ${
                    i === 14
                      ? "bg-somd-red text-white font-bold"
                      : "text-somd-dark/70 hover:bg-somd-dark/5"
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {blok.events?.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        {/* Prev/Next Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-somd-dark/10">
          <button className="flex items-center gap-2 font-inter text-sm font-medium text-somd-dark/60 hover:text-somd-dark transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Previous
          </button>
          <button className="flex items-center gap-2 font-inter text-sm font-medium text-somd-dark/60 hover:text-somd-dark transition-colors">
            Next
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Subscribe Button */}
        <div className="text-center mt-12">
          <a
            href={blok.subscribe_link?.cached_url || "#"}
            className="inline-flex items-center gap-2 bg-somd-red text-white font-inter font-medium px-8 py-3.5 rounded-full hover:bg-red-700 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 7h14" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {blok.subscribe_text || "Subscribe to Calendar"}
          </a>
        </div>
      </div>
    </section>
  );
}
