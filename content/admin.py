from django.contrib import admin

from content import models


admin.site.register(models.BlogCategory)
admin.site.register(models.BlogEntry)
