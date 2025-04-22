const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.waitForSelector('h1');
  const text = await page.textContent('h1');
  console.log('Found:', text);
  await browser.close();
})();
