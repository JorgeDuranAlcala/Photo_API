import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path"
import router from "./routes";
import routerUsers from "./routes/users_auth";


// INITIALIZATION

const app = express();


// settings

app.set('port', process.env.PORT || 3000);

// middlewares

app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// routes

app.use('/api', router)
app.use('/api/users', routerUsers)

// In this folder will be the files uploaded to the users

app.use('/uploads', express.static(path.resolve('uploads')))


export default app;