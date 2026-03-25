/**
 * Storyblok Setup Script
 * Creates all component (blok) schemas and a Home story via the Management API.
 * Run once: node scripts/setup-storyblok.mjs
 */

const SPACE_ID = "291398370704226";
const PERSONAL_ACCESS_TOKEN =
  "LRDGHQcJeXgXfT799Dr9Bgtt-158774195208479-zBgMWScuLDqsNX53xMMP";
const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  Authorization: PERSONAL_ACCESS_TOKEN,
  "Content-Type": "application/json",
};

// ── Helper ──────────────────────────────────────────────────────────────────
async function api(path, method = "GET", body) {
  const url = `${API_BASE}${path}`;
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);
  const text = await res.text();

  if (!res.ok) {
    console.error(`${method} ${path} → ${res.status}`);
    console.error(text);
    throw new Error(`API error ${res.status}`);
  }

  return text ? JSON.parse(text) : null;
}

// Rate-limit helper — Storyblok allows ~3 req/s on free plan
function wait(ms = 400) {
  return new Promise((r) => setTimeout(r, ms));
}

// ── Component Definitions ───────────────────────────────────────────────────
// Each key becomes a blok name; `schema` maps field names to Storyblok field types.
// Docs: https://www.storyblok.com/docs/api/management/core-resources/components

