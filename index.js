const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/',(req,res)=>res.json('Please check the endpoints in the documentation'))
app.get('/api',(req,res)=>{
    res.json('Welcome To the API')
})

const transaction = require('./routes/transactions.js')
app.use('/api/transactions',transaction)

app.listen(port,()=>console.log(`Server is running at port ${port}`))