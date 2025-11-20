export default function BlogPosts() {
  const posts = [
    {
      title: 'How to Vibecode a Shopify Store with Lovable',
      date: 'November 4, 2025',
      slug: 'vibecode-shopify-lovable',
    },
    {
      title: 'If you\'re 18 you should be sidequesting',
      date: 'September 4, 2025',
      slug: 'sidequesting-at-18',
    },
    {
      title: 'All of my previous projects',
      date: 'May 10, 2024',
      slug: 'previous-projects',
    },
    {
      title: 'My annoying situation with my high school and internships',
      date: 'April 1, 2024',
      slug: 'high-school-internships',
    },
    {
      title: 'Why I\'m learning Chinese',
      date: 'February 8, 2024',
      slug: 'learning-chinese',
    },
    {
      title: 'My submission to the Airbus A350F livery design competition',
      date: 'November 18, 2022',
      slug: 'airbus-livery-competition',
    },
    {
      title: 'Automate releasing with Github Actions',
      date: 'March 28, 2022',
      slug: 'github-actions-release',
    },
    {
      title: 'Hackthebox Pit Writeup',
      date: 'February 20, 2022',
      slug: 'hackthebox-pit',
    },
  ];

  return (
    <section className="pb-24">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog posts</h2>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="border-l-2 border-gray-800/20 dark:border-white/20 pl-6 py-2 hover:border-gray-800/60 dark:hover:border-white/60 transition-colors duration-200">
              <h3 className="text-xl text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200 mb-2">
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
