from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("https://example.com")
        heading = page.get_by_role("heading")
        print("By Role:", heading.inner_text())
        browser.close()

run()