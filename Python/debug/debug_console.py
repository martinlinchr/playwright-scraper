from playwright.sync_api import sync_playwright

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.on("console", lambda msg: print(f"Console: {msg.type}: {msg.text}"))
        page.goto("https://example.com")
        page.evaluate("console.log('Hello from browser')")
        browser.close()

main()
