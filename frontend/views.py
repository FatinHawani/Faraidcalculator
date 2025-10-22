from django.shortcuts import render

def members(request):
  return render(request, 'frontend/index.html')
