'use strict';
var MongoClient = require('mongodb').MongoClient;


/**
 * Remove a specific bandwidthAllocation resource. DELETE method is typically used in \"Unregister from Bandwidth Management Service\" procedure
 *
 * allocationId String Represents a bandwidth allocation instance
 * no response value expected for this operation
 **/
// exports.bw_allocationsAllocationIdDELETE = function(allocationId) {
//   return new Promise(function(resolve, reject) {
//     resolve();
//   });
// }


/**
 * This method retrieves information about a specific bandwidthAllocation resource. 
 *
 * allocationId String Represents a bandwidth allocation instance
 * returns inline_response_200
 **/
// exports.bw_allocationsAllocationIdGET = function(allocationId) {
//   return new Promise(function(resolve, reject) {
//      MongoClient.connect("mongodb://localhost:27017/MEC", function(err, db) {
//         if(err) { 
//           return console.log(err);
//         }
//       else{
//         var collection = db.collection('bwInfo');

//         collection.aggregate([
//           { $lookup:
//             {
//               from: "timeStamp",
//               localField:"timeStamp_Id",
//               foreignField:"timeStamp_Id",
//               as: "bwinfo"
//             }
//           },
//           // {
//           //   $match:
//           //   {
//           //     timeStamp_Id  : "timeStamp_2"
//           //   }
//           // },
//           {
//             $unwind: "$bwinfo"
//           },
//           {
//             $project:
//             {
//               _id:0, bwInfo:1
//             }
//           }
//         ]).toArray(function(err, item) {
//           if(err){
//             console.log(err)
//           }else{
//             // resolve.send('data is:',JSON.stringify(item, undefined, 3))
//             resolve(JSON.stringify(item, undefined, 3));
//           }
//         });
//       }
//     });
//   });
// }

// /**
//  * This method updates the information about a specific bandwidthAllocation resource. 
//  *
//  * allocationId String Represents a bandwidth allocation instance
//  * bwInfoDeltas BwInfoDeltas Description of the changes to instruct the server how to modify the resource representation. 
//  * returns inline_response_200
//  **/
// exports.bw_allocationsAllocationIdPATCH = function(allocationId,bwInfoDeltas) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "bwInfo" : {
//     "timeStamp" : {
//       "seconds" : { },
//       "nanoSeconds" : { }
//     },
//     "fixedBWPriority" : { },
//     "allocationDirection" : { },
//     "requestType" : { },
//     "sessionFilter" : "",
//     "appInsId" : { },
//     "fixedAllocation" : { }
//   }
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


// /**
//  * This method updates the information about a specific bandwidthAllocation resource. 
//  *
//  * allocationId String Represents a bandwidth allocation instance
//  * bwInfo BwInfo BwInfo with updated information is included as entity body of the request
//  * returns inline_response_200
//  **/
// exports.bw_allocationsAllocationIdPUT = function(allocationId,bwInfo) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "bwInfo" : {
//     "timeStamp" : {
//       "seconds" : { },
//       "nanoSeconds" : { }
//     },
//     "fixedBWPriority" : { },
//     "allocationDirection" : { },
//     "requestType" : { },
//     "sessionFilter" : "",
//     "appInsId" : { },
//     "fixedAllocation" : { }
//   }
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


/*
 * This method retrieves information about a list of bandwidthAllocation resources
 *
 * app_instance_id List A mobile edge application instance may use multiple app_instance_ids as an input parameter to query the bandwidth allocation of a list of mobile edge application instances.  (optional)
 * app_name List A mobile edge application instance may use multiple ser_names as an input parameter to query the bandwidth allocation of a list of mobile edge application instances.  (optional)
 * session_id List A mobile edge application instance may use session_id as an input parameter to query the bandwidth allocation of a list of sessions.  (optional)
 * returns inline_response_200
 */
exports.bw_allocationsGET = function(app_instance_id,app_name,session_id) {
  return new Promise(function(resolve, reject) {
  MongoClient.connect("mongodb://localhost:27017/MEC", function(err, db) {
        if(err) { 
          return console.log(err);
        }
      else{
        var collection = db.collection('bwInfo');

        collection.aggregate([
          { $lookup:
            {
              from : "timeStamp",
              localField :"timeStamp_Id",
              foreignField :"timeStamp_Id",
              as : "timeStamp"
            }
          },
          // {
          //   $match: 
          //   {
          //     timeStamp_Id  : "timeStamp_1"
          //   }
          // },
          {
            $unwind : "$timeStamp"
          },
          
         { $lookup:
                {
                  from : "reqstType",
                  localField : "reqstType",
                  foreignField : "reqstType_Id",
                  as : "requestType"
                }
            },
          // {
          //   $match:
          //   {
          //     reqstType : "1"
          //   }
          // },
          {
            $unwind : "$requestType"
          },

          { $lookup:
            {
              from : "sessionFilter",
              localField : "session_Id",
              foreignField : "session_Id",
              as : "sessionFilter"
            }
          },
          // {
          //   $match:
          //   {

          //   }
          // },
          // {
          //   $unwind : "$sessionFilter"
          // },
          {
            $project:
            {
              "appIns_Id":1,
              "fixedBWPriority":1, 
              "fixedAllocation":1, 
              "allocationDirection":1,
              "requestType" : 1,
              "timeStamp.seconds":1, 
              "timeStamp.nanoSeconds":1,
              "sessionFilter.sourceIP":1, 
              "sessionFilter.sourcePort":1,
              "sessionFilter.destAddress":1, 
              "sessionFilter.destPort":1,
              "sessionFilter.protocol":1,
            }
          },
        ]).toArray(function(err, item) {
          if(err){
            console.log(err)
          }else{
            var finalItem = []
            var finalArrayObj = {}
            var bwInfo = {}
            for(var i = 0 ; i < item.length; i ++){
              console.log(item[i])

              finalItem.push (bwInfo : {'appIns_Id' : item[i]['appIns_Id'] } ,
                              {'reqstType' : item[i].requestType['reqstTypeDescription']})
              // finalArrayObj = {'appIns_Id' : item[i]['appIns_Id'] }
              // finalArrayObj.push({'reqstType' : item[i].requestType['reqstTypeDescription']})
              // finalArrayObj = {'fixedBWPriority' : item[i]['fixedBWPriority']}
              // finalArrayObj = {'fixedAllocation' : item[i]['fixedAllocation']}
              // finalArrayObj = {'timeStamp' : item[i].timeStamp}
            
            // finalItem.push({bwInfo : finalArrayObj})

            }
            resolve(finalItem)
          }
        });
      }
    });
  });        
}


// /**
//  * This method is used to create a bandwidthAllocation resource.
//  *
//  * bwInfo BwInfo BwInfo with updated information is included as entity body of the request
//  * returns inline_response_200
//  **/
// exports.bw_allocationsPOST = function(bwInfo) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "bwInfo" : {
//     "timeStamp" : {
//       "seconds" : { },
//       "nanoSeconds" : { }
//     },
//     "fixedBWPriority" : { },
//     "allocationDirection" : { },
//     "requestType" : { },
//     "sessionFilter" : "",
//     "appInsId" : { },
//     "fixedAllocation" : { }
//   }
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }
