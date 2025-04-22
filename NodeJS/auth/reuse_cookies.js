const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const storage = JSON.parse(fs.readFileSync('cookies.json', 'utf8'));
  const context = await browser.newContext({ storageState: storage });
  const page = await context.newPage();

  await page.goto('https://example.com');
  console.log(await page.content());

  await browser.close();
})();
