FROM python:3.11-slim

WORKDIR /app
COPY . /app

# Install system dependencies for Playwright
RUN apt-get update && \
    apt-get install -y \
      wget \
      ca-certificates \
      fonts-liberation \
      libasound2 \
      libatk-bridge2.0-0 \
      libatk1.0-0 \
      libcups2 \
      libdbus-1-3 \
      libdrm2 \
      libexpat1 \
      libgbm1 \
      libglib2.0-0 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libpango-1.0-0 \
      libx11-6 \
      libx11-xcb1 \
      libxcomposite1 \
      libxcursor1 \
      libxdamage1 \
      libxext6 \
      libxfixes3 \
      libxrandr2 \
      libxrender1 \
      libxshmfence1 \
      libxss1 \
      libxtst6 \
      lsb-release \
      xdg-utils \
      --no-install-recommends && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies and Playwright browsers
RUN pip install --upgrade pip && \
    pip install flask playwright && \
    playwright install

EXPOSE 8000
CMD ["python", "api.py"]
