export default function Timeline() {
  const achievements = [
    'Sold water on the street of Nguyen Hue, Vietnam at 9',
    'Managed multi channel social media growth for 10 mom and pop stores at 18',
    'Ranked top performer managing 130+ daily contacts with 21% engagement rate at 12 rate at 19',
    'Built outbound pipeline across 400+ accounts at a fintech startup before pmf at 21',
    'Self-taught SQL and Python for pipeline reporting, business intelligence at 23'
  ];

  return (
    <section className="pb-24">
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-black/40 dark:text-white/40 mt-1">•</span>
            <span className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {achievement}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
