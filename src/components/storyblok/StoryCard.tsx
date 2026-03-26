import { storyblokEditable } from "@storyblok/react/rsc";

export default function StoryCard({ blok }: { blok: any }) {
  const linkUrl =
    blok.link?.cached_url || blok.link?.url || blok.link || "#";

  return (
    <a
      href={linkUrl}
      {...storyblokEditable(blok)}
      className="group block bg-somd-dark border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-200"
    >
      {blok.image?.filename && (
        <div className="overflow-hidden">
          <img
            src={blok.image.filename}
            alt={blok.title || "Story"}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        {blok.title && (
          <h3 className="font-ubuntu font-bold text-lg text-white mb-2 group-hover:text-somd-red transition-colors">
            {blok.title}
          </h3>
        )}
        {blok.description && (
          <p className="font-inter text-gray-400 text-sm leading-relaxed line-clamp-3">
            {blok.description}
          </p>
        )}
      </div>
    </a>
  );
}
