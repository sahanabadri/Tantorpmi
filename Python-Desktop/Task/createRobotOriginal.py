import json
import sys

class createRobot :

	def createTestFile(self, testCase):		
		with open(testCase) as data_file:
			testFile = testCase
			testCase = testCase.split('.')
			file = open ("TestCases.robot", "w")
			robot.writeSettings (testFile, file)
			robot.writeVariables(file)
			robot.writeTestCases(file, testCase[0])
			robot.writeKeywords(file)
			


	def writeSettings (self, testFile, file):
		file.write ("*** Settings ***" + "\n")
		file.write ("Library           "+testFile + "\n")

	def writeVariables (self, file):
		file.write ("\n"+"*** Variables ***" + "\n")

	def writeTestCases (self, file, testCase):
		file.write ("\n"+"*** Test Cases ***" + "\n")
		file.write ("TC-01" + "\n")
		file.write ("\t"+testCase + "\n")

	def writeKeywords (self, file):
		file.write ("\n"+"*** Keywords ***" +"\n")

			
robot = createRobot()
robot.createTestFile(sys.argv[1])
