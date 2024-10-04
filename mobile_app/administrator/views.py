from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated
from administrator.models import Criteria, Exspert, Hack, QRCodeHack, Team
from administrator.serializers import CreateHackSerializer, CriteriaSerializer, HackSerializer, ScoringPointsSerializer, TeamSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.http import HttpResponse
from django.core.files.storage import default_storage
import segno

from exspert.models import ScoringPoints

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

class GenerateQRHackView(APIView):
    def get(self, request):
        code = request.GET.get('code', 'Undefined')
        if not code or ';' in code:
            return Response({'error': 'Некорректное значение для имени'}, status=status.HTTP_400_BAD_REQUEST)
                # создаем код
        qrcode = segno.make_qr("asdasd")
        # сохраняем его в файл "metanit_qr.png"
        qrcode.save("metanit_qr.png", scale=5) 
        try:
            with default_storage.open('metanit_qr.png', 'rb') as image_file:
                response = HttpResponse(image_file.read(), content_type='image/jpeg')
                response['Content-Disposition'] = 'attachment; filename="image.jpg"'
                return response
        except FileNotFoundError:
            return HttpResponse(status=404)  # Возвращаем 404, если файл не найден

        
        return response
            
class ConnectUserToHackView(APIView):
    def get(self, request):
        code = request.GET.get('code', 'Undefined')
        if not code or ';' in code:
            return Response({'error': 'Некорректное значение для имени'}, status=status.HTTP_400_BAD_REQUEST)      
        code_accept = QRCodeHack.objects.get(code = code)
        if not code_accept:
            return Response({'error': 'Некорректное значение для имени'}, status=status.HTTP_400_BAD_REQUEST)      
        Exspert.objects.create(user = request.user, hack=code_accept.hack)
        return Response({'status': 'Ok'}, status=status.HTTP_200_OK) 
            
            
                  
        
# Create your views here.
