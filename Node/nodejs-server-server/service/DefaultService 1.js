'use strict';

var async = require('async');
var service = require('./service');

/**
 * Remove a specific bandwidthAllocation resource. DELETE method is typically used in \"Unregister from Bandwidth Management Service\" procedure
 *
 * allocationId String Represents a bandwidth allocation instance
 * no response value expected for this operation
 **/
exports.bw_allocationsAllocationIdDELETE = function (allocationId) {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}


/**
 * This method retrieves information about a specific bandwidthAllocation resource.
 *
 * allocationId String Represents a bandwidth allocation instance
 * returns inline_response_200
 **/
exports.bw_allocationsAllocationIdGET = function (criteria) {
    return new Promise(function (resolve, reject) {
         var examples = {};
        examples['application/json'] = {
            "bwInfo": {
                "timeStamp": {
                    "seconds": {},
                    "nanoSeconds": {}
                },
                "fixedBWPriority": {},
                "allocationDirection": {},
                "requestType": {},
                "sessionFilter": [
                    {
                        "sourceIp": "string",
                        "sourcePort": [],
                        "dstAddress": "string",
                        "dstPort": [],
                        "protocol": "string"
                    }
                ],
                "appInsId": {},
                "fixedAllocation": {}
            }
        };

        service.find(criteria, 'bwInfo', function (err,data) {
            examples['application/json'].bwInfo.fixedAllocation = data[0]['fixedAllocation']
            examples['application/json'].bwInfo.allocationDirection = data[0]['allocationDirection']
            examples['application/json'].bwInfo.appInsId = data[0]['appIns_Id']
            examples['application/json'].bwInfo.fixedBWPriority = data[0]['fixedBWPriority']
            var session_Id_criteria = { session_Id : data[0]['session_Id']},
                timeStamp_criteria  = { timeStamp_Id : data[0]['timeStamp_Id']},
                request_criteria    = { reqstType_Id : data[0]['reqstType_Id']}
            console.log(session_Id_criteria,timeStamp_criteria,request_criteria)
            resolve(examples['application/json'])

        })
    });
};


/**
 * This method updates the information about a specific bandwidthAllocation resource.
 *
 * allocationId String Represents a bandwidth allocation instance
 * bwInfoDeltas BwInfoDeltas Description of the changes to instruct the server how to modify the resource representation.
 * returns inline_response_200
 **/
exports.bw_allocationsAllocationIdPATCH = function (allocationId, bwInfoDeltas) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            "bwInfo": {
                "timeStamp": {
                    "seconds": {},
                    "nanoSeconds": {}
                },
                "fixedBWPriority": {},
                "allocationDirection": {},
                "requestType": {},
                "sessionFilter": "",
                "appInsId": {},
                "fixedAllocation": {}
            }
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * This method updates the information about a specific bandwidthAllocation resource.
 *
 * allocationId String Represents a bandwidth allocation instance
 * bwInfo BwInfo BwInfo with updated information is included as entity body of the request
 * returns inline_response_200
 **/
exports.bw_allocationsAllocationIdPUT = function (allocationId, bwInfo) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            "bwInfo": {
                "timeStamp": {
                    "seconds": {},
                    "nanoSeconds": {}
                },
                "fixedBWPriority": {},
                "allocationDirection": {},
                "requestType": {},
                "sessionFilter": "",
                "appInsId": {},
                "fixedAllocation": {}
            }
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * This method retrieves information about a list of bandwidthAllocation resources
 *
 * app_instance_id List A mobile edge application instance may use multiple app_instance_ids as an input parameter to query the bandwidth allocation of a list of mobile edge application instances.  (optional)
 * app_name List A mobile edge application instance may use multiple ser_names as an input parameter to query the bandwidth allocation of a list of mobile edge application instances.  (optional)
 * session_id List A mobile edge application instance may use session_id as an input parameter to query the bandwidth allocation of a list of sessions.  (optional)
 * returns inline_response_200
 **/
