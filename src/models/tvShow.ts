import { Schema, Document, model } from 'mongoose';
import { DirectorInterface } from './director';
import { SeasonInterface } from './tvShowSeason';

export interface TvShowInterface extends Document {
    name: string,
    description: string,
    season: Array<SeasonInterface>,
    director: DirectorInterface,
}

const tvShowSchema = new Schema<TvShowInterface>({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    season: {
        type: Array
    },
    director: {
        type: Object,
        require: true
    }
}, {
    timestamps: true
});

export default model<TvShowInterface>("TvShow", tvShowSchema);