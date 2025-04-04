from rest_framework.views import APIView
from rest_framework.response import Response
from django.forms.models import model_to_dict

from .models import Account


class AccountDetailView(APIView):
    def get(self, request, account_id):  # 1
        try:  # 2
            account = Account.objects.get(pk=account_id)  # 3
        except Account.DoesNotExist:  # 4
            # 5
            return Response({"error": "account not found"}, 404)

        account_dict = model_to_dict(account)  # 6

        return Response(account_dict)  # 7
   
    
"""
# 1. Em nosso método de instância get, agora também estamos recebendo um parâmetro account_id. O nome desse parâmetro deve ser o mesmo que definimos em nosso roteamento local em accounts/urls.py.
#2. Estamos englobando em um try/except o trecho de busca. O método .get() derivado de objects nos levanta uma exceção caso a busca não encontre o registro desejado.
#3. O parâmetro pk em nosso método objects.get é uma referência a chave primária (primary key) que será buscada no banco.
#4. A exceção levantada nesse caso sempre será associada a DoesNotExist, que está presente em toda model que você criar.
#5. Caso não encontrado o registro, retornamos um dicionário com a resposta apropriada, com status code 404 (NOT FOUND).
#6. Caso encontrado, o objeto será convertido para um dicionário.
#7. Com o dicionário em mãos, podemos retorná-lo para quem solicitou o recurso.
"""    
