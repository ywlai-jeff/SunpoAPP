// DataBase phpmyadmin 
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "sophia.cs.hku.hk",
  // host: "i.cs.hku.hk",
  // host: "147.8.179.14",
  user: "ywlai",
  password: "YZjNGaaa",
  database: "ywlai",
  // user: "hcchan",
  // password: "TBRvgwZN",
  // database: "hcchan",
  // connect_timeout=28800
  // wait_timeout = 28800
});
con.connect(function(err){
//   con.query('SET GLOBAL connect_timeout=28800')
// con.query('SET GLOBAL wait_timeout=28800')
// con.query('SET GLOBAL interactive_timeout=28800')
  if(err){
    console.log('Error connecting to Db con '+ err);
    return;
  }
  console.log('Connection established');
});