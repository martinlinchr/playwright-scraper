const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const heading = await page.getByRole('heading');
  console.log('By Role:', await heading.textContent());
  await browser.close();
})();