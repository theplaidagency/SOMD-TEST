import { storyblokEditable } from "@storyblok/react/rsc";

export default function Feature({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className="p-6">
      <h2 className="text-xl font-semibold text-gray-800">{blok.name}</h2>
    </div>
  );
}
