from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    device = p.devices["iPhone 12"] 
    browser = p.webkit.launch()
    context = browser.new_context(**device)
    page = context.new_page()
    page.goto("https://httpbin.org/user-agent")
    print(page.content())
    browser.close()
