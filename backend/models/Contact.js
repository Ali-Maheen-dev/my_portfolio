const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true,  
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],  
  },
  message: {
    type: String,
    required: true,  
  },
}, {
  timestamps: true,  
});


const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
