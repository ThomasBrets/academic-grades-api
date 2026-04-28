import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido"],
  },
  password: {
    type: String,
    require: true
  },
  role:{
    type:string,
    enum:["alumno", "profesor", "admin"],
    default:"alumno",

  }
}, { timestamps: true });


export const UserModel = model("User", UserSchema)