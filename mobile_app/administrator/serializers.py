from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate

from .models import Criteria, Hack, Team
from exspert.models import ScoringPoints


class CreateHackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hack
        fields = "__all__"
        
class HackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hack
        fields = "__all__"
        
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = "__all__"
        
class CriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Criteria
        fields = "__all__" 
        
class ScoringPointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScoringPoints
        fields = "__all__" 
                
        
               
        