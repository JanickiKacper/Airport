from django.shortcuts import render

from rest_framework import viewsets

from .models import AIRPORT
from .serializers import AirportSerializer

class AirportViewSet(viewsets.ModelViewSet):
    serializer_class = AirportSerializer
    queryset = AIRPORT.objects.all()

