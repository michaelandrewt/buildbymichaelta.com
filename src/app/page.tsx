import FeaturedList from '@/components/home/FeaturedList';
import IntroBlurb from '@/components/home/IntroBlurb';
import SiteHeader from '@/components/home/SiteHeader';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-6 md:px-8 md:pt-10 lg:px-10">
        <SiteHeader />
        <IntroBlurb />
        <FeaturedList />
      </div>
    </main>
  );
}
