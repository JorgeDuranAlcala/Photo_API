import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt"

const User =  new Schema({
    username: { 
        type: String,
        required: true,
        min: 6,
        max: 220
    },
    email: { 
        type: String,
        required: true,
        min: 6,
        max: 220
     },
    password: { 
        type: String,
        required: true,
        min: 6,
        max: 1220
     },
     date: {
         type: Date,
         default: Date.now()
     }
})



export interface User extends Document {
    username: string,
    email: string,
    password: string,
    date: Date
}

export default model<User>('User', User)