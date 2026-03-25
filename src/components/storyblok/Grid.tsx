import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Grid({ blok }: { blok: any }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6"
    >
      {blok.columns?.map((nestedBlok: any) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
