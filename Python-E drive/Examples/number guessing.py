import random
randomNum = random.randint(0, 99)
guessNum = int (input ("Enter a number btw 0 to 99: "))
while randomNum != guessNum:
  print ("Wrong One!!!")
  if randomNum > guessNum:
  	print ("Try a higher number")
  	guessNum = int(input ("Enter a number btw 0 to 99: ")) 

  elif randomNum < guessNum: 
  	print ("Try a lower number")
  	guessNum = int(input ("Enter a number btw 0 to 99: ")) 
  	
  else:
  	print ("Hurray!!! You guessed it!!!")
  	break