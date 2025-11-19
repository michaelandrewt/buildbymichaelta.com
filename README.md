# Elliot Lindberg's Personal Website

A modern personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Starfield Animation**: Dynamic animated starfield background
- **Hero Section**: Profile image, bio, and social links
- **Timeline**: Chronological list of achievements
- **Blog Posts**: List of blog articles
- **Theme Toggle**: Switch between dark and light modes
- **Language Toggle**: Switch between English and Chinese

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup Instructions

1. **Add Profile Image**: Replace `/public/profile.jpg` with your actual profile image
2. **Update Email**: Change the email in `src/components/Hero.tsx`
3. **Update Social Links**: Update the URLs in `src/components/Hero.tsx`
4. **Customize Content**: Edit the achievements in `src/components/Timeline.tsx` and blog posts in `src/components/BlogPosts.tsx`

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Starfield.tsx
│       ├── Hero.tsx
│       ├── Timeline.tsx
│       ├── BlogPosts.tsx
│       ├── ThemeToggle.tsx
│       └── LanguageToggle.tsx
├── public/
│   └── profile.jpg (add your profile image here)
└── ...config files
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## License

MIT
