
const data = require('./student.json')
const express = require("express");
const app = express();
const port = 3000;
var cors = require('cors')
app.use(cors())



app.get("/", ( req,resp) =>{
    resp.json(data)
})

app.listen(port , () =>{
    console.log(`listening to the port number ${port}`)
})

