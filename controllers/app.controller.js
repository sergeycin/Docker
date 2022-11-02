const {Router} = require('express')
let fs = require('fs');
const router = Router()


  router.get(
    '/all', 
  async (req,res) =>{
    try{
        
     res.json('Что-то выводим')
    }catch(e){
        res.status(500).json({message: "Что-то пошло не так"})
    }
  })
  

  
  


  

module.exports = router