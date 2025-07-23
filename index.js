const express = require('express')
const router = require('./routes/router')

const app = express()
app.use(express.json())

// http://localhost:3000

app.use('/api', router)

app.use('/api/health',(req, res)=>{
    res.json({
        status:"Api esta OK",
        date: new Date().toLocaleString()
    })
})

app.listen(3000,()=> {
    console.log("Server running on port 3000");
})
