import type { Metadata } from 'next';
import Link from 'next/link';

import ThemeToggle from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'Interests | Michael Ta',
  description: 'Side threads, notes, and curiosities.',
};

const interests = [
  {
    category: 'Coffee Notes',
    title: 'Morning Static',
    date: 'Coming soon',
    minutes: 3,
    excerpt: 'A tiny log of cafes, beans, and the rituals that make work feel less rushed.',
  },
  {
    category: 'Learning',
    title: 'Syntax After Dark',
    date: 'Coming soon',
    minutes: 5,
    excerpt: 'Loose notes from tutorials, docs, and experiments that finally clicked after midnight.',
  },
  {
    category: 'Markets',
    title: 'Margin Daydreams',
    date: 'Coming soon',
    minutes: 4,
    excerpt: 'Small observations on ecommerce, pricing, and the strange psychology of buying things online.',
  },
  {
    category: 'Media',
    title: 'Queue Theory',
    date: 'Coming soon',
    minutes: 2,
    excerpt: 'A running shelf of videos, essays, games, and shows worth saving for later.',
  },
  {
    category: 'Process',
    title: 'Tiny Systems',
    date: 'Coming soon',
    minutes: 6,
    excerpt: 'Personal workflows, useful defaults, and small habits that keep projects moving.',
  },
  {
    category: 'Daily Life',
    title: 'Errand Weather',
    date: 'Coming soon',
    minutes: 3,
    excerpt: 'Unpolished notes about routines, city walks, food stops, and little details that stick.',
  },
] as const;

export default function InterestsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-5 pb-16 pt-8 sm:px-6 md:px-8 md:pt-10 lg:px-10">
      <header className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-x-4 gap-y-5 pb-8 sm:gap-y-6 md:grid-cols-[auto_1fr_auto] md:grid-rows-1 md:items-center md:gap-y-0">
        <Link
          href="/"
          className="col-start-1 row-start-1 font-display text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] md:text-2xl"
        >
          Michael Ta<span className="text-foreground">.</span>
        </Link>
        <nav
          aria-label="Primary"
          className="col-span-2 row-start-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.95rem] font-medium lowercase tracking-wide text-muted-foreground sm:gap-x-8 md:col-span-1 md:col-start-2 md:row-start-1 md:justify-self-center md:gap-x-10"
        >
          <Link href="/projects" className="top-nav-link top-nav-link-project">
            projects
          </Link>
          <Link href="/growth" className="top-nav-link top-nav-link-growth">
            growth
          </Link>
          <Link href="/interests" className="top-nav-link top-nav-link-interest text-foreground">
            interests
          </Link>
        </nav>
        <div className="col-start-2 row-start-1 justify-self-end md:col-start-3">
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="pb-10 pt-6 md:pb-12 md:pt-10">
          <h1 className="font-display text-6xl font-semibold leading-none tracking-normal text-foreground sm:text-7xl md:text-8xl">
            curious notes<span className="text-sky-400">.</span>
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-foreground/85 md:text-xl">
            Ideas that do not quite fit anywhere else, occasional observations, open tabs, and things I keep coming
            back to.
          </p>
        </section>

        <section aria-label="Interest list">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {interests.map((interest) => (
              <li key={interest.title}>
                <article className="h-full rounded-xl border border-border bg-surface p-5 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-display text-sm text-muted-foreground md:text-base">{interest.category}</p>
                    <span className="rounded-full border border-sky-300 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800 dark:border-sky-700 dark:bg-sky-950 dark:text-sky-200">
                      Interest
                    </span>
                  </div>
                  <h2 className="font-display mt-8 text-2xl font-semibold italic leading-tight text-foreground md:text-3xl">
                    {interest.title}
                  </h2>
                  <p className="mt-3 font-display text-base italic text-muted-foreground">
                    {interest.date} · {interest.minutes} min read
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85">{interest.excerpt}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
