from flask import Flask, Blueprint,render_template,jsonify, make_response,request
from flask_pymongo import MongoClient,pymongo
from bson.json_util import dumps
import json
# from flask.json import JSONEncoder
from mongoengine_jsonencoder import JSONEncoder
from bson.objectid import ObjectId

mod = Blueprint('site', __name__)

client = MongoClient('localhost', 27017) 
db = client.MEC

@mod.route('/abc/<requesttype>')
def combineCollection(requesttype):
	
	bwinfo = db.bwInfo.find_one({"reqstType": requesttype})
	
	print ("bwinfo" , type(bwinfo))
	# return json.loads(bwinfo) 
	


	jsonstr = JSONEncoder().encode(bwinfo)
	# print("jsonstr" , type(jsonstr))
	# print(jsonstr)

	abc = json.dumps(jsonstr, sort_keys=True, indent=4, separators=(',', ': '))


	print ("abc - dumps" , type(abc))
	xyz = json.loads(jsonstr)
	# print("xyz - loads", type(xyz))
	return abc
	# timestamp = db.timeStamp
	# series_episodes = timestamp.find({'bwInfo_Id' : bwinfo['_id']})

	# bwinfo_list = ''
	# for bw in series_episodes:
	# 	bwinfo_list += bw['seconds'] + bw['nanoSeconds'] + '<br/>'

	# return bwinfo_list