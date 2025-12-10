export default function Thoughts() {
    const posts = [
        {
            title: 'Writing 1',
            date: 'December 10, 2025',
            slug: 'writing-1',
        },
        {
            title: 'Writing 2',
            date: 'December 10, 2025',
            slug: 'writing-2',
        },
        {
            title: 'Writing 3',
            date: 'December 10, 2025',
            slug: 'writing-3',
        },
    ];

    return (
        <section className="pb-24">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Thoughts</h2>

            <div className="space-y-6">
                {posts.map((post) => (
                    <a
                        key={post.slug}
                        href={`/thoughts/${post.slug}`}
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
