from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://example.com")
    for _ in range(3):
        page.click("a.next-page")
        page.wait_for_timeout(1000)
    print(page.content())
    browser.close()
