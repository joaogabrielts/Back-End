# accounts/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import AccountSerializer

from .models import Account


class AccountFindView(APIView):
    def get(self, request):
        account_balance = request.query_params.get("account_balance_gte", None)
        gender = request.query_params.get("gender", None)

        accounts = Account.objects.filter(
            account_balance__gte=account_balance, gender=gender
        )

        serializer = AccountSerializer(accounts, many=True)

        return Response(serializer.data)