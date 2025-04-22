const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: 'videos/' }
  });
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.waitForTimeout(3000);
  await browser.close();
})();
