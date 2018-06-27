'use strict';

var fs = require('fs'),
    path = require('path'),
    http = require('http');
var url = require('url') ;

global.urlPath = "";

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 8081;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
// var globalUrl ;
/*
http.createServer(app).listen(serverPort, function (req, res) {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
   
    // var hostname = req.headers.host; // hostname = 'localhost:8080'
    // var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
    // console.log('http://' + hostname + pathname);
  });

*/

http.createServer(function (req, res) {
  var hostname = req.headers.host; // hostname = 'localhost:8080'
  var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'
  // console.log('http://' + hostname + pathname);
  // console.log("URL Path : ",pathname);
  res.writeHead(200);
  res.end();
  var getUrl = pathname;
  var res = getUrl.split("/");
   
    if (res[1] !== "favicon.ico") {
      urlPath = res[0]+"/"+res[1]+"/"+res[2]
      // console.log(globalUrl)  
    }
    if(res[2] !== undefined){
        example(urlPath)
    }

}).listen(8081);
console.log(urlPath,"globalUrl value")
var baseurll ;
function example(data){
  console.log("example data is --",data);
  
  if(data == '/bwm/v1'){
    baseurll = 'api/swagger.yaml'
  }
  else if(data == '/bwm/v2'){
     baseurll = 'api/swagger(1).yaml'
  }
console.log(baseurll,"baseurll ----")
  var spec = fs.readFileSync(baseurll, 'utf8');
    // console.log(spec,"spec");
    var swaggerDoc = jsyaml.safeLoad(spec);

    // Initialize the Swagger middleware
    swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

      // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
      app.use(middleware.swaggerMetadata());

      // Validate Swagger requests
      app.use(middleware.swaggerValidator());

      // Route validated requests to appropriate controller
      app.use(middleware.swaggerRouter(options));

      // Serve the Swagger documents and Swagger UI
      app.use(middleware.swaggerUi());

      // Start the server
     });


  
}


 
