from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GoalViewSet, UserGoalViewSet

router = DefaultRouter()
router.register('goals', GoalViewSet)
router.register('user-goals', UserGoalViewSet)

urlpatterns = [path('', include(router.urls))]
