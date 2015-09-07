from django.db import models


class BlogCategory(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Blog categories"


class BlogEntry(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    category = models.ForeignKey(BlogCategory)
    created_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Blog entries"
