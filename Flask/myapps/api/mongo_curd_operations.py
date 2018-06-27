from flask import Flask, Blueprint,render_template,jsonify, make_response,request
from flask_pymongo import PyMongo, pymongo, MongoClient
from bson.json_util import dumps


mod = Blueprint('api', __name__)

mongo_host = '127.0.0.1'
mongo_port = 27017
database_name = 'Test'

client = MongoClient(mongo_host,mongo_port) 
db = client[database_name]


# @mod.route('/<version>/user')
# def funone(version):
# 	# return "Hello " + name + "!!!" 
# 	arg1 = request.args['arg1']
# 	arg2 = request.args['arg2']
# 	print "Successfully executed the GET method"
# 	return make_response(jsonify({"data sent" : "GET method", "arg1" : arg1, "arg2" : arg2, "version" : version}),200)


@mod.route('/insert')
def funtwo():
	user = db.users
	new_user = user.insert({
		'name' : 'Arijit',
		'address' : 'qwertyuiop,asdfghjkl,zxcvbnm'
		})
	return "User Added!"

@mod.route('/read')
def read():
	user = db.users
	find_user = user.find_one({'name':'Saketh'})
	return dumps(find_user)
	# return "User Found!"+ " \n" + "You found " + find_user['name'] + ". And his address" + find_user['address'] + "\n " + dumps(find_user)

@mod.route('/update')
def update():
	user = db.users
	find_user = user.find_one({'name':'Saketh'})
	find_user['address'] = "Saketh Address"
	user.save(find_user)
	return "User Updated!"

@mod.route('/delete')
def delete():
	user = db.users
	find_user = user.find_one({'name':'Saketh'})
	find_user.remove()