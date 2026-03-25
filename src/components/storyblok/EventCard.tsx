import { storyblokEditable } from "@storyblok/react/rsc";

export default function EventCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className="min-w-[380px] snap-start">
      <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
        <img
          src={blok.image?.filename || ""}
          alt={blok.title || ""}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-ubuntu text-xl font-bold text-somd-black mb-3">
        {blok.title || "Event Title"}
      </h3>
      <p className="text-somd-black/70 text-sm leading-relaxed mb-4">
        {blok.description || "Event description"}
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
