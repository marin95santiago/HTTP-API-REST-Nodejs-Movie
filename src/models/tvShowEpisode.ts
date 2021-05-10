import { Schema, Document, model } from 'mongoose';
import { ActorInterface } from './actor';
import { DirectorInterface } from './director';
import { SeasonInterface } from './tvShowSeason';

export interface EpisodeInterface extends Document {
    name: string,
    episodeNumber: number,
    seasonId: string,
    seasonNumber: Number,
    description: string,
    date: Date,
    director: DirectorInterface,
    cast: Array<ActorInterface>,
    tvShowId: string
}

const episodeSchema = new Schema<EpisodeInterface>({
    name: {
        type: String,
        require: true
    },
    episodeNumber: {
        type: Number,
        require: true,
    },
    seasonId: {
        type: String,
        require: true
    },
    seasonNumber : {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    director: {
        type: Object,
        require: true
    },
    cast: {
        type: Array,
        require: true
    },
    tvShowId: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

export default model<EpisodeInterface>("Episode", episodeSchema);