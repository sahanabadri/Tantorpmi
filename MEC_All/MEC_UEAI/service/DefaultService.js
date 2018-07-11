'use strict';
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var defaultService = function(app){
  this.app = app;
};

module.exports = defaultService;


/**
 * The DELETE method is used to delete the resource that represents the existing application context.
 *
 * contextId String Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
 * no response value expected for this operation
 **/
defaultService.prototype.app_contextsContextIdDELETE = function(req, contextID, callback) {
  console.log("app_contextsContextIdDELETE method is called")
  var self = this;
  var db = self.app.db;

  MongoClient.connect("mongodb://localhost:27017/MEC", function(err, db){
    if (err){
      return console.log(err);
    }
    else{
      var contextId = contextID;
      console.log("contextId : ", contextId)

      db.collection("applicationList").findOne({"contextId" : contextId}, function(err, result){
        if (err) {
          return console.log(err);
        }
        else{
          var appInfoId = result['appInfo_Id']
          var applicationListId = result['applicationList_Id']

          db.collection("applicationList").findOneAndDelete({"applicationList_Id" : applicationListId})
          
          db.collection("appInfo").findOneAndDelete({"appInfo_Id" : appInfoId})
        }
        console.log("Refresh db and check")
      })
    }
  })  
}


/**
 * The PUT method is used to update the callback reference of the existing application context. Upon successful operation, the target resource is updated with new callback reference.
 *
 * contextId String Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
 * appContext AppContext Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
 * no response value expected for this operation
 **/
defaultService.prototype.app_contextsContextIdPUT = function(req, contextID, appContext, callback) {
  console.log("app_contextsContextIdPUT method is called")
  var self = this;
  var db = self.app.db;

  MongoClient.connect("mongodb://localhost:27017/MEC", function(err, db){
    if (err){
      return console.log(err);
    }
    else{
      var body = appContext;
      var contextId = contextID;

      if (body !== undefined){
        var appInfo_appName = body.appInfo['appName']
        var appInfo_appProvider = body.appInfo['appProvider']
        var appInfo_appSoftVersion = body.appInfo['appSoftVersion']
        var appInfo_appDescription = body.appInfo['appDescription']
        var appInfo_referenceURL = body.appInfo['referenceURL']
        var appInfo_appPackageSource = body.appInfo['appPackageSource']

        db.collection("applicationList").findOneAndUpdate(
          {"contextId" : contextId},
          {
            $set:
            {
              "contextId": body.contextId,
              "associateUeAppId": body.associateUeAppId,
              "callbackReference": body.callbackReference
            }
          }
        )

        db.collection("appInfo").findOneAndUpdate(
          {"applicationList_Id" : "applicationList_3"},
          {
            $set:
            {
              "appName" : appInfo_appName, 
              "appProvider" : appInfo_appProvider,
              "appSoftVersion" : appInfo_appSoftVersion,
              "appDescription" : appInfo_appDescription,
              "referenceURL" : appInfo_referenceURL,
              "appPackageSource" : appInfo_appPackageSource,
            }
          }
        )

        //Displaying the data after updation
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
            $project:
            {
              "appInfoData.appInfo_Id" : 1,
              "appInfoData.appName" : 1,
              "appInfoData.appProvider" : 1,
              "appInfoData.appSoftVersion" : 1,
              "appInfoData.appDescription" : 1,
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
              appInfo = {
                'appName' : item[i]['appInfoData']['appName'],
                'appProvider' : item[i]['appInfoData']['appProvider'],
                'appSoftVersion' : item[i]['appInfoData']['appSoftVersion'],
                'appDescription' : item[i]['appInfoData']['appDescription'],
              }
              
              finalItemArrObj.push({
                ApplicationList: {
                  "contextId" : item[i].contextId,
                  "associateUeAppId" : item[i].associateUeAppId,
                  "callbackReference" : item[i].callbackReference,
                  "appInfo" : [appInfo],
                }
              })
            }
            callback(null,finalItemArrObj)
          }
        })
        console.log("Refresh and check db!!!")
      }
    }
  })
}


