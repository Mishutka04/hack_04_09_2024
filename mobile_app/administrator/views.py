from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated
import segno
from administrator.models import Criteria, Exspert, Hack, QRCodeHack, Team
from administrator.serializers import CreateHackSerializer, CriteriaSerializer, HackSerializer, ScoringPointsSerializer, TeamSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
from django.http import HttpResponse
from django.core.files.storage import default_storage
import uuid

from exspert.models import ScoringPoints

class CreateHackAPIView(APIView):

    def post(self, request):
        print(request.user)  # Для отладки
        request.data['administrator'] = request.user.id  # Передаем ID пользователя
        serializer = CreateHackSerializer(data=request.data)


        if serializer.is_valid():
            hack = serializer.save()  # Сохраняем объект хак
            return Response({'hack_id': hack.id}, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class BallAPIUpdate(generics.UpdateAPIView):
    queryset = ScoringPoints.objects.all()
    serializer_class = ScoringPointsSerializer

class BallAPIDetailView(generics.CreateAPIView):
    queryset = ScoringPoints.objects.all()
    serializer_class = ScoringPointsSerializer
    
    
class AddBallAPIView(APIView):

    def post(self, request):
        request.data['user'] = request.user
        serializer = CreateHackSerializer(data=request.data)
        if serializer.is_valid():
            " Добавление ключа "
            user = serializer.save() 
        return Response({'error': 'Некорректное значение для имени'}, status=status.HTTP_400_BAD_REQUEST)
            
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
        if 'hack_id' in self.kwargs:
            return Team.objects.filter(hack__pk=self.kwargs['hack_id'])
    
    
class CriteriaListView(generics.ListAPIView):
    serializer_class = CriteriaSerializer
    queryset = Criteria.objects.all()
    permission_classes = [IsAuthenticated]
      
    
    def get_queryset(self, *args, **kwargs):
        if 'pk' in self.kwargs:
            return Criteria.objects.filter(hack__pk=self.kwargs['pk'])    

class ScoringPointsListView(generics.ListAPIView):
    serializer_class = ScoringPointsSerializer
    queryset = ScoringPoints.objects.all()
    permission_classes = [IsAuthenticated]  
    
    def get_queryset(self, *args, **kwargs):
        if 'hack_id' in self.kwargs:
            return ScoringPoints.objects.filter(hack__pk=self.kwargs['hack_id'])   
        if 'user_id' in self.kwargs:
            return ScoringPoints.objects.filter(exspert__pk=self.kwargs['user_id'])   

class GenerateQRHackView(APIView):
    def post(self, request):
        hack_pk = request.data['hack_pk']
        if not hack_pk:
            return Response({'error': 'Некорректное значение для имени'}, status=status.HTTP_400_BAD_REQUEST)
                # создаем код
        hack = Hack.objects.get(pk=hack_pk)
        if not hack:
            return Response({'error': 'Некорректное значение для имени'}, status=status.HTTP_400_BAD_REQUEST)
                # создаем код
        uuid1 = uuid.uuid1()
        print(f'UUID Version 1: {uuid1}')
        QRCodeHack.objects.create(code = uuid1, hack=hack)
        qrcode = segno.make_qr(f"http://127.0.0.1:8000/api/generator/?code={uuid1}")
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
    permission_classes = [IsAuthenticated]
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
