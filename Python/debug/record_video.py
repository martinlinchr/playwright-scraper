from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(record_video_dir="videos/")
        page = context.new_page()
        page.goto("https://example.com")
        page.wait_for_timeout(3000)
        browser.close()

main()
