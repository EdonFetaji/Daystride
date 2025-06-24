from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HabitViewSet, HabitLogViewSet

router = DefaultRouter()
router.register('habits', HabitViewSet)
router.register('habit-logs', HabitLogViewSet)

urlpatterns = [path('', include(router.urls))]
