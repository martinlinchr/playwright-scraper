// Save h2 headers to CSV file

const { chromium } = require('playwright');
const fs = require('fs');
const { parse } = require('json2csv');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const headers = await page.$$eval('h2', els => els.map(e => e.innerText));
  const csv = parse(headers.map(h => ({ Header: h })));
  fs.writeFileSync('headers.csv', csv);
  await browser.close();
})();
