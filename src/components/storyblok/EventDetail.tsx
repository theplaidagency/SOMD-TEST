import { storyblokEditable } from "@storyblok/react/rsc";

export default function EventDetail({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-4">
        <nav className="font-inter text-sm text-somd-dark/50 flex items-center gap-2">
          <span className="uppercase tracking-wide font-medium text-somd-dark/40">
            {blok.breadcrumb_category || "Events"}
          </span>
          <span className="text-somd-dark/30">/</span>
          <span className="text-somd-dark/70 font-medium">
            {blok.breadcrumb_title || blok.title}
          </span>
        </nav>
      </div>

      {/* Title Row */}
      <div className="max-w-[1200px] mx-auto px-6 pb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <h1 className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-dark leading-tight max-w-3xl">
          {blok.title || "Event Title"}
        </h1>
        {blok.registration_link?.cached_url && (
          <a
            href={blok.registration_link.cached_url}
            className="inline-flex items-center gap-2 text-somd-red font-inter font-medium text-sm hover:underline shrink-0 mt-2 md:mt-3"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Event Registration Link
          </a>
        )}
      </div>

      {/* Featured Image */}
      {blok.featured_image?.filename && (
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <div className="rounded-xl overflow-hidden aspect-[21/9]">
            <img
              src={blok.featured_image.filename}
              alt={blok.title || "Event featured image"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Two Column: Intro + Sidebar */}
      <div className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Intro */}
          <div className="lg:col-span-2">
            {blok.intro_heading && (
              <h2 className="font-ubuntu text-2xl md:text-3xl font-bold text-somd-dark mb-4">
                {blok.intro_heading}
              </h2>
            )}
            {blok.intro_description && (
              <p className="font-inter text-somd-dark/70 text-base leading-relaxed mb-8">
                {blok.intro_description}
              </p>
            )}

            {/* Body Content */}
            {blok.body && (
              <div className="mt-8 pt-8 border-t border-somd-dark/10">
                <h3 className="font-ubuntu text-xl font-bold text-somd-dark mb-4">
                  Why You Should Attend
                </h3>
                <div className="font-inter text-somd-dark/70 text-base leading-relaxed whitespace-pre-line">
                  {blok.body}
                </div>
              </div>
            )}

            {/* CTA Button */}
            {blok.cta_text && (
              <div className="mt-10">
                <a
                  href={blok.cta_link?.cached_url || "#"}
                  className="inline-flex items-center gap-2 bg-somd-red text-white font-inter font-medium px-8 py-3.5 rounded-full hover:bg-red-700 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-180">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {blok.cta_text}
                </a>
              </div>
            )}
          </div>

          {/* Right: Event Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-somd-light-gray rounded-xl p-6 sticky top-8">
              <h3 className="font-ubuntu text-lg font-bold text-somd-dark mb-5">
                Event Details
              </h3>

              <div className="space-y-4">
                {blok.event_date && (
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-somd-red shrink-0 mt-0.5">
                      <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2 7h14" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <div>
                      <span className="font-inter text-xs text-somd-dark/40 uppercase tracking-wide block mb-0.5">Date</span>
                      <span className="font-inter text-sm text-somd-dark font-medium">{blok.event_date}</span>
                    </div>
                  </div>
                )}

                {blok.event_time && (
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-somd-red shrink-0 mt-0.5">
                      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <div>
                      <span className="font-inter text-xs text-somd-dark/40 uppercase tracking-wide block mb-0.5">Time</span>
                      <span className="font-inter text-sm text-somd-dark font-medium">{blok.event_time}</span>
                    </div>
                  </div>
                )}

                {blok.event_location && (
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-somd-red shrink-0 mt-0.5">
                      <path
                        d="M9 1C6.24 1 4 3.24 4 6c0 4.13 5 9 5 9s5-4.87 5-9c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <span className="font-inter text-xs text-somd-dark/40 uppercase tracking-wide block mb-0.5">Location</span>
                      <span className="font-inter text-sm text-somd-dark font-medium">{blok.event_location}</span>
                    </div>
                  </div>
                )}
              </div>

              <button className="w-full mt-6 flex items-center justify-center gap-2 border border-somd-dark/15 text-somd-dark font-inter text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Add to Calendar
              </button>
            </div>

            {/* Venue Details Card */}
            {(blok.venue_name || blok.venue_address) && (
              <div className="bg-somd-light-gray rounded-xl p-6 mt-4">
                <h3 className="font-ubuntu text-lg font-bold text-somd-dark mb-4">
                  Venue Details
                </h3>

                {/* Map Placeholder */}
                <div className="bg-somd-dark/5 rounded-lg aspect-[4/3] flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 4C11.58 4 8 7.58 8 12c0 6.5 8 14 8 14s8-7.5 8-14c0-4.42-3.58-8-8-8zm0 10.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                      fill="#c4161c"
                    />
                  </svg>
                </div>

                {blok.venue_name && (
                  <p className="font-ubuntu font-bold text-somd-dark text-sm mb-1">
                    {blok.venue_name}
                  </p>
                )}
                {blok.venue_address && (
                  <p className="font-inter text-sm text-somd-dark/50 leading-relaxed whitespace-pre-line">
                    {blok.venue_address}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
