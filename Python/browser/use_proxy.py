from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(proxy={"server": "http://proxyserver:port"})
    page = browser.new_page()
    page.goto("https://httpbin.org/ip")
    print(page.content())
    browser.close()
