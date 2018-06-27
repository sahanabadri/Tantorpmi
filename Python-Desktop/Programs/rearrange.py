# Rearranging the list
import random
print("Rearranging")

mylist = ['name','id','number','address','password']
print mylist
a = mylist.index('password')
b = mylist.index('number')
mylist[a], mylist[b] = mylist[b], mylist[a]
print mylist