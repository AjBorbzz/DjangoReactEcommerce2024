from django.urls import path
from . import views


urlpatterns = [
    path('users/login', 
         views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.get_products, name="products"),
    path('users/register/', views.register_user, name="register"),
    path('users/profile/', views.get_user_profile, name="user-profile"),
    path('users/', views.get_users, name="users"),
]
