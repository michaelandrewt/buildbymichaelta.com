'use client';

import { useState } from 'react';

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'zh' : 'en'));
    // In a real implementation, you would trigger i18n language change here
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      aria-label="Toggle language"
    >
      {language === 'en' ? '中文' : 'EN'}
    </button>
  );
}
