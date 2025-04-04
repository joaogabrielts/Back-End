# accounts/urls.py
from django.urls import path
from accounts.views import AccountDetailView, AccountView

urlpatterns = [
    path("accounts/", AccountView.as_view()),
    path("accounts/<int:account_id>/", AccountDetailView.as_view())
    ]
