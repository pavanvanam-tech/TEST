const express = require('express.js')

const app = express()

app.listen(3000,(req,res)=>{
    return res.send("Hello")
})
