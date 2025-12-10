import styles from './timeline.module.css';
import Link from 'next/link';

export default function WhoIsMichael() {
    return (
        <div className={styles.body}>
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
                            <div className={styles.roleTitle}>Top Performer</div>
                            <div className={styles.year}>Age 19</div>
                            <p className={styles.achievement}>I burned out personalizing every outreach until I built systems using templates as frameworks, not scripts. Finding that rhythm made me a top performer. Sustainable performance comes from processes that amplify human connection, not replace it.</p>
                        </div>
                    </div>

                    <div className={`${styles.timelineItem} ${styles.left}`}>
                        <div className={styles.horizontalLine}></div>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.roleTitle}>Fintech Employee #3</div>
                            <div className={styles.year}>Age 21</div>
                            <p className={styles.achievement}>I chased wrong accounts with bad messaging until I treated every conversation as product research. Real market feedback refined our ICP and value prop. In early-stage sales, your job is finding the truth about who needs what you&apos;re building.</p>
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
                            <div className={styles.roleTitle}>GTM Engineer</div>
                            <div className={styles.year}>Age 24</div>
                            <p className={styles.achievement}>I&apos;m bussing tables at SET Steak to keep the lights on while building WinnyLabs and running experiments on buildbymichaelta.com between shifts. Steady income means I can learn MES/MNQ futures and build GTM products without being desperate for the next client check. The move isn&apos;t going all in on one thing, it&apos;s stacking revenue streams so you can build what matters without your back against the wall.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
