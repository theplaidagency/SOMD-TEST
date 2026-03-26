import { storyblokEditable } from "@storyblok/react/rsc";

export default function VideoSection({ blok }: { blok: any }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-white py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6">
        {/* Heading */}
        {blok.heading && (
          <h2 className="font-ubuntu text-3xl md:text-4xl font-bold text-somd-dark text-center mb-3">
            {blok.heading}
          </h2>
        )}
        {blok.description && (
          <p className="font-inter text-somd-dark/60 text-base text-center leading-relaxed max-w-xl mx-auto mb-10">
            {blok.description}
          </p>
        )}

        {/* Video Container */}
        <div className="relative rounded-xl overflow-hidden aspect-video bg-somd-dark/5">
          {blok.video_url ? (
            <>
              {blok.thumbnail?.filename ? (
                <a
                  href={blok.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full group"
                >
                  <img
                    src={blok.thumbnail.filename}
                    alt={blok.heading || "Video thumbnail"}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-somd-red flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <path d="M8 5v14l11-7L8 5z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </a>
              ) : (
                <a
                  href={blok.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full group"
                >
                  <div className="w-full h-full bg-somd-dark/5 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-somd-red flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <path d="M8 5v14l11-7L8 5z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </a>
              )}
            </>
          ) : (
            /* No video URL - static placeholder */
            <div className="w-full h-full bg-somd-dark/5 flex items-center justify-center">
              {blok.thumbnail?.filename ? (
                <>
                  <img
                    src={blok.thumbnail.filename}
                    alt={blok.heading || "Video thumbnail"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-somd-red flex items-center justify-center shadow-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <path d="M8 5v14l11-7L8 5z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-somd-dark/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1 text-somd-dark/30">
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
