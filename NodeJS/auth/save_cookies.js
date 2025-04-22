const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  const storage = await context.storageState();
  fs.writeFileSync('cookies.json', JSON.stringify(storage, null, 2));

  await browser.close();
})();
