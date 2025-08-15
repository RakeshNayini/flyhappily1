from django.urls import path
from  .import views

urlpatterns = [
    # path('',views.greet,name="hello"),
    path('user', views.LoggedUser.as_view(), name='logged-in-user'),  #get
    
    path('user/register',views.RegisterView.as_view(),name="register"), #post
    path('user/login',views.LoginView.as_view(),name="login"),          #post
    path('user/logout',views.LogoutView.as_view(),name="logout"),       #post
]
