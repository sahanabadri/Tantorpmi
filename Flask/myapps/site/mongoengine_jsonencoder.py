from flask import Flask
from flask.json import JSONEncoder
from bson import json_util
import json
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
	def default(self, o):
		if isinstance(o, ObjectId):
			return str(o)

		print "aszxdsfgbhjbkhgfdsfghjgfdsadfghbjnsss"
		return json.JSONEncoder.default(self, o)


