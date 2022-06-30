from rest_framework import serializers

from .models import AIRPORT

class AirportSerializer(serializers.ModelSerializer):

    class Meta:
        model = AIRPORT
        fields = (
            'id',
            'miasto',
            'dni_tygodnia',
            'godzina_p',
            'godzina_o',
            'linia',
            'okres',
        )