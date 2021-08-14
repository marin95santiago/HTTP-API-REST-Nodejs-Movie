import { Request, Response } from 'express';
import Actor from '../models/actor';
import Director from '../models/director';
import Movie from '../models/movie';

export const createMovie = async (
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

        // in this section is the code for add the actors field
        // it take the actor's _id from the body and find his
        // information and it crusse with this form

        let castArray = [];
        for(let i = 0; i < req.body.cast.length ; i ++){
            let cast = await Actor.findOne({_id: req.body.actors[i]});
            if(cast){
                castArray.push(cast)
            }
        }
        req.body.cast = castArray;

        const newMovie = new Movie(req.body);
        await newMovie.save();

        return res.status(201).json(newMovie);

    } catch (error) {
        return res.status(500).json(error);
    }
}

export const listMovie = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        let response;
        // in this section is the code for filter the response
        // it will depend on the value of the filter header
        const { name } = req.query
        const movieName:string = name ? name as string : '';

        if(movieName !== ''){
            response = await Movie.find({name: movieName});
        } else {
            response = await Movie.find();
        }

        // in this section is the code for sort the response
        // it will depend on the value of the param sort in the url
        if(response){
            response.sort(function (a, b) {

                let one = a.name;
                let two = b.name;
                
                // in this section the different values for sort are added
                switch (req.params.sort) {
                    case 'director':
                        one = `${a.director.name} ${a.director.lastName}`
                        two = `${b.director.name} ${b.director.lastName}`
                        break;
                
                    default:
                        break;
                }
    
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