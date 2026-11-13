import type { IconType } from "react-icons"
import { FaInstagram, FaLinkedin, FaThreads, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { LuCalendarClock, LuClapperboard, LuMessageCircleHeart } from "react-icons/lu"

import architecturePost from "../assets/images/architecture-post.webp"
import handheldFeed from "../assets/images/handheld-device-1.webp"
import handheldGrid from "../assets/images/handheld-device-2.webp"

/** Navigation items for the main menu */
export const navItems = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "About", to: "/about" },
  { label: "Follow Us", to: "/follow-us" },
]

export interface Feature {
  id: string
  icon: IconType
  palette: "grape" | "magenta" | "sky"
  eyebrow: string
  title: string
  teaser: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string
}

/** Product features */
export const features: Feature[] = [
  {
    id: "scheduled-posts",
    icon: LuCalendarClock,
    palette: "grape",
    eyebrow: "Post Agent",
    title: "Upload once. Post on cadence. Caption like a pro.",
    teaser:
      "Drop in your photos and the Post Agent writes on-voice captions, picks hashtags, and publishes at your best times.",
    description:
      "Drag a weekend's worth of shots into your queue and walk away. The Post Agent studies each image, drafts a caption in your voice, layers in hashtags that actually get discovered, and publishes on the cadence you set: daily, three times a week, or whenever your audience is most awake.",
    bullets: [
      "Captions trained on your past posts, not generic templates",
      "Smart scheduling based on when your followers engage",
      "Hashtag sets refreshed weekly to dodge stale tags",
      "Approve-first mode or full autopilot. Your call.",
    ],
    image: architecturePost,
    imageAlt: "A person photographing a tiled, blue light well with their phone",
  },
  {
    id: "engagement",
    icon: LuMessageCircleHeart,
    palette: "magenta",
    eyebrow: "Engage Agent",
    title: "Show up in the comments, even while you sleep.",
    teaser:
      "Thoughtful, on-brand comments on posts in your niche that spark conversations and pull new followers your way.",
    description:
      "Engagement is a two-way street, and the Engage Agent drives it. It finds posts from creators and communities in your niche, reads the room, and leaves genuine, specific comments that start conversations instead of collecting eye-rolls. No \"nice pic!\" spam, ever.",
    bullets: [
      "Context-aware comments that reference the actual post",
      "Target lists by hashtag, account, or audience overlap",
      "Daily pacing limits that keep your account healthy",
      "Weekly report of the conversations that converted",
    ],
    image: handheldGrid,
    imageAlt: "A hand holding a phone displaying an Instagram profile grid of adventure photos",
  },
  {
    id: "stories",
    icon: LuClapperboard,
    palette: "sky",
    eyebrow: "Story Agent",
    title: "Stories with clever captions and CTAs that convert.",
    teaser:
      "Turn moments into Stories with witty overlays, polls, and calls-to-action that send followers exactly where you want.",
    description:
      "Stories disappear in 24 hours, but the results do not have to. The Story Agent turns your clips and photos into tap-worthy sequences with punchy overlay copy, interactive stickers, and calls-to-action matched to your goal, whether that is link clicks, DMs, or launch-day hype.",
    bullets: [
      "Overlay captions sized and placed for thumb-safe zones",
      "Polls, quizzes, and question stickers that boost replies",
      "CTA library tuned for links, drops, and DMs",
      "Highlights auto-curated from your best performers",
    ],
    image: handheldFeed,
    imageAlt: "A hand holding a phone showing a bright, curated lifestyle Instagram feed",
  },
]

/** Key marketing statistics */
export const stats = [
  { value: "12M+", label: "captions drafted" },
  { value: "3.4x", label: "average engagement lift" },
  { value: "18 hrs", label: "saved per creator each month" },
  { value: "40k+", label: "creators on autopilot" },
]

export interface Testimonial {
  name: string
  handle: string
  role: string
  quote: string
  palette: "grape" | "magenta" | "sky" | "sun" | "rose"
}

