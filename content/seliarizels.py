from rest_framework import serializers
from content.models import BlogEntry, BlogCategory


class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory


class BlogEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogEntry
