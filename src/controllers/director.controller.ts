import { Request, Response } from 'express';
import Director from '../models/director';

export const createDirector = async (
    req: Request, 
    res: Response
):Promise<Response> => {
    try {
        req.body.roll = 'director';
        const newDirector = new Director(req.body);
        await newDirector.save();

        return res.status(201).json(newDirector);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const listDirector = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const response = await Director.find();
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json(error);
        
    }
}