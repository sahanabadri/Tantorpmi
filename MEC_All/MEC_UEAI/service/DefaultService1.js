'use strict';
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var defaultService = function(app){
  this.app = app;
};

module.exports = defaultService;


// /**
//  * The DELETE method is used to delete the resource that represents the existing application context.
//  *
//  * contextId String Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
//  * no response value expected for this operation
//  **/
// exports.app_contextsContextIdDELETE = function(contextId) {
//   return new Promise(function(resolve, reject) {
//     resolve();
//   });
// }


// /**
//  * The PUT method is used to update the callback reference of the existing application context. Upon successful operation, the target resource is updated with new callback reference.
//  *
//  * contextId String Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
//  * appContext AppContext Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
//  * no response value expected for this operation
//  **/
// exports.app_contextsContextIdPUT = function(contextId,appContext) {
//   return new Promise(function(resolve, reject) {
//     resolve();
//   });
// }


// /**
//  * The POST method can be used to create a new application context. Upon success, the response contains entity body describing the created application context.
//  *
//  * appContext AppContext Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
//  * returns inline_response_201
//  **/
// exports.app_contextsPOST = function(appContext) {
//   return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "AppContext" : {
//     "associateUeAppId" : { },
//     "callbackReference" : { },
//     "appInfo" : {
//       "appSoftVersion" : { },
//       "appPackageSource" : { },
//       "appName" : { },
//       "appDescription" : { },
//       "appProvider" : { },
//       "referenceURL" : { }
//     },
//     "contextId" : { }
//   }
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
// }


/**
 * The GET method can be used to query information about the available mobile edge applications.
 *
 * appName List Name to identify the mobile edge application (optional)
 * appProvider List Provider of the mobile edge application (optional)
 * appSoftVersion List Software version of the mobile edge application (optional)
 * serviceCont String Required service continuity mode for this application (optional)
 * vendorId List Vendor identifier (optional)
 * returns inline_response_200
 **/
defaultService.prototype.app_listGET = function(req,callback) {
  console.log("app_listGET method is called")
  var self = this;
  var db = self.app.db;

  var appName, appProvider, appSoftVersion, serviceCont, vendorId;

  // Assigning values got from the URL to a variable
  if (req.appName) {
    appName = req.appName;
  }
  else{
    appName = null
  }

  if (req.appProvider) {
    appProvider  = req.appProvider;
  }
  else{
    appProvider = null
  }

  if (req.appSoftVersion) {
    appSoftVersion = req.appSoftVersion;
  }
  else{
    appSoftVersion = null
  }

  if(req.serviceCont){
    serviceCont = req.serviceCont;
  }
  else{
    serviceCont = null
  }

  if (req.vendorId) {
    vendorId = req.vendorId;
  }
  else{
    vendorId = null
  }

  //Performing the Join operation and printing as JSON
  if (appName== null && appProvider== null && appSoftVersion== null && serviceCont== null && vendorId == null) {
    var collection = db.collection('applicationList')
    collection.aggregate([
      {
        $lookup:
        {
          from : "appInfo",
          localField : "appInfo_Id",
          foreignField : "appInfo_Id",
          as : "appInfoData"
        }
      },
      {
        $unwind : "$appInfoData"
      },
      
      {
        $lookup: 
        {
          from : "appCharcs",
          localField : "appInfo_Id",
          foreignField : "appInfo_Id",
          as : "appCharcs"
        }
      },
      {
        $unwind : "$appCharcs"
      },

      {
        $lookup:
        {
          from : "vendorSpecificExt",
          localField : "vendorSpecificExt_Id",
          foreignField : "vendorSpecificExt_Id",
          as : "vendorSpecificExt"
        }
      },

      {
        $project:
        {
          "appInfoData.appInfo_Id" : 1,
          "appInfoData.appName" : 1,
          "appInfoData.appProvider" : 1,
          "appInfoData.appSoftVersion" : 1,
          "appInfoData.appDescription" : 1,
          "appCharcs" : 1,
          // "appCharcs.appInfo_Id" : 1,
          // "appCharcs.memory" : 1,
          // "appCharcs.storage" : 1,
          // "appCharcs.latency" : 1,
          // "appCharcs.bandwidth" : 1,
          // "appCharcs.serviceCont" : 1,
          "vendorSpecificExt.vendorId" : 1,
        }
      }
    ]).toArray(function(err,item){
      if(err){
        console.log(err);
        callback(null, err)
      }
      else{
        var finalItem = [];
        var finalItemArrObj = [];
        var ApplicationList = {};
        var appInfo = {};
        var appCharcsData  = {};

        for (var i = 0; item.length > i; i++){
          console.log("item.appCharcs---------", item[i]['appCharcs'])
          appInfo = {
            'appName' : item[i]['appInfoData']['appName'],
            'appProvider' : item[i]['appInfoData']['appProvider'],
            'appSoftVersion' : item[i]['appInfoData']['appSoftVersion'],
            'appDescription' : item[i]['appInfoData']['appDescription'],
            'appCharcs' : [],
          }
          appCharcsData = {
            'memory' : item[i]['appCharcs']['memory'],
            'storage' : item[i]['appCharcs']['storage'],
            'latency' : item[i]['appCharcs']['latency'],
            'bandwidth' : item[i]['appCharcs']['bandwidth'],
            'serviceCont' : item[i]['appCharcs']['serviceCont']
          }
          console.log("appCharcsData\n", appCharcsData)

          if (item[i]['appInfoData']['appInfo_Id'] == item[i]['appCharcs']['appInfo_Id']){
            appInfo['appCharcs'].push(item[i]['appCharcsData'])
          }

          finalItemArrObj.push({
            ApplicationList: {
              "appInfo" : [appInfo],
              // "appCharcs" : [appCharcs],
              "vendorSpecificExt" : item[i]['vendorSpecificExt'],
            }
          })
        }
        callback(null,finalItemArrObj)
      }
      console.log("Found the data!!!")
    })
  }
}