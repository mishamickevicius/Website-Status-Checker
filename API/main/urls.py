from .views import get_website_status
from django.urls import path

urlpatterns = [
    path("", get_website_status)
]