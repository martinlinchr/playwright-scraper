const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/');
  await page.fill('input#name', 'John');
  await page.fill('input#surname', 'Doe');
  await page.click('button[type=submit]');
  console.log(await page.content());
  await browser.close();
})();
