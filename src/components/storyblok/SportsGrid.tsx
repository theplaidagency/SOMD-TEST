import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function SportsGrid({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full bg-white py-20 md:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-dark leading-tight mb-4">
            {blok.heading}
          </h2>
          {blok.description && (
            <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              {blok.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blok.sports?.map((sport: any) => (
            <StoryblokServerComponent blok={sport} key={sport._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
