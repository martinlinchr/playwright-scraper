// Save full page to JSON file

const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const html = await page.content();
  fs.writeFileSync('page.json', JSON.stringify({ html }, null, 2));
  await browser.close();
})();
