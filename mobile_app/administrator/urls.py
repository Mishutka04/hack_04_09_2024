from django.urls import path
from administrator import views

app_name = 'administrator'

urlpatterns = [
    path('generator/', views.GenerateQRHackView.as_view(), name='auth_email'),
    path('link/exspert/', views.ConnectUserToHackView.as_view(), name='auth_email'),
    path('hack/', views.HackListView.as_view(), name='auth_email'),
    path('hack/<int:pk>/', views.HackListView.as_view(), name='auth_email'),
    
    path('criteria/<int:pk>/', views.CriteriaListView.as_view(), name='auth_email'),
    path('points/hack/<int:hack_id>/', views.ScoringPointsListView.as_view(), name='auth_email'),
    path('points/user/<int:user_id>/', views.ScoringPointsListView.as_view(), name='auth_email'),
    
    path('team/hack/<int:hack_id>/', views.TeamListView.as_view(), name='auth_email'),
    path('team/description/<int:pk>/', views.TeamListView.as_view(), name='auth_email'),
    
    path('create/hack/', views.CreateHackAPIView.as_view(), name='auth_email'),
    path('create/point/', views.BallAPIDetailView.as_view(), name='auth_email'),
    
    
     
]