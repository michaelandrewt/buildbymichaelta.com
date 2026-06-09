export type InterestChapter = {
  id: string;
  title: string;
  body: string;
};

export type InterestItem = {
  slug: string;
  category: string;
  title: string;
  dateLabel: string;
  readTimeMinutes: number;
  excerpt: string;
  tone: string;
  chapters: InterestChapter[];
};

export const interests: InterestItem[] = [
  {
    slug: 'morning-static',
    category: 'Coffee Notes',
    title: 'Morning Static',
    dateLabel: 'Coming soon',
    readTimeMinutes: 3,
    excerpt: 'A tiny log of cafes, beans, and the rituals that make work feel less rushed.',
    tone: 'from-amber-100 via-white to-stone-100 dark:from-amber-950 dark:via-stone-900 dark:to-stone-800',
    chapters: [
      {
        id: 'the-log',
        title: 'The Log',
        body: 'A running list of cafes and beans worth remembering — what was ordered, what stood out, and whether the room was good for actually getting work done.',
      },
      {
        id: 'rituals',
        title: 'Rituals',
        body: 'The small repeatable parts of a morning: the brew method, the first task, the playlist. Placeholder notes on which rituals lower the noise and which are just procrastination in disguise.',
      },
      {
        id: 'favorites',
        title: 'Favorites',
        body: 'The short list that survives — the default order, the default cafe, the default seat — and what it took for each one to earn the spot.',
      },
    ],
  },
  {
    slug: 'syntax-after-dark',
    category: 'Learning',
    title: 'Syntax After Dark',
    dateLabel: 'Coming soon',
    readTimeMinutes: 5,
    excerpt: 'Loose notes from tutorials, docs, and experiments that finally clicked after midnight.',
    tone: 'from-indigo-100 via-white to-sky-100 dark:from-indigo-950 dark:via-stone-900 dark:to-sky-950',
    chapters: [
      {
        id: 'what-clicked',
        title: 'What Clicked',
        body: 'Placeholder for concepts that finally made sense — and the exact explanation, example, or bug that did it. The goal is keeping the click reproducible for someone else.',
      },
      {
        id: 'open-tabs',
        title: 'Open Tabs',
        body: 'The honest queue: tutorials half-finished, docs skimmed, and experiments waiting for a free evening. A visible backlog beats forty forgotten bookmarks.',
      },
      {
        id: 'lab-notes',
        title: 'Lab Notes',
        body: 'Small experiments with new tools and languages — what was tried, what broke, and whether it earned a place in real projects.',
      },
    ],
  },
  {
    slug: 'margin-daydreams',
    category: 'Markets',
    title: 'Margin Daydreams',
    dateLabel: 'Coming soon',
    readTimeMinutes: 4,
    excerpt: 'Small observations on ecommerce, pricing, and the strange psychology of buying things online.',
    tone: 'from-emerald-100 via-white to-amber-100 dark:from-emerald-950 dark:via-stone-900 dark:to-amber-950',
    chapters: [
      {
        id: 'observations',
        title: 'Observations',
        body: 'Field notes from being a customer: pricing that worked on me, checkout flows that almost lost me, and the products that made margin look effortless.',
      },
      {
        id: 'pricing-psychology',
        title: 'Pricing Psychology',
        body: 'Placeholder for the patterns behind why people buy — anchors, bundles, urgency, and the difference between a discount that builds trust and one that erodes it.',
      },
      {
        id: 'ideas-to-test',
        title: 'Ideas to Test',
        body: 'A parking lot for small commerce experiments worth running someday, each written as a testable guess instead of a vague hunch.',
      },
    ],
  },
  {
    slug: 'queue-theory',
    category: 'Media',
    title: 'Queue Theory',
    dateLabel: 'Coming soon',
    readTimeMinutes: 2,
    excerpt: 'A running shelf of videos, essays, games, and shows worth saving for later.',
    tone: 'from-sky-100 via-white to-violet-100 dark:from-sky-950 dark:via-stone-900 dark:to-violet-950',
    chapters: [
      {
        id: 'the-shelf',
        title: 'The Shelf',
        body: 'The current queue — videos, essays, games, and shows — each with one line on why it earned a spot instead of being closed and forgotten.',
      },
      {
        id: 'finished',
        title: 'Finished',
        body: 'What actually got watched, read, or played, with a short verdict: worth the slot, fine, or should have skipped.',
      },
      {
        id: 'recommendations',
        title: 'Recommendations',
        body: 'The small list confidently passed along to other people, which is a much higher bar than just having enjoyed something.',
      },
    ],
  },
  {
    slug: 'tiny-systems',
    category: 'Process',
    title: 'Tiny Systems',
    dateLabel: 'Coming soon',
    readTimeMinutes: 6,
    excerpt: 'Personal workflows, useful defaults, and small habits that keep projects moving.',
    tone: 'from-teal-100 via-white to-stone-100 dark:from-teal-950 dark:via-stone-900 dark:to-stone-800',
    chapters: [
      {
        id: 'current-setup',
        title: 'Current Setup',
        body: 'The tools and workflows in active rotation — what handles tasks, notes, code, and time, and the glue that keeps them from becoming six disconnected inboxes.',
      },
      {
        id: 'what-stuck',
        title: 'What Stuck',
        body: 'Habits and systems that survived longer than a month, and the common thread: small enough to keep, useful enough to miss when skipped.',
      },
      {
        id: 'graveyard',
        title: 'Graveyard',
        body: 'Abandoned apps, dead workflows, and over-engineered setups — kept on record so the same shiny mistake is harder to make twice.',
      },
    ],
  },
  {
    slug: 'errand-weather',
    category: 'Daily Life',
    title: 'Errand Weather',
    dateLabel: 'Coming soon',
    readTimeMinutes: 3,
    excerpt: 'Unpolished notes about routines, city walks, food stops, and little details that stick.',
    tone: 'from-orange-100 via-white to-sky-100 dark:from-orange-950 dark:via-stone-900 dark:to-sky-950',
    chapters: [
      {
        id: 'routes',
        title: 'Routes',
        body: 'The walks and errand loops worth repeating — which streets, which time of day, and the small detours that make an ordinary route feel new.',
      },
      {
        id: 'food-stops',
        title: 'Food Stops',
        body: 'A casual record of the places worth stopping for: the reliable order, the seat by the window, and the spots saved for a good day.',
      },
      {
        id: 'details',
        title: 'Details',
        body: 'The little observations that stick — signage, storefronts, overheard lines — collected because noticing them is most of the fun.',
      },
    ],
  },
];

export function getInterestBySlug(slug: string) {
  return interests.find((item) => item.slug === slug);
}
