import { featuredItems } from '@/data/featured';

import FeaturedCard from './FeaturedCard';

export default function FeaturedList() {
  return (
    <section aria-labelledby="featured-heading">
      <h2
        id="featured-heading"
        className="font-display mb-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
      >
        Featured
      </h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {featuredItems.map((item) => (
          <li key={`${item.href}-${item.title}`} className="min-w-0">
            <FeaturedCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
