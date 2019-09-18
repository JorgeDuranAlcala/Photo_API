import { Request, Response } from "express";
import User from "../models/User";
import { schemaL, schemaR } from "../libs/joi";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

//dotenv.config()

export async function registerUser(req:Request, res: Response) {


    // LETS VALIDATED THE DATA BEFORE ADD NEW USER

    const validated = await schemaR.validate(req.body)
    const { error } = validated
    if(error) return res.status(400).send(error.details[0].message) 

    // CHECKING IF THE EMAIL IS ALREADY IN THE DATABASE

    const emailExist = await User.findOne({ email: req.body.email })
    if(emailExist) return res.status(400).json({ message: `Email already exist`})

    // HASH PASSWORDS

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        })
        const saveUser = await user.save()
    
        return res.json({
            saveUser,
            message:`You already are logged`
        })
       
}

export async function loginUser(req: Request, res: Response): Promise<Response> {

    // LETS VALIDATED THE DATA BEFORE LOGIN USER

    const validated = await schemaL.validate(req.body)
    const { error } = validated
    if(error) return res.status(400).send(error.details[0].message) 

     // CHECKING IF THE EMAIL IS ALREADY IN THE DATABASE

     const user = await User.findOne({ email: req.body.email })
     if(!user) return res.status(400).json({ message: `Email doesn't exist`})

     // COMPARE PASSWORDS

    const match = await bcrypt.compare(req.body.password, user.password)
    if(!match) return res.status(400).send({ message: `This password is wrong` })

    // CREATE AND ASSIGN A TOKEN

    const token = jwt.sign({ _id: user._id }, `${process.env.TOKEN_SECRET}`)
    res.header('auth-token', token)

     return res.json({
        message: `logged in`
    }) 
}

