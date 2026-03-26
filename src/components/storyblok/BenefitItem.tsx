import { storyblokEditable } from "@storyblok/react/rsc";

export default function BenefitItem({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className="text-center p-6">
      {/* Red icon placeholder */}
      <div className="w-14 h-14 bg-somd-red rounded-full mx-auto mb-5 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      {blok.heading && (
        <h3 className="font-ubuntu font-bold text-lg text-somd-dark mb-2">
          {blok.heading}
        </h3>
      )}
      {blok.description && (
        <p className="font-inter text-gray-600 text-sm leading-relaxed">
          {blok.description}
        </p>
      )}
    </div>
  );
}
