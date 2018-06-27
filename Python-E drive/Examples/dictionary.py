''' Creating a dictionary can be done in 2 ways. 
1. directly assigning the key with the values
2. creating function for the dictionary and accessing it again and again'''

# Example to update the dictionary
# a = dict ({0:10, 1:20})
# print (a)

# # a[2] = 30
# a.update({2:30})
# print (a)

# Example for appending the dictionary
# dic1 = {1:10, 2:20} 
# dic2 = {3:30, 4:40} 
# dic3 = {5:50, 6:60}

# dic1.update(dic2)
# append = dic1
# print (append)


# dic1.update(dic3)
# append = dic1
# print (append)

# Python script to check if a given key already exists in a dictionary.
dict  = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
search = int(input ("Enter a key value: "))
for key,value in dict.items():
	# print (key)
	# print (value)
	if key == search:
		print (search)
		# print (value)
		break
	else:
		print ("Enter a different value!!!")