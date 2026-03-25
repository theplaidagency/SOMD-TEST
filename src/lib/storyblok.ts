import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import Page from "@/components/storyblok/Page";
import Feature from "@/components/storyblok/Feature";
import Grid from "@/components/storyblok/Grid";
import Teaser from "@/components/storyblok/Teaser";
import Nav from "@/components/storyblok/Nav";
import Hero from "@/components/storyblok/Hero";
import MissionStatement from "@/components/storyblok/MissionStatement";
import MarqueeBanner from "@/components/storyblok/MarqueeBanner";
import CtaCards from "@/components/storyblok/CtaCards";
import CtaCard from "@/components/storyblok/CtaCard";
import AthleteSpotlight from "@/components/storyblok/AthleteSpotlight";
import ImpactStats from "@/components/storyblok/ImpactStats";
import StatCard from "@/components/storyblok/StatCard";
import QuoteSection from "@/components/storyblok/QuoteSection";
import EventsSection from "@/components/storyblok/EventsSection";
import EventCard from "@/components/storyblok/EventCard";
import Footer from "@/components/storyblok/Footer";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    nav: Nav,
    hero: Hero,
    mission_statement: MissionStatement,
    marquee_banner: MarqueeBanner,
    cta_cards: CtaCards,
    cta_card: CtaCard,
    athlete_spotlight: AthleteSpotlight,
    impact_stats: ImpactStats,
    stat_card: StatCard,
    quote_section: QuoteSection,
    events_section: EventsSection,
    event_card: EventCard,
    footer: Footer,
  },
  apiOptions: {
    region: "eu",
  },
});
