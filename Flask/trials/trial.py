from flask import Flask, make_response, jsonify
from flask_pymongo import PyMongo, pymongo
from bson.json_util import dumps

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'MEC'
app.config['MONGO_HOST'] = '127.0.0.1'
app.config['MONGO_PORT'] = '27017'

mongo = PyMongo(app)

@app.route('/user')
def funtwo():
	user = mongo.db.users
	# new_user = user.insert({
	# 	'name' : 'sahana',
	# 	'address' : 'qwertyuiop,asdfghjkl,zxcvbnm'
	# 	})
	# return "User Added!"

	find_user = user.find()
	# return "User Found!"
	return dumps(find_user)



if __name__ == "__main__":
	app.run(debug=True)