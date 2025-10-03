FROM python:3.11-slim

WORKDIR /app
COPY . /app

# Install dependencies
RUN pip install --upgrade pip && \
    pip install flask playwright && \
    playwright install

EXPOSE 8000

CMD ["python", "api.py"]