exports.bw_allocationsGET = function (criteriaList) {
console.log(criteriaList)
var examples = {} 

    return new Promise(function (resolve, reject) {
        var res1 = [],
            appInstIdList = [],
            appInsId
        async.forEachSeries(criteriaList, function (criteria, forEachbk1) {
            service.find(criteria, 'bwInfo', function (err, data) {

                res1 = res1.concat(data)
                forEachbk1(null, null);
            })
        },function (result1) {
            async.forEachSeries(res1, function (data, forEachbk2) {
                appInsId = data['appIns_Id']
                if (appInstIdList.indexOf(appInsId) > -1) {
                    console.log('')
                } else {
                    var session = {'appIns_Id': appInsId}
                    appInstIdList = appInstIdList.concat(session)
                }
                forEachbk2(null,null)
            }, function (result2) {
                var res2 = []
                async.forEachSeries(appInstIdList, function (criteria, forEachbk3) {

                    service.find(criteria, 'bwInfo', function (err, data) {
                        res2 = res2.concat(data)
                        forEachbk3(null, null);
                    })

                },function (result3) {

                    async.forEachSeries(res2,function (data,forEachbk4) {

                        examples[data["appIns_Id"]] = {
                            "bwInfo": {
                                "timeStamp": {
                                    "seconds": {},
                                    "nanoSeconds": {}
                                },
                                "appInsId": [],
                                "requestType": [],
                                "sessionFilter": [
                                    {
                                        "sourceIp": "string",
                                        "sourcePort": [],
                                        "dstAddress": "string",
                                        "dstPort": [],
                                        "protocol": "string"
                                    }
                                ],
                                "fixedBWPriority": [],
                                "fixedAllocation": [],
                                "allocationDirection": [],
                                "timeStampId":'',
                                "requestValue":''
                            }
                        };
                        examples[data["appIns_Id"]]["bwInfo"]["appInsId"] = data['appIns_Id']
                        examples[data["appIns_Id"]]["bwInfo"]["fixedBWPriority"] = data['fixedBWPriority']
                        examples[data["appIns_Id"]]["bwInfo"]["fixedAllocation"] = data['fixedAllocation']
                        examples[data["appIns_Id"]]["bwInfo"]["allocationDirection"] = data['allocationDirection']
                        examples[data["appIns_Id"]]["bwInfo"]["timeStampId"] = data['timeStamp_Id']
                        examples[data["appIns_Id"]]["bwInfo"]["requestValue"] = data['reqstType']

                        forEachbk4(null,null);
                    },function (result4) {
                        var res3 = []
                        async.forEachSeries(appInstIdList, function (criteria, forEachbk5) {

                            service.find(criteria, 'sessionFilter', function (err, data) {
                                res3 = res3.concat(data)
                                forEachbk5(null, null);
                            })
                        },function (result5) {
                            async.forEachSeries(res3,function (data,forEachbk6) {
                                examples[data["appIns_Id"]].bwInfo.sessionFilter = {
                                    sourceIp:data['sourceIP'],
                                    sourcePort : [data['sourcePort']],
                                    dstAddress : data['destAddress'],
                                    dstPort : [data['destPort']],
                                    protocol : data['protocol']
                                }

                              forEachbk6(null,null);
                            },function(result6){
                                var res4 = []
                                async.forEachSeries(examples,function (data,forEachbk7) {

                                    var criteria = {reqstType_Id:data.bwInfo.requestValue},
                                        appInsId = data.bwInfo.appInsId
                                    service.find(criteria, 'reqstType', function (err, data) {
                                        res4 = res4.concat({[appInsId]:data[0]['reqstTypeDescription']});
                                        forEachbk7(null, null);
                                    })
                                },function (result7) {
                                    async.forEachSeries(res4, function (data, forEachbk8) {
                                        var appInsId = Object.keys(data);
                                        examples[appInsId[0]].bwInfo.requestType = data[appInsId[0]]
                                        forEachbk8(null, null);
                                    }, function (result8) {
                                        var res5 = []
                                        async.forEachSeries(examples,function (data,forEachbk7) {

                                            var criteria = {timeStamp_Id : data.bwInfo.timeStampId},
                                                appInsId = data.bwInfo.appInsId

                                            service.find(criteria, 'timeStamp', function (err, data) {

                                                if(typeof data[0] != 'undefined') {
                                                    var timing = {
                                                        second : data[0]['seconds'],
                                                        nanoSecond :data[0]['nanoSeconds']
                                                    }
                                                    res5 = res5.concat({[appInsId]: timing});
                                                }
                                                forEachbk7(null, null);
                                            })
                                        },function (result7) {
                                            async.forEachSeries(res5,function (data,forEachbk8) {
                                                var appInsId = Object.keys(data);
                                                examples[appInsId[0]].bwInfo.timeStamp = data[appInsId[0]]
                                                forEachbk8(null,null);
                                            },function (result8) {
                                                var finalres = []
                                                async.forEachSeries(examples,function (data,forEachbk9) {

                                                    delete data.bwInfo.timeStampId
                                                    delete data.bwInfo.requestValue
                                                    finalres = finalres.concat(data)
                                                    forEachbk9(null,null)

                                                },function (result9) {
                                                    resolve(finalres)
                                                })
                                            })

                                        })
                                    })
                                })

                            })
                        })
                    })
                })
            })
        })
    });
};
exports.bw_allocationsPOST = function (bwInfo) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {
            "bwInfo": {
                "timeStamp": {
                    "seconds": {},
                    "nanoSeconds": {}
                },
                "fixedBWPriority": {},
                "allocationDirection": {},
                "requestType": {},
                "sessionFilter": "",
                "appInsId": {},
                "fixedAllocation": {}
            }
        };
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

