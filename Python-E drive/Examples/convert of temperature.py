# this program to convert the user given temperature to Celsius if given in Fahrenhit and vice versa.
temp = (input ("Enter the temperature value that u want to convert: Example 50C or 122F: "))
deg = int(temp [:-1])
x = temp [-1]

if x.upper() == 'C':
	result = int (round (deg * 9) / 5 + 32)
	y = "Fahrenhit"
elif x.upper() == 'F':
	result = int (round((deg - 32) * 5/9))
	y = "Celsius"
else:
	print ("Invalid input")

print ("The converted temperature into ", y, "is ", result, "degrees")