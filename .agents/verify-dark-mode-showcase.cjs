const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 950 } });

  await page.addInitScript(() => {
    localStorage.setItem('theme', 'dark');
  });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '.agents/screenshots/dark-mode-showcase.png', fullPage: false });

  const result = await page.evaluate(() => ({
    htmlDark: document.documentElement.classList.contains('dark'),
    globeVisible: Boolean(document.querySelector('.disco-globe')),
    lasersVisible: document.querySelectorAll('.laser-beam').length,
    audioSrc: document.querySelector('audio')?.getAttribute('src') ?? null,
  }));

  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
