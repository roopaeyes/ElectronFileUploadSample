var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var httpApp = express();
httpApp.use("/public",express.static("public"));
//httpApp.set('port',8081);

// httpApp.get("/index.html",function(req,res){
//     console.log("request to htttps server :" +req.originalUrl);
//     console.log("Request body is " + JSON.stringify(req.body));
// //     var temp = url.parse(req.url,true).href;s
// //     var hostURL = req.headers.host.split(":");
// //    res.sendFile(__dirname + "/"+ "index.html");

// });
// httpApp.use(bodyParser.urlencoded({
//     extended :true
// }));
// httpApp.use(bodyParser.json({
//     limit :'50mb'
// }));
// httpApp.use(bodyParser.urlencoded({
//     limit :'50mb',
//     extended :true
// }));
httpApp.get('/index', function (req, res) {
    //res.send('Hello World');
   // res.send(__dirname + "/"+ "index.html");
   // var temp = url.parse(req.url,true).href;s
  //  var hostURL = req.headers.host.split(":");
    res.sendFile(__dirname + "/"+ "index.html");

 })
var httpServer = httpApp.listen(8080,'localhost', function(){
    console.log("angular hosted server started ")
});