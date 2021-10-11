// les routes ou les query eli bch yssiro 3al collection contact

const express=require('express')
const router=express.Router()

const contact=require('../models/contact')
//route pour tester sur postman:
//router.get('/hello',(req,res)=>{res.send("hello")})

const contactControl=require('../controllers/contactControl')

//postOneContact 
router.post('/',contactControl.postOneContact)

//getAllContacts
router.get('/',contactControl.getAllContacts)

//getContactById
 router.get('/:id',contactControl.getContactById)


//deletecontactById
router.delete('/:id',contactControl.deletecontactById)



router.put('/:id',contactControl.updateContactById)

module.exports=router