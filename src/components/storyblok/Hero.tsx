import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full h-[1000px] bg-somd-dark overflow-hidden flex items-end"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${blok.background_image?.filename || "/images/hero-bg.png"})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-12 pb-24">
        <h1 className="font-ubuntu text-[80px] font-bold leading-[0.95] text-white mb-6">
          {blok.headline || "Experience\nInclusion"}
        </h1>
        <p className="text-white/80 text-lg max-w-md mb-8 leading-relaxed">
          {blok.subtitle || "Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nostra libero scelerisque ipsum consequat."}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={blok.cta_primary_link?.cached_url || "#"}
            className="bg-somd-red text-white font-medium px-8 py-4 rounded-full hover:bg-red-700 transition-colors"
          >
            {blok.cta_primary_text || "Find Sports & Activities"}
          </a>
          <a
            href={blok.cta_secondary_link?.cached_url || "#"}
            className="border border-white/40 text-white/80 font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
          >
            {blok.cta_secondary_text || "How to Help"}
          </a>
        </div>
      </div>
    </section>
  );
}
