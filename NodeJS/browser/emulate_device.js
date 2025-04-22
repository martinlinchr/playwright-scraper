const { webkit, devices } = require('playwright'); 

(async () => {
  const iPhone = devices['iPhone 12'];
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...iPhone
  });

  const page = await context.newPage();
  await page.goto('https://httpbin.org/user-agent');
  const content = await page.content();
  console.log(content);

  await browser.close();
})();
