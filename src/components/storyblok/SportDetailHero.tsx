import { storyblokEditable } from "@storyblok/react/rsc";

export default function SportDetailHero({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full h-[600px] md:h-[700px] bg-somd-dark overflow-hidden flex items-end"
    >
      {/* Background image */}
      {blok.background_image?.filename && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${blok.background_image.filename})`,
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-somd-dark via-somd-dark/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
        <h1 className="font-ubuntu text-6xl md:text-[80px] font-bold leading-[0.95] text-white mb-6">
          {blok.sport_name}
        </h1>
        {blok.description && (
          <p className="font-inter text-white/80 text-lg max-w-lg mb-8 leading-relaxed">
            {blok.description}
          </p>
        )}
        {blok.cta_text && (
          <a
            href={blok.cta_link?.cached_url || "#"}
            className="inline-block bg-somd-red text-white font-medium px-8 py-4 rounded-full hover:bg-red-700 transition-colors"
          >
            {blok.cta_text}
          </a>
        )}
      </div>
    </section>
  );
}
