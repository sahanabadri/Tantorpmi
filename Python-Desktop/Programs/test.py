# Factorial of a given number
# print("Factorial of a given number")

# n = int(input("Enter a number: "))
# fact = 1

# if (n < 0) :
# 	print("There is no factorial for negative number")
# elif (n == 0) :
# 	print("The factorial of 0 is 1")
# else:
# 	for i in range(1,n+1):
# 		fact = fact * i
# 	print("The factorial of", n, "is: ", fact)
# print("Good Bye")

# Checking whether the given number is zero, positive or negative
# print("Checking whether the given number is zero, positive or negative")

# n = int(input("Enter a number : "))
# if (n == 0):
# 	print("The given number is 0")
# elif (n < 0):
# 	print("The given number", n , "is negative")
# else:
# 	print("The given number", n , "is positive")
# print("Good Bye")



# program to check if the number provided by the user is an Armstrong number or not

# take input from the user
# num = int(input("Enter a number: "))

# # initialize sum
# sum = 0

# # find the sum of the cube of each digit
# temp = num
# while temp > 0:
#    digit = temp % 10
#    sum += digit ** 3
#    temp //= 10

# # display the result
# if num == sum:
#    print(num,"is an Armstrong number")
# else:
#    print(num,"is not an Armstrong number")

# Python program to check if the input number is prime or not

# num = 407

# take input from the user
num = int(input("Enter a number: "))

# prime numbers are greater than 1
if num > 1:
   # check for factors
   for i in range(2,num):
       if (num % i) == 0:
           print(num,"is not a prime number")
           print(i,"*",num//i,"is",num)
           break
   else:
       print(num,"is a prime number")
       
# if input number is less than
# or equal to 1, it is not prime
else:
   print(num,"is not a prime number")