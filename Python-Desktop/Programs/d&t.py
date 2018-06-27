# Date and Time
print("Date and Time\n")

import time, calendar;

# ticks = time.time()
# print(ticks)

# ticks = time.asctime(time.localtime(time.time()))
# print(ticks)

# ticks = time.time(1)
# print(ticks)

# cal = calendar.month(2018, 4)
# print(cal)

print("Time altzone() : ",time.altzone)

t = time.localtime()
print("local time: ", time.asctime(t))