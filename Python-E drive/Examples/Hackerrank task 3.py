mealPrice = float(input().strip())
tipPercent = int(input().strip())
taxPercent = int(input().strip())

tip = mealPrice * (tipPercent/100)
tax = mealPrice * (taxPercent/100)

totalCost = mealPrice + tip + tax