import { Schema, model, Document } from "mongoose";

const Photo = new Schema({
    title: String,
    description: String,
    imagePath: String,
    created_at: { type: Date, default: Date.now() },
    user: String
})

interface Iphoto extends Document {
    title: string,
    description: string,
    imagePath: string,
    created_at: Date,
    user: string
}

export default model<Iphoto>('Photo', Photo);