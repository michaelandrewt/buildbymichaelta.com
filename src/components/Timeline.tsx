export default function Timeline() {
  const achievements = [
    'Created my first invention at 8',
    'Had a Swedish youtube channel at 11',
    'Made Snapchat filters with 14 million views at 12',
    'Made software with 310k+ users at 14',
    'Did pentesting/cybersec and reverse engineered software at 14',
    'Traveled alone across europe to conferences since 15',
    'Created a freelancing company at 15',
    'Finished all high school programming classes in 3 weeks instead of 3 years at 16',
    'Created two micro startups at 16',
    'Studying chinese since 16',
    'Youngest Software Engineer at Lovable since 17',
  ];

  return (
    <section className="pb-24">
      <ul className="space-y-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-white/40 mt-1">•</span>
            <span className="text-gray-300 text-lg leading-relaxed">
              {achievement}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
