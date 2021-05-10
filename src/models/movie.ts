import { Schema, Document, model } from 'mongoose';
import { ActorInterface } from './actor';
import { DirectorInterface } from './director';

export interface MovieInterface extends Document {
    name: string,
    date: Date,
    director: DirectorInterface,
    cast: Array<ActorInterface>
}

const movieSchema = new Schema<MovieInterface>({
    name: {
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
    }
}, {
    timestamps: true
});

export default model<MovieInterface>("Movie", movieSchema);