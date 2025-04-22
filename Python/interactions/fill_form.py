from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://example.com/")
    page.fill("input#name", "John")
    page.fill("input#surname", "Doe")
    page.click("button[type=submit]")
    print(page.content())
    browser.close()
