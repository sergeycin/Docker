const {Router} = require('express')
let fs = require('fs');
const router = Router()


  router.get(
    '/',  (req,res) =>{
    try{
     res.render('index',{title: 'Home Page'})
    }catch(e){
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })
  


module.exports = router