/**
 * The POST method can be used to create a new application context. Upon success, the response contains entity body describing the created application context.
 *
 * appContext AppContext Uniquely identifies the application context in the mobile edge system. It is assigned by the mobile edge system and included in the response to an AppContext create.
 * returns inline_response_201
 **/
defaultService.prototype.app_contextsPOST = function(req, appContext, callback) {
  console.log("app_contextsPOST method is called")
  var self = this;
  var db = self.app.db;

  MongoClient.connect("mongodb://localhost:27017/MEC", function(err, db) {
    if(err) { 
      return console.log(err); 
    }
    else{
      var body = appContext;
      console.log("************************************************************")
      console.log("BODY\n",body)
      console.log("************************************************************")

      if (body !== undefined){
        var appInfo_appName = body.appInfo['appName']
        var appInfo_appProvider = body.appInfo['appProvider']
        var appInfo_appSoftVersion = body.appInfo['appSoftVersion']
        var appInfo_appDescription = body.appInfo['appDescription']
        var appInfo_referenceURL = body.appInfo['referenceURL']
        var appInfo_appPackageSource = body.appInfo['appPackageSource']

        var insertQuery = {
          "applicationList_Id" : "applicationList_3",
          "contextId": body.contextId,
          "associateUeAppId": body.associateUeAppId,
          "callbackReference": body.callbackReference,
          "appInfo_Id" : "appInfo_3"
        }
        db.collection('applicationList').insertOne(insertQuery, function(err, res) {
          if (err) {
            throw err;
          }
          else {
            db.collection('appInfo').insertOne({
              "appInfo_Id" : "appInfo_3",
              "appName": appInfo_appName,
              "appProvider": appInfo_appProvider,
              "appSoftVersion": appInfo_appSoftVersion,
              "appDescription": appInfo_appDescription,
              "referenceURL": appInfo_referenceURL,
              "appPackageSource": appInfo_appPackageSource,
              "applicationList_Id" : "applicationList_3"
            });
            
            //Displaying the data after updation
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
                $project:
                {
                  "appInfoData.appInfo_Id" : 1,
                  "appInfoData.appName" : 1,
                  "appInfoData.appProvider" : 1,
                  "appInfoData.appSoftVersion" : 1,
                  "appInfoData.appDescription" : 1,
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
                  appInfo = {
                    'appName' : item[i]['appInfoData']['appName'],
                    'appProvider' : item[i]['appInfoData']['appProvider'],
                    'appSoftVersion' : item[i]['appInfoData']['appSoftVersion'],
                    'appDescription' : item[i]['appInfoData']['appDescription'],
                  }
                  
                  finalItemArrObj.push({
                    ApplicationList: {
                      "contextId" : item[i].contextId,
                      "associateUeAppId" : item[i].associateUeAppId,
                      "callbackReference" : item[i].callbackReference,
                      "appInfo" : [appInfo],
                    }
                  })
                }
                callback(null,finalItemArrObj)
              }
            })
            console.log("Refresh and check db!!!")
          }
        })
      }
      else{
        console.log("No Body is passed")
        // var errorbody = {
        //   "Problem Details" : {
        //     "type": "string",
        //     "title": "string",
        //     "status": 0,
        //     "detail": "string",
        //     "instance": "string"
        //   }
        // }
        // resolve(errorbody)
      }
    }
  })
}


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
          // "appCharcs" : 1,
          "appCharcs.appInfo_Id" : 1,
          "appCharcs.memory" : 1,
          "appCharcs.storage" : 1,
          "appCharcs.latency" : 1,
          "appCharcs.bandwidth" : 1,
          "appCharcs.serviceCont" : 1,
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
            'appCharcs' : {
               'memory' : item[i]['appCharcs']['memory'],
               'storage' : item[i]['appCharcs']['storage'],
               'latency' : item[i]['appCharcs']['latency'],
               'bandwidth' : item[i]['appCharcs']['bandwidth'],
               'serviceCont' : item[i]['appCharcs']['serviceCont']
            },
          }
          
          finalItemArrObj.push({
            ApplicationList: {
              "appInfo" : [appInfo],
              // "appCharcs" : [appCharcsData],
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