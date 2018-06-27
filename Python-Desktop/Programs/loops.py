# Loops
print("Loops")

# For Loop
# print("\nSimple for loop\n")
# for i in range(0,5):
# 	print("\n")
# 	print (i)
# 	print("\n")
# 	for j in range (1,10):
# 		print (j)

# for n in range(11,21):
# 	# print(n)
# 	for i in range(2,n):
# 		if (n % i == 0):
# 			j = n / i
# 			# print(n, "equals to ", i, "*", j) # j will consider as long values
# 			print(str(n) + " equals to ", i, "*", int(j))   # int(j) will take interger values
# 			break
# 	else:
# 		print(n, "is a prime number")

# While Loop
# print("\nSimple While Loop \n")
# i = 1 
# while (i <= 20) :
# 	print("The value of i :", i)
# 	i = i + 1
# print("Bye")

# # Infinite while loop
# print("\nInfinite While Loop")

# var = 1
# while var == 1:
# 	n = input("Enter a number: ")
# 	print("The entered number is ", n)
# 	break
# print("Bye")

#  While...else loop
# print("\nWhile...else Loop \n")

# i = 1
# while i <= 10:
# 	print(i,"is less than 10")
# 	i = i + 1
# else:
# 	print(i, "is not less than 10")

# Nested Loops
print("\nNested Loops\n")

i = 2
while (i < 100):
	j = 2
	while (j <= (i/j)):
		if not (i%j): 
			break
		j = j + 1
		#print ("Increase J " + str(j))
		else:
			pass	
	if (j > (i/j)):
		print (i, "is a prime number")
	i = i + 1
	#print ("Increase I" + str(i))
print("Bye")






