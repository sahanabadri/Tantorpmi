# printing the fibonacci series of the given number
# import fibo

def fib(n):
  a, b = 0, 1

  while b < n:
  	print (b, end='')
  	a, b = b, a+b
  	print ("\n")
  print ()

x = int(input("Enter the range for the fibonacci series: "))
fib(x)