import { storyblokEditable } from "@storyblok/react/rsc";

export default function AreaProgramCard({ blok }: { blok: any }) {
  return (
    <a
      {...storyblokEditable(blok)}
      href={blok.link?.cached_url || "#"}
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      {blok.image?.filename && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={blok.image.filename}
            alt={blok.image.alt || blok.name || ""}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {blok.location && (
          <div className="flex items-center gap-2 mb-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-somd-red flex-shrink-0"
            >
              <path
                d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
                fill="currentColor"
              />
            </svg>
            <span className="font-inter text-sm text-gray-500">
              {blok.location}
            </span>
          </div>
        )}
        <h3 className="font-ubuntu text-xl font-bold text-somd-dark group-hover:text-somd-red transition-colors">
          {blok.name}
        </h3>
      </div>
    </a>
  );
}
