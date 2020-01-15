import { Response, Request } from "express";
import User from "../models/User";

export default async function post(req:Request | any, res: Response): Promise<Response> {
    
    const id = req.user_id
    const user = await User.findOne({ _id: id })

    return res.json({
        post: {
            title: 'my first post',
            description: 'this is a ramdon description'
        }
    }) 
}