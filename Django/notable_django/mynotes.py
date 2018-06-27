from myapp.models import Name
note = Name(title="First Note", body="This is a certainly note!!!")
note.save()
note = Name(title="Second", body="This is my second note")
note.save()
note = Name(title="third note", body="This is my third note")
note.save()
Name.objects.all()
exit() 

from myapp.models import Name
note = Name(fname="abc", lname="This is a certainly note!!!")
note.save()
note = Name(fname="xyz", lname="This is my second note")
note.save()
note = Name(fname="third note", lname="This is my third note")
note.save()
Name.objects.all()
exit() 