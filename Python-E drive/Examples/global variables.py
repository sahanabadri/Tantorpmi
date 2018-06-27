# A variable cannot be both a local and global variable inside the same function.

# Example for global variables
def function(str):
	print (str)
	str = "inside function"
	print (str)

str = "outside function"
function(str)
print (str)