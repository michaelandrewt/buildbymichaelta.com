export type ProjectChapter = {
  id: string;
  title: string;
  body: string;
};

export type ProjectItem = {
  slug: string;
  category: string;
  title: string;
  dateLabel: string;
  readTimeMinutes: number;
  excerpt: string;
  tone: string;
  chapters: ProjectChapter[];
};

export const projects: ProjectItem[] = [
  {
    slug: 'quiet-cart',
    category: 'Automation',
    title: 'Quiet Cart',
    dateLabel: 'Draft',
    readTimeMinutes: 4,
    excerpt: 'A small commerce automation experiment for smoothing repeat operational tasks.',
    tone: 'from-sky-100 via-white to-amber-100 dark:from-sky-950 dark:via-stone-900 dark:to-amber-950',
    chapters: [
      {
        id: 'starting-point',
        title: 'Starting Point',
        body: 'This placeholder starts with the repetitive moments in a store workflow: checking what changed, deciding what matters, and turning that into a calm next action.',
      },
      {
        id: 'system-sketch',
        title: 'System Sketch',
        body: 'The early version would connect a small set of signals, summarize them clearly, and leave space for a person to approve the final move instead of hiding the decision.',
      },
      {
        id: 'next-pass',
        title: 'Next Pass',
        body: 'The next pass is about tightening the loop: fewer fields, better defaults, and a visible history of what the tool suggested and why.',
      },
    ],
  },
  {
    slug: 'shelf-signal',
    category: 'Commerce',
    title: 'Shelf Signal',
    dateLabel: 'Draft',
    readTimeMinutes: 3,
    excerpt: 'A lightweight idea for spotting inventory and merchandising patterns earlier.',
    tone: 'from-emerald-100 via-white to-slate-100 dark:from-emerald-950 dark:via-stone-900 dark:to-slate-900',
    chapters: [
      {
        id: 'signal',
        title: 'Signal',
        body: 'This project is framed around the small changes that are easy to miss: product movement, stale shelves, and the quiet difference between demand and attention.',
      },
      {
        id: 'workflow',
        title: 'Workflow',
        body: 'The workflow should feel like a daily scan rather than a dashboard chore, with the highest leverage observations rising to the top first.',
      },
      {
        id: 'measurement',
        title: 'Measurement',
        body: 'The useful test is whether the signal changes behavior: better ordering, clearer merchandising, or faster experiments with fewer guesses.',
      },
    ],
  },
  {
    slug: 'margin-map',
    category: 'Analytics',
    title: 'Margin Map',
    dateLabel: 'Draft',
    readTimeMinutes: 4,
    excerpt: 'A placeholder for tracking ecommerce decisions, pricing, and useful signals.',
    tone: 'from-orange-100 via-white to-rose-100 dark:from-orange-950 dark:via-stone-900 dark:to-rose-950',
    chapters: [
      {
        id: 'question',
        title: 'Question',
        body: 'Margin Map begins with a simple question: which products are actually creating room to grow after costs, time, and operational drag are included?',
      },
      {
        id: 'model',
        title: 'Model',
        body: 'The model would stay intentionally small, combining price, cost, velocity, and friction into a view that is useful before it becomes perfect.',
      },
      {
        id: 'decisions',
        title: 'Decisions',
        body: 'The output should help decide what to promote, what to fix, and what to stop carrying when attention is better spent elsewhere.',
      },
    ],
  },
  {
    slug: 'pack-lane',
    category: 'Operations',
    title: 'Pack Lane',
    dateLabel: 'Draft',
    readTimeMinutes: 3,
    excerpt: 'A packing and fulfillment concept for reducing small errors before they compound.',
    tone: 'from-indigo-100 via-white to-cyan-100 dark:from-indigo-950 dark:via-stone-900 dark:to-cyan-950',
    chapters: [
      {
        id: 'friction',
        title: 'Friction',
        body: 'Pack Lane focuses on the ordinary friction inside fulfillment: missed checks, unclear priorities, and context switching when the queue gets busy.',
      },
      {
        id: 'guardrails',
        title: 'Guardrails',
        body: 'The concept uses lightweight guardrails: clearer steps, small confirmations, and visual states that make mistakes easier to catch.',
      },
      {
        id: 'handoff',
        title: 'Handoff',
        body: 'The final chapter is handoff quality, making sure each packed order leaves behind enough trace to explain what happened without extra paperwork.',
      },
    ],
  },
  {
    slug: 'launch-ledger',
    category: 'Growth',
    title: 'Launch Ledger',
    dateLabel: 'Draft',
    readTimeMinutes: 5,
    excerpt: 'A running record for experiments, launch decisions, and what each attempt taught.',
    tone: 'from-lime-100 via-white to-teal-100 dark:from-lime-950 dark:via-stone-900 dark:to-teal-950',
    chapters: [
      {
        id: 'hypothesis',
        title: 'Hypothesis',
        body: 'Launch Ledger treats each launch like a small hypothesis, writing down what should happen before the results start reshaping the memory.',
      },
      {
        id: 'experiment',
        title: 'Experiment',
        body: 'Each experiment gets a clear start, a short window, and a simple way to distinguish noise from a pattern worth acting on.',
      },
      {
        id: 'learning',
        title: 'Learning',
        body: 'The point is not just tracking wins. It is creating a trail of decisions that makes the next attempt sharper and less mysterious.',
      },
    ],
  },
  {
    slug: 'signal-bench',
    category: 'Systems',
    title: 'Signal Bench',
    dateLabel: 'Draft',
    readTimeMinutes: 4,
    excerpt: 'A systems sandbox for comparing small tools, metrics, and decision triggers.',
    tone: 'from-violet-100 via-white to-stone-100 dark:from-violet-950 dark:via-stone-900 dark:to-stone-800',
    chapters: [
      {
        id: 'bench',
        title: 'Bench',
        body: 'Signal Bench is a sandbox for comparing useful inputs side by side before promoting them into a real workflow.',
      },
      {
        id: 'comparison',
        title: 'Comparison',
        body: 'The comparison layer should make tradeoffs visible: speed, clarity, confidence, and whether a metric pushes the right behavior.',
      },
      {
        id: 'promotion',
        title: 'Promotion',
        body: 'A signal earns its place only when it repeatedly helps with decisions and remains understandable after the novelty wears off.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
