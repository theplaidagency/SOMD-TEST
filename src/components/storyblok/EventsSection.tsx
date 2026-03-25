import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

export default function EventsSection({ blok }: { blok: any }) {
  const defaultEvents = [
    {
      _uid: "e1",
      component: "event_card",
      title: "Polar Bear Plunge",
      description: "For the past 28 years, thousands of plungers have jumped into the icy waters of the Chesapeake Bay all in support of Special Olympics Maryland.",
      image: "/images/event1.png",
    },
    {
      _uid: "e2",
      component: "event_card",
      title: "Volunteer With Us",
      description: "Lorem ipsum sit dolor et sit amet consequitor filae sit dolor et sit. Lorem ipsum sit dolor et sit amet.",
      image: "/images/event2.png",
    },
    {
      _uid: "e3",
      component: "event_card",
      title: "Deep Creek Dunk",
      description: "Join us for the 26th Deep Creek Dunk on Saturday, February 22nd, 2025 at Deep Creek Lake. Join us for a full weekend of fun.",
      image: "/images/event3.png",
    },
  ];

  const events = blok.events?.length ? blok.events : null;

  return (
    <section {...storyblokEditable(blok)} className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-ubuntu text-[48px] font-bold text-somd-black">
            {blok.heading || "Upcoming Events"}
          </h2>
          <a
            href={blok.cta_link?.cached_url || "#"}
            className="bg-somd-red text-white font-medium px-8 py-3 rounded-full hover:bg-red-700 transition-colors text-sm"
          >
            {blok.cta_text || "All Events"}
          </a>
        </div>

        <div className="h-px bg-gray-200 mb-12" />

        {/* Events scroll */}
        <div className="flex gap-8 overflow-x-auto pb-4 -mx-2 px-2 snap-x">
          {events
            ? events.map((event: any) => (
                <StoryblokServerComponent blok={event} key={event._uid} />
              ))
            : defaultEvents.map((event) => (
                <div key={event._uid} className="min-w-[380px] snap-start">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-ubuntu text-xl font-bold text-somd-black mb-3">
                    {event.title}
                  </h3>
                  <p className="text-somd-black/70 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <a href="#" className="text-somd-red font-medium text-sm hover:underline inline-flex items-center gap-1">
                    Learn More <span>&rsaquo;</span>
                  </a>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
