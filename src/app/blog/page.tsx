import type { Metadata } from 'next';
import Link from 'next/link';

import ThemeToggle from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'Writing | Michael Ta',
  description: 'Notes and essays.',
};

export default function BlogPage() {
  return (
    <div className="relative mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="fixed right-6 top-6 z-50 md:right-8 md:top-8">
        <ThemeToggle />
      </div>
      <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
        ← Back home
      </Link>
      <h1 className="font-display mt-8 text-3xl font-semibold text-foreground md:text-4xl">Writing</h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground/85">
        Longer posts are on the way. When the first essay is ready, it will appear on the home &quot;Featured&quot; list and
        get a route under <code className="rounded bg-surface px-1.5 py-0.5 text-sm">/blog</code>.
      </p>
    </div>
  );
}
