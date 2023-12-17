import requests as rq

URL = "http://localhost:8000/api/"

data = {
    'name': 'John Doe',
    'target_url': "https://youtube.com"
}

response = rq.get(url=URL, data=data)

print(response.json())