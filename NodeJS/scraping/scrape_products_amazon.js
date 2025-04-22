const { chromium } = require('playwright'); 
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/b?node=283155');
  await page.waitForSelector('.a-column');

  const productData = await page.$$eval('.a-column', (products) =>
    products.map((product) => {
      const getText = (selector) => {
        const el = product.querySelector(selector);
        return el ? el.textContent.trim() : null;
      };

      const getSrc = (selector) => {
        const el = product.querySelector(selector);
        return el ? el.src : null;
      };

      return {
        title: getText('.p13n-sc-truncate-desktop-type2'),
        rating: getText('.a-icon-alt'),
        reviews_count: getText('.a-size-small'),
        image_url: getSrc('img'),
      };
    })
  );

  fs.writeFileSync('product_data.json', JSON.stringify(productData, null, 2), 'utf-8');

  await browser.close();
})();
