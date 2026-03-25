import { storyblokEditable } from "@storyblok/react/rsc";

export default function AthleteSpotlight({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full h-[900px] bg-somd-dark overflow-hidden"
    >
      {/* Background image — spans left side */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${blok.photo?.filename || "/images/spotlight-athlete.png"})`,
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-somd-dark/90 via-somd-dark/50 to-transparent" />

      {/* Red vertical accent line */}
      <div className="absolute right-[60px] top-0 bottom-0 w-px bg-somd-red" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-12 h-full flex flex-col justify-center">
        {/* County label */}
        <div className="flex items-center gap-4 mb-6 justify-end pr-20">
          <div className="h-px w-24 bg-white/30" />
          <span className="text-white/70 text-sm tracking-wider">
            {blok.county || "Anne Arundel County"}
          </span>
        </div>

        {/* Name */}
        <div className="text-center">
          <h2 className="font-ubuntu text-[96px] font-bold leading-[0.9] text-white">
            {blok.first_name || "James"}
          </h2>
          <h2 className="font-ubuntu text-[96px] font-bold leading-[0.9] text-somd-red italic">
            {blok.last_name || "Dearborn"}
          </h2>

          {/* CTA */}
          <a
            href={blok.link?.cached_url || "#"}
            className="inline-block mt-8 bg-somd-red text-white font-medium px-10 py-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            {blok.cta_text || "Learn More"}
          </a>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Our Stories</span>
            <div className="h-px w-48 bg-white/20" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white border border-white/30 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
              {blok.sport || "Basketball"}
            </span>
          </div>
        </div>
      </div>

      {/* Large faded number background decoration */}
      <div className="absolute bottom-0 left-0 font-ubuntu text-[300px] font-bold text-white/5 leading-none pointer-events-none">
        {blok.athlete_number || "24"}
      </div>
    </section>
  );
}
