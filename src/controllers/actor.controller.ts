import { Request, Response } from 'express';
import Actor from '../models/actor';

export const createActor = async (
    req: Request, 
    res: Response
):Promise<Response> => {
    try {
        req.body.roll = 'actor';
        const newActor = new Actor(req.body);
        await newActor.save();

        return res.status(201).json(newActor);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const listActor = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const response = await Actor.find();
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json(error);
    }
}