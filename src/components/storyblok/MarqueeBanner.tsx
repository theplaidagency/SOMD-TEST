import { storyblokEditable } from "@storyblok/react/rsc";

export default function MarqueeBanner({ blok }: { blok: any }) {
  const text = blok.text || "CHAMPION BE A CHAMPION BE A ";

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full h-[500px] bg-somd-dark overflow-hidden flex items-end"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${blok.background_image?.filename || "/images/marquee-bg.png"})`,
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-somd-dark via-somd-dark/80 to-transparent" />

      {/* Scrolling text */}
      <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          <span className="text-[120px] font-ubuntu font-bold text-white/10 uppercase tracking-tight">
            {text.repeat(5)}
          </span>
        </div>
      </div>
    </section>
  );
}
