const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  for (let i = 0; i < 3; i++) {
    await page.click('a.next-page');
    await page.waitForTimeout(1000);
  }
  console.log(await page.content());
  await browser.close();
})();
