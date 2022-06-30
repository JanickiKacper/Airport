from dataclasses import dataclass
from django.db import models


class AIRPORT(models.Model):
    
    miasto = models.CharField(max_length=64, unique=False, null=True)
    dni_tygodnia = models.CharField(max_length=64, unique=False, null=True)
    godzina_p = models.TimeField(max_length=64, unique=False, null=True)
    godzina_o = models.TimeField(max_length=64, unique=False, null=True)
    linia = models.CharField(max_length=64, unique=False, null=False)
    okres = models.CharField(max_length=64, unique=False, null=True)

