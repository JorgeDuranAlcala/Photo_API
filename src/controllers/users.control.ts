import { Request, Response } from "express";
import User from "../models/User";
import schema from "../libs/joi";

export async function registerUser(req:Request, res: Response) {

try {
        const validated = await schema.validate(req.body)
        const { error } = validated
        let errorM
        if(error) { errorM = error.details[0].message; }

        res.json({
            errorM,
            message: `validated`
        })
    } catch(e) {
        console.log(e)
    }


    /* const { username, email, password } = req.body;
    
    const newUser = {
        username,
        email,
        password
    }
    

    const user = new User(newUser)
    //await user.save()

    return res.json({
        message:`You already are logged`
    }) */

}