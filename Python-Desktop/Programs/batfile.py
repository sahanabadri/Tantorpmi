# Creating a .bat file
print("Creating a .bat file")
import os

var_test_name = "Minu"
print(var_test_name)
list = ['ssid', 'pw', 'save', 'ap', 'apver', 'channel', 'frameSize', 'loads', 'expectConn','source', 'destination', 'duration', 'mcs', 'ss', 'bw', 'gi', 'eth_dut', 'w_dut', 'w_grouptype']
filepath = os.path.join("C:\Users\w5rtc\Desktop\Python\Bat files\\", )
file = open( filepath  + var_test_name + ".bat",'w')
file.write("::"+ var_test_name)


for i in range(len(list)):
	print(list[i])
	print("\n")
for i in range(len(list)):
	file.write("\n")
	file.write(list[i])