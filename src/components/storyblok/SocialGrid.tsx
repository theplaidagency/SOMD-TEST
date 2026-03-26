import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function SocialGrid({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {blok.heading && (
          <h2 className="font-ubuntu text-3xl md:text-4xl font-bold text-somd-dark text-center mb-12">
            {blok.heading}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blok.accounts?.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
