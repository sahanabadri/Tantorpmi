from __future__ import unicode_literals
from django.conf import settings
from django.db import models

# Create your models here.
class Note(models.Model):
	# id ---> Pk , numbers
	title = models.CharField(max_length=200)
	body = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)

class Name(models.Model):
	fname = models.CharField(max_length = 50)
	lname = models.CharField(max_length = 50)

def __str__(self):
	return str(self.title)
	return str(self.body)
	# return '%s %s' % (self.fname, self.lname)