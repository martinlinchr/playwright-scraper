# Save full page to JSON file

from playwright.sync_api import sync_playwright
import json

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("https://example.com")
    content = page.content()
    with open("page.json", "w", encoding="utf-8") as f:
        json.dump({"html": content}, f, ensure_ascii=False, indent=2)
    browser.close()
