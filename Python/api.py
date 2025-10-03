from flask import Flask, request, jsonify
import asyncio
from playwright.async_api import async_playwright

app = Flask(__name__)

async def extract_content(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(url)
        # Extract full text content; you can improve extraction as needed
        content = await page.content()      # HTML
        text = await page.inner_text("body") # Main visible text
        await browser.close()
    return {
        "text": text,
        "html": content
    }

@app.route('/extract', methods=['POST'])
def extract():
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({"error": "No URL provided"}), 400
    try:
        result = asyncio.run(extract_content(url))
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
