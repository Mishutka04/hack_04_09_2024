from django.db import models

from mobile_app.authentication.models import User

class QRCodeHack(models.Model):
    code = models.TextField()
    hack = models.ForeignKey('hack', on_delete=models.CASCADE)
    
class Hack(models.Model):
    name = models.CharField(max_length=50)
    descriptions = models.TextField()
    data_start = models.DateField()
    data_end = models.DateField()
    administrator = models.ForeignKey(User, on_delete=models.CASCADE)
    
class Criteria(models.Model):
    name = models.CharField(max_length=50)
    max_ball = models.IntegerField()
    hack = models.ForeignKey('hack', on_delete=models.CASCADE)
    
class Team(models.Model):
    name = models.CharField(max_length=50)
    descriptions = models.TextField()
    hack = models.ForeignKey('hack', on_delete=models.CASCADE)
    

# Create your models here.
