FROM tensorflow/tensorflow:2.16.2

WORKDIR /app

COPY requirements.txt .

ENV PIP_DEFAULT_TIMEOUT=1000
RUN pip install --upgrade pip && pip install --no-cache-dir --ignore-installed -r requirements.txt

COPY . /app

EXPOSE 5000

CMD ["python", "app.py"]