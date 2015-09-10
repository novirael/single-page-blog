from rest_framework import viewsets
from content.models import BlogCategory, BlogEntry
from content.seliarizels import (
    BlogEntrySerializer,
    BlogCategorySerializer,
)


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
