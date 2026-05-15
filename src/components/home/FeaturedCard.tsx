import Link from 'next/link';

import type { FeaturedItem, FeaturedKind } from '@/data/featured';

function prettyKind(kind: FeaturedKind): string {
  const map: Record<FeaturedKind, string> = {
    project: 'Project',
    growth: 'Growth',
    interest: 'Interest',
  };
  return map[kind];
}

function titleDecoration(kind: FeaturedKind): string {
  const map: Record<FeaturedKind, string> = {
    project: 'featured-title-project',
    growth: 'featured-title-growth',
    interest: 'featured-title-interest',
  };
  return map[kind];
}

function metaLine(item: FeaturedItem) {
  const parts = [item.dateLabel];
  if (item.readTimeMinutes != null) {
    parts.push(`${item.readTimeMinutes} min read`);
  }
  return parts.join(' · ');
}

export default function FeaturedCard({ item }: { item: FeaturedItem }) {
  const inner = (
    <>
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        <span className="text-accent">{item.categoryLabel}</span>
        <span className="mx-1.5 text-border/80">·</span>
        <span className="normal-case font-normal tracking-normal text-muted-foreground/90">{prettyKind(item.kind)}</span>
      </p>
      <h2 className="font-display mt-2 text-xl font-semibold text-foreground md:text-2xl">
        <span className={`featured-title-mark ${titleDecoration(item.kind)}`}>{item.title}</span>
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{metaLine(item)}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/85 md:text-base">{item.excerpt}</p>
    </>
  );

  const cardClass =
    'group block h-full rounded-xl border border-border bg-surface p-5 shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] md:p-6';

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={item.href} className={cardClass}>
      {inner}
    </Link>
  );
}
