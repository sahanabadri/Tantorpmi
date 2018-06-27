# Tuple Datatype
print("Tuple Datatype\n")

atup, btup = (123, 'xyz'), (456, 'abc')
print("\n a Tuple: ", atup)
print("\n b Tuple: ", btup)

def cmp(a, b):
    return (a > b) - (a < b) 
print("\n Comparison of atup and btup: ", cmp(atup,btup))

ctup = btup + (789,)
print("\n c Tuple: ",ctup)

print("\n Length of ctup: ", len(ctup))

Tuple1 = (3,1,2,4)
Tuple2 = (7,5,6,8)
print("\n Tuple 1: ", Tuple1)
print("\n Tuple 2: ", Tuple2)

print("\n Min of Tuple 1: ", min(Tuple1))
print("\n Max of Tuple 2: ", max(Tuple2))

list = ['123', '456', '789']
Tuple = tuple(list)
print("After Tuple: ",Tuple)