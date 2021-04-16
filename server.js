const express = require("express"); //importing express
const app = express(); //making express object.
const port = 5000;
 //conect local mongo db...
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://127.0.0.1:27017/';
    // MongoClient.connect(url,{ useUnifiedTopology: true },function(err,db){
    // if(err){
    //   throw err
    // }else{
    //   app.get("/", (req, res) => {
    //     var dbo = db.db("mydbfirst");
    //     dbo.collection("test2").find()
    //     res.send(dbo);
    //   });
    // }
    // });


    app.get('/', (req, res) => {
      MongoClient.connect(url,{ useUnifiedTopology: true },function(err, db) {
          if (err) throw err;
          var dbo = db.db("mydbfirst");
          dbo.collection("test3").findOne(
          function(err, result) {
              if (err) throw err;
              res.json(result);
              db.close();
          });
      });
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

