# Example for class as Employee database.
class Employee:
	# Base for all class
	empCount = 0

	def __init__ (self, name, salary):
		self.name = name
		self.salary = salary
		Employee.empCount += 1

	def displayName(self):
		print ("Name: ",self.name, ", Salary: ",self.salary)

	def displayCount(self):
		print ("The total number of Employee: ",Employee.empCount)

# This will ask the user to enter the employee details
n = input("Enter the number of employees: ")
n = int(n)
for i in range(n):
	empName = input("Enter the employee name: ")
	empSalary = input("Enter the employee salary: ")
	emp = Employee (empName, empSalary)
	emp.displayName()

print ("The total number of Employee: ",Employee.empCount)