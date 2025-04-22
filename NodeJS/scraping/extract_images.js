const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const images = await page.$$eval('img', els => els.map(el => el.src));
  console.log(images);
  await browser.close();
})();
