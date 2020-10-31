import { truncate } from 'lodash';
import mongoose from 'mongoose';
//const { Schema } = mongoose;

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
  password: {
    type :String,
    trim: truncate
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
