import { storyblokEditable } from "@storyblok/react/rsc";

export default function PageHero({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full min-h-[900px] bg-white overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(196,22,28,0.06) 0%, transparent 60%), #ffffff",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-24 pb-12 text-center">
        <h1 className="font-ubuntu text-5xl md:text-[64px] font-bold leading-tight text-somd-dark mb-6">
          {blok.headline}
        </h1>
        {blok.subtitle && (
          <p className="font-inter text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {blok.subtitle}
          </p>
        )}
        <div className="flex items-center justify-center gap-4 mb-16">
          {blok.cta_primary_text && (
            <a
              href={blok.cta_primary_link?.cached_url || "#"}
              className="bg-somd-red text-white font-medium px-8 py-4 rounded-full hover:bg-red-700 transition-colors"
            >
              {blok.cta_primary_text}
            </a>
          )}
          {blok.cta_secondary_text && (
            <a
              href={blok.cta_secondary_link?.cached_url || "#"}
              className="border border-somd-dark/20 text-somd-dark font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              {blok.cta_secondary_text}
            </a>
          )}
        </div>
        {blok.image?.filename && (
          <div className="w-full rounded-2xl overflow-hidden shadow-xl">
            <img
              src={blok.image.filename}
              alt={blok.image.alt || blok.headline || ""}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
