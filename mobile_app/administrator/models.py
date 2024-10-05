from django.db import models

from authentication.models import User


class Hack(models.Model):
    name = models.CharField(max_length=50, verbose_name="Название")
    descriptions = models.TextField(verbose_name="Описание")
    data_start = models.DateField(verbose_name="Дата старта")
    data_end = models.DateField(verbose_name="Дата окончания")
    administrator = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Администратор")
    
    def __str__(self):
        """
        Возвращает строковое представление модели, отображая первые 50 символов запроса.
        """
        return f"Хакатон: {self.name[:50]}..."
    
    class Meta:
        verbose_name = 'Хакатон'
        verbose_name_plural = 'Хакатоны'
        
        

class QRCodeHack(models.Model):
    code = models.TextField(verbose_name="Код")
    hack = models.ForeignKey(Hack, on_delete=models.CASCADE, verbose_name="Хакатон")
    
    def __str__(self):
        """
        Возвращает строковое представление модели, отображая первые 50 символов запроса.
        """
        return f"QR код: {self.code[:50]}..."
    
    class Meta:
        verbose_name = 'QR код'
        verbose_name_plural = 'QR коды'
    
class Criteria(models.Model):
    name = models.CharField(max_length=50, verbose_name="Название")
    max_ball = models.IntegerField(verbose_name="Макс балл")
    hack = models.ForeignKey(Hack, on_delete=models.CASCADE, verbose_name="Хакатон")
    
    def __str__(self):
        """
        Возвращает строковое представление модели, отображая первые 50 символов запроса.
        """
        return f"Критерий: {self.name[:50]}..."
    
    class Meta:
        verbose_name = 'Критерий'
        verbose_name_plural = 'Критерии'
    
class Team(models.Model):
    name = models.CharField(max_length=50, verbose_name="Название")
    descriptions = models.TextField(verbose_name="Описание")
    hack = models.ForeignKey(Hack, on_delete=models.CASCADE, verbose_name="Хакатон")
    
    def __str__(self):
        """
        Возвращает строковое представление модели, отображая первые 50 символов запроса.
        """
        return f"Команда: {self.name[:50]}..."
    
    class Meta:
        verbose_name = 'Команда'
        verbose_name_plural = 'Команды'
    
class Exspert(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    hack = models.ForeignKey(Hack, on_delete=models.CASCADE, verbose_name="Хакатон")
    
    def __str__(self):
        """
        Возвращает строковое представление модели, отображая первые 50 символов запроса.
        """
        return f"Эксперт: {self.user.username[:50]}..."
    
    class Meta:
        verbose_name = 'Эксперт'
        verbose_name_plural = 'Эксперты'
# Create your models here.
class Administrator(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    
    def __str__(self):
        """
        Возвращает строковое представление модели, отображая первые 50 символов запроса.
        """
        return f"Администратор: {self.user.username[:50]}..."
    
    class Meta:
        verbose_name = 'Администратор'
        verbose_name_plural = 'Администраторы'

class AdministratorCode(models.Model):
    code = models.CharField(max_length=50, verbose_name="Код")
    data_finish = models.DateField(verbose_name="Дата окончания")
    
    def __str__(self):
        """
        Возвращает строковое представление модели, отображая первые 50 символов запроса.
        """
        return f"Код Администратора: {self.code[:50]}..."
    
    class Meta:
        verbose_name = 'Код администратора'
        verbose_name_plural = 'Коды администратора'
    
