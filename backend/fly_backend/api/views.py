########################################
from dbapp import models as dbmodels
from . import serializers
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate,logout,login
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
# Create your views here.

class LoginView(APIView):
    permission_classes = [AllowAny] 
    
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        
        if user:
            token, created = Token.objects.get_or_create(user=user)
            login(request,user)
            return Response({
                'token': token.key
                },status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
                           
class RegisterView(APIView):
    permission_classes = [AllowAny] 
    
    def post(self, request):
        serializer = serializers.UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
             "message" : "user register succesfully",
             "user" : {
                 "id" : user.id,
                 "username" : user.username,
                 "name" : user.name,
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
class LogoutView(APIView):
    def post(self,request):
        token = Token.objects.get(user=request.user)
        token.delete()
        logout(request)
        return Response({"message": "Successfully logged out."}, status=status.HTTP_200_OK)
        
class LoggedUser(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            serializer = serializers.UserSerializer(request.user)
            token, created = Token.objects.get_or_create(user=request.user)
            return Response({
                'user_data' : serializer.data,
                'token' : token.key,
                },status=status.HTTP_200_OK)
        else:
            return Response({
                "message": "User not logged in",
                }, status=status.HTTP_401_UNAUTHORIZED)
