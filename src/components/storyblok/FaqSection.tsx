import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function FaqSection({ blok }: { blok: any }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="w-full bg-white py-20 md:py-28"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        {/* Left: heading + accordion */}
        <div className="lg:w-1/2">
          <h2 className="font-ubuntu text-4xl md:text-5xl font-bold text-somd-dark leading-tight mb-4">
            {blok.heading}
          </h2>
          {blok.description && (
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-10">
              {blok.description}
            </p>
          )}
          <div className="divide-y divide-gray-200">
            {blok.faqs?.map((faq: any) => (
              <StoryblokServerComponent blok={faq} key={faq._uid} />
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="lg:w-1/2 flex items-start">
          {blok.image?.filename && (
            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src={blok.image.filename}
                alt={blok.image.alt || blok.heading || "FAQ"}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
