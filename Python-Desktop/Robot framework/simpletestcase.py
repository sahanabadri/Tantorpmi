import os.path
import sys
import json

print 'SampleTestFile'
fileExists = os.path.exists('writeContent.robot')
print(fileExists)
if not fileExists:
	flag = 0
	file = open("writeContent.robot", "w")
	print("File opened")
	fileRead = ""
	writeContent(flag,file,fileRead)
else:
	flag = 1
	print("File exists")
	file = open("writeContent.robot", 'r')
	fileRead = file.readlines()
	writeContent(flag,file,fileRead)

def writeContent(flag,file,fileRead):
	if flag == 0:
		file.write("1\n")
		file.write("2\n")
		file.write("3\n")
		file.write("4\n")
		file.write("5\n")
	
	elif flag == 1:
		a = 0
		for l_num, x in fileRead:
			if '3' in x:
				pos = a
			else:
				a += 1