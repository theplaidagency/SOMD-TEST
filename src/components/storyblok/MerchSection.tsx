import { storyblokEditable } from "@storyblok/react/rsc";

export default function MerchSection({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            {blok.eyebrow && (
              <span className="font-inter text-sm font-semibold text-somd-red uppercase tracking-widest mb-3 block">
                {blok.eyebrow}
              </span>
            )}
            <h2 className="font-ubuntu text-3xl md:text-4xl lg:text-5xl font-bold italic text-somd-dark leading-tight mb-5">
              {blok.heading || "Shop Our Gear"}
            </h2>
            {blok.description && (
              <p className="font-inter text-somd-dark/65 text-base leading-relaxed mb-8 max-w-lg">
                {blok.description}
              </p>
            )}
            {blok.cta_text && (
              <a
                href={blok.cta_link?.cached_url || "#"}
                className="inline-block bg-somd-red text-white font-inter font-medium px-8 py-3.5 rounded-full hover:bg-red-700 transition-colors"
              >
                {blok.cta_text}
              </a>
            )}
          </div>

          {/* Right: Product Image */}
          <div className="flex items-center justify-center">
            {blok.image?.filename ? (
              <img
                src={blok.image.filename}
                alt={blok.heading || "Merchandise"}
                className="w-full max-w-md object-contain"
              />
            ) : (
              <div className="w-full max-w-md aspect-square bg-somd-dark/5 rounded-xl flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-somd-dark/15">
                  <rect x="12" y="16" width="40" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M22 16c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
