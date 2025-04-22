from playwright.sync_api import sync_playwright
import time

MAX_RETRIES = 3

def get_page_html(url):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        for attempt in range(1, MAX_RETRIES + 1):
            try:
                page.goto(url, timeout=10000)
                html = page.content()
                browser.close()
                return html
            except Exception as e:
                print(f"Attempt {attempt} failed: {e}")
                time.sleep(2)
        browser.close()
        raise Exception("All retries failed.")

html = get_page_html("https://example.com")
print(html)
