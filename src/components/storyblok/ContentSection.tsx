import { storyblokEditable } from "@storyblok/react/rsc";

export default function ContentSection({ blok }: { blok: any }) {
  const imageOnLeft = blok.image_position === "left";

  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full bg-white py-20 md:py-28"
    >
      <div
        className={`max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 ${
          imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="lg:w-1/2">
          {blok.image?.filename && (
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || blok.heading || ""}
                className="w-full h-[480px] object-cover"
              />
            </div>
          )}
        </div>

        {/* Text content */}
        <div className="lg:w-1/2">
          {blok.eyebrow && (
            <span className="font-inter text-sm font-semibold uppercase tracking-widest text-somd-red mb-4 block">
              {blok.eyebrow}
            </span>
          )}
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-dark leading-tight mb-6">
            {blok.heading}
          </h2>
          {blok.description && (
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8 whitespace-pre-line">
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
      </div>
    </section>
  );
}
