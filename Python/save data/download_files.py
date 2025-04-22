from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("URL")
    with page.expect_download() as download_info:
        page.click("Selector")  # Add your download link selector
    download = download_info.value
    download.save_as("downloaded_file.pdf")
    browser.close()