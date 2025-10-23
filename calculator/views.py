from django.shortcuts import render


def members(request):
    # Render the React entry point (served from public/ during development)
    return render(request, 'index.html')
