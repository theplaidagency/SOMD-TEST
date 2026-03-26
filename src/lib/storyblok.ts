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
import PageHero from "@/components/storyblok/PageHero";
import NumberedSteps from "@/components/storyblok/NumberedSteps";
import StepCard from "@/components/storyblok/StepCard";
import CtaBanner from "@/components/storyblok/CtaBanner";
import Testimonial from "@/components/storyblok/Testimonial";
import ImagerySection from "@/components/storyblok/ImagerySection";
import FaqSection from "@/components/storyblok/FaqSection";
import FaqItem from "@/components/storyblok/FaqItem";
import SportsGrid from "@/components/storyblok/SportsGrid";
import SportCard from "@/components/storyblok/SportCard";
import AreaPrograms from "@/components/storyblok/AreaPrograms";
import AreaProgramCard from "@/components/storyblok/AreaProgramCard";
import SportDetailHero from "@/components/storyblok/SportDetailHero";
import ContentSection from "@/components/storyblok/ContentSection";
import PeopleGrid from "@/components/storyblok/PeopleGrid";
import PersonCard from "@/components/storyblok/PersonCard";
import ContactSection from "@/components/storyblok/ContactSection";
import SocialGrid from "@/components/storyblok/SocialGrid";
import SocialCard from "@/components/storyblok/SocialCard";
import NewsletterSignup from "@/components/storyblok/NewsletterSignup";
import StoryArticle from "@/components/storyblok/StoryArticle";
import StoriesGrid from "@/components/storyblok/StoriesGrid";
import StoryCard from "@/components/storyblok/StoryCard";
import GivingGrid from "@/components/storyblok/GivingGrid";
import GivingCard from "@/components/storyblok/GivingCard";
import ContactPerson from "@/components/storyblok/ContactPerson";
import BenefitsGrid from "@/components/storyblok/BenefitsGrid";
import BenefitItem from "@/components/storyblok/BenefitItem";

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
    page_hero: PageHero,
    numbered_steps: NumberedSteps,
    step_card: StepCard,
    cta_banner: CtaBanner,
    testimonial: Testimonial,
    imagery_section: ImagerySection,
    faq_section: FaqSection,
    faq_item: FaqItem,
    sports_grid: SportsGrid,
    sport_card: SportCard,
    area_programs: AreaPrograms,
    area_program_card: AreaProgramCard,
    sport_detail_hero: SportDetailHero,
    content_section: ContentSection,
    people_grid: PeopleGrid,
    person_card: PersonCard,
    contact_section: ContactSection,
    social_grid: SocialGrid,
    social_card: SocialCard,
    newsletter_signup: NewsletterSignup,
    story_article: StoryArticle,
    stories_grid: StoriesGrid,
    story_card: StoryCard,
    giving_grid: GivingGrid,
    giving_card: GivingCard,
    contact_person: ContactPerson,
    benefits_grid: BenefitsGrid,
    benefit_item: BenefitItem,
  },
  apiOptions: {
    region: "eu",
  },
});
