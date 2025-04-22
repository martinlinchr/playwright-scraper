const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin',
    },
  });
  const page = await context.newPage();
  await page.goto('https://example.com');
  console.log(await page.content());
  await browser.close();
})();
