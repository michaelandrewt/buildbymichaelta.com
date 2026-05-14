import type { Metadata } from 'next';
import Link from 'next/link';

import ThemeToggle from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'Growth | Michael Ta',
  description: 'How I learn, ship, and compound skills over time.',
};

export default function GrowthPage() {
  return (
    <div className="relative mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="fixed right-6 top-6 z-50 md:right-8 md:top-8">
        <ThemeToggle />
      </div>
      <Link href="/" className="text-sm text-muted-foreground underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-foreground hover:decoration-yellow-400 dark:hover:decoration-yellow-200">
        ← Back home
      </Link>
      <h1 className="font-display mt-8 text-3xl font-semibold lowercase text-foreground md:text-4xl">growth</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground/85">
        A place for frameworks, retros, and lessons from shipping. Content will land here when you are ready to
        publish it.
      </p>
    </div>
  );
}
