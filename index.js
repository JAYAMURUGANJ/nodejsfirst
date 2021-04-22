//creating server using express js web framework
// const express = require('express')
// const app = express()
// const routing = require('./router.js')
// const port = 3000
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/"+"index.html")
// })
// app.get('/myprofile',(req,res)=>{
//     res.sendFile(__dirname+"/"+"profile.html")
// })

// app.get('/action_page',(req,res)=>{
//     console.log("actionpage");
//     res.send("<h1>hai "+req.query['email']+"</h1>")
// })
// //app.use('/',routing);
// app.use('/myprofile',routing);
// app.listen(port,()=>console.log(`server running on ${port}`))


//connect cloud mongo db...
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://@@@@@:*****@cluster0.cflox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   client.db("myFirstDatabase").collection("profile");
//   client.close();
// });
//creating server..
// const http = require('http')
// var port = 3030;
// const requestHandler = (req,res)=>{
//     console.log(req.url);
//     res.end("hello nodejs server!")
// }
// const server = http.createServer(requestHandler)
// server.listen(port,function(err){
//     if(err) {console.log("something bad happend",err)}
//     console.log(`server runing on port ${port}`)
// })

// http.createServer(function(req,res){
//     res.write("server created")
//     res.end();
// }).listen(port);

// //calling build-in module..
// var os = require("os")
// console.log(os.platform())
// console.log(os.arch())
// //calling custom module...
// const circle = require('./circle.js');
// console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);

    //conect local mongo db...
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://127.0.0.1:27017/';
    MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    if(err) throw err;
    var dbmy = db.db('mydbfirst');
    var mydata = {name: 'yahoo.co.in',website:'www.yahoo.co.in'};

    dbmy.collection('test3').insertOne(mydata,function(errs,res1){
        if(errs) throw errs;
        console.log('Document Inserted');
        db.close();
    });
    });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var mydata = {name: 'webhere.in',website:'www.webhere.in'};
//   dbo.createCollection('webusers').inserOne(mydata,function(errs,res){
//     if(errs) throw errs;
//     console.log('Document Inserted');
//     db.close();
// });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var mydata = {name:'jamu',job:'summa irukaran'};
//   dbo.createCollection("myprofile", function(err1, res) {
//     if (err1) throw er1;
//     console.log("Collection created!");
//   });
//   dbo.myprofile.insert(mydata, function(err2, res) {
//     if (err2) throw err2;
//     console.log("Data Inserted!");
//     db.close();
//   });
// });