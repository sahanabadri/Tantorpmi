# from django.conf.urls import url,include
# # from django.contrib import admin
# from myapp.resources import NoteResource
# # from myapp.resources import NameResource

# from .views import BlogPostRudView

# note_resource = NoteResource()
# # name_resource = NameResource()

# urlpatterns = [
#     # url(r'^admin/', admin.site.urls),
#     # url(r'^api/', include(note_resource.urls)),
#     url(r'(?P<id>\d+)/$', BlogPostRudView.as_view(), name='post-rud')
#     # url(r'^sahana/', include(name_resource.urls)),
# ]