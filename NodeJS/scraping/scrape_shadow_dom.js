const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://shop.polymer-project.org/');
  const shadowText = await page.$eval('shop-app', el => 
    el.shadowRoot.querySelector('shop-home').shadowRoot.querySelector('h2').textContent
  );
  console.log(shadowText);
  await browser.close();
})();
