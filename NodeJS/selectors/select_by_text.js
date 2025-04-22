const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const element = await page.getByText('Example Domain');
  console.log('By Text:', await element.textContent());
  await browser.close();
})();