'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/michael-khang-ta/' },
    { name: 'X/Twitter', url: 'https://x.com/ricebroskitt' },
    { name: 'Instagram', url: 'https://instagram.com/ricebroski' },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText('buildbymichaelta@gmail.com');
    // You could add a toast notification here
  };

  return (
    <section className="pt-20 pb-32">
      {/* Profile Image */}
      <div className="mb-12">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 dark:border-white/20">
          <Image
            src="/profile.jpg"
            alt="Michael Ta"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name and Title */}
      <h1 className="text-6xl md:text-7xl font-bold text-black dark:text-white mb-6">
        Michael Ta
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
        Business Development Rep | I book pipeline for B2B SaaS & fintech founders | CSUF Economics
      </p>

      {/* Internal Links */}
      <div className="mb-12">
        <Link
          href="/who-is-michael"
          className="text-lg text-black dark:text-white border-b-2 border-black dark:border-white hover:opacity-70 transition-opacity"
        >
          Who is Michael?
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={copyEmail}
          className="hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          Copy email
        </button>
      </div>
    </section>
  );
}
