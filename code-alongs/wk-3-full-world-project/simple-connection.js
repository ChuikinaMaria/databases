var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfclass4',
  password : 'hackyourfuture4!',
  database : 'world'
});
connection.connect();

connection.query('SELECT * from city left join country on city.countrycode = country.code', 
function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

connection.end();