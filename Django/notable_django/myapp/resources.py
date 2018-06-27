# from rest_framework import status
# from rest_framework.response import Response
# from rest_framework.test import APITestCase

from tastypie.resources import ModelResource
from tastypie.authorization import Authorization

from myapp.models import Note
from myapp.models import Name

# class ExampleTestCase(APITestCase):
#     def test_url_root(self):
#         url = reverse('index')
#         response = self.client.get(url)
#         self.assertTrue(status.is_success(response.status_code))


class NoteResource(ModelResource):
	# def empty_view(self):
	#     content = {'please move along': 'nothing to see here'}
	#     return Response(content, status=status.HTTP_404_NOT_FOUND)

	class Meta: # need to undrstnd
		queryset = Note.objects.all()
		resource_name = 'str'
		authorization = Authorization()
		# testcase = ExampleTestCase()
		# test = empty_view()


class NameResource(ModelResource):
	class Meta: # need to undrstnd
		queryset = Name.objects.all()
		resource_name = 'xyz'
		authorization = Authorization()
		# testcase = ExampleTestCase()


def __str__(self):
	return 