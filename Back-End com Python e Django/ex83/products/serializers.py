# products/serializers.py
from rest_framework import serializers
from .models import CategoryProduct
# 1


class ProductSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=20)
    category = serializers.ChoiceField(
        choices=CategoryProduct.choices,
        default=CategoryProduct.OTHER
    )
    price = serializers.DecimalField(decimal_places=2, max_digits=5)