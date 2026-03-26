import { storyblokEditable } from "@storyblok/react/rsc";

export default function ScheduleItem({ blok }: { blok: any }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="bg-white rounded-lg border border-somd-dark/8 border-l-4 border-l-somd-red p-5 hover:shadow-md transition-shadow"
    >
      {/* Date */}
      {blok.date && (
        <p className="font-ubuntu text-sm font-bold text-somd-red mb-2">
          {blok.date}
        </p>
      )}

      {/* County */}
      <h4 className="font-ubuntu text-base font-bold text-somd-dark mb-2 leading-snug">
        {blok.county || "Location"}
      </h4>

      {/* Details */}
      <div className="space-y-1">
        {blok.event_type && (
          <p className="font-inter text-sm text-somd-dark/50">
            {blok.event_type}
          </p>
        )}
        {blok.location && (
          <p className="font-inter text-sm text-somd-dark/50 flex items-start gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-somd-dark/30 shrink-0 mt-0.5">
              <path
                d="M6 1C4.07 1 2.5 2.57 2.5 4.5 2.5 7.25 6 10 6 10s3.5-2.75 3.5-5.5C9.5 2.57 7.93 1 6 1zm0 4.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                fill="currentColor"
              />
            </svg>
            {blok.location}
          </p>
        )}
        {blok.time && (
          <p className="font-inter text-sm text-somd-dark/40 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-somd-dark/30 shrink-0">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
              <path d="M6 3v3l2 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            {blok.time}
          </p>
        )}
      </div>
    </div>
  );
}
