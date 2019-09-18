import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send(`Access Denied`)

    try {
        const verified = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
        req.body.user = verified
        next()
    } catch (error) {
        res.status(400).send({ error })
    }
}