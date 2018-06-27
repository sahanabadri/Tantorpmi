import pymongo
import pprint
from pymongo import MongoClient

def try_me():
	client = MongoClient('localhost', 27017)
	db = client.MEC

	pipeline = db.ueIdentityTagInfo.aggregate([{'$lookup': 
            {
                'from' : 'ueIdentityTagInfo',
                'localField' : 'ueIdentityTags_Id',
                'foreignField' : 'ueIdentityTags_Id',
                'as' : 'alliances'
            }
        }])
	# print (pipeline)
	pprint.pprint(list(pipeline))

if __name__ == '__main__':
	try_me()