import { Request, Response ,NextFunction } from "express";
import { Express } from 'express';
import jwt from "jsonwebtoken";

interface IPayload {
    _id: string,
    iat: number
}


export default function verifyToken(req: Request | any, res: Response, next: NextFunction ) {

    // Verifiy if the token exist
    if(!req.headers.authorization) return res.status(401).send('Unauthorized Request') 

    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') return res.status(401).send('Unauthorized Request')

     const payload = jwt.verify(token, `${process.env.TOKEN_SECRET}`) as IPayload;
    if(!payload) return res.status(401).send('Unauthorized Request')
    
    req.user_id = payload._id

    return next()
}