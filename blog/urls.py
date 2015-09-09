from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers

from content import views


router = routers.DefaultRouter()
router.register(r'blog/categories', views.BlogCategoryViewSet)
router.register(r'blog/entries', views.BlogEntryViewSet)


urlpatterns = [
    url(r'^', views.homepage),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(router.urls)),
]
