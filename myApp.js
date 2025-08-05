let express = require('express');
let app = express();


 let absolutePath= __dirname+ '/views/index.html';
 app.get('/', function(req,res){
 res.sendFile(absolutePath);
        });

 app.use('/public', express.static(__dirname+'/public'));

 app.get("/json",(req,res)=> {
 res.json({ message:"Hello json"});
 });































 module.exports = app;
