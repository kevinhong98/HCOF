from django.shortcuts import render
from .models import Post
# Create your views here.

def home(request):
  post = Post.objects.all()
  context = {
    'home': post
  }
  return render(request, 'home/home.html', context)