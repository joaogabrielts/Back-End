from rest_framework import serializers


class AccountSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    age = serializers.IntegerField()
    sex = serializers.CharField()
