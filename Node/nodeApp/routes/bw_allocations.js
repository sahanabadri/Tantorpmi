var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');

/* GET home page. */
router.get('/', require('./users'));

router.get('/sairam', function(req, res) {
  res.send('sairam calling');
});

router.get('/bw_allocations', function(req, res) {
	
	  MongoClient.connect("mongodb://localhost:27017/mec", function(err, db) {
	  		if(err) { return console.log(err); }
			else{
		 		var collection = db.collection('bwInfo');

/*
		 		// collection.findOne({zoneInfo_Id : "zoneInfo_1"}, function(err, item) {
		 		collection.find().limit(10).toArray(function(err, item) {
		 			if(err){
		 				console.log(err)
		 			}else{
		 				// console.log(item,"item------");
		 				// res.send('GET method called for bw_allocations',item);
		 				// return JSON.parse(JSON.stringify(item));
		 				res.send(item);

		 				//document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 4);
					// need to use <PRE> tag in HTMl if you want to print in JSON format.

		 			}
		 		});

				collection.aggregate([
						{
					     $lookup:
					       {
					         from: "inventory",
					         localField: "item",
					         foreignField: "sku",
					         as: "inventory_docs"
					       }
					  }]).toArray(function(err, res) {

					  	 });

*/

					  collection.aggregate([
					  	{ $lookup : 
					  		{
					  			from : "timeStamp", 
					  			localField : "timeStamp_Id", 
					  			foreignField : "timeStamp_Id", 
					  			as : "bwInfo"
					  		}
					  	}, 
					  	{ 
					  		$match : 
					  		{
					  			timeStamp_Id : "timeStamp_2"
					  		} 
					  	},
					  	 {
					  	 	$unwind : "$bwInfo" 
					  	 },
					  	  {
					  	  	$project : 
					  	  	{
					  	  		_id : 0, bwInfo : 1
					  	  	} 
					  	  },
					  	  { $lookup : 
					  		{
					  			from : "reqstType", 
					  			localField : "reqstType", 
					  			foreignField : "reqtType_Id", 
					  			as : "reqstTypeInfo"
					  		}
					  	  },
					  	  {
					  	 	$unwind : "$reqstTypeInfo" 
					  	 }

					  	  ]).toArray(function(err, item) {
					 			if(err){
					 				console.log(err)
					 			}else{
					 				res.send('data is:',JSON.stringify(item, undefined, 3))
					 				// res.send(item);
								}
							});
					  	}
  // res.send('GET method called for bw_allocations');
	});
});
// router.post('/bw_allocations', function(req, res) {
//   res.send('POST method called for bw_allocations');
// });



module.exports = router;


 