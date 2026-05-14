import fs from 'fs';
import path from 'path';

import Image from 'next/image';

const PROFILE_FILENAME = 'michael-profile.png';

const frameClass =
  'relative h-44 w-44 shrink-0 overflow-hidden rounded-full border border-border shadow-md md:h-52 md:w-52';

export default function ProfilePhoto() {
  const filePath = path.join(process.cwd(), 'public', PROFILE_FILENAME);
  const hasFile = fs.existsSync(filePath);

  if (!hasFile) {
    return (
      <div
        className={`${frameClass} flex items-center justify-center bg-gradient-to-br from-sky-100 to-indigo-100 text-4xl font-semibold text-foreground/80 dark:from-sky-950/40 dark:to-indigo-950/40 dark:text-foreground/90`}
        aria-hidden="true"
      >
        MT
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <Image
        src={`/${PROFILE_FILENAME}`}
        alt="Michael Ta"
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 176px, 208px"
        priority
      />
    </div>
  );
}
