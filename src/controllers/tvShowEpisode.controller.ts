import { Request, Response } from 'express';
import TvShowSeason from '../models/tvShowSeason';
import TvShowEpisode from '../models/tvShowEpisode';
import Director from '../models/director';
import Actor from '../models/actor';
import TvShow from '../models/tvShow';

export const createTvShowEpisode = async (
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

        // in this section is the code for add the cast field
        // it take the actor's _id from the body and find his
        // information and it crusse with this form

        let castArray = [];
        for(let i = 0; i < req.body.cast.length ; i ++){
            let cast = await Actor.findOne({_id: req.body.cast[i]});
            if(cast){
                castArray.push(cast)
            }
        }
        req.body.cast = castArray;

        const season = await TvShowSeason.findOne({_id: req.body.seasonId});
        if(season){
            req.body.seasonNumber = season.seasonNumber
        }

        const newTvShowEpisode = new TvShowEpisode(req.body);
        await newTvShowEpisode.save();

        const arrayEpisode = await TvShowEpisode.find({seasonId: req.body.seasonId});

        await TvShowSeason.findOneAndUpdate({_id: req.body.seasonId},{
            episode: arrayEpisode
        });

        const arraySeason = await TvShowSeason.find({tvShowId: req.body.tvShowId})

        await TvShow.findOneAndUpdate({_id: req.body.tvShowId},{
            season: arraySeason
        });

        return res.status(201).json(newTvShowEpisode);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const listTvShowEpisode = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {

        let response;

        // in this section is the code for filter the tvshow episode list
        // it will depend on the value of the season and episode on the header
        let season = Number(req.params.season);
        let episode = Number(req.params.episode);

        response = await TvShowEpisode.findOne({seasonNumber: season, episodeNumber: episode});

        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json(error);
    }
}