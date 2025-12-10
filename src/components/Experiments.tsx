export default function Experiments() {
  const posts = [
    {
      title: 'Email Generator',
      date: 'November 20, 2025',
      slug: 'email-generator',
    },
    {
      title: 'Sale Play Recommendation',
      date: 'November 15, 2025',
      slug: 'sale-play-recommendation',
    },
  ];

  return (
    <section className="pb-24">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Experiments</h2>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/experiments/${post.slug}`}
            className="block group"
          >
            <div className="border-l-2 border-gray-300 dark:border-white/20 pl-6 py-2 hover:border-gray-500 dark:hover:border-white/60 transition-colors duration-200">
              <h3 className="text-xl text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
