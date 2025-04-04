# accounts/views.py
from rest_framework.views import APIView, status
from rest_framework.response import Response
from django.forms.models import model_to_dict

from .models import Account


class AccountView(APIView):
    def post(self, request):
        # request.data representa nosso JSON do Body do POST
        account = Account.objects.create(**request.data)
        account_dict = model_to_dict(account)

        return Response(account_dict, status.HTTP_201_CREATED)
        # Equivalentes, porém o anterior é mais legível
        # return Response(account_dict, 201)