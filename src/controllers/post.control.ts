import { Response, Request } from "express";
import User from "../models/User";

export default async function post(req:Request, res: Response): Promise<Response> {
    
    const id = req.body.user._id
    const user = await User.findOne({ _id: id })

    return res.send({ user })
    /* return res.json({
        post: {
            title: 'my first post',
            description: 'this is a ramdon description'
        }
    }) */
}