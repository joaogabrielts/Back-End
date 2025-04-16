from rest_framework.views import APIView
from rest_framework.response import Response
from musicians.models import Musician
from musicians.serializers import MusicianSerializer
from rest_framework.pagination import PageNumberPagination


class MusicianView(APIView, PageNumberPagination):
    def post(self, request):
        serializer = MusicianSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        musician = Musician.objects.create(**serializer.validated_data)
        serializer = MusicianSerializer(musician)

        return Response(serializer.data, 201)

    def get(self, request):
        musicians = Musician.objects.all()
        result_page = self.paginate_queryset(musicians, request, view=self)
        serializer = MusicianSerializer(result_page, many=True)

        return Response(serializer.data)
