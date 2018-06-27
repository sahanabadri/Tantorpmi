*** Settings ***
Library		Signup.py
Library		Twitter.py
Library		Robot.py

*** Variables ***
Variable - Flag = 0
Variable - Flag = 1
Variable - Flag = 1

*** Test Cases ***
TC-01
	Signup
TC-02
	Twitter
TC-02
	Robot

*** Keywords ***
Keyword - Flag = 0
Keyword - Flag = 1
Keyword - Flag = 1
