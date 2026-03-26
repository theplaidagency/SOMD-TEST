import { storyblokEditable } from "@storyblok/react/rsc";

export default function GivingCard({ blok }: { blok: any }) {
  const linkUrl =
    blok.link?.cached_url || blok.link?.url || blok.link || "#";

  return (
    <a
      href={linkUrl}
      {...storyblokEditable(blok)}
      className="group relative block h-72 rounded-lg overflow-hidden"
    >
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.title || "Giving option"}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {blok.title && (
          <h3 className="font-ubuntu font-bold text-2xl text-white mb-2">
            {blok.title}
          </h3>
        )}
        <span className="font-inter text-sm text-white flex items-center gap-1 group-hover:gap-2 transition-all">
          More Info
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
