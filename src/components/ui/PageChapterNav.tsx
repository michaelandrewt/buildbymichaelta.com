'use client';

import { useEffect, useRef, useState } from 'react';

export type PageChapter = {
  id: string;
  title: string;
};

type Accent = 'project' | 'growth' | 'interest';

const accentClasses: Record<Accent, { active: string; idle: string }> = {
  project: {
    active: 'font-semibold text-red-500',
    idle: 'text-foreground/75 hover:text-red-500',
  },
  growth: {
    active: 'font-semibold text-pink-500',
    idle: 'text-foreground/75 hover:text-pink-500',
  },
  interest: {
    active: 'font-semibold text-sky-500',
    idle: 'text-foreground/75 hover:text-sky-500',
  },
};

export default function PageChapterNav({
  chapters,
  accent = 'project',
  ariaLabel = 'Page chapters',
}: {
  chapters: PageChapter[];
  accent?: Accent;
  ariaLabel?: string;
}) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? '');
  const [isPinned, setIsPinned] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const syncActiveChapter = () => {
      const activationLine = 160;
      const current =
        [...sections].reverse().find((section) => section.getBoundingClientRect().top <= activationLine) ??
        sections[0];

      setActiveId(current.id);

      const articleGrid = navRef.current?.closest('[data-reading-layout]');
      if (articleGrid) {
        setIsPinned(articleGrid.getBoundingClientRect().top <= 112);
      }
    };

    syncActiveChapter();
    window.addEventListener('scroll', syncActiveChapter, { passive: true });
    window.addEventListener('resize', syncActiveChapter);

    return () => {
      window.removeEventListener('scroll', syncActiveChapter);
      window.removeEventListener('resize', syncActiveChapter);
    };
  }, [chapters]);

  const colors = accentClasses[accent];

  return (
    <aside
      ref={navRef}
      className={`z-10 hidden w-[300px] max-h-[calc(100vh-9rem)] self-start overflow-y-auto border-l border-border bg-background/80 py-1 pl-6 pr-2 backdrop-blur-sm lg:block ${
        isPinned ? 'fixed right-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] top-28' : 'sticky top-28'
      }`}
    >
      <h2 className="mb-4 font-sans text-2xl font-semibold text-foreground">On This Page</h2>
      <nav aria-label={ariaLabel}>
        <ul className="space-y-3.5">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                className={`text-base transition-colors ${activeId === chapter.id ? colors.active : colors.idle}`}
              >
                {chapter.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
