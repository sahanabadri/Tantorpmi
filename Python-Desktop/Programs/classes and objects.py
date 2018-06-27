class Employee:
    empCount = 0

    def __init__(self,name,salary):
        self.name = name
        self.salary = salary
        Employee.empCount += 1
    
    def displayCount():
        print ("The total number of employees are: ",   Employee.empCount)
    
    def displayDetails(self):
        print("Name : ", self.name, ", Salary : ", self.salary)

emp1 = Employee("Sahana", 25000)
emp2 = Employee("Minu", 20000)
emp3 = Employee("Ramya", 20000)
emp1.displayDetails()
emp2.displayDetails()
emp3.displayDetails()
print ("number of employees ", Employee.empCount)
Employee.displayCount()
