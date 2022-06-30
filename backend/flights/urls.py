from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .views import AirportViewSet

router = DefaultRouter()
router.register('airport', AirportViewSet, basename='airport')

urlpatterns =[
    path('', include(router.urls)),
]