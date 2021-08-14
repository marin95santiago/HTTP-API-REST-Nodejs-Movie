import { Request, Response } from 'express';
import tvShow from '../models/tvShow';
import TvShowSeason from '../models/tvShowSeason';

export const createTvShowSeason = async (
    req: Request, 
    res: Response
):Promise<Response> => {
    try {

        const newTvShowSeason = new TvShowSeason(req.body);
        await newTvShowSeason.save();

        const arraySeason = await TvShowSeason.find({tvShowId: req.body.tvShowId})

        await tvShow.findOneAndUpdate({_id: req.body.tvShowId},{
            season: arraySeason
        });

        return res.status(201).json(newTvShowSeason);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const listTvShowSeason = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {

        let response;

        // in this section is the code for filter the response
        // it will depend on the value of the filter header
        const { season } = req.query;
        const seasonNumber : string = season ? season as string : '';

        if(seasonNumber !== ''){
            response = await TvShowSeason.find({seasonNumber: Number(seasonNumber)});
        } else {
            response = await TvShowSeason.find();
        }

        // in this section is the code for sort the response
        
        if(response){
            response.sort(function (a, b) {

                let one = a.seasonNumber;
                let two = b.seasonNumber;
    
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