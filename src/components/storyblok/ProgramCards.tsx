import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function ProgramCards({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {blok.cards?.map((nestedBlok: any) => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
