const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    userAgent: 'Your-User-Agent/1.0'
  });
  const page = await context.newPage();
  await page.goto('https://httpbin.org/headers');
  console.log(await page.content());
  await browser.close();
})();
