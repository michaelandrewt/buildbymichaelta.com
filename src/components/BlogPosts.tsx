export default function BlogPosts() {
  const posts = [
    {
      title: 'project 1',
      date: 'November 20, 2025',
      slug: 'project-1',
    },
    {
      title: 'project 2',
      date: 'November 15, 2025',
      slug: 'project-2',
    },
  ];

  return (
    <section className="pb-24">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Blog posts</h2>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
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