const components = [
  // ── Nestable bloks (child components) ─────────────────────────
  {
    name: "cta_card",
    is_nestable: true,
    is_root: false,
    schema: {
      title: { type: "text", pos: 0 },
      description: { type: "textarea", pos: 1 },
      image: { type: "asset", filetypes: ["images"], pos: 2 },
      link: { type: "link", pos: 3 },
    },
  },
  {
    name: "stat_card",
    is_nestable: true,
    is_root: false,
    schema: {
      number: { type: "text", pos: 0 },
      label: { type: "text", pos: 1 },
      icon: { type: "asset", filetypes: ["images"], pos: 2 },
      highlight: { type: "boolean", pos: 3 },
    },
  },
  {
    name: "event_card",
    is_nestable: true,
    is_root: false,
    schema: {
      title: { type: "text", pos: 0 },
      description: { type: "textarea", pos: 1 },
      image: { type: "asset", filetypes: ["images"], pos: 2 },
      link: { type: "link", pos: 3 },
    },
  },

  // ── Section bloks (nestable inside page body) ─────────────────
  {
    name: "nav",
    is_nestable: true,
    is_root: false,
    schema: {
      top_link_text: { type: "text", pos: 0 },
      logo: { type: "asset", filetypes: ["images"], pos: 1 },
    },
  },
  {
    name: "hero",
    is_nestable: true,
    is_root: false,
    schema: {
      headline: { type: "text", pos: 0 },
      subtitle: { type: "textarea", pos: 1 },
      background_image: { type: "asset", filetypes: ["images"], pos: 2 },
      cta_primary_text: { type: "text", pos: 3 },
      cta_primary_link: { type: "link", pos: 4 },
      cta_secondary_text: { type: "text", pos: 5 },
      cta_secondary_link: { type: "link", pos: 6 },
    },
  },
  {
    name: "mission_statement",
    is_nestable: true,
    is_root: false,
    schema: {
      intro_text: { type: "textarea", pos: 0 },
      background_image: { type: "asset", filetypes: ["images"], pos: 1 },
      eyebrow: { type: "text", pos: 2 },
      headline_red: { type: "text", pos: 3 },
      headline_red_italic: { type: "text", pos: 4 },
      headline_black: { type: "text", pos: 5 },
    },
  },
  {
    name: "marquee_banner",
    is_nestable: true,
    is_root: false,
    schema: {
      text: { type: "text", pos: 0 },
      background_image: { type: "asset", filetypes: ["images"], pos: 1 },
    },
  },
  {
    name: "cta_cards",
    is_nestable: true,
    is_root: false,
    schema: {
      heading: { type: "text", pos: 0 },
      cards: {
        type: "bloks",
        restrict_type: "",
        restrict_components: true,
        component_whitelist: ["cta_card"],
        pos: 1,
      },
    },
  },
  {
    name: "athlete_spotlight",
    is_nestable: true,
    is_root: false,
    schema: {
      first_name: { type: "text", pos: 0 },
      last_name: { type: "text", pos: 1 },
      county: { type: "text", pos: 2 },
      sport: { type: "text", pos: 3 },
      athlete_number: { type: "text", pos: 4 },
      photo: { type: "asset", filetypes: ["images"], pos: 5 },
      cta_text: { type: "text", pos: 6 },
      link: { type: "link", pos: 7 },
    },
  },
  {
    name: "impact_stats",
    is_nestable: true,
    is_root: false,
    schema: {
      heading: { type: "text", pos: 0 },
      description: { type: "textarea", pos: 1 },
      stats: {
        type: "bloks",
        restrict_type: "",
        restrict_components: true,
        component_whitelist: ["stat_card"],
        pos: 2,
      },
      cta_text: { type: "text", pos: 3 },
      cta_link: { type: "link", pos: 4 },
    },
  },
  {
    name: "quote_section",
    is_nestable: true,
    is_root: false,
    schema: {
      quote: { type: "textarea", pos: 0 },
      attribution: { type: "text", pos: 1 },
      images: { type: "asset", filetypes: ["images"], pos: 2 },
    },
  },
  {
    name: "events_section",
    is_nestable: true,
    is_root: false,
    schema: {
      heading: { type: "text", pos: 0 },
      cta_text: { type: "text", pos: 1 },
      cta_link: { type: "link", pos: 2 },
      events: {
        type: "bloks",
        restrict_type: "",
        restrict_components: true,
        component_whitelist: ["event_card"],
        pos: 3,
      },
    },
  },
  {
    name: "footer",
    is_nestable: true,
    is_root: false,
    schema: {
      address: { type: "textarea", pos: 0 },
      phone: { type: "text", pos: 1 },
      copyright: { type: "text", pos: 2 },
      logo: { type: "asset", filetypes: ["images"], pos: 3 },
    },
  },

  // ── Root content type ─────────────────────────────────────────
  {
    name: "page",
    is_root: true,
    is_nestable: false,
    schema: {
      body: {
        type: "bloks",
        pos: 0,
      },
    },
  },
];

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🔍 Fetching existing components...");
  const { components: existing } = await api("/components");
  const existingMap = new Map(existing.map((c) => [c.name, c.id]));

  console.log(`   Found ${existing.length} existing components\n`);

  // Create or update components
  for (const comp of components) {
    const payload = {
      component: {
        name: comp.name,
        schema: comp.schema,
        is_root: comp.is_root ?? false,
        is_nestable: comp.is_nestable ?? true,
      },
    };

    if (existingMap.has(comp.name)) {
      const id = existingMap.get(comp.name);
      console.log(`♻️  Updating "${comp.name}" (id: ${id})`);
      await api(`/components/${id}`, "PUT", payload);
    } else {
      console.log(`✅ Creating "${comp.name}"`);
      await api("/components", "POST", payload);
    }
    await wait();
  }

  console.log("\n── Components done ──\n");

  // ── Create Home story if it doesn't exist ─────────────────────
  console.log("🔍 Checking for existing Home story...");
  const { stories } = await api("/stories?with_slug=home");

  if (stories && stories.length > 0) {
    console.log("📄 Home story already exists, skipping creation.");
  } else {
    console.log("📄 Creating Home story...");
    await api("/stories", "POST", {
      story: {
        name: "Home",
        slug: "home",
        content: {
          component: "page",
          body: [
            { component: "nav", _uid: crypto.randomUUID() },
            { component: "hero", _uid: crypto.randomUUID() },
            { component: "mission_statement", _uid: crypto.randomUUID() },
            { component: "marquee_banner", _uid: crypto.randomUUID() },
            { component: "cta_cards", _uid: crypto.randomUUID() },
            { component: "athlete_spotlight", _uid: crypto.randomUUID() },
            { component: "impact_stats", _uid: crypto.randomUUID() },
            { component: "quote_section", _uid: crypto.randomUUID() },
            { component: "events_section", _uid: crypto.randomUUID() },
            { component: "footer", _uid: crypto.randomUUID() },
          ],
        },
        is_startpage: true,
      },
      publish: 1,
    });
    console.log("✅ Home story created and published!");
  }

  console.log("\n🎉 Storyblok setup complete!");
  console.log(
    "   Open your Storyblok space → Content → Home to see the visual editor."
  );
}

main().catch((err) => {
  console.error("\n❌ Setup failed:", err.message);
  process.exit(1);
});
