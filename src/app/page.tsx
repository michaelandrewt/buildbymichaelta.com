import Starfield from '@/components/Starfield';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import BlogPosts from '@/components/BlogPosts';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Starfield />

      {/* Top right controls */}
      <div className="fixed top-8 right-8 z-50 flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 py-16">
        <Hero />
        <Timeline />
        <BlogPosts />
      </div>
    </main>
  );
}
