import { truncate } from 'lodash';
import mongoose from 'mongoose';
//const { Schema } = mongoose;
const crypto= require('crypto');

const { v4: uuidv4 } = require('uuid');
const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
  },
  lastname: {
      type : String,
      maxlength: 32,
      trim: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  usrinfo:{
    type :String,
    trim: true
  },
  encry_password: {
    type :String,
    required:true
  },
  salt : String,
  role: {
      type: Number,
      default: 0
  },
  purchases :{

      type : Array,
      default: [] 
  }
});
//getter and setter set kar arahe hai yaha pr so thatwe set the password and get the passwor via user
userSchema.virtual("password")
    .set(function(password){
      this._password= password
      this.salt = uuidv4()
      this.encry_password = this.securePassword(password);

    })
    .get(function(){
      return this._password
    })

//yaha pr kya kar raha hai ki koi password hum log dalenge plain toh
// usko secured yani encypt kar ke store karege
userSchema.method ={

  autheticate: function(plainpassword){
    return this.securePassword(plainpassword)=== this.encry_password
  },

  securePassword: function(plainpassword){
    if(!password) return "";
    try{
      return crypto.createHmac('sha256', this.salt)
      .update(planepassword)
      .digest('hex');
    } catch(err) {
      return "";
    }
  }
} 
module.exports=mongoose.model("user",userSchema);