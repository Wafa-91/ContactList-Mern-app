const contact=require('../models/contact')


//notation en utilisant @ :description de query
//@ description:Post Contact
//@Metho:Post
//@path:http://localhost:5000/api/contact
//@params body

exports.postOneContact=async(req,res)=>{ 
    //console.log(req.body)
    //try to save :mch dhamin ino akid bch ysaviha 
     try 
     {
    
    if (!req.body.email) {
    res.status(200).send("email is required check again")
      return;
    } 
    const Newcontact = new contact({...req.body});
    const result =await Newcontact.save()
    res.send({result:result,message:"contact is saved"}) 
     } catch (error)
    {
         res.status(500).send({message:`can not save it because of this erreur:${error}`})
         console.log(error)
     }
    
    }


//@ descr:getAllContact
//@ Metho: Get
//@ path:http://localhost:5000/api/contact
   exports.getAllContacts= async(req,res)=>{
        try
          {
           const result=await contact.find() 
           res.send({result:result,message:"succefful getting"})
          } 
        catch (error)
          {
            res.status(400).send({message:`can not get contacts because this error:${error}`})
            console.log(error)
          }
        }


//@ descr:getContactById
//@ Metho: Get
//@ path:http://localhost:5000/api/contact/:id
//params      

exports.getContactById=async(req,res)=>{
    try
     {
       const result=await contact.findById(req.params.id)
       //findOne({_id:req.params.id})
       res.send({result:result,message:"getting contact seccuceful"})
     } 
   
     catch (error) {
         res.status(400).send({message:"can not get a contact"})
       console.log(error)
    }

    
}


//@ descr:deletecontactById
//@ Metho: delete
//@ path:http://localhost:5000/api/contact/:id
//params 

exports.deletecontactById=async(req,res)=>{
    try
     {
       const result=await contact.deleteOne({_id:req.params.id});
       console.log(result)
       result.deletedCount?res.send({result:result,message:"delete contact seccuceful"}):res.send({message:"there is no contact with this id "})
      
     } 
     catch (error) {
   res.status(400).send({message:"there is no id"})
   console.log(error)
    }
}


//@ descr:updateContactById
//@ Metho:update
//@ path:http://localhost:5000/api/contact/:id
//params

exports.updateContactById=async(req,res)=>{
    try
     {
       const result= await contact.updateOne({_id:req.params.id},{$set:{...req.body}})
       console.log(result)
       result.modifiedCount?res.send({result:result,message:"update contact seccuceful"}):res.send({message:"contact already updated"})
      
     } 
     catch (error) {
   res.status(400).send({message:"not updated "})
   console.log(error)  
    }
}