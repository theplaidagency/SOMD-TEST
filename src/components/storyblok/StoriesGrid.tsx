import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function StoriesGrid({ blok }: { blok: any }) {
  const ctaUrl =
    blok.cta_link?.cached_url || blok.cta_link?.url || blok.cta_link || "#";

  return (
    <section {...storyblokEditable(blok)} className="bg-somd-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Breadcrumb + Heading + Description + Featured Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          <div>
            {blok.breadcrumb_category && (
              <nav className="mb-4">
                <ol className="flex items-center space-x-2 font-inter text-sm text-gray-400">
                  <li><span className="hover:text-white cursor-pointer">Home</span></li>
                  <li><span>/</span></li>
                  <li><span className="text-white">{blok.breadcrumb_category}</span></li>
                </ol>
              </nav>
            )}
            {blok.heading && (
              <h2 className="font-ubuntu text-3xl md:text-4xl font-bold text-white mb-4">
                {blok.heading}
              </h2>
            )}
            {blok.description && (
              <p className="font-inter text-gray-300 text-lg leading-relaxed">
                {blok.description}
              </p>
            )}
          </div>
          {blok.featured_image?.filename && (
            <div className="flex items-center">
              <img
                src={blok.featured_image.filename}
                alt={blok.heading || "Featured"}
                className="w-full rounded-lg object-cover max-h-80"
              />
            </div>
          )}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blok.stories?.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>

        {/* CTA */}
        {blok.cta_text && (
          <div className="text-center">
            <a
              href={ctaUrl}
              className="inline-block bg-somd-red hover:bg-red-700 text-white font-inter font-semibold px-8 py-3 rounded transition-colors duration-200"
            >
              {blok.cta_text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
