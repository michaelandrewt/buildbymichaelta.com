export type FeaturedKind = 'project' | 'growth' | 'interest';

export type FeaturedItem = {
  kind: FeaturedKind;
  categoryLabel: string;
  href: string;
  title: string;
  dateLabel: string;
  readTimeMinutes?: number;
  excerpt: string;
  external?: boolean;
};

export const featuredItems: FeaturedItem[] = [
  {
    kind: 'project',
    categoryLabel: 'Automation',
    href: '/projects',
    title: 'Quiet Cart',
    dateLabel: 'Project',
    readTimeMinutes: 3,
    excerpt: 'A placeholder for a small commerce automation experiment.',
  },
  {
    kind: 'growth',
    categoryLabel: 'Marketing Systems',
    href: '/growth/marketing-skills',
    title: 'Marketing Skills Library',
    dateLabel: 'New',
    readTimeMinutes: 8,
    excerpt: '25 reusable AI marketing Skills — hooks, email, SEO, paid ads, CRO, and launch playbooks as copy-ready prompts.',
  },
  {
    kind: 'interest',
    categoryLabel: 'Coffee Notes',
    href: '/interests',
    title: 'Morning Static',
    dateLabel: 'Coming soon',
    readTimeMinutes: 3,
    excerpt: 'A tiny log of cafes, beans, and the rituals that make work feel less rushed.',
  },
  {
    kind: 'growth',
    categoryLabel: 'Process',
    href: '/growth',
    title: 'Shipping Rhythm',
    dateLabel: 'Draft',
    readTimeMinutes: 4,
    excerpt: 'Notes on learning loops, project momentum, and making steady progress visible.',
  },
  {
    kind: 'project',
    categoryLabel: 'Analytics',
    href: '/projects',
    title: 'Margin Map',
    dateLabel: 'Project',
    readTimeMinutes: 4,
    excerpt: 'A placeholder for tracking ecommerce decisions, pricing, and useful signals.',
  },
  {
    kind: 'interest',
    categoryLabel: 'Media',
    href: '/interests',
    title: 'Queue Theory',
    dateLabel: 'Coming soon',
    readTimeMinutes: 2,
    excerpt: 'A running shelf of videos, essays, games, and shows worth saving for later.',
  },
  {
    kind: 'growth',
    categoryLabel: 'Systems',
    href: '/growth',
    title: 'Tiny Defaults',
    dateLabel: 'Draft',
    readTimeMinutes: 5,
    excerpt: 'Small habits, reusable checklists, and practical defaults for building faster.',
  },
];
