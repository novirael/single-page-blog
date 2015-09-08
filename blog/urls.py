from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers

from content.views import BlogCategoryViewSet, BlogEntryViewSet


router = routers.DefaultRouter()
router.register(r'categories', BlogCategoryViewSet)
router.register(r'entries', BlogEntryViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
