from django.urls import path
from base.views import product_views as views


urlpatterns = [

    path('', views.get_products, name="products"),
    
    # path('create/', views.createProduct, name="product-create"),
    # path('upload/', views.uploadImage, name="image-upload"),

    # path('<str:pk>/reviews/', views.createProductReview, name="create-review"),
    # path('top/', views.getTopProducts, name='top-products'),
    path('<str:pk>/', views.get_product, name="product"),

    # path('update/<str:pk>/', views.update_product, name="product-update"),
    # path('delete/<str:pk>/', views.delete_product, name="product-delete"),
]