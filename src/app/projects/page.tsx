import type { Metadata } from 'next';
import Link from 'next/link';

import { projects } from '@/data/projects';

import ThemeToggle from '@/components/ui/ThemeToggle';

export const metadata: Metadata = {
  title: 'Projects | Michael Ta',
  description: 'Selected work and experiments.',
};

export default function ProjectsPage() {
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
          <Link href="/projects" className="top-nav-link top-nav-link-project text-foreground">
            projects
          </Link>
          <Link href="/growth" className="top-nav-link top-nav-link-growth">
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
        <section className="pb-10 pt-6 md:pb-12 md:pt-10">
          <h1 className="font-display text-6xl font-semibold leading-none tracking-normal text-foreground sm:text-7xl md:text-8xl">
            select works<span className="text-red-500">.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/85 md:text-xl">
            I build things for the fun of it, experiments and small tools will land here as they become real.
          </p>
        </section>

        <section aria-label="Project list">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <li key={project.title}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-red-400/60 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                  <div className="flex items-center justify-between gap-4 px-4 pb-4 pt-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      <span className="text-red-600 dark:text-red-300">{project.category}</span>{' '}
                      <span className="text-border/80">·</span> Placeholder
                    </p>
                    <span className="rounded-full border border-red-300 bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700 dark:border-red-700 dark:bg-red-950 dark:text-red-200">
                      Project
                    </span>
                  </div>
                  <h2 className="px-4 pb-5 font-sans text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                    <span className="featured-title-mark featured-title-project">{project.title}</span>
                  </h2>
                  <div className={`h-28 border-t border-border bg-gradient-to-br ${project.tone}`} aria-hidden="true">
                    <div className="h-full bg-[linear-gradient(90deg,rgba(20,18,15,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(20,18,15,0.08)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(90deg,rgba(245,242,237,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(245,242,237,0.08)_1px,transparent_1px)]" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
