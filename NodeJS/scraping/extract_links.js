const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const links = await page.$$eval('a', els => els.map(el => el.href));
  console.log(links);
  await browser.close();
})();
