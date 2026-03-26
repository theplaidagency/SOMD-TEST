import { storyblokEditable } from "@storyblok/react/rsc";

export default function SportCard({ blok }: { blok: any }) {
  return (
    <a
      {...storyblokEditable(blok)}
      href={blok.link?.cached_url || "#"}
      className="group relative block rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-shadow"
    >
      {blok.image?.filename && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || blok.name || ""}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-somd-dark/80 via-somd-dark/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <span className="font-ubuntu text-xl font-bold text-white">
          {blok.name}
        </span>
        <span className="w-10 h-10 rounded-full bg-somd-red flex items-center justify-center group-hover:translate-x-1 transition-transform">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-white"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
