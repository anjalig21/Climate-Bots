from django.urls import path
from .views import (
    PostListView, 
    PostDetailView, 
    PostCreateView,
    PostUpdateView,
    PostDeleteView,
    UserPostListView
)    
from . import views

urlpatterns = [
    path('', PostListView.as_view(), name='blog-home'),
    path('user/<str:username>', UserPostListView.as_view(), name='user-posts'),
    path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
    path('post/new/', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/update/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete'),
    path('unique-ideas/',views.uniqueideas,name="blog-uniqueideas"),
    path('information/',views.infopage,name="blog-infopage"),
    path('about/', views.about, name='blog-about'),
    path('contact-form/', views.contactform, name='blog-contactform'),
    path('challenges/', views.challenges, name='blog-challenges'),
    path('trivia/', views.trivia, name='blog-trivia'),
    path('calendar/',views.calendar,name="blog-calendar"),
    path('chat/',views.chat,name="blog-chat"),
    path('plant-a-tree/', views.plantatree, name='blog-plantatree')

]

