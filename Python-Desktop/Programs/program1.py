print("Program 1")
print("MANPOWER")
print("manpower  .")

lines and intendation
if True:
	print("true")
else :
	print("false")


if True:
   print ("Answer")
   print ("True")
else:
   print ("Answer")
   print ("False")

# multi line statements
itemone = 5;
itemtwo = 10;
itemthree = 15;

total = itemone + \
		itemtwo + \
		itemthree 
print ("Total: ", total)

# quotations
# In python single quote (''), double quote (""), and triple quote (''''')("""""") are valid until quotes start and end with same type.
days = ('monday', 'tuesday','wednesday', 'thursday', 'friday', 'saturday', 'sunday')
print("Days: ", days)

singlequote = 'Word'
print ("Single Quote: ", singlequote)

doublequote = "Sentence"
print("Double Quote:", doublequote)

singletriplequote = '''Para'''
print ("Single Triple Quote: ", singletriplequote)

doubletriplequote = """ Paragraph """
print("Double Triple Quote:", doubletriplequote)

# waiting for user response
input("\n\n Please press any key to terminate")
# raw_input() function is renamed as input() in python 3.0

# assigning multiple values to variables
a = b = c = 5
print("value of d:",  a*b*c )

x,y,z = 5,10, "sahana"
print("value of x,y is: ", x+y)
print("value of z is: ", z)

# Datatypes
# Numbers
print("Numbers")
var1 = 1
var2 = 2
print(var1)
print(var2)
del var2
print(var1)

# String
str = "Dell Laptop"
print("String"); print (str)          # Prints complete string
print (str[0])       # Prints first character of the string
print (str[-1])      # Prints last character of the string from right
print (str[2:5])     # Prints characters starting from 3rd to 5th
print (str[2:])      # Prints string starting from 3rd character
print (str * 2 )     # Prints string two times
print (str + "TEST") # Prints concatenated string

# List
list = [10, 'xyz', 100, 'abc', 1000, 10000]
listb = [5,'pqr', 50, 'mno', 500]
print("List"); print(list); print(listb)   # Prints complete string
del list[5]                 # Deletes the last element of the list
print(list)                 # Prints the updated the list
print(list[0])              # Prints first character of the string of list a
print(listb[-1])             # Prints last character of the string from right
print (list[2:5])           # Prints characters starting from 3rd to 5th
print (listb[1:])            # Prints string starting from 3rd character
print (list * 2)            # Prints string two times
print (list + listb)        # Prints concatenated string
print("\n")

# Tuples
tuple = ('abcd', 786 , 'xyz', 2.23, 'john', 70.2)
tinytuple = (5,'pqr', 50, 'mno', 500)
print("Tuple")
print(tuple); #print(tinytuple)   # Prints complete string
print (tuple[0])                 # Prints first element of the list
print (tuple[1:3])               # Prints elements starting from 2nd till 3rd 
print (tuple[2:])                # Prints elements starting from 3rd element
print (tinytuple * 2)            # Prints list two times
print (tuple + tinytuple)        # Prints concatenated lists
print("\n")

# Dictionary
print("Dictionary")
dict = {}
dict['one'] = "This is one"
dict[2] = "this is two"
adict = {'name' : 'abc', "code" : "12345", "dept" : "learner"}
bdict = {'student name' : "xyz", "role number" : '5678', "role":'student'}
print(dict['one'])
print(dict[2])
print(adict); print(bdict)
print("a dict values",adict.keys())
print("a dict values",adict.values())
print("b dict values",bdict.keys())
print("b dict values",bdict.values())
print("\n")

# Type Conversions
print("Type Conversions")
x = 'sahana'
y = 50
print(str(x))
print(repr(x))
# print(eval(x))
print(tuple(x))
print(list(x))
# print(sets(x))
print(frozenset(x))
print(chr(y))
# print(unichr(y))
print(hex(y))
print(oct(y))
