const express = require('express')
const app = express()
const port = 3000;
require('./utils/db')
const contactRouter = require('./router/contact')
const Contact = require('./model/contact')

app.set("view engine","ejs");




app.get('/', (req, res)=>{
     
})
app.get('/about', (req, res)=>{
    res.render("about")
})
app.get('/contact',async (req, res)=>{
   
})
app.use(contactRouter)
app.use((req, res)=>{
    res.status(404)
    res.send("<h1>404</h1>")
})
app.listen(port,()=>{
    console.log(`listening port ${port}`)
})