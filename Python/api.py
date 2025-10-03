from flask import Flask, request, jsonify
import asyncio
from playwright.async_api import async_playwright

app = Flask(__name__)

# Async function to extract only visible text from a webpage
async def extract_text(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto(url, wait_until="domcontentloaded")
        text = await page.inner_text("body")  # Main visible content
        await browser.close()
    return text

@app.route('/extract', methods=['POST'])
def extract():
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({"error": "No URL provided"}), 400
    try:
        result = asyncio.run(extract_text(url))
        # Return non-empty visible text as 'content'
        if not result or not result.strip():
            return jsonify({"error": "No content found"}), 204
        return jsonify({"content": result.strip()})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
