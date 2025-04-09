from rest_framework.views import APIView, Response, Request
from django.forms.models import model_to_dict
from musicians.models import Musician


class MusicianView(APIView): 
    def post(self, request: Request) -> Response:
        musician = Musician.objects.create(**request.data)
        return Response(model_to_dict(musician), 201)

    def get(self, request: Request) -> Response:
        musicians = Musician.objects.all()
        musicians_dict = []
   
        for musician in musicians:
            musicians_dict.append(model_to_dict(musician))
          
        return Response(musicians_dict)    


"""
fazendo o loop no get de outra forma

  def get(self, request: Request) -> Response:
  
  musicians_dict = [
      model_to_dict(musician)
      for musician in Musician.objects.all()
  ]
  
  return Response(musicians_dict)
"""