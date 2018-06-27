# from rest_framework import generics
# from myapp.models import Note
# from .serializers import BlogPostSerializer

# class BlogPostRudView(generics.RetrieveUpdateDestroyAPIView):
# 	lookup_field		= 'id' #(r'(?P<id>\d+)')
# 	serializer_class 	= BlogPostSerializer
# 	# queryset			= Note.objects.all()

# 	def get_queryset(self):
# 		return Note.objects.all()

# 	# def get_object(self):
# 	# 	pk = self.kwargs.get("id")
# 	# 	return Note.objects.get(pk=id)