import os.path
import sys
import json

print('SampleTestFile')
fileExists = os.path.exists('SampleTestFile.robot')
print(fileExists)
def sample(testCase):
	if not fileExists:
		flag = 0
		file = open('SampleTestFile.robot', 'w')
		print "File Opened"
		testFile = testCase
		testCase = testCase.split('.')
		fileRead = ""
		filewrite(testFile,file,flag,fileRead)
	else:
		flag = 1
		file = open('SampleTestFile.robot', 'r')
		print "File Exists"
		testFile = testCase
		testCase = testCase.split('.')
		fileRead = file.readlines()
		filewrite(testFile,file,flag,fileRead)

def filewrite():
	if flag == 0:
		print 'flag = 0'
		file.write("SampleTestFile\n")
		file.write("1\n")
		file.write("2\n")
		file.write("3\n")
		file.write("4\n")
		file.write("5\n")
	elif flag == 1:
		print 'flag = 1'
		a = 0
		for x in range(len(fileRead)):
			if x == '3':
				pos = a
			else:
				a += 1
		print pos
# C:\Users\w5rtc\Desktop\Python\Bat files\