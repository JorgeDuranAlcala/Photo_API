import { connect } from "mongoose";

export default async function connectDB() {
    await connect('mongodb://localhost/photos_DB', {
        useFindAndModify: false,
        useNewUrlParser: true
    })

    console.log(`The database is connected`);
    
}