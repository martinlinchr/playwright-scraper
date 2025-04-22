const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', msg => {
    console.log(`Console ${msg.type()}: ${msg.text()}`);
  });

  await page.goto('https://example.com');
  await page.evaluate(() => console.log('Hello from browser console'));
  await browser.close();
})();
