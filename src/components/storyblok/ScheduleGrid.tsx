import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function ScheduleGrid({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-dark mb-2">
            {blok.heading || "Schedule"}
          </h2>
          {blok.year && (
            <span className="font-inter text-xl text-somd-red font-medium">
              {blok.year}
            </span>
          )}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {blok.events?.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
