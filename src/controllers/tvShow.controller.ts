import { Request, Response } from 'express';
import Director from '../models/director';
import TvShow from '../models/tvShow';

export const createTvShow = async (
    req: Request, 
    res: Response
):Promise<Response> => {
    try {

        // in this section is the code for add the director field
        // it take the director's _id from the body and find his
        // information and it crusse with this form

        const director = await Director.findOne({_id: req.body.director});
        if(!director){
            return res.status(400).json({message: 'The director do not exists'});
        }
        req.body.director = director;

        const newTvShow = new TvShow(req.body);
        await newTvShow.save();

        return res.status(201).json(newTvShow);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const listTvShow = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {

        let response;

        // in this section is the code for filter the response
        // it will depend on the value of the filter header
        const { name } = req.query
        const tvShowName : string = name ? name as string : '';

        if(tvShowName !== ''){
            response = await TvShow.find({name: tvShowName});
        } else {
            response = await TvShow.find();
        }

        // in this section is the code for sort the response
        
        if(response){
            response.sort(function (a, b) {

                let one = a.name;
                let two = b.name;
    
                if (one > two) {
                  return 1;
                }
                if (one < two) {
                  return -1;
                }
                return 0;
            });
        }

        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json(error);
    }
}