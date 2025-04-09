from django.urls import path
from musicians.views import MusicianView


urlpatterns = [
    path("musicians/", MusicianView.as_view())
]