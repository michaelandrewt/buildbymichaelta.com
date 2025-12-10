import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const experimentsMetadata: Record<string, { title: string; date: string }> = {
  'email-generator': {
    title: 'Email Generator',
    date: 'November 20, 2025',
  },
  'sale-play-recommendation': {
    title: 'Sale Play Recommendation',
    date: 'November 15, 2025',
  },
};

async function getPostContent(slug: string) {
  const filePath = path.join(process.cwd(), 'src', 'content', 'experiments', `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const htmlContent = await marked(fileContent);
    return htmlContent;
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metadata = experimentsMetadata[slug as keyof typeof experimentsMetadata];

  if (!metadata) {
    notFound();
  }

  const content = await getPostContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 mb-12"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        {/* Blog Content */}
        <article className="max-w-none">
          <div
            className="text-gray-700 dark:text-gray-300 space-y-6 blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </div>
    </main>
  );
}
