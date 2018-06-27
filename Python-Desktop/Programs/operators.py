# Operators
print("Operators")
# Membership Operators
print("\nMembership Operators")
a = 10
b =20
list = [1, 2, 50, 100, 500]

if (a in list):
	print("Line 1 : a is available in the list")
else:
	print("Line 1 : a is not available in the list")

if (b not in list):
	print("Line 2 : b is available in the list")
else:
	print("Line 2 : b is not available in the list")

a = 50

if (a in list):
	print("Line 3 : a is available in the list")
else:
	print("Line 3 : a is not available in the list")

# Identity Operators
print("\nIdentity Operators")
a = 20
b = 20

if (a is b):
	print("Line 1 : a and b have same value")
else:
	print("Line 1 : a and b do not have same value")

if (id(a) is not id(b)):
	print("Line 2 : a and b have same identity")
else:
	print("Line 2 : a and b do not have same identity")

a = 30
if (a is b):
	print("Line 3 : a and b have same value")
else:
	print("Line 3 : a and b do not have same value")

if (id(a) is not id(b)):
	print("Line 4 : a and b do not have same identity")
else:
	print("Line 4 : a and b have same identity")

# Comparision Operators
print("\nComparision Operators")
a = 50
b = 100
print("a value: ", a)
print("b value: ", b)

if(a == b):
	print("\n == : a equal to b")
else:
	print("\n == : a not equal to b")

if (a != b):
	print("\n != : a not equal to b")
else:
	print("\n != : a equal to b")

# if (a <> b):
# 	print("\n != : a not equal to b")
# else:
# 	print("\n != : a equal to b")

if (a > b):
	print("\n > : a is greater than b")
else:
	print("\n > : a is not greater than b")

if (a < b):
	print("\n < : a is less than b")
else:
	print("\n < : a is not less than b")

if (a >= b):
	print("\n > : a is greater than and equal to b")
else:
	print("\n > : a is not greater than and equal to b")

if (a <= b):
	print("\n < : a is less than and equal to b")
else:
	print("\n < : a is not less than and equal to b")

# Assignment Operators
print("\n Assignment Operators")
a = 20
b = 10
c = 0

print("a value: ", a)
print("b value: ", b)
c = a + b
print("\n c value: ", c)

c += a
print("\n c += a value: ",c)

c -= a 
print("\n c -= a value: ",c)

c *= a 
print("\n c *= a value: ",c)

c /= a 
print("\n c /= a value: ",c)

c %= a 
print("\n c %= a value: ",c)
 
c //= a 
print("\n c //= a value: ",c)

c **= a 
print("\n c **= a value: ",c)

# Bitwise Operators
print("\n Bitwise Operators")

a = 60     # 60 = 0011 1100
b = 13     # 13 = 0000 1101
c = 0      # 00 = 0000 0000

print("a value: ", a)
print("b value: ", b)

c = a & b
print("\n c = a & b : ", c)

c = a | b
print("\n c = a | b : ", c)

c = ~a
print("\n c = ~a : ", c)

c = a ^ b
print("\n c = a ^ b : ", c)

c = a << 2
print("\n c = a << 2 : ", c)

c = b >> 2 
print("\n c = b >> 2 : ", c)