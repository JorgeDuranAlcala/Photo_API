import { Request, Response ,NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function verifyToken(req: Request | any, res: Response, next: NextFunction ) {

    // Verifiy if the token exist
    if(!req.headers.authorization) return res.status(401).send('Unauthorized Request') 

    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') return res.status(401).send('Unauthorized Request')

     const verified: string | any = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    if(!verified) return res.status(401).send('Unauthorized Request')
    
    req.userId = verified._id

    return next()
}