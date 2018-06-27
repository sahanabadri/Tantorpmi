# Trying to create a button, on click of which it will display a message
import tkinter 
from tkinter import ttk

root = tkinter.Tk()
root.width = 100
root.height = 50

style = ttk.Style()
style.map("C.TButton",
	foreground = [()])

root.mainloop()