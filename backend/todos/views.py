from rest_framework import viewsets
from .models import TodoTask
from .serializers import TodoTaskSerializer

class TodoTaskViewSet(viewsets.ModelViewSet):
    queryset = TodoTask.objects.all()
    serializer_class = TodoTaskSerializer
