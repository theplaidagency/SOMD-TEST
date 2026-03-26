import { storyblokEditable } from "@storyblok/react/rsc";

export default function StoryArticle({ blok }: { blok: any }) {
  const ctaUrl =
    blok.cta_link?.cached_url || blok.cta_link?.url || blok.cta_link || "#";

  return (
    <article {...storyblokEditable(blok)} className="bg-white">
      {/* Breadcrumb */}
      {(blok.breadcrumb_category || blok.breadcrumb_title) && (
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ol className="flex items-center space-x-2 font-inter text-sm text-gray-500">
            <li>
              <span className="hover:text-somd-red cursor-pointer">Home</span>
            </li>
            {blok.breadcrumb_category && (
              <>
                <li><span>/</span></li>
                <li>
                  <span className="hover:text-somd-red cursor-pointer">
                    {blok.breadcrumb_category}
                  </span>
                </li>
              </>
            )}
            {blok.breadcrumb_title && (
              <>
                <li><span>/</span></li>
                <li>
                  <span className="text-somd-dark font-medium">
                    {blok.breadcrumb_title}
                  </span>
                </li>
              </>
            )}
          </ol>
        </nav>
      )}

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {blok.title && (
          <h1 className="font-ubuntu text-3xl md:text-5xl font-bold text-somd-dark mb-4 leading-tight">
            {blok.title}
          </h1>
        )}
        {blok.subtitle && (
          <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
            {blok.subtitle}
          </p>
        )}

        {/* Author Row */}
        <div className="flex items-center gap-4 border-t border-b border-gray-200 py-4">
          {blok.author_photo?.filename && (
            <img
              src={blok.author_photo.filename}
              alt={blok.author_name || "Author"}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            {blok.author_name && (
              <p className="font-inter font-semibold text-somd-dark text-sm">
                {blok.author_name}
              </p>
            )}
            {blok.date && (
              <p className="font-inter text-gray-500 text-xs">{blok.date}</p>
            )}
          </div>
          <div className="ml-auto flex items-center gap-3">
            {/* Social share icon placeholders */}
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-somd-red hover:text-white transition-colors cursor-pointer text-xs">
              f
            </span>
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-somd-red hover:text-white transition-colors cursor-pointer text-xs">
              X
            </span>
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-somd-red hover:text-white transition-colors cursor-pointer text-xs">
              in
            </span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blok.featured_image?.filename && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <img
            src={blok.featured_image.filename}
            alt={blok.title || "Featured image"}
            className="w-full rounded-lg object-cover max-h-[500px]"
          />
        </div>
      )}

      {/* Body */}
      {blok.body && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="font-inter text-somd-dark leading-relaxed text-lg whitespace-pre-line">
            {blok.body}
          </div>
        </div>
      )}

      {/* CTA */}
      {blok.cta_text && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
          <a
            href={ctaUrl}
            className="inline-block bg-somd-red hover:bg-red-700 text-white font-inter font-semibold px-8 py-3 rounded transition-colors duration-200"
          >
            {blok.cta_text}
          </a>
        </div>
      )}
    </article>
  );
}
