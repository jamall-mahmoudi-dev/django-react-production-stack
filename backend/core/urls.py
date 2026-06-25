from django.urls import path
from core.views import  test_class, test, create_item,create_post

app_name = 'core' 

urlpatterns = [
    
    path('test_class/', test_class , name='test_class'),
    path('test/', test , name='test'),
    path('create_item/', create_item , name='create_item'),
    path("create_post/", create_post, name='create_post')
]
