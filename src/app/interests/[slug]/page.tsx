import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BackToTopButton from '@/components/ui/BackToTopButton';
import PageChapterNav from '@/components/ui/PageChapterNav';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { getInterestBySlug, interests } from '@/data/interests';

type InterestPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return interests.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: InterestPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getInterestBySlug(slug);

  if (!item) {
    return {
      title: 'Interests | Michael Ta',
    };
  }

  return {
    title: `${item.title} | Michael Ta`,
    description: item.excerpt,
  };
}

export default async function InterestDetailPage({ params }: InterestPageProps) {
  const { slug } = await params;
  const item = getInterestBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <header className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-x-4 gap-y-5 px-5 pb-8 pt-8 sm:px-6 sm:gap-y-6 md:grid-cols-[auto_1fr_auto] md:grid-rows-1 md:items-center md:gap-y-0 md:px-8 md:pt-10 lg:px-10">
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
        <section className="mx-auto max-w-6xl px-5 pb-8 pt-8 sm:px-6 md:px-8 md:pt-12 lg:px-10">
          <p className="text-base text-muted-foreground">
            {item.dateLabel} · {item.readTimeMinutes} min read
          </p>
          <h1 className="mt-3 max-w-4xl font-sans text-5xl font-semibold leading-tight tracking-normal text-foreground md:text-6xl">
            {item.title}
          </h1>
        </section>

        <div className={`h-56 border-y border-border bg-gradient-to-br ${item.tone} md:h-72`} aria-hidden="true">
          <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(circle_at_28%_35%,rgba(125,211,252,0.28),transparent_16%),radial-gradient(circle_at_62%_45%,rgba(244,114,182,0.2),transparent_18%),linear-gradient(115deg,transparent_0_38%,rgba(20,18,15,0.1)_38%_39%,transparent_39%_100%)]" />
        </div>

        <div
          data-reading-layout
          className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-10 xl:gap-16"
        >
          <article className="min-w-0">
            <p className="max-w-3xl text-xl leading-relaxed text-foreground/85 md:text-2xl">
              {item.excerpt} This page is a placeholder note for testing chapter navigation, scroll progress, and the
              reading layout before the full write-up is published.
            </p>

            <div className="mt-12 space-y-16">
              {item.chapters.map((chapter) => (
                <section key={chapter.id} id={chapter.id} className="scroll-mt-12 border-t border-border pt-10">
                  <h2 className="font-sans text-3xl font-semibold text-foreground md:text-4xl">{chapter.title}</h2>
                  <p className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl">{chapter.body}</p>
                  <div className="mt-8 rounded-xl border border-border bg-surface p-5 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">Placeholder artifact</p>
                    <div className={`mt-4 h-48 rounded-lg bg-gradient-to-br ${item.tone}`}>
                      <div className="h-full rounded-lg bg-[linear-gradient(90deg,rgba(20,18,15,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(20,18,15,0.08)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(90deg,rgba(245,242,237,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(245,242,237,0.08)_1px,transparent_1px)]" />
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </article>

          <PageChapterNav accent="interest" ariaLabel="Interest chapters" chapters={item.chapters} />
        </div>
        <BackToTopButton />
      </main>
    </div>
  );
}
