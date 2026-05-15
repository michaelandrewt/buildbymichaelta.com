import fs from 'fs';
import path from 'path';

import Image from 'next/image';

const DARK_PROFILE_FILENAME = 'michael-profile.png';
const LIGHT_PROFILE_FILENAME = 'michael-profile-sunglasses.png';

const frameClass =
  'relative aspect-square w-40 shrink-0 overflow-hidden rounded-full border border-border shadow-md sm:w-44 md:w-full md:max-w-64 lg:max-w-80 xl:max-w-96';

export default function ProfilePhoto() {
  const darkFilePath = path.join(process.cwd(), 'public', DARK_PROFILE_FILENAME);
  const lightFilePath = path.join(process.cwd(), 'public', LIGHT_PROFILE_FILENAME);
  const hasDarkFile = fs.existsSync(darkFilePath);
  const hasLightFile = fs.existsSync(lightFilePath);

  if (!hasDarkFile && !hasLightFile) {
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
      {hasLightFile ? (
        <Image
          src={`/${LIGHT_PROFILE_FILENAME}`}
          alt="Michael Ta"
          fill
          className="object-cover object-top opacity-100 transition-opacity duration-300 dark:opacity-0"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 28vw, 34vw"
          priority
        />
      ) : null}
      {hasDarkFile ? (
        <Image
          src={`/${DARK_PROFILE_FILENAME}`}
          alt="Michael Ta"
          fill
          className="object-cover object-top opacity-0 transition-opacity duration-300 dark:opacity-100"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 28vw, 34vw"
          priority={!hasLightFile}
        />
      ) : null}
    </div>
  );
}
