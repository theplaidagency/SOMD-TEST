import { storyblokEditable } from "@storyblok/react/rsc";

export default function PersonCard({ blok }: { blok: any }) {
  return (
    <div {...storyblokEditable(blok)} className="text-center group">
      {blok.photo?.filename && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={blok.photo.filename}
            alt={`${blok.first_name} ${blok.last_name}`}
            className="w-full aspect-square object-cover rounded-lg"
          />
        </div>
      )}
      <h3 className="font-ubuntu font-bold text-lg text-somd-red">
        {blok.first_name} {blok.last_name}
      </h3>
      {blok.title && (
        <p className="font-inter text-gray-500 text-sm mt-1">{blok.title}</p>
      )}
      <div className="w-8 h-0.5 bg-somd-red mx-auto mt-3 mb-3" />
      {blok.email && (
        <a
          href={`mailto:${blok.email}`}
          className="font-inter text-sm text-somd-dark hover:text-somd-red transition-colors block"
        >
          {blok.email}
        </a>
      )}
      {blok.phone && (
        <a
          href={`tel:${blok.phone}`}
          className="font-inter text-sm text-somd-dark hover:text-somd-red transition-colors block mt-1"
        >
          {blok.phone}
        </a>
      )}
    </div>
  );
}
