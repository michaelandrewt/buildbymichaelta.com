# Michael Ta's Personal Website

A modern personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Profile image, bio, and social links
- **Who is Michael?**: Chronological list of achievements (Timeline)
- **Email Generator**: Tool for generating cold emails
- **Sales Play Recommendation**: AI-powered sales play recommendations
- **Experiments**: Collection of coding experiments
- **Thoughts**: Personal articles and blog posts
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

Open [http://www.buildbymichaelta.com) with your browser to see the result.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Hero.tsx
│       ├── Timeline.tsx ("Who is Michael?")
│       ├── EmailGenerator.tsx
│       ├── SalesPlayRecommendation.tsx
│       ├── Experiments.tsx
│       ├── Thoughts.tsx
│       ├── ThemeToggle.tsx
│       └── LanguageToggle.tsx
├── public/
│   └── profile.jpg
└── ...config files
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## License

MIT
