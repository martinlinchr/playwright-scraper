![Python](https://img.shields.io/badge/python-3.7+-blue)
![Node.js](https://img.shields.io/badge/node.js-18+-green)
![Playwright](https://img.shields.io/badge/playwright-1.43.0-blueviolet)


# Playwright Web Scraping Examples (Python & Node.js)

This repository contains practical web scraping examples using **[Playwright](https://playwright.dev/)** in both **Python** and **Node.js**. It’s organized to help you learn everything — from basics to advanced techniques.
## Table of Contents

1. [Requirements](#requirements)
2. [Project Structure](#project-structure)
3. [Web Scraping With Playwright](#scripts)
   - [Basics](#basics)
   - [Scraping](#scraping)
   - [Selectors](#selectors)
   - [Interactions](#interactions)
   - [Save Data](#save-data)
   - [Auth](#auth)
   - [Browser](#browser)
   - [Errors](#errors)

## Requirements

**Python 3.7+ or Node.js 18+**

Playwright installed:

### Python
```
pip install playwright
playwright install
```
### Node.js
```
npm install playwright
```

## Project Structure
The project is organized into two main folders: one for Python scripts and one for Node.js. Both have identical folder structures and contain the same functionality, but in different languages (Python for python/ and Node.js for node/).
```
.
├── Python/
│   ├── basics/
│   │   ├── launch_browser.py
│   │   ├── headless_vs_headful.py
│   │   └── open_multiple_tabs.py
│   ├── scraping/
│   │   ├── extract_text_title.py
│   │   ├── extract_links.py
│   │   ├── extract_images.py
│   │   ├── scrape_shadow_dom.py
│   │   ├── wait_for_element.py
│   │   ├── scrape_products_amazon.py
│   │   └── scrape_woocommerce.py
│   ├── selectors/
│   │   ├── select_by_css.py
│   │   ├── select_by_xpath.py
│   │   ├── select_by_role.py
│   │   └── select_by_text.py
│   ├── interactions/
│   │   ├── click_button.py
│   │   ├── fill_form.py
│   │   ├── select_dropdown.py
│   │   ├── hover_element.py
│   │   ├── click_pagination.py
│   │   └── infinite_scroll.py
│   ├── save data/
│   │   ├── save_json.py
│   │   ├── save_csv.py
│   │   ├── save_pdf.py
│   │   ├── download_files.py
│   │   └── screenshot_element.py
│   ├── auth/
│   │   ├── basic_auth.py
│   │   ├── save_cookies.py
│   │   └── reuse_cookies.py
│   ├── browser/
│   │   ├── set_user_agent.py
│   │   ├── use_proxy.py
│   │   └── emulate_device.py
│   ├── errors/
│   │   ├── retry_failed_requests.py
│   └── debug/
│       ├── record_video.py
│       ├── record_trace.py
│       ├── pause_script.py
│       └── debug_console.py
├── NodeJS/
│   └── [Same folder structure with .js equivalents]
```

Each script demonstrates a specific feature of Playwright and can be run independently.

## Basics

This section has basic scripts that show how to launch a browser with Playwright, switch between headless and headful modes, and open multiple tabs in the same browser.

The table below lists the main commands for that. 

| Description | Python | Node.js |
|------------|--------|---------|
| Launch browser | `browser = await playwright.chromium.launch()` | `const browser = await chromium.launch();` |
| Headless mode | `launch(headless=False)` | `launch({ headless: false })` |
| Open multiple tabs | `context.new_page()` | `context.newPage()` |

You can check out the full scripts in the project folder.

## Scraping

This section contains scripts for extracting text, links, images, and working with complex elements like Shadow DOM or delayed content.

| Description | Python | Node.js |
|------------|--------|---------|
| Get page title | `title = await page.title()` | `const title = await page.title();` |
| Extract links | `page.eval_on_selector_all("a", "...")` | `page.$$eval('a', ...)` |
| Get image URLs | `img.get_attribute("src")` | `img.getAttribute("src")` |
| Scrape Shadow DOM | `locator = page.locator('css=shadow-root-selector')` | `page.locator('css=shadow-root-selector')` |
| Wait for element | `await page.wait_for_selector(".class")` | `await page.waitForSelector('.class')` |


This part of the project includes two ready-to-use scrapers implemented in both Python and Node.js:

- `scrape_products_amazon.py` / `scrape_products_amazon.js`
- `scrape_woocommerce.py` / `scrape_woocommerce.js`

If you want to learn how to build the similar scrapers step by step, check out the detailed guides:

- [How to Scrape Amazon](https://hasdata.com/blog/scraping-amazon-product-data-using-python)  
- [How to Scrape WooCommerce](https://hasdata.com/blog/woocommerce-scraping)

Alternatively, you can use the no-code scrapers and APIs to quickly extract structured data from Amazon:

- [Amazon Search Results](https://hasdata.com/scrapers/amazon-search-results)  
- [Amazon Product Info](https://hasdata.com/scrapers/amazon-product)  
- [Amazon Reviews](https://hasdata.com/scrapers/amazon-reviews)  
- [Amazon Bestsellers](https://hasdata.com/scrapers/amazon-bestsellers)  
- [Amazon Customer FAQs](https://hasdata.com/scrapers/amazon-customer-faqs)  
- [Amazon Price Tracker](https://hasdata.com/scrapers/amazon-price)


## Selectors

This section demonstrates different ways to select elements on a page using CSS selectors, XPath, roles, and text content.

The table below lists the main commands for that.

| Description | Python | Node.js |
|------------|--------|---------|
| CSS selector | `page.locator("div > span")` | `page.locator("div > span")` |
| XPath selector | `page.locator('//h1')` | `page.locator('//h1')` |
| Select by role | `page.get_by_role("button")` | `page.getByRole('button')` |
| Select by text | `page.get_by_text("Login")` | `page.getByText('Login')` |

##  Interactions

This section covers scripts that simulate user actions like clicking buttons, filling out forms, selecting from dropdowns, hovering, and handling pagination or infinite scrolling.
The table below lists the main commands for that.

| Description | Python | Node.js |
|------------|--------|---------|
| Click button | `await page.click("button")` | `await page.click('button')` |
| Fill input | `await page.fill("#email", "test@example.com")` | `await page.fill('#email', 'test@example.com')` |
| Select dropdown | `await page.select_option("select", "value")` | `await page.selectOption('select', 'value')` |
| Hover element | `await page.hover(".menu")` | `await page.hover('.menu')` |
| Pagination | `await page.click("text=Next")` | `await page.click('text=Next')` |
| Infinite scroll | `await page.evaluate("window.scrollBy(...)")` | `await page.evaluate(() => window.scrollBy(...))` |

Avoid hardcoded delays — they’re unreliable and make your scraper brittle.

Don’t do this:
#### Python
```python
await asyncio.sleep(5)
```
#### Node.js
```js
await new Promise(r => setTimeout(r, 5000));
```
Do this instead:
#### Python
```python
await page.wait_for_selector(".product-thumb")
```
#### Node.js
```js
await page.waitForSelector(".product-thumb");
```
Waiting for the actual element is always better than guessing how long the page needs to load.


## Save Data

This section includes examples for saving scraped data in various formats like JSON, CSV, or PDF, and for downloading files or capturing screenshots.
The table below lists the main commands for that.


| Description | Python | Node.js |
|------------|--------|---------|
| Save JSON | `json.dump(data, open("file.json", "w"))` | `fs.writeFileSync('file.json', JSON.stringify(data))` |
| Save CSV | `csv.writer(open("file.csv", "w")).writerows(data)` | `fs.writeFileSync('file.csv', csvString)` |
| Download files | `await page.click("a[download]")` | `await page.click('a[download]')` |
| Screenshot element | `await locator.screenshot(path="element.png")` | `await locator.screenshot({ path: 'element.png' })` |
| Save PDF | `await page.pdf(path="output.pdf")` | `await page.pdf({ path: 'output.pdf' })` |

## Auth

This section provides scripts for handling basic authentication, managing cookies, and reusing them across sessions.
The table below lists the main commands for that.

| Description | Python | Node.js |
|------------|--------|---------|
| Basic auth | `context = browser.new_context(http_credentials={...})` | `browser.newContext({ httpCredentials: {...} })` |
| Save cookies | `context.cookies()` → save to file | `context.cookies()` → save to file |
| Load cookies | `context.add_cookies(cookies)` | `context.addCookies(cookies)` |

## Browser

This section focuses on controlling browser behavior with custom user agents, proxies, and device emulation.
The table below lists the main commands for that.


| Description | Python | Node.js |
|------------|--------|---------|
| Set user agent | `browser.new_context(user_agent="...")` | `browser.newContext({ userAgent: "..." })` |
| Use proxy | `launch(proxy={"server": "http://..."})` | `launch({ proxy: { server: "http://..." } })` |
| Emulate device | `playwright.devices["iPhone 12"]` | `devices['iPhone 12']` |


If you want to check available devices:
#### Python

```python
print(p.devices.keys())
```
This will output something like:

```python
dict_keys(['iPhone 12', 'Pixel 5', 'Galaxy S9+', ...])
```
#### NodeJS

```js
console.log(Object.keys(devices));
```

Example output:

```bash
[
  'Blackberry PlayBook',
  'iPhone 12',
  'Galaxy S9+',
  'Pixel 5',
  ...
]
```

## Errors

This section contains examples for retrying failed requests and handling timeouts or unexpected responses.
The table below lists the main commands for that.

| Description | Python | Node.js |
|------------|--------|---------|
| Retry logic | `for i in range(retries): try/except` | `for (let i = 0; i < retries; i++) try/catch` |

## Debug

This section provides tools for debugging: recording videos and traces, pausing scripts, and inspecting with console logs.
The table below lists the main commands for that.

| Description | Python | Node.js |
|------------|--------|---------|
| Record video | `record_video_dir="videos/"` | `recordVideo: { dir: 'videos/' }` |
| Record trace | `trace.start()` / `trace.stop(path="trace.zip")` | `tracing.start()` / `tracing.stop()` |
| Pause script | `await page.pause()` | `await page.pause()` |
| Console logs | `page.on("console", ...)` | `page.on('console', ...)` |


You can check out the full scripts in the project folder.
