import { storyblokEditable } from "@storyblok/react/rsc";

export default function QuoteSection({ blok }: { blok: any }) {
  const defaultImages = [
    "/images/quote-img1.png",
    "/images/quote-img2.png",
    "/images/quote-img3.png",
    "/images/quote-img4.png",
    "/images/quote-img5.png",
    "/images/quote-img6.png",
  ];

  const images = blok.images?.length
    ? blok.images.map((img: any) => img.filename)
    : defaultImages;

  return (
    <section
      {...storyblokEditable(blok)}
      className="relative w-full h-[900px] bg-somd-dark overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-12 h-full flex items-center">
        {/* Quote side */}
        <div className="w-1/2 pr-12">
          {/* Quote mark */}
          <img
            src="/images/quote-mark.png"
            alt=""
            className="w-28 mb-8 opacity-80"
          />
          <blockquote className="font-ubuntu text-[40px] font-bold text-white leading-[1.15] mb-10">
            {blok.quote || "Let me win. But if I cannot win, let me brave in the attempt."}
          </blockquote>
          <div className="flex items-center gap-4">
            <img
              src="/images/logomark.png"
              alt="SOMD"
              className="w-14 h-14"
            />
            <p className="text-white/60 text-sm">
              {blok.attribution || "Special Olympics Athlete Oath"}
            </p>
          </div>
        </div>

        {/* Image mosaic */}
        <div className="w-1/2 h-full flex gap-4 items-center py-12">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-[236px] rounded-lg overflow-hidden">
              <img src={images[0]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[389px] rounded-lg overflow-hidden">
              <img src={images[1]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[320px] rounded-lg overflow-hidden">
              <img src={images[2]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right column */}
          <div className="flex-1 flex flex-col gap-4 -mt-24">
            <div className="h-[236px] rounded-lg overflow-hidden">
              <img src={images[3]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[389px] rounded-lg overflow-hidden">
              <img src={images[4]} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-[236px] rounded-lg overflow-hidden">
              <img src={images[5]} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlays for mosaic edges */}
      <div className="absolute top-0 right-0 w-1/2 h-72 bg-gradient-to-b from-somd-dark to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-72 bg-gradient-to-t from-somd-dark to-transparent pointer-events-none" />
    </section>
  );
}
