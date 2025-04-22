const { chromium } = require('playwright');

const MAX_RETRIES = 3;

async function getPageHTML(url) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            await page.goto(url, { timeout: 10000 });
            const html = await page.content();
            await browser.close();
            return html;
        } catch (e) {
            console.log(`Attempt ${attempt} failed: ${e}`);
            await new Promise(r => setTimeout(r, 2000));
        }
    }

    await browser.close();
    throw new Error('All retries failed.');
}

getPageHTML("https://example.com").then(console.log);
