'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.app_contextsContextIdDELETE = function app_contextsContextIdDELETE (req, res, next) {
  var contextId = req.swagger.params['contextId'].value;
  Default.app_contextsContextIdDELETE(contextId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.app_contextsContextIdPUT = function app_contextsContextIdPUT (req, res, next) {
  var contextId = req.swagger.params['contextId'].value;
  var appContext = req.swagger.params['appContext'].value;
  Default.app_contextsContextIdPUT(contextId,appContext)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.app_contextsPOST = function app_contextsPOST (req, res, next) {
  var appContext = req.swagger.params['appContext'].value;
  Default.app_contextsPOST(appContext)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.app_listGET = function app_listGET (req, res, next) {
  var appName = req.swagger.params['appName'].value;
  var appProvider = req.swagger.params['appProvider'].value;
  var appSoftVersion = req.swagger.params['appSoftVersion'].value;
  var serviceCont = req.swagger.params['serviceCont'].value;
  var vendorId = req.swagger.params['vendorId'].value;
  Default.app_listGET(appName,appProvider,appSoftVersion,serviceCont,vendorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
