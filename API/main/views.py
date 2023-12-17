from django.http import JsonResponse
from rest_framework.decorators import api_view
import requests as rq

# Create your views here.

@api_view(["POST"])
def get_website_status(request):
    try:
        data = dict(request.data)
        scan = rq.get(url=data['target_url'], timeout=5.0)
        if int(scan.status_code) >= 200 and int(scan.status_code) < 400:
            result = {"Status": "Up and Working"}
        else:
            result = {"Status": "Down or Not Responding"}
    except:
        return JsonResponse({'error': 'Invalid URL'}, status=400)
    return JsonResponse({
        "is_alive": True,
        "target":data['target_url'],
        "response_code":scan.status_code,
        "result": result["Status"]
    })