const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    proxy: {
      server: 'http://proxyserver:port'
    }
  });
  const page = await browser.newPage();
  await page.goto('https://httpbin.org/ip');
  console.log(await page.content());
  await browser.close();
})();
