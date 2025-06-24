from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TodoTaskViewSet

router = DefaultRouter()
router.register('todos', TodoTaskViewSet)

urlpatterns = [path('', include(router.urls))]
