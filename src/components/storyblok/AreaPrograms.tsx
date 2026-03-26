import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function AreaPrograms({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full bg-somd-light-gray py-20 md:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-dark leading-tight mb-4">
              {blok.heading}
            </h2>
            {blok.description && (
              <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-xl">
                {blok.description}
              </p>
            )}
          </div>
          {blok.cta_text && (
            <a
              href={blok.cta_link?.cached_url || "#"}
              className="inline-block bg-somd-red text-white font-medium px-8 py-4 rounded-full hover:bg-red-700 transition-colors whitespace-nowrap"
            >
              {blok.cta_text}
            </a>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.programs?.map((program: any) => (
            <StoryblokServerComponent blok={program} key={program._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
