import { storyblokEditable } from "@storyblok/react/rsc";

export default function CtaBanner({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full h-[525px] bg-somd-dark overflow-hidden flex items-center justify-center"
    >
      {/* Background image overlay */}
      {blok.background_image?.filename && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${blok.background_image.filename})`,
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-somd-dark/80 to-somd-dark/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          {blok.heading}
        </h2>
        {blok.description && (
          <p className="font-inter text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {blok.description}
          </p>
        )}
        {blok.cta_text && (
          <a
            href={blok.cta_link?.cached_url || "#"}
            className="inline-block bg-somd-red text-white font-medium px-10 py-4 rounded-full hover:bg-red-700 transition-colors"
          >
            {blok.cta_text}
          </a>
        )}
      </div>
    </section>
  );
}
