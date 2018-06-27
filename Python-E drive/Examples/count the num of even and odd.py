# Program to count the number of even and odd numbers from a series of numbers.

a = [1,2,3,4,5,6,7,8,9]
even = 0
odd = 0
for i in a:
	if i%2 == 0:
		even += 1
	else:
		odd += 1

print ("The number of Even numbers is: ", even)
print ("The number of Odd numbers is : ", odd)