import Link from 'next/link';

import { yellowHoverUnderline } from '@/lib/linkStyles';

import ProfilePhoto from '@/components/home/ProfilePhoto';

export default function IntroBlurb() {
  const linkClass = `font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`;
  const projectLinkClass =
    'category-link category-link-project font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]';
  const growthLinkClass =
    'category-link category-link-growth font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]';
  const interestLinkClass =
    'category-link category-link-interest font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]';

  return (
    <section className="mb-14 md:mb-16 lg:mb-14">
      <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(190px,28vw)] md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,34%)] xl:gap-16">
        <div className="order-2 min-w-0 md:order-1">
          <p className="font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl md:leading-[1.55] lg:text-[2rem] lg:leading-[1.4]">
            Hey, I&apos;m{' '}
            <Link href="/about" className={`font-display ${linkClass}`}>
              Michael
            </Link>{' '}
            <span aria-hidden="true">👋</span>
          </p>
          <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl md:leading-[1.55] lg:text-[2rem] lg:leading-[1.4]">
            I&apos;m a lifelong learner and builder with an eccentric approach to{' '}
            <Link href="/projects" className={projectLinkClass}>
              systems
            </Link>{' '}
            that solve real-world problems.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl md:leading-[1.55] lg:mt-8 lg:text-[2rem] lg:leading-[1.4]">
            Currently, I&apos;m an Economics student at{' '}
            <a
              href="https://www.csulb.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              CSULB
            </a>
            , with a mission to create communities that improve social and economic mobility for individuals from
            non-traditional backgrounds.
          </p>
          <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl md:leading-[1.55] lg:mt-8 lg:text-[2rem] lg:leading-[1.4]">
            This is a place for{' '}
            <Link href="/projects" className={projectLinkClass}>
              projects
            </Link>
            ,{' '}
            <Link href="/growth" className={growthLinkClass}>
              growth trajectory
            </Link>
            , and{' '}
            <Link href="/interests" className={interestLinkClass}>
              interests
            </Link>{' '}
            as I learn and build along like-minded people.
          </p>
        </div>
        <div className="hidden justify-center md:order-2 md:flex md:justify-end">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
