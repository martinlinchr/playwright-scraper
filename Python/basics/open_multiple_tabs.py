from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    context = browser.new_context()
    urls = ["https://example.com", "https://demo.opencart.com/"]

    pages = [context.new_page() for _ in urls]
    for page, url in zip(pages, urls):
        page.goto(url)
        print(page.title())

    browser.close()
