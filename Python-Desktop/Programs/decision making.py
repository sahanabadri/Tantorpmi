# Decision Making
print("Decision Making")

# simple if
print("\n Simple if")
var1 = 100
if (var1):
	print("\nThe value is: ", var1)

print("\nGood Day")

# # if... else
print("\n if...else") 
var = 100
if (var == 200):
	print("\n The value of var is not 100")
else:
	print("\n The value of value is 100")

print("\nGood Day")

# if...elif...else
print("\n if...elif...else")

var = 100
if (var == 200):
   print("\n 1 - Got a true expression value")
   print(var)
elif (var == 150):
   print("2 - Got a true expression value")
   print (var)
elif (var == 100):
   print("3 - Got a true expression value")
   print(var)
else:
   print("4 - Got a false expression value")
   print(var)

print("\n Good bye!")

# nested if...else 
print("\n Nested if...else")
var = 100
if (var < 200):
   print("\n Expression value is less than 200")
   if (var == 150):
      print("\n Which is 150")
   elif (var == 100):
      print("\n Which is 100")
   elif (var == 50):
      print("\n Which is 50")
elif(var < 50):
   print("\n Expression value is less than 50")
else:
   print("\n Could not find true expression")

print("\n Good bye!")