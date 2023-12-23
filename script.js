const express = require('express')
const app = express()

app.use(function(req,res,next){
    next();//middleware sabse pahle yeh chalega
});
app.set("view engine","ejs");
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/profile', function (req, res) {
    res.send('Hello World ki profile')
  })
  app.get('/profile/neeraj', function (req, res) {
    res.send('Hello mere bhai')
  })
  app.get('/profile/:username', function (req, res) {
    res.send(`Hello ${req.params.username}` )//dynamic changes or dynamic routing
  })
  app.get('/', function (req, res) {
    res.render(`index`)//dynamic changes or dynamic routing
  })
app.listen(3000)