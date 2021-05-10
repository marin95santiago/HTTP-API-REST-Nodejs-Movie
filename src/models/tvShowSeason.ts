import { Schema, Document, model } from 'mongoose';
import { ActorInterface } from './actor';
import { DirectorInterface } from './director';
import { EpisodeInterface } from './tvShowEpisode';

export interface SeasonInterface extends Document {
    name: string,
    seasonNumber: number,
    episode: Array<EpisodeInterface>,
    description: string,
    tvShowId: string
}

const seasonSchema = new Schema<SeasonInterface>({
    name: {
        type: String,
        require: true
    },
    seasonNumber: {
        type: Number,
        require: true
    },
    episode: {
        type: Array
    },
    description: {
        type: String,
        require: true
    },
    tvShowId: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

export default model<SeasonInterface>("Season", seasonSchema);