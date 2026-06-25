from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    pass

class Posts(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField(blank=True)
    discription = models.TextField() 
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'کامنت'
        verbose_name_plural = 'کامنت ها '
        
    
    def __str__(self):
        return f"{self.name} - {self.email} "