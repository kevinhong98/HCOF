from django.shortcuts import render
from .models import Post
# Create your views here.
def blog_list(request):
  post = Post.objects.all()
  context = {
    'blog_list':post
  }
  return render(request, "blog/blog_list.html", context)


