from django.urls import path, include
from . import views
# from django.conf import settings
# from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),
    path("search/", views.search, name="search"),
    path("addfriend/<str:name>", views.addFriend, name="addFriend"),
    path("chat/<str:username>", views.chat, name="chat"),
    path('api/messages/<int:sender>/<int:receiver>', views.message_list, name='message-detail'),
    path('api/messages', views.message_list, name='message-list'),

    #edit_profile
    path("edit_profile/<int:pk>/",views.edit_profile,name="edit_profile"),
    path("edit_profile_data/",views.edit_profile_data, name="edit_profile_data"),

] 
# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
#     urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)