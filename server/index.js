const express = require('express')
const path = require('path')

const app = express()

app.use('/js', express.static(path.join(__dirname, '../client/main.js')))
// app.use('/css', express.static(path.join(__dirname, '../client/main.css')))

console.log(process.env.PORT)
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})

// app.get('/js', (req,res)=>{
//     res.sendFile(path.join(__dirname, '../main.js'))
// })

const port = process.env.PORT || 4545

app.listen(port, ()=>{
    console.log(`Take us to warp ${port}!`)
})