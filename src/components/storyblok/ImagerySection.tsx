import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

export default function ImagerySection({ blok }: { blok: any }) {
  const images = blok.images || [];

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full bg-white py-20 md:py-28 overflow-hidden"
    >
      {/* Decorative arc */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[400px] rounded-[50%] bg-somd-light-gray/50 -z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8">
          {images.map((image: any, index: number) => {
            const stagger =
              index === 0
                ? "md:translate-y-8"
                : index === 2
                  ? "md:translate-y-8"
                  : "md:-translate-y-4";
            const src = image.filename || image.image?.filename;
            const alt = image.alt || image.image?.alt || `Image ${index + 1}`;

            return src ? (
              <div
                key={image._uid || image.id || index}
                className={`flex-1 max-w-[380px] rounded-2xl overflow-hidden shadow-lg transition-transform ${stagger}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-[420px] object-cover"
                />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
}
