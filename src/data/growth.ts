export type GrowthChapter = {
  id: string;
  title: string;
  body: string;
};

export type GrowthItem = {
  slug: string;
  category: string;
  title: string;
  dateLabel: string;
  readTimeMinutes: number;
  excerpt: string;
  tone: string;
  /** When set, the card links here instead of the generated detail page. */
  externalHref?: string;
  chapters: GrowthChapter[];
};

export const growthItems: GrowthItem[] = [
  {
    slug: 'marketing-skills',
    category: 'Marketing Systems',
    title: 'Marketing Skills Library',
    dateLabel: 'New',
    readTimeMinutes: 8,
    excerpt:
      'A library of 25 reusable AI marketing Skills — hooks, email sequences, SEO, paid ads, CRO, positioning, and launch playbooks — each written as a copy-ready prompt.',
    tone: 'from-pink-100 via-white to-rose-100 dark:from-pink-950 dark:via-stone-900 dark:to-rose-950',
    externalHref: '/growth/marketing-skills',
    chapters: [],
  },
  {
    slug: 'tiny-defaults',
    category: 'Systems',
    title: 'Tiny Defaults',
    dateLabel: 'Draft',
    readTimeMinutes: 5,
    excerpt: 'Small habits, reusable checklists, and practical defaults for building faster.',
    tone: 'from-pink-100 via-white to-amber-100 dark:from-pink-950 dark:via-stone-900 dark:to-amber-950',
    chapters: [
      {
        id: 'why-defaults',
        title: 'Why Defaults',
        body: 'Most building speed comes from decisions you no longer have to make. This placeholder collects the small defaults — file structures, naming, first commits — that remove friction before a project even starts.',
      },
      {
        id: 'the-checklists',
        title: 'The Checklists',
        body: 'Reusable checklists for starting, shipping, and closing out work. Each one is short enough to actually use and revised whenever a step stops earning its place.',
      },
      {
        id: 'revisions',
        title: 'Revisions',
        body: 'Defaults rot quietly. This section tracks which ones changed, which got deleted, and what each revision taught about how the work actually flows.',
      },
    ],
  },
  {
    slug: 'after-action-notes',
    category: 'Reflection',
    title: 'After Action Notes',
    dateLabel: 'Draft',
    readTimeMinutes: 6,
    excerpt: 'A quiet place for retros, lessons learned, and what I would change next time.',
    tone: 'from-rose-100 via-white to-slate-100 dark:from-rose-950 dark:via-stone-900 dark:to-slate-900',
    chapters: [
      {
        id: 'the-format',
        title: 'The Format',
        body: 'A lightweight retro format: what was supposed to happen, what actually happened, and the gap between the two. Short enough to write the same day the work ends.',
      },
      {
        id: 'recent-retros',
        title: 'Recent Retros',
        body: 'Placeholder for the running list of project retros — each one a few honest paragraphs rather than a polished postmortem.',
      },
      {
        id: 'patterns',
        title: 'Patterns',
        body: 'The real value shows up across retros: the mistakes that repeat, the warnings that were visible early, and the habits that quietly fixed themselves.',
      },
    ],
  },
  {
    slug: 'compounding-hours',
    category: 'Learning',
    title: 'Compounding Hours',
    dateLabel: 'Draft',
    readTimeMinutes: 3,
    excerpt: 'How repeated practice, small projects, and honest feedback stack over time.',
    tone: 'from-amber-100 via-white to-pink-100 dark:from-amber-950 dark:via-stone-900 dark:to-pink-950',
    chapters: [
      {
        id: 'the-stack',
        title: 'The Stack',
        body: 'Learning compounds when each project leaves something reusable behind — a snippet, a pattern, a sharper question. This section maps what each hour of practice is supposed to deposit.',
      },
      {
        id: 'feedback-loops',
        title: 'Feedback Loops',
        body: 'Honest feedback beats more hours. Placeholder notes on where feedback comes from: shipped work, code review, real users, and people further along the same path.',
      },
      {
        id: 'the-ledger',
        title: 'The Ledger',
        body: 'A simple running record of skills practiced, projects finished, and what got measurably easier — proof that the hours are stacking instead of evaporating.',
      },
    ],
  },
  {
    slug: 'open-doors',
    category: 'Community',
    title: 'Open Doors',
    dateLabel: 'Draft',
    readTimeMinutes: 4,
    excerpt: 'Thoughts on building spaces that help non-traditional builders find momentum.',
    tone: 'from-pink-100 via-white to-sky-100 dark:from-pink-950 dark:via-stone-900 dark:to-sky-950',
    chapters: [
      {
        id: 'the-problem',
        title: 'The Problem',
        body: 'Talent is everywhere; on-ramps are not. This placeholder frames the gap non-traditional builders face: missing networks, unclear first steps, and rooms that feel closed before you knock.',
      },
      {
        id: 'what-helps',
        title: 'What Helps',
        body: 'Small, specific things that open doors: public work, generous introductions, communities with low floors and high ceilings, and proof that the path has been walked before.',
      },
      {
        id: 'building-it',
        title: 'Building It',
        body: 'Notes toward actually building these spaces — what to start, what to borrow from communities that work, and how to measure whether momentum is really transferring.',
      },
    ],
  },
  {
    slug: 'north-star-notes',
    category: 'Direction',
    title: 'North Star Notes',
    dateLabel: 'Draft',
    readTimeMinutes: 5,
    excerpt: 'Short reminders about taste, values, and the kind of work I want to keep choosing.',
    tone: 'from-fuchsia-100 via-white to-stone-100 dark:from-fuchsia-950 dark:via-stone-900 dark:to-stone-800',
    chapters: [
      {
        id: 'taste',
        title: 'Taste',
        body: 'Placeholder for the work that sets the bar — projects, writing, and products whose quality is worth chasing, and what specifically makes them good.',
      },
      {
        id: 'values',
        title: 'Values',
        body: 'The non-negotiables: who the work serves, what it refuses to do, and the tradeoffs worth accepting to keep those commitments intact.',
      },
      {
        id: 'choosing',
        title: 'Choosing',
        body: 'A short decision filter for new opportunities — the questions that separate work worth keeping from work that just fills the calendar.',
      },
    ],
  },
];

export function getGrowthBySlug(slug: string) {
  return growthItems.find((item) => item.slug === slug);
}
