import fs from 'node:fs';
import path from 'node:path';

import type { Metadata } from 'next';
import Link from 'next/link';
import { marked } from 'marked';

import BackToTopButton from '@/components/ui/BackToTopButton';
import PageChapterNav from '@/components/ui/PageChapterNav';
import ThemeToggle from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'Marketing Skills Library | Michael Ta',
  description:
    'A library of 25 reusable AI marketing Skills — hooks, email sequences, SEO, paid ads, CRO, positioning, and launch playbooks.',
};

const LIBRARY_DIR = path.join(process.cwd(), 'marketing-skills-library');

const categories = [
  { id: 'content-creation', label: 'Content Creation', file: '01-content-creation.md', skills: '1–6' },
  { id: 'email-lifecycle', label: 'Email & Lifecycle', file: '02-email-lifecycle-marketing.md', skills: '7–9' },
  { id: 'seo-aeo', label: 'SEO & AEO', file: '03-seo-aeo.md', skills: '10–13' },
  { id: 'paid-advertising', label: 'Paid Advertising', file: '04-paid-advertising.md', skills: '14–16' },
  { id: 'cro-copy', label: 'CRO & Copy', file: '05-cro-copy.md', skills: '17–19' },
  { id: 'research-positioning', label: 'Research & Positioning', file: '06-research-positioning.md', skills: '20–23' },
  { id: 'growth-strategy', label: 'Growth & Strategy', file: '07-growth-strategy.md', skills: '24–25' },
] as const;

function renderCategory(file: string): string {
  const raw = fs.readFileSync(path.join(LIBRARY_DIR, 'skills', file), 'utf8');
  return marked.parse(raw, { async: false });
}

export default function MarketingSkillsPage() {
  const sections = categories.map((category) => ({
    ...category,
    html: renderCategory(category.file),
  }));

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
          <Link href="/growth" className="top-nav-link top-nav-link-growth text-foreground">
            growth
          </Link>
          <Link href="/interests" className="top-nav-link top-nav-link-interest">
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
            <Link href="/growth" className="underline-offset-4 hover:underline">
              growth notes
            </Link>{' '}
            · Marketing Systems
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold leading-tight tracking-normal text-foreground md:text-6xl">
            Marketing Skills Library<span className="text-pink-400">.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/85 md:text-xl">
            25 reusable AI marketing Skills, each written as a copy-ready prompt with defined inputs, outputs, and
            rules. Add your brand context, paste the prompt into your AI assistant, and save it as a permanent Skill.
          </p>
        </section>

        <div
          className="mb-10 h-56 border-y border-border bg-gradient-to-br from-pink-100 via-white to-rose-100 dark:from-pink-950 dark:via-stone-900 dark:to-rose-950 md:h-72"
          aria-hidden="true"
        >
          <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(circle_at_28%_35%,rgba(244,114,182,0.28),transparent_16%),radial-gradient(circle_at_62%_45%,rgba(125,211,252,0.24),transparent_18%),linear-gradient(115deg,transparent_0_38%,rgba(20,18,15,0.1)_38%_39%,transparent_39%_100%)]" />
        </div>

        <section aria-label="Categories" className="mx-auto max-w-6xl px-5 pb-6 sm:px-6 md:px-8 lg:px-10 lg:hidden">
          <ul className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-foreground/85 transition hover:border-accent/40 hover:text-foreground"
                >
                  {section.label}
                  <span className="ml-2 text-xs text-muted-foreground">{section.skills}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div
          data-reading-layout
          className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-10 xl:gap-16"
        >
          <article className="min-w-0">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-12 border-t border-border pt-10 [&:not(:first-child)]:mt-14"
              >
                <div className="skills-markdown" dangerouslySetInnerHTML={{ __html: section.html }} />
              </section>
            ))}
          </article>

          <PageChapterNav
            accent="growth"
            ariaLabel="Skill categories"
            chapters={sections.map((section) => ({ id: section.id, title: section.label }))}
          />
        </div>
        <BackToTopButton />
      </main>
    </div>
  );
}
