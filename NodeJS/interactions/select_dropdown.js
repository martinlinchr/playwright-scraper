const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.selectOption('select#country', 'us');
  console.log(await page.content());
  await browser.close();
})();
