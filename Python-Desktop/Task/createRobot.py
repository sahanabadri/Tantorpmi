import json
import sys
import os.path
print("hello")
fileExists = os.path.exists('TestCases.robot')
print(fileExists)
def createTestFile1(testCase):
	if not fileExists:
		file = open("TestCases.robot", "w")
		print("File opened")
		flag = 0
		testFile = testCase
		testCase = testCase.split('.')
		fileRead = ""
		fileName = ""
		writeSettings (testFile,file,flag, fileRead)
		writeVariables(file,flag, fileRead)
		writeTestCases(file, testCase[0],flag,fileRead)
		writeKeywords(file,flag,fileRead)
	else:
		flag = 1
		print("File exists")
		file = open("TestCases.robot", 'r')
		testFile = testCase
		testCase = testCase.split('.')
		fileRead = file.readlines()
		for read in fileRead :
			print read
			if testFile in read:
				print ("ALREADY.............." + testFile)
				sys.exit()
			elif testFile not in read:
				print  ("NOT THERE.............." + testFile)
		writeSettings (testFile,file,flag,fileRead)
		writeVariables(file,flag,fileRead)
		writeTestCases(file, testCase[0],flag,fileRead)
		writeKeywords(file,flag,fileRead)
		

def writeSettings (testFile, file, flag, fileRead):
	if flag == 0:
		print("writeSettings flag == 0")
		file.write ("*** Settings ***" + "\n")
		file.write ("Library\t\t"+testFile + "\n" )

	elif flag == 1:
		print("writeSettings flag == 1")
		file = open("TestCases.robot", 'w')
		#Find the location of Settings	
		print 'inside function'
		if "*** Settings ***\n" in fileRead:
			print("Settings is available")
			index = [x for x in range(len(fileRead)) if '*** Settings ***\n' in fileRead[x]]
			for i in range(len(index)):
				index[i] = int(index[i])
			index = index[i] + 2
			value = "Library\t\t"+testFile + "\n"
			fileRead.insert(index, value)
			fileRead = "".join(fileRead)
			file.write(fileRead)
		



def writeVariables (file,flag, fileRead):
	if flag == 0:
		print("writeVariables flag == 0")
		file.write ("\n"+"*** Variables ***" + "\n")
		file.write ("Variable - Flag = 0\n")

	elif flag == 1:
		print("writeVariables flag == 1")
		file = open("TestCases.robot", 'w')
		#Find the location of Settings	
		if "*** Variables ***\n" in fileRead:
			print("Variables is available")
			index = [x for x in range(len(fileRead)) if '*** Variables ***\n' in fileRead[x]]
			for i in range(len(index)):
				index[i] = int(index[i])
			index = index[i] + 2
			value = "Variable - Flag = 1"+ "\n"
			fileRead.insert(index, value)
			fileRead = "".join(fileRead)
			file.write(fileRead)

def writeTestCases (file, testCase,flag,fileRead):
	# file.write ("\n"+"*** Test Cases ***" + "\n")
	if flag == 0:
		print("writeTestCases flag == 0")		
		file.write ("\n"+"*** Test Cases ***" + "\n")
		file.write ("TC-01" + "\n")
		file.write ("\t"+testCase + "\n")

	elif flag == 1:
		print("writeTestCases flag == 1")
		file = open("TestCases.robot", 'w')
		#Find the location of Settings	
		if "*** Test Cases ***\n" in fileRead:
			print("Test Cases is available")
			index = [x for x in range(len(fileRead)) if '*** Test Cases ***' in fileRead[x]]
			for i in range(len(index)):
				index[i] = int(index[i])
			index = index[i] + 3
			value = "TC-02" + "\n" + "\t"+testCase + "\n"
			fileRead.insert(index, value)
			fileRead = "".join(fileRead)
			file.write(fileRead)
			file.close()


def writeKeywords (file,flag,fileRead):
	if flag == 0:
		print("writeVariables flag == 0")
		file.write ("\n"+"*** Keywords ***" + "\n")
		file.write ("Keyword - Flag = 0\n")
	elif flag == 1:
		print("writeVariables flag == 1")
		if "*** Keywords ***\n" in fileRead:
			file = open("TestCases.robot", 'w')
		#Find the location of Settings	
			print("Keywords is available")
			index = [x for x in range(len(fileRead)) if '*** Keywords ***' in fileRead[x]]
			for i in range(len(index)):
				index[i] = int(index[i])
			index = index[i] + 2
			value = "Keyword - Flag = 1"+ "\n"
			fileRead.insert(index, value)
			fileRead = "".join(fileRead)
			file.write(fileRead)
			file.close()

			
if __name__== "__main__":
	createTestFile1(sys.argv[1])