/** Testimonials from creators */
export const testimonials: Testimonial[] = [
  {
    name: "Priya Raman",
    handle: "@priya.plates",
    role: "Food creator, 210k followers",
    quote:
      "I used to spend Sunday nights writing captions. Now I spend them eating. My engagement is up 41% and my captions finally sound like me on a good day.",
    palette: "magenta",
  },
  {
    name: "Marcus Oyelaran",
    handle: "@marcus.moves",
    role: "Fitness coach",
    quote:
      "The Engage Agent left a comment on a gym brand's post that turned into a paid partnership. A comment. I did not even know that was possible.",
    palette: "grape",
  },
  {
    name: "Lena Fischer",
    handle: "@lenaframes",
    role: "Travel photographer",
    quote:
      "I schedule a month of posts from the airport lounge and forget about it. InstaGPT is the only coworker who never misses a deadline.",
    palette: "sky",
  },
  {
    name: "Diego Alvarez",
    handle: "@diego.diy",
    role: "Home-reno creator",
    quote:
      "Story polls used to get 30 votes. The Story Agent's versions get 900. My audience thinks I hired a social team. I did, kind of.",
    palette: "sun",
  },
  {
    name: "Ana Boateng",
    handle: "@ana.atelier",
    role: "Small-batch fashion label",
    quote:
      "Launch week used to be chaos. This time our Stories sold out the drop in six hours and I approved every CTA from my phone in two taps.",
    palette: "rose",
  },
  {
    name: "Sam Whitaker",
    handle: "@sam.sketches",
    role: "Illustrator",
    quote:
      "I was skeptical an AI could get my weird sense of humor. It nailed it by week two. My followers still think I write every caption.",
    palette: "grape",
  },
]

export const steps = [
  {
    title: "Connect your account",
    body: "Link your Instagram professional account in under a minute with a secure, revocable login.",
  },
  {
    title: "Teach it your voice",
    body: "We study your past captions and comments so every draft sounds like you, not a robot.",
  },
  {
    title: "Set the guardrails",
    body: "Choose approve-first or autopilot, set posting cadence, and block topics you never touch.",
  },
  {
    title: "Watch it grow",
    body: "Weekly insights show what landed, what flopped, and what your agents will try next.",
  },
]

/** Frequently asked questions */
export const faqs = [
  {
    q: "Do I have to approve everything the agents do?",
    a: "Only if you want to. Approve-first mode sends every caption, comment, and Story to your phone for a one-tap thumbs up. Autopilot lets the agents run within the guardrails you set, and you can switch modes any time.",
  },
  {
    q: "Will my captions sound like a bot wrote them?",
    a: "Not after the first week. InstaGPT trains on your own captions and replies, learns your slang and pacing, and keeps improving as you edit its drafts.",
  },
  {
    q: "What happens after my 7-day free trial?",
    a: "Nothing, unless you choose a plan. We do not ask for a card up front, and your scheduled content stays put if you decide to come back later.",
  },
]

export interface Social {
  name: string
  handle: string
  href: string
  icon: IconType
  followers: string
  blurb: string
  palette: "grape" | "magenta" | "sky" | "sun" | "rose"
}

/** Placeholder profile links */
export const socials: Social[] = [
  {
    name: "Instagram",
    handle: "@instagpt.ai",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
    followers: "182k",
    blurb: "Our agents run our own account. Watch them work in real time.",
    palette: "magenta",
  },
  {
    name: "TikTok",
    handle: "@instagpt",
    href: "https://www.tiktok.com/",
    icon: FaTiktok,
    followers: "96k",
    blurb: "60-second caption makeovers and creator workflow hacks.",
    palette: "rose",
  },
  {
    name: "YouTube",
    handle: "@InstaGPT",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
    followers: "41k",
    blurb: "Deep-dive tutorials and monthly product walkthroughs.",
    palette: "sun",
  },
  {
    name: "Threads",
    handle: "@instagpt.ai",
    href: "https://www.threads.net/",
    icon: FaThreads,
    followers: "28k",
    blurb: "Hot takes on the algorithm and early feature previews.",
    palette: "grape",
  },
  {
    name: "X",
    handle: "@instagpt",
    href: "https://x.com/",
    icon: FaXTwitter,
    followers: "19k",
    blurb: "Release notes, status updates, and the occasional meme.",
    palette: "grape",
  },
  {
    name: "LinkedIn",
    handle: "InstaGPT",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
    followers: "12k",
    blurb: "Creator-economy research and the people behind the agents.",
    palette: "sky",
  },
]
