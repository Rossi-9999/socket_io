const express = require('express')
const app = express()
app.use(express.static("public"))
app.set('view engine','ejs')
app.set('views','./views')
var server = require('http').Server(app)

var io = require('socket.io')(server);
// const cors = require("cors");
const port = 3000
// app.use(cors())

io.on("connection", function(socket){
    console.log('connection')
})
app.get("/", (req, res) => {
    res.render('trangchu')
 });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})