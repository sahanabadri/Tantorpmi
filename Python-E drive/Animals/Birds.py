class Birds:
	"""docstring for Birds"""
	def __init__(self):
		# Creating the member birds
		self.members = ['Sparrow', 'Pigeon', 'Parrot']

	def printMembers(self):
		print ("Printing the members of the Birds class")
		for member in self.members:
			print ("\t %s " %member)