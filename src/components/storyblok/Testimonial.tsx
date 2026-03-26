import { storyblokEditable } from "@storyblok/react/rsc";

export default function Testimonial({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full bg-somd-light-gray py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* Quote side */}
        <div className="lg:w-1/2">
          {blok.eyebrow && (
            <span className="font-inter text-sm font-semibold uppercase tracking-widest text-somd-red mb-4 block">
              {blok.eyebrow}
            </span>
          )}
          <blockquote className="font-ubuntu text-3xl md:text-4xl font-bold text-somd-dark leading-snug mb-8">
            &ldquo;{blok.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            {blok.attribution_photo?.filename && (
              <img
                src={blok.attribution_photo.filename}
                alt={blok.attribution_name || ""}
                className="w-14 h-14 rounded-full object-cover border-2 border-somd-red"
              />
            )}
            <div>
              <p className="font-ubuntu font-bold text-somd-dark text-lg">
                {blok.attribution_name}
              </p>
              {blok.attribution_detail && (
                <p className="font-inter text-gray-500 text-sm">
                  {blok.attribution_detail}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Image composite side */}
        <div className="lg:w-1/2 relative">
          {blok.main_image?.filename && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blok.main_image.filename}
                alt={blok.attribution_name || "Testimonial"}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-somd-dark/20 to-transparent" />
            </div>
          )}
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-somd-red/10 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
