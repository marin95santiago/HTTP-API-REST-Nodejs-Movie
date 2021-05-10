import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET || 'SECRETFORJWTOKEN';

export const isAuth = (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, SECRET, (error: any, decoded: any) => {
            if(error){
                res.status(404).send({message: 'Token invalid'});
            } else {
                req.body.user = decoded;
                next();
                return
            }
        });
    } else {
        return res.status(404).send({message: 'Token is not supplied'});
    }
}