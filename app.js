const express = require('express')
const config = require('config')
const mongose = require('mongoose')
const path = require('path')
const fileUpload = require("express-fileupload")
const app = express()

let fs = require('fs');



const PORT =  8000
// Роуты для административной панели
app.use(express.json({extended: true}))


app.use('/', require('./controllers/app.controller'))


async function start(){
    try{
       app.listen(8000, (req,res) => console.log(`Server started on PORT${PORT}`))
    }catch(e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()