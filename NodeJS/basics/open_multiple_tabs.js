const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const urls = ['https://example.com', 'https://demo.opencart.com/'];

  const pages = await Promise.all(urls.map(() => context.newPage()));
  for (let i = 0; i < urls.length; i++) {
    await pages[i].goto(urls[i]);
    console.log(await pages[i].title());
  }

  await browser.close();
})();
