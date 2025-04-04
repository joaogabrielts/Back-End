from rest_framework.views import APIView, status, Response
from django.forms.models import model_to_dict
from accounts.models import Account
from rest_framework.request import Request


class AccountView(APIView):
    def post(self, request):
        account = Account.objects.create(**request.data)
        account_dict = model_to_dict(account)

        return Response(account_dict, status.HTTP_201_CREATED)


class AccountDetailView(APIView):
    def get(self, request: Request, account_id: int) -> Response:
        try:
            account = Account.objects.get(pk=account_id)
        except Account.DoesNotExist:
            return Response({"error": "account not found"}, 404)
        
        account_dict = model_to_dict(account)
        
        return Response(account_dict)
