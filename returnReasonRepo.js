var mysql = require('mysql');


function initiateDb(){
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        database:"returnreason",
        user: "root",
        password: ""
      });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        // con.query("drop table sub_reason", 
       con.query("CREATE TABLE If not exists sub_reason(id int PRIMARY KEY NOT NULL AUTO_INCREMENT, description varchar(200), textValue varchar(200))", 
        function (err, result) {
          if (err) throw err;
          console.log("table created");
        });
      });
    
}

function initiateSampleData(){
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        database:"returnreason",
        user: "root",
        password: ""
      });
      
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "insert into sub_reason(description, textValue) values ?";
        var values = [
            [ 'Het horloge is te groot', 'Product is te groot'],
            [ 'Het horloge is te klein', 'Product is te klein'],
            [ 'De batterij gaat niet lang genoeg mee', 'Batterijduur valt tegen'],
            [ 'Ik vind de kleur niet mooi / wil toch een andere kleur', 'Kleur niet naar wens'],
            ['De hartslagsensor is niet nauwkeurig genoeg', 'Meet niet nauwkeurig genoeg'],
            ['Overig/anders/..', 'Anders, namelijk...'],
            ['Het scherm gaat niet meer aan', 'Toestel valt uit']
        ];
        con.query(sql, [values],
        function (err, result) {
          if (err) throw err;
          console.log("inserted " + result.affectedRows + "rows.");
        });
      });
}

function getSample(res){
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        database:"returnreason",
        user: "root",
        password: ""

    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        con.query("select * from sub_reason", 
        function (err, result) {
          if (err) throw err;
          console.log("selected");
          console.log(result);
          res.send(result);
        });
      
      });
      console.log('1'+res);
      return res;
}

function getSubReason(params, res){
    var con = mysql.createConnection({
        host: "localhost",
        port: 3306,
        database:"returnreason",
        user: "root",
        password: ""

    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        
        con.query("select * from sub_reason where id = 1", 
        function (err, result) {
          if (err) throw err;
          console.log("selected" + params.productType);
          console.log(result);
          res.send(result);
        });
      
      });
      console.log('1'+res);
      return res;
}

var exports = module.exports = {initiateDb, initiateSampleData, getSample, getSubReason};


