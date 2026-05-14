import Link from 'next/link';

import { yellowHoverUnderline } from '@/lib/linkStyles';

import ProfilePhoto from '@/components/home/ProfilePhoto';
import CopyEmailButton from '@/components/ui/CopyEmailButton';

export default function IntroBlurb() {
  return (
    <section className="mb-14 md:mb-20">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,1fr)_min(100%,240px)] md:gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="order-2 min-w-0 md:order-1">
          <p className="font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-[1.75]">
            Hey, I&apos;m{' '}
            <Link
              href="/about"
              className={`font-display font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              Michael
            </Link>
            <span aria-hidden="true"> 👋</span> I build calm, fast web experiences and care about the details that make
            software feel{' '}
            <Link
              href="/projects"
              className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              intentional
            </Link>
            .
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-[1.75]">
            This site is my public notebook:{' '}
            <Link
              href="/who-is-michael"
              className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              background
            </Link>
            ,{' '}
            <Link
              href="/projects"
              className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              projects
            </Link>
            , and{' '}
            <Link
              href="/blog"
              className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              writing
            </Link>{' '}
            as it ships. For a résumé or collaboration, use <CopyEmailButton /> or find me on{' '}
            <a
              href="https://www.linkedin.com/in/michael-khang-ta/"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href="https://x.com/ricebroskitt"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              X
            </a>
            , or{' '}
            <a
              href="https://instagram.com/ricebroski"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
            >
              Instagram
            </a>
            .
          </p>
        </div>
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
