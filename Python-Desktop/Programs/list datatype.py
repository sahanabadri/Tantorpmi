# List Datatype
print("List Datatype\n")

list1 = ['C++', 'Java', 'Python']
list2 = ['100', 'xyz', 'abc']

# print("cmp(list1,list2) : ",cmp(list1,list2))

print("\n len(list1) : ", len(list1))

print("\n max(list2) : ", max(list2))

print("\n min(list1) : ", min(list1))

aTuple = ('C++', 'Java', 'Python')
print("\n list of elements : ", list(aTuple))

str = "Sahana Badri"
print("\n str : ", list(str))

list1 = ['Biology', 'Physics', 'Chemistry', 'Computer']
print("List 1 :", list1)

list1.append('Maths') 
print("\nAfter appending, list1 : ", list1)

list2 = ['100', '10', '100', '50', '100']
print("\nList 2 : ", list2)
print("\nCounting of 100 in list2 : ", list2.count('100'))

list3 = list(range(5))
print("\nList 3 : ", list3)
list1.extend(list3)
print("\nExtended list1 :", list1)

print("\n List 1: ",list1)
print("\n Index of an object of maths: ", list1.index(str('Maths')))

list1.insert(4, "Maths")
print("List 1 after inserting :", list1)

list1.pop()
print("\nList 1 after pop :", list1)

list1 = ['a', 'b', 'c', 'd', 'e', 'f']
print("\n List 1:", list1)
list1.remove('f')
print("\n List 1 after remove:", list1)

list1 = ['Biology', 'Physics', 'Chemistry', 'Computer', 'Maths']
print("\n List 1:", list1)
list1.reverse()
print("\n List 1 after reverse:", list1)

list1.sort()
print("\n List 1 after sorting: ", list1)
