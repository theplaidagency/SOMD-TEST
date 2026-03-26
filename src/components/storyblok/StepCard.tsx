import { storyblokEditable } from "@storyblok/react/rsc";

export default function StepCard({ blok }: { blok: any }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative flex-1 rounded-2xl border-t-4 border-somd-red p-8 bg-gradient-to-b from-somd-light-gray to-white"
    >
      <span className="font-ubuntu text-5xl font-bold text-somd-red/20 leading-none block mb-4">
        {blok.number || "01"}
      </span>
      <h3 className="font-ubuntu text-xl font-bold text-somd-dark mb-3">
        {blok.title}
      </h3>
      {blok.description && (
        <p className="font-inter text-gray-600 text-sm leading-relaxed">
          {blok.description}
        </p>
      )}
    </div>
  );
}
