import { storyblokEditable } from "@storyblok/react/rsc";

export default function CtaCard({ blok }: { blok: any }) {
  const defaultImages: Record<number, string> = {
    0: "/images/cta-athlete.png",
    1: "/images/cta-volunteer.png",
    2: "/images/cta-supporter.png",
  };

  return (
    <div {...storyblokEditable(blok)} className="group">
      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
        <img
          src={blok.image?.filename || defaultImages[0]}
          alt={blok.title || ""}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="font-ubuntu text-2xl font-bold text-somd-black mb-3">
        {blok.title || "Be an Athlete"}
      </h3>
      <p className="text-somd-black/70 text-base leading-relaxed mb-4">
        {blok.description || "Lorem ipsum sit dolor et sit amet consequitor filae sit dolor et sit. Lorem ipsum sit dolor et sit amet."}
      </p>
      <a
        href={blok.link?.cached_url || "#"}
        className="text-somd-red font-medium text-sm hover:underline inline-flex items-center gap-1"
      >
        Learn More <span>&rsaquo;</span>
      </a>
    </div>
  );
}
