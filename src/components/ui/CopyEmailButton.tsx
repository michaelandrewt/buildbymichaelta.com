'use client';

import { yellowHoverUnderline } from '@/lib/linkStyles';

export default function CopyEmailButton() {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText('buildbymichaelta@gmail.com')}
      className={`font-semibold text-foreground ${yellowHoverUnderline} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]`}
    >
      email
    </button>
  );
}
