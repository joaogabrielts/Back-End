# musicians/views.py
# musicians/views.py
from rest_framework.response import Response
from rest_framework.views import APIView
from django.forms.models import model_to_dict

from .models import Musician


class MusicianView(APIView):
    def get(self, request):
           musicians = Musician.objects.all()

           musicians_dict = []

           for musician in musicians:
              m = model_to_dict(musician)
              musicians_dict.append(m)

        return Response(musicians_dict)