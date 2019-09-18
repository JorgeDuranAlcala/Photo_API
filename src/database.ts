import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export default async function connectDB() {
    await connect( `${process.env.DB_CONNECT}` ,{
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log(`The database is connected`)
    
}