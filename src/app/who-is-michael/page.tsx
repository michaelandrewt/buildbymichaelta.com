import styles from './timeline.module.css';
import Link from 'next/link';

import ThemeToggle from '@/components/ui/ThemeToggle';

export default function WhoIsMichael() {
    return (
        <div className={styles.body}>
            <div className="fixed right-6 top-6 z-50 md:right-8 md:top-8">
                <ThemeToggle />
            </div>
            {/* Back Button */}
            <div className="max-w-4xl mx-auto px-4 mb-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
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
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Michael&apos;s Journey</h1>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.timelineEnd}></div>

                    <div className={`${styles.timelineItem} ${styles.right}`}>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.roleTitle}>Street Entrepreneur</div>
                            <div className={styles.year}>Age 9</div>
                            <p className={styles.achievement}>I spent days in the heat with water no one bought until I figured out location and timing mattered more than effort. Moving to tourist spots during peak heat turned failures into sellouts. I learned success isn&apos;t about working harder, it&apos;s about reading what the market actually needs.</p>
                        </div>
                    </div>

                    <div className={`${styles.timelineItem} ${styles.left}`}>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.roleTitle}>Social Media Manager</div>
                            <div className={styles.year}>Age 18</div>
                            <p className={styles.achievement}>I posted generic content that barely moved the needle until I started telling each store&apos;s real story. Authenticity drove engagement and loyalty where polish didn&apos;t. People connect with real humans behind businesses, not perfection.</p>
                        </div>
                    </div>

                    <div className={`${styles.timelineItem} ${styles.right}`}>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.roleTitle}>Team standout</div>
                            <div className={styles.year}>Age 19</div>
                            <p className={styles.achievement}>I burned out rewriting every message from scratch until I built systems that used templates as frameworks, not rigid scripts. Finding that rhythm made the work sustainable. Consistency came from processes that still felt human on the receiving end.</p>
                        </div>
                    </div>

                    <div className={`${styles.timelineItem} ${styles.left}`}>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.roleTitle}>Early startup hire</div>
                            <div className={styles.year}>Age 21</div>
                            <p className={styles.achievement}>I talked to the wrong people with fuzzy positioning until I treated every conversation as product research. Honest feedback showed us who actually benefited from the product and why. At an early company, the fastest learning loop is listening closely and adjusting what you build.</p>
                        </div>
                    </div>

                    <div className={`${styles.timelineItem} ${styles.right}`}>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.roleTitle}>Self-Taught Developer</div>
                            <div className={styles.year}>Age 23</div>
                            <p className={styles.achievement}>I drowned in tutorials building reports that kept breaking until I focused on solving one problem at a time. Building working tools iteratively unlocked everything. Technical skills aren&apos;t about mastery, they&apos;re about solving real problems with just enough knowledge to move forward.</p>
                        </div>
                    </div>

                    <div className={`${styles.timelineItem} ${styles.left}`}>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.roleTitle}>Server & builder</div>
                            <div className={styles.year}>Age 24</div>
                            <p className={styles.achievement}>I&apos;m bussing tables at SET Steak to keep the lights on while building WinnyLabs and running experiments on buildbymichaelta.com between shifts. Steady income means I can learn MES/MNQ futures and ship side projects without rushing every decision. The move isn&apos;t going all in on one thing, it&apos;s stacking income so you can build what matters without your back against the wall.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
