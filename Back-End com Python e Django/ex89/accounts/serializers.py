from rest_framework import serializers

class AccountSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    email = serializers.EmailField()
    account_balance = serializers.DecimalField(max_digits=12, decimal_places=2)
    gender = serializers.CharField(max_length=255)