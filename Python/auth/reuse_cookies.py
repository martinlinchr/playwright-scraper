from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(storage_state="cookies.json")
    page = context.new_page()
    page.goto("https://example.com")
    print(page.content())
    browser.close()
