from django.db import models

from mobile_app.authentication.models import User

# Create your models here.

class ScoringPoints(models.Model):
    ball = models.IntegerField()
    criteria = models.ForeignKey('criteria', on_delete=models.CASCADE)
    hack = models.ForeignKey('hack', on_delete=models.CASCADE)
    team = models.ForeignKey('team', on_delete=models.CASCADE)
    exspert = models.ForeignKey(User, on_delete=models.CASCADE)