import type { Metadata } from 'next';
import Link from 'next/link';

import { yellowHoverUnderline } from '@/lib/linkStyles';

import ThemeToggle from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'A little about me | Michael Ta',
  description: 'Short introduction and how I think about building.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed right-6 top-6 z-50 md:right-8 md:top-8">
        <ThemeToggle />
      </div>
      <article className="mx-auto max-w-2xl px-6 pb-24 pt-16 md:max-w-3xl md:px-8 md:pt-20">
        <Link
          href="/"
          className="text-sm text-muted-foreground underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-foreground hover:decoration-yellow-400 dark:hover:decoration-yellow-200"
        >
          ← Back home
        </Link>
        <p className="mt-10 text-center text-sm text-muted-foreground">May 2026 · 3 min read</p>
        <h1 className="font-display mt-4 text-center text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          A little about me
        </h1>
        <blockquote className="mx-auto mt-10 max-w-xl text-center font-display text-xl italic leading-snug text-foreground/90 md:text-2xl">
          Small habits compound. I try to get the boring parts right so the interesting parts have room to breathe.
        </blockquote>
        <div className="mx-auto mt-12 max-w-prose space-y-6">
          <p className="font-sans text-lg leading-relaxed text-foreground/90">
            I grew up moving between hustle and curiosity — selling water on busy streets, learning what foot traffic
            actually means, then later helping small businesses tell clearer stories online. That mix taught me that
            software is only useful when it connects to how people really live.
          </p>
          <p className="font-sans text-lg leading-relaxed text-foreground/90">
            Today I spend most of my time building on the web, tightening performance, and writing just enough to
            explain the &quot;why&quot; behind a decision. I care about type, spacing, and the quiet confidence of a page
            that loads fast and reads well on a phone in a parking lot.
          </p>
          <p className="font-sans text-lg leading-relaxed text-foreground/90">
            If you want the longer arc — jobs, experiments, and the messy middle — head to{' '}
            <Link href="/who-is-michael" className={`font-medium text-foreground ${yellowHoverUnderline}`}>
              Michael&apos;s journey
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
}
