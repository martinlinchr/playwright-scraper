from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://example.com/infinite-scroll")
    for _ in range(10):
        page.evaluate("window.scrollBy(0, window.innerHeight);")
        page.wait_for_timeout(1000)
    print(page.content())
    browser.close()
