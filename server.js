const express = require("express"); //importing express
const app = express(); //making express object.
const port = 5000;
 //conect local mongo db...
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://127.0.0.1:27017/';
    app.get('/', (req, res) => {
      MongoClient.connect(url,{ useUnifiedTopology: true },function(error, db) {
          if (error) throw error;
          var dbo = db.db("mydbfirst");
          dbo.collection('test3').find({}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
      });
  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

