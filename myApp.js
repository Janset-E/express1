require('dotenv').config();
let express = require('express');
let app = express();
 
  app.use((req,res,next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
 });


 let absolutePath= __dirname+ '/views/index.html';
 app.get('/', function(req,res){
 res.sendFile(absolutePath);
        });

 app.use('/public', express.static(__dirname+'/public'));

 app.get("/json",(req,res)=> {
 let message="Hello json";

 if (process.env.MESSAGE_STYLE === "uppercase") {
 message = message.toUpperCase();
 }

 res.json({ message: message});
 });

app.get('/now',function(req, res, next) {
   req.time = new Date().toString();
   next();
}, function (req,res){
  res.json({ time: req.time});
});

module.exports=app;




























 module.exports = app;
