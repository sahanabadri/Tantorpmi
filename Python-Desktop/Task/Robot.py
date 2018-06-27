from robot.api.deco import keyword
import os

filepath = os.path.join("C:\Users\w5rtc\Desktop\Python\Bat files\\", )
@keyword("Library Command")

def comment(*message):
	print("hello")

def create_bat_file(test_name, ssid, pw, save, ap, apver, channel, frameSize, loads, expectConn, source,  destination, duration,  mcs, ss,bw, gi, eth_dut, w_dut, w_grouptype, test_type):
	print("hello test_name")
	file = open(filepath + test_name + ".bat",'w')
	file.write("::"+test_name)
	file.write("\ntclsh ..\..\\bin\\vw_auto.tcl -f"+" "+test_type + ".tcl")
	file.write("\n-- var ssid "+"\""+ssid+"\" ^")
	file.write("\n-- var pw "+"\""+pw+"\" ^")
	file.write("\n-- var save " +"\""+save+"\" ^")
	file.write("\n-- var ap "+"\""+apver+"\" ^")
	file.write("\n-- var channel "+"\""+channel+"\" ^")
	file.write("\n-- var frameSize "+"\""+frameSize+"\" ^")
	file.write("\n-- var loads "+"\""+loads+"\" ^")
	file.write("\n-- var expectConn "+"\""+expectConn+"\" ^")
	file.write("\n-- var source "+"\""+source+"\" ^")
	file.write("\n-- var destination "+"\""+destination+"\" ^")
	file.write("\n-- var duration "+"\""+duration+"\" ^")
	file.write("\n-- var mcs "+"\""+mcs+"\" ^")
	file.write("\n-- var ss "+"\""+ss+"\" ^")
	file.write("\n-- var bw "+"\""+bw+"\" ^")
	file.write("\n-- var gi "+"\""+gi+"\" ^")
	file.write("\n-- var eth_dut "+"\""+eth_dut+"\" ^")
	file.write("\n-- var w_dut "+"\""+w_dut+"\" ^")
	file.write("\n-- var w_grouptype "+"\""+w_grouptype+"\" ^")
	file.write("\n::")