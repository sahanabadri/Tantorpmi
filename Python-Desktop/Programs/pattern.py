# pattern printing 
n = int(input("Enter a number... "))
for i in range(1,n):
	for sp in range(1, (n-i)):
		print(end= " ")
	for j in range(0, i):
		print("* ", end="")
	print("\n")


# print("    *")
# print("   * *")
# print("  * * *")
# print(" * * * *")
# print("* * * * *")