import paramiko
import os, sys

def SSHFile():
	ssh =paramiko.SSHClient()
	ssh.load_system_host_keys()
	ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
	
	ssh.connect(hostname='172.20.30.139',username='Arijit',password='arijit')
	
	stdin,stdout,stderr = ssh.exec_command('python Sample.py')
	# output = stdout.readlines()
	# print '\n '.join(output)
	
	
if __name__ == "__main__":
	SSHFile()