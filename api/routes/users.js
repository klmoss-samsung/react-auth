var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;

/* GET users listing. */
router.get("/", function(req, res, next) {
  MongoClient.connect("mongodb://localhost:27017/react-auth", function(
    err,
    client
  ) {
    if (err) throw err;

    var db = client.db("react-auth");
    db.collection("users")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
      });
  });
});

module.exports = router;
