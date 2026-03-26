import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function BenefitsGrid({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {blok.heading && (
          <h2 className="font-ubuntu text-3xl md:text-4xl font-bold text-somd-dark text-center mb-4">
            {blok.heading}
          </h2>
        )}
        {blok.description && (
          <p className="font-inter text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            {blok.description}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.benefits?.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
