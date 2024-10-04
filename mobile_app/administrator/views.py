from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated
from mobile_app.administrator.models import Criteria, Hack, Team
from mobile_app.administrator.serializers import CreateHackSerializer, CriteriaSerializer, HackSerializer, ScoringPointsSerializer, TeamSerializer
from rest_framework.views import APIView

from mobile_app.exspert.models import ScoringPoints

class CreateHackAPIView(APIView):

    def post(self, request):
        request.data['user'] = request.user
        serializer = CreateHackSerializer(data=request.data)
        if serializer.is_valid():
            " Добавление ключа "
            user = serializer.save()

class BallAPIUpdate(generics.UpdateAPIView):
    queryset = ScoringPoints.objects.all()
    serializer_class = ScoringPointsSerializer

class BallAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ScoringPoints.objects.all()
    serializer_class = ScoringPointsSerializer
    
    
class AddBallAPIView(APIView):

    def post(self, request):
        request.data['user'] = request.user
        serializer = CreateHackSerializer(data=request.data)
        if serializer.is_valid():
            " Добавление ключа "
            user = serializer.save() 
            
class HackListView(generics.ListAPIView):
    serializer_class = HackSerializer
    queryset = Hack.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        if 'pk' in self.kwargs:
            return Hack.objects.filter(pk=self.kwargs['pk'])
        return Hack.objects.all()          
    
    
class TeamListView(generics.ListAPIView):
    serializer_class = TeamSerializer
    queryset = Team.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        if 'pk' in self.kwargs:
            return Team.objects.filter(pk=self.kwargs['pk'])
        return Team.objects.all()       
    
class CriteriaListView(generics.ListAPIView):
    serializer_class = CriteriaSerializer
    queryset = Criteria.objects.all()
    permission_classes = [IsAuthenticated]  

class ScoringPointsListView(generics.ListAPIView):
    serializer_class = ScoringPointsSerializer
    queryset = ScoringPoints.objects.all()
    permission_classes = [IsAuthenticated]  
 
# Create your views here.
