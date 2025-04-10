from rest_framework import serializers


class AccountSerializer(serializers.Serializer):
    name_user = serializers.CharField(source="name")
    email = serializers.EmailField()
    age = serializers.IntegerField()
    sex = serializers.CharField()
