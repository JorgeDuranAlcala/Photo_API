import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export default async function connectDB() {
    try {
        await connect( `${process.env.DB_CONNECT}` ,{
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch(error) {
        throw new Error(error)
    }

    console.log(`The database is connected`)
    
}