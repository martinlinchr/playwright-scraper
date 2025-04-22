from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://example.com")
    page.select_option("select#country", "us")  # value attribute
    print(page.content())
    browser.close()
