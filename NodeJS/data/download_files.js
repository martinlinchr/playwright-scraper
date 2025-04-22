const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('URL');

  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.click("Selector")  // Add your download link selector
  ]);
  await download.saveAs('downloaded_file.pdf');
  await browser.close();
})();
