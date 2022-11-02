const express = require('express')

const app = express()
const path = require('path')
let fs = require('fs');
const PORT =  8000
// Роуты для административной панели
app.use(express.json({extended: true}))
app.engine('ejs', require('ejs-mate'))

app.use('/', require('./controllers/app.controller'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


async function start(){
    try{
       app.listen(8000, (req,res) => console.log(`Server started on PORT${PORT}`))
    }catch(e){
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()