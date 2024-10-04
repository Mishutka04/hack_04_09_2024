from django.urls import path
from administrator import views

app_name = 'administrator'

urlpatterns = [
    path('generator/', views.GenerateQRHackView.as_view(), name='auth_email'),
    path('link/exspert/', views.ConnectUserToHackView.as_view(), name='auth_email'),
    path('hack/', views.HackListView.as_view(), name='auth_email'),
    path('hack/<int:pk>/', views.HackListView.as_view(), name='auth_email'),
    
    path('create/hack/', views.CreateHackAPIView.as_view(), name='auth_email'),
    
    
     
]