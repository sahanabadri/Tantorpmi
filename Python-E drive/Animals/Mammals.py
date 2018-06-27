class Mammals:
	"""docstring for Mammals"""
	def __init__(self):
		# Creating the member animals
		self.members = ['Tiger', 'Lion', 'Elephant']

	def printMembers(self):
		print ("Printing the members of the Mammals class")
		for member in self.members:
			print ('\t%s'  %member)