from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("https://example.com")
        element = page.get_by_text("Example Domain")
        print("By Text:", element.inner_text())
        browser.close()

run()
