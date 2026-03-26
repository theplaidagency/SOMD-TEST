import { storyblokEditable } from "@storyblok/react/rsc";

export default function ContactPerson({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        {blok.heading && (
          <h2 className="font-ubuntu text-2xl md:text-3xl font-bold text-somd-dark mb-8">
            {blok.heading}
          </h2>
        )}
        {blok.photo?.filename && (
          <img
            src={blok.photo.filename}
            alt={blok.name || "Contact person"}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
          />
        )}
        {blok.name && (
          <p className="font-ubuntu font-bold text-lg text-somd-dark">
            {blok.name}
          </p>
        )}
        {blok.title && (
          <p className="font-inter text-gray-500 text-sm mt-1">{blok.title}</p>
        )}
        {blok.phone && (
          <a
            href={`tel:${blok.phone}`}
            className="font-inter text-somd-red hover:underline text-sm mt-2 inline-block"
          >
            {blok.phone}
          </a>
        )}
      </div>
    </section>
  );
}
