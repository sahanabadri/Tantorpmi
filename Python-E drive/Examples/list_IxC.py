list = ['Bell', 'Bell_MAC1', '#', '1', '1', '2', '3', '4', '#', '2','7','8', '#' , '3', '10','11','12']

i = 0
list1 = []
while (i != len(list)):

	if list[i] == '#':
		list1.append(i)
	i = i + 1

print list[(list1[0]) + 1] # radio 1

print list[(list1[0]) + 2 : list1[1]]
print list[(list1[1]) + 1]
print list[(list1[1]) + 2 : list1[2]]
print list[(list1[2]) + 1]
print list[(list1[2]) + 2 :]
