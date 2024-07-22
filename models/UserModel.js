const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt'); // Erase if already required
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    lastname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.pre('save', async function(next) {
    const salt = bcrypt.genSaltSync(10);
    this.password= await bcrypt.hash(this.password, salt);

})

//Export the model
module.exports = mongoose.model('User', userSchema);