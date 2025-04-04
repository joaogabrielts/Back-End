# accounts/urls.py
from django.urls import path
# Novo
from . import views
# Novo

# Novo
urlpatterns = [
    path('accounts/', views.AccountView.as_view()),
]