from django.db import models

from authentication.models import User
from administrator.models import Criteria, Hack, Team


# Create your models here.

class ScoringPoints(models.Model):
    ball = models.IntegerField()
    criteria = models.ForeignKey(Criteria, on_delete=models.CASCADE)
    hack = models.ForeignKey(Hack, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    exspert = models.ForeignKey(User, on_delete=models.CASCADE)