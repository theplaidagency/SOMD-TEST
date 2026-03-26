import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function NumberedSteps({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full bg-white py-20 md:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        {/* Steps on the left */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-6 lg:w-3/5">
          {blok.steps?.map((step: any) => (
            <StoryblokServerComponent blok={step} key={step._uid} />
          ))}
        </div>

        {/* Content on the right */}
        <div className="lg:w-2/5 flex flex-col justify-center">
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-dark leading-tight mb-6">
            {blok.heading}
          </h2>
          {blok.description && (
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
              {blok.description}
            </p>
          )}
          <div className="flex items-center gap-4">
            {blok.cta_primary_text && (
              <a
                href={blok.cta_primary_link?.cached_url || "#"}
                className="bg-somd-red text-white font-medium px-8 py-4 rounded-full hover:bg-red-700 transition-colors"
              >
                {blok.cta_primary_text}
              </a>
            )}
            {blok.cta_secondary_text && (
              <a
                href={blok.cta_secondary_link?.cached_url || "#"}
                className="border border-somd-dark/20 text-somd-dark font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
              >
                {blok.cta_secondary_text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
