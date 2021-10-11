
const mongoose=require('mongoose')
// creation squelet (structure) de notre document en utilsant schema(les propriétes et leurs types)
const ContactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    
    },

    phone: {
        type: String,
        
      },
  });
 
  module.exports= contact = mongoose.model("contact", ContactSchema);
  
