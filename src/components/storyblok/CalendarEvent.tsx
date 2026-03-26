import { storyblokEditable } from "@storyblok/react/rsc";

export default function CalendarEvent({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)}>
      {/* Month grouping header */}
      {blok.month && (
        <h3 className="font-ubuntu text-lg font-bold text-somd-dark/40 uppercase tracking-wider mb-4 mt-8 first:mt-0">
          {blok.month}
        </h3>
      )}

      <div className="bg-white rounded-lg border border-somd-dark/8 border-l-4 border-l-somd-red shadow-sm hover:shadow-md transition-shadow flex items-stretch overflow-hidden">
        {/* Date Column */}
        <div className="flex flex-col items-center justify-center px-6 py-6 min-w-[100px] bg-white">
          {blok.day_of_week && (
            <span className="font-inter text-xs font-medium text-somd-dark/50 uppercase tracking-wide">
              {blok.day_of_week}
            </span>
          )}
          <span className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-red leading-none my-1">
            {blok.day_number || "01"}
          </span>
          {blok.month && (
            <span className="font-inter text-xs text-somd-dark/40 uppercase">
              {blok.month}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="w-px bg-somd-dark/8 my-4" />

        {/* Content */}
        <div className="flex-1 px-6 py-5 flex flex-col justify-center">
          {blok.time && (
            <span className="font-inter text-xs text-somd-red font-medium mb-1.5 uppercase tracking-wide">
              {blok.time}
            </span>
          )}
          <h4 className="font-ubuntu text-lg md:text-xl font-bold text-somd-dark mb-1.5">
            {blok.title || "Event Title"}
          </h4>
          {blok.location && (
            <div className="flex items-center gap-1.5 mb-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-somd-dark/40 shrink-0">
                <path
                  d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 7 4 7s4-3.75 4-7c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 117 3.5a1.5 1.5 0 010 3z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-inter text-sm text-somd-dark/50">
                {blok.location}
              </span>
            </div>
          )}
          {blok.description && (
            <p className="font-inter text-sm text-somd-dark/60 leading-relaxed line-clamp-2">
              {blok.description}
            </p>
          )}
        </div>

        {/* Optional Image */}
        {blok.image?.filename && (
          <div className="hidden md:block w-[180px] shrink-0">
            <img
              src={blok.image.filename}
              alt={blok.title || "Event image"}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
