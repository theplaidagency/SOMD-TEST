import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function CtaCards({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-12">
        <h2 className="font-ubuntu text-[48px] font-bold text-center text-somd-black mb-16">
          {blok.heading || "Get Involved"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blok.cards?.map((card: any) => (
            <StoryblokServerComponent blok={card} key={card._uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
