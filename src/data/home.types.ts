/**
 * Types for the homepage content in ./home.ts.
 * Components under src/components/home take these as props and contain no copy.
 */
import type {IconName} from '@site/src/components/ui/Icon';

export type {IconName};

/** Image under static/. `src` is a site-absolute path, e.g. "/img/hardware/board-v1-cutout.png". */
export interface ImageData {
  src: string;
  alt: string;
  /** Intrinsic size in pixels. Optional, but set it to avoid layout shift. */
  width?: number;
  height?: number;
}

/** Heading shared by all sections. `id` becomes the anchor (/#id). */
export interface SectionHeadingData {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
}

/** Button. `href` may be "/docs/intro", "/#ecosystem", "https://..." or "mailto:...". */
export interface ActionData {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

/** Either a real link, or a non-clickable "will be published soon" label. */
export type CardLinkData = {kind: 'link'; label: string; href: string} | {kind: 'soon'; label: string};

export interface StatusData {
  label: string;
  /** "accent" = red chip, "neutral" = grey chip (default). */
  tone?: 'accent' | 'neutral';
}

/* Hero ---------------------------------------------------------------- */
export interface StatData {
  value: string;
  label: string;
}

export interface HeroData {
  /** Logo image file. */
  logo: ImageData;
  /** Optional variant shown in dark mode instead of `logo`. */
  logoDark?: ImageData;
  headline: string;
  /** Optional part of `headline` (exact substring) printed in the accent colour. */
  headlineAccent?: string;
  subline: string;
  /** Signal types the boards capture, shown large under the sub-line. */
  signals: {abbr: string; name: string}[];
  actions: ActionData[];
  /** Key numbers; the layout is designed for exactly four. */
  stats: [StatData, StatData, StatData, StatData];
  photo: ImageData & {caption?: string};
}

/* Aims: short text block --------------------------------------------- */
export interface AimsData {
  heading: SectionHeadingData;
  /** Short labelled paragraphs; the layout is designed for four. */
  points: {label: string; text: string}[];
}

/* Ecosystem ----------------------------------------------------------- */
export interface EcosystemCardData {
  icon: IconName;
  title: string;
  text?: string;
  status?: StatusData;
  link: CardLinkData;
}

export interface EcosystemData {
  heading: SectionHeadingData;
  cards: EcosystemCardData[];
}

/* Sleep teaser -------------------------------------------------------- */
export interface SleepTeaserData {
  id: string;
  title: string;
  text?: string;
  status?: StatusData;
  link: {label: string; href: string};
  /** Plain text under the button for what is not public yet (no URL). */
  soonLabel?: string;
  image?: ImageData;
}

/* Contact ------------------------------------------------------------ */
export interface ContactData {
  id: string;
  title: string;
  text?: string;
  email: string;
  actions?: ActionData[];
}

/* Whole page ------------------------------------------------------------- */
export interface HomeData {
  /** <title> and meta description of the homepage. */
  meta: {title: string; description: string};
  hero: HeroData;
  aims: AimsData;
  ecosystem: EcosystemData;
  sleepTeaser: SleepTeaserData;
  contact: ContactData;
}
