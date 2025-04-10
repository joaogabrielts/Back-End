from rest_framework import serializers

# accounts/serializers.py


class AccountSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    first_name = serializers.CharField(source="name")
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField()    
