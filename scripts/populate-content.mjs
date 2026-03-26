/**
 * Populate Home story with default content matching the component fallbacks.
 * Run once: node scripts/populate-content.mjs
 */

const SPACE_ID = "291398370704226";
const PERSONAL_ACCESS_TOKEN =
  "LRDGHQcJeXgXfT799Dr9Bgtt-158774195208479-zBgMWScuLDqsNX53xMMP";
const STORY_ID = "158774304286523";
const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  Authorization: PERSONAL_ACCESS_TOKEN,
  "Content-Type": "application/json",
};

async function main() {
  // Fetch current story to preserve UIDs
  console.log("🔍 Fetching current story...");
  const res = await fetch(`${API_BASE}/stories/${STORY_ID}`, { headers });
  const { story } = await res.json();
  const body = story.content.body;

  // Build a map of component -> existing blok (to preserve _uid)
  const blokMap = {};
  for (const b of body) {
    blokMap[b.component] = b._uid;
  }

  console.log("📝 Populating content...\n");

  const updatedBody = [
    // ── Nav ──
    {
      _uid: blokMap.nav,
      component: "nav",
      top_link_text: "Find a Local Program",
    },

    // ── Hero ──
    {
      _uid: blokMap.hero,
      component: "hero",
      headline: "Experience\nInclusion",
      subtitle:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris nostra libero scelerisque ipsum consequat.",
      cta_primary_text: "Find Sports & Activities",
      cta_primary_link: { id: "", url: "#", linktype: "url", cached_url: "#" },
      cta_secondary_text: "How to Help",
      cta_secondary_link: {
        id: "",
        url: "#",
        linktype: "url",
        cached_url: "#",
      },
    },

    // ── Mission Statement ──
    {
      _uid: blokMap.mission_statement,
      component: "mission_statement",
      intro_text: "Together, we're building\na more inclusive Maryland.",
      eyebrow: "Through sport, creating a world",
      headline_red: "Where opportunity",
      headline_red_italic: "isn't limited",
      headline_black: "by disability",
    },

    // ── Marquee Banner ──
    {
      _uid: blokMap.marquee_banner,
      component: "marquee_banner",
      text: "CHAMPION BE A CHAMPION BE A ",
    },

    // ── CTA Cards ──
    {
      _uid: blokMap.cta_cards,
      component: "cta_cards",
      heading: "Get Involved",
      cards: [
        {
          _uid: crypto.randomUUID(),
          component: "cta_card",
          title: "Be an Athlete",
          description:
            "Lorem ipsum sit dolor et sit amet consequitor filae sit dolor et sit. Lorem ipsum sit dolor et sit amet.",
          link: { id: "", url: "#", linktype: "url", cached_url: "#" },
        },
        {
          _uid: crypto.randomUUID(),
          component: "cta_card",
          title: "Be a Volunteer",
          description:
            "Lorem ipsum sit dolor et sit amet consequitor filae sit dolor et sit. Lorem ipsum sit dolor et sit amet.",
          link: { id: "", url: "#", linktype: "url", cached_url: "#" },
        },
        {
          _uid: crypto.randomUUID(),
          component: "cta_card",
          title: "Be a Supporter",
          description:
            "Lorem ipsum sit dolor et sit amet consequitor filae sit dolor et sit. Lorem ipsum sit dolor et sit amet.",
          link: { id: "", url: "#", linktype: "url", cached_url: "#" },
        },
      ],
    },

    // ── Athlete Spotlight ──
    {
      _uid: blokMap.athlete_spotlight,
      component: "athlete_spotlight",
      first_name: "James",
      last_name: "Dearborn",
      county: "Anne Arundel County",
      sport: "Basketball",
      athlete_number: "24",
      cta_text: "Learn More",
      link: { id: "", url: "#", linktype: "url", cached_url: "#" },
    },

    // ── Impact Stats ──
    {
      _uid: blokMap.impact_stats,
      component: "impact_stats",
      heading: "Our Impact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      cta_text: "Ways to Give",
      cta_link: { id: "", url: "#", linktype: "url", cached_url: "#" },
      stats: [
        {
          _uid: crypto.randomUUID(),
          component: "stat_card",
          number: "256",
          label: "Sports Offered",
          highlight: false,
        },
        {
          _uid: crypto.randomUUID(),
          component: "stat_card",
          number: "421",
          label: "Athletes & Unified Teammates",
          highlight: true,
        },
        {
          _uid: crypto.randomUUID(),
          component: "stat_card",
          number: "152",
          label: "Volunteers",
          highlight: false,
        },
      ],
    },

    // ── Quote Section ──
    {
      _uid: blokMap.quote_section,
      component: "quote_section",
      quote:
        "Let me win. But if I cannot win, let me brave in the attempt.",
      attribution: "Special Olympics Athlete Oath",
    },

    // ── Events Section ──
    {
      _uid: blokMap.events_section,
      component: "events_section",
      heading: "Upcoming Events",
      cta_text: "All Events",
      cta_link: { id: "", url: "#", linktype: "url", cached_url: "#" },
      events: [
        {
          _uid: crypto.randomUUID(),
          component: "event_card",
          title: "Polar Bear Plunge",
          description:
            "For the past 28 years, thousands of plungers have jumped into the icy waters of the Chesapeake Bay all in support of Special Olympics Maryland.",
          link: { id: "", url: "#", linktype: "url", cached_url: "#" },
        },
        {
          _uid: crypto.randomUUID(),
          component: "event_card",
          title: "Volunteer With Us",
          description:
            "Lorem ipsum sit dolor et sit amet consequitor filae sit dolor et sit. Lorem ipsum sit dolor et sit amet.",
          link: { id: "", url: "#", linktype: "url", cached_url: "#" },
        },
        {
          _uid: crypto.randomUUID(),
          component: "event_card",
          title: "Deep Creek Dunk",
          description:
            "Join us for the 26th Deep Creek Dunk on Saturday, February 22nd, 2025 at Deep Creek Lake. Join us for a full weekend of fun.",
          link: { id: "", url: "#", linktype: "url", cached_url: "#" },
        },
      ],
    },

    // ── Footer ──
    {
      _uid: blokMap.footer,
      component: "footer",
      address: "3701 Commerce Drive #103\nBaltimore, Maryland 21227",
      phone: "410-242-1515",
      copyright:
        "\u00a9 2025 Copyright Special Olympics Maryland. All Rights Reserved.",
    },
  ];

  // Update the story
  const updateRes = await fetch(`${API_BASE}/stories/${STORY_ID}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      story: {
        content: {
          _uid: story.content._uid,
          component: "page",
          body: updatedBody,
        },
      },
      publish: 1,
    }),
  });

  if (!updateRes.ok) {
    const err = await updateRes.text();
    console.error("❌ Failed to update story:", err);
    process.exit(1);
  }

  console.log("✅ Home story populated with default content and published!");
  console.log(
    "   Open the visual editor in Storyblok to see the pre-filled fields."
  );
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
