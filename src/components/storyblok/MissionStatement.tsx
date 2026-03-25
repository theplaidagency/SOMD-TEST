import { storyblokEditable } from "@storyblok/react/rsc";

export default function MissionStatement({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="relative w-full">
      {/* Top intro */}
      <div className="bg-white py-16 text-center">
        <p className="text-somd-black/70 text-lg max-w-md mx-auto leading-relaxed">
          {blok.intro_text || "Together, we're building\na more inclusive Maryland."}
        </p>
        {/* Vertical divider */}
        <div className="w-px h-28 bg-gray-300 mx-auto mt-8" />
      </div>

      {/* Mission hero with ski image */}
      <div className="relative h-[1085px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${blok.background_image?.filename || "/images/ski-cutout.png"})`,
          }}
        />

        {/* Snow overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url(/images/snow-particles.png)" }}
        />

        {/* Text overlay */}
        <div className="absolute top-20 left-12 z-10">
          <p className="text-somd-black/60 text-lg mb-2 font-ubuntu">
            {blok.eyebrow || "Through sport, creating a world"}
          </p>
          <h2 className="font-ubuntu text-[72px] font-bold leading-[1.05]">
            <span className="text-somd-red">{blok.headline_red || "Where opportunity"}</span>
            <br />
            <span className="text-somd-red italic">{blok.headline_red_italic || "isn't limited"}</span>{" "}
            <span className="text-somd-black font-bold">{blok.headline_black || "by disability"}</span>
          </h2>
        </div>

        {/* Arc decoration */}
        <div className="absolute bottom-0 right-0 w-full">
          <img src="/images/arc.png" alt="" className="w-full" />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-40 bg-white" />
    </section>
  );
}
