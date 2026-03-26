import { storyblokEditable } from "@storyblok/react/rsc";

export default function ProgramCard({ blok }: { blok: any }) {
  return (
    <a
      {...storyblokEditable(blok)}
      href={blok.link?.cached_url || "#"}
      className="group relative block rounded-xl overflow-hidden aspect-[4/3]"
    >
      {/* Background Image */}
      {blok.image?.filename ? (
        <img
          src={blok.image.filename}
          alt={blok.title || "Program"}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="absolute inset-0 bg-somd-dark/20" />
      )}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Running Figure Icon */}
      <div className="absolute top-5 left-5 z-10">
        <div className="w-8 h-8 rounded-full bg-somd-red flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9.5 2.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM5.25 13l1-3.5L8 10.75v2.75h1.25v-3.75l-1.75-1.5.5-2.5A3.75 3.75 0 0010.75 7.5V6.25A2.72 2.72 0 008.5 5L7.25 4.25 6.5 7l-2.25-1V3.75H3v3.5L5.75 9l-.75 4h.25z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Content at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="font-ubuntu text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
          {blok.title || "Program Title"}
        </h3>
        <span className="font-inter text-white/80 text-sm font-medium inline-flex items-center gap-1 group-hover:text-white transition-colors">
          Learn More
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </a>
  );
}
