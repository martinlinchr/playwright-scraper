FROM python:3.11-slim

WORKDIR /app
COPY . /app

# Install system dependencies for Playwright
RUN apt-get update && \
    apt-get install -y wget libglib2.0-0 libgobject-2.0-0 libnspr4 libnss3 libnssutil3 \
    libsmime3 libgio-2.0-0 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libcups2 \
    libexpat1 libxcb1 libxkbcommon0 libatspi0 libx11-6 libxcomposite1 libxdamage1 \
    libxext6 libxfixes3 libxrandr2 libgbm1 libcairo2 libpango-1.0-0 libasound2 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies and Playwright browsers
RUN pip install --upgrade pip && \
    pip install flask playwright && \
    playwright install

EXPOSE 8000
CMD ["python", "api.py"]
