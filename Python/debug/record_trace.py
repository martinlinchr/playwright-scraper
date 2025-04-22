from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context()
        context.tracing.start(screenshots=True, snapshots=True, sources=True)

        page = context.new_page()
        page.goto("https://example.com")
        page.wait_for_timeout(2000)

        context.tracing.stop(path="trace.zip")
        browser.close()

main()
