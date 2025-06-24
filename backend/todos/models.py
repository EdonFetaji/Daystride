from django.db import models
from django.db import models
from django.contrib.auth.models import User

class TodoTask(models.Model):
    PRIORITY_CHOICES = [
        (1, 'High'),
        (2, 'Medium'),
        (3, 'Low'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    deadline = models.DateTimeField(max_length=20, blank=True, null=True)
    priority = models.IntegerField(choices=PRIORITY_CHOICES, default=3)
    completed = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.name} ({'done' if self.completed else 'pending'})"
