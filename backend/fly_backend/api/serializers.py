from rest_framework import serializers
from dbapp import models as dbmodels

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = dbmodels.CustomUser
        fields = ["username","email","name","profile_image_url","password","mobileno"]
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        password = validated_data.pop('password') 
        user = dbmodels.CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            instance.set_password(validated_data['password'])
        
        return super().update(instance, validated_data) 

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = dbmodels.CustomUser
        exclude = ["is_superuser","password","is_staff","groups","user_permissions"]
        lookup_field = "username"