import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function ImpactStats({ blok }: { blok: any }) {
  const defaultStats = [
    { number: "256", label: "Sports Offered", icon: "running" },
    { number: "421", label: "Athletes & Unified Teammates", icon: "cycling" },
    { number: "152", label: "Volunteers", icon: "skiing" },
  ];

  return (
    <section {...storyblokEditable(blok)} className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-12 text-center">
        <h2 className="font-ubuntu text-[48px] font-bold text-somd-black mb-4">
          {blok.heading || "Our Impact"}
        </h2>
        <p className="text-somd-black/60 text-base max-w-xl mx-auto mb-16 leading-relaxed">
          {blok.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blok.stats?.length > 0
            ? blok.stats.map((stat: any) => (
                <StoryblokServerComponent blok={stat} key={stat._uid} />
              ))
            : defaultStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-somd-gray rounded-2xl p-10 text-left relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 ${i === 1 ? "bg-somd-red" : "bg-gray-300"}`} />
                  <div className="text-somd-red mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
                    </svg>
                  </div>
                  <p className="font-ubuntu text-[64px] font-bold text-somd-black leading-none mb-2">
                    {stat.number}
                  </p>
                  <p className="text-somd-black/70 font-medium text-base">
                    {stat.label}
                  </p>
                  <div className="w-8 h-0.5 bg-gray-300 mt-4" />
                </div>
              ))}
        </div>

        <a
          href={blok.cta_link?.cached_url || "#"}
          className="inline-block bg-somd-red text-white font-medium px-10 py-4 rounded-full hover:bg-red-700 transition-colors"
        >
          {blok.cta_text || "Ways to Give"}
        </a>
      </div>
    </section>
  );
}
