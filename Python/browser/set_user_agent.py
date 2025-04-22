from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context(user_agent="Your-User-Agent/1.0")
    page = context.new_page()
    page.goto("https://example.com/")
    print(page.content())
    browser.close()
