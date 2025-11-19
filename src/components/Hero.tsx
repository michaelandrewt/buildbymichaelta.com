'use client';

import Image from 'next/image';

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'X/Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText('your.email@example.com');
    // You could add a toast notification here
  };

  return (
    <section className="pt-20 pb-32">
      {/* Profile Image */}
      <div className="mb-12">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
          <Image
            src="/profile.jpg"
            alt="Elliot Lindberg"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name and Title */}
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
        Elliot Lindberg
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-12">
        18 y/o Developer building the future. Currently Software Engineer @ Lovable
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap gap-6 text-gray-400">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={copyEmail}
          className="hover:text-white transition-colors duration-200"
        >
          Copy email
        </button>
      </div>
    </section>
  );
}
