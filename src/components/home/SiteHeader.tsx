import Link from 'next/link';

import { yellowHoverUnderline } from '@/lib/linkStyles';

import ThemeToggle from '@/components/ui/ThemeToggle';

const centerNav = [
  { href: '/projects', label: 'projects' },
  { href: '/growth', label: 'growth' },
  { href: '/interests', label: 'interests' },
] as const;

export default function SiteHeader() {
  return (
    <header className="mb-10 grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-x-4 gap-y-6 border-b border-border pb-8 md:mb-14 md:grid-cols-[auto_1fr_auto] md:grid-rows-1 md:items-center md:gap-y-0">
      <Link
        href="/"
        className="col-start-1 row-start-1 font-display text-xl font-semibold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] md:text-2xl"
      >
        Michael Ta<span className="text-foreground">.</span>
      </Link>
      <div className="col-start-2 row-start-1 justify-self-end md:col-start-3 md:justify-self-end">
        <ThemeToggle />
      </div>
      <nav
        aria-label="Primary"
        className="col-span-2 row-start-2 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.95rem] font-medium lowercase tracking-wide text-muted-foreground md:col-span-1 md:col-start-2 md:row-start-1 md:justify-self-center md:gap-x-10"
      >
        {centerNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
