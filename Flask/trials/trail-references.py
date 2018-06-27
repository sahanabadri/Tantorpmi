from flask import Flask, make_response, jsonify
from flask_pymongo import PyMongo, pymongo
import json 
from bson.json_util import dumps

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'Test'
app.config['MONGO_HOST'] = '127.0.0.1'
app.config['MONGO_PORT'] = '27017'

mongo = PyMongo(app)

# @app.route("/add_episode/<code>/<name>/<season>")
# def add_episode(code, name, season):
# 	series = mongo.db.series
# 	the_series = series.find_one({'code' : code})

# 	episodes = mongo.db.episodes
# 	episodes.insert({'name' : name, 'season' : season, 'series_id' : the_series['_id']})

# 	return 'Added ' + name + ' to the collection!'

@app.route("/")
def get_episode():
	series = mongo.db.series
	the_series = series.find({}, {"code":1, "_id":0})
	# print (the_series)

	# def Merge(x, y):
	# 	z = x.copy() 
	# 	z.update(y)
	# 	print z
	# 	return z

	# a = the_series[0]
	# b = the_series[1]

	# c = Merge(a,b)
	# print (c)
	# dic1 = json.dumps(c)

	# dict1 = b
	# dict2 = the_series[2]
	
	# dict3 = Merge(dict1,dict2)
	# print (dict3)
	# dic2 =  json.dumps(dict3)
	
	find = { }
	for f in (the_series):
		find.update(f)

	print find

	return "found!" + "<br/>" , find
	# print (type(find_series))

	# episodes = mongo.db.episodes
	# series_episodes = episodes.find({'series_id' : the_series['_id']})

	# episode_list = ''

	# for e in series_episodes:
	# 	episode_list += e['name'] + '<br/>'

	# return episode_list

if __name__ == '__main__':
	app.run(debug=True)