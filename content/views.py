from django.shortcuts import render_to_response
from rest_framework import viewsets
from content.models import BlogCategory, BlogEntry
from content.seliarizels import (
    BlogEntrySerializer,
    BlogCategorySerializer,
)


def homepage(request):
    return render_to_response("base.html")


class BlogCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows categories to be viewed.
    """
    queryset = BlogCategory.objects.all()
    serializer_class = BlogCategorySerializer


class BlogEntryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows blog entries to be viewed.
    """
    queryset = BlogEntry.objects.all()
    serializer_class = BlogEntrySerializer
