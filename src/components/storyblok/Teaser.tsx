import { storyblokEditable } from "@storyblok/react/rsc";

export default function Teaser({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className="py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900">{blok.headline}</h1>
    </div>
  );
}
