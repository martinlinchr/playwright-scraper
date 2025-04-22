const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://amundsensports.com/sweater-women/');
  await page.waitForSelector('li.product');

  const products = await page.$$('li.product');
  const results = [];

  for (const product of products) {
    const title = await (await product.$('.woocommerce-loop-product__title')).innerText();
    const gender = await (await product.$('.woocommerce-loop-product__gender')).innerText();
    const price = await (await product.$('.price .amount')).innerText();
    const link = await (await product.$('a.woocommerce-loop-product__link')).getAttribute('href');

    const colorElements = await product.$$('.color-variable-item');
    const sizeElements = await product.$$('.button-variable-item');

    const colors = await Promise.all(colorElements.map(async (el) => await el.getAttribute('title')));
    const sizes = await Promise.all(sizeElements.map(async (el) => await el.getAttribute('title')));

    results.push({
      title,
      gender,
      price,
      link,
      colors,
      sizes
    });
  }

  fs.writeFileSync('products.json', JSON.stringify(results, null, 2), 'utf-8');

  const csv = 'title,gender,price,link,colors,sizes\n' +
    results.map(item => {
      return `${item.title},${item.gender},${item.price},${item.link},"${item.colors.join(', ')}","${item.sizes.join(', ')}"`;
    }).join('\n');

  fs.writeFileSync('products.csv', csv, 'utf-8');

  await browser.close();
})();
