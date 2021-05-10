import { Schema, Document, model } from 'mongoose';

export interface ActorInterface extends Document {
    name: string,
    secondName?: string,
    lastName: string,
    age?: number,
    nationality?: string,
    roll: string
}

const actorSchema = new Schema<ActorInterface>({
    name: {
        type: String,
        require: true
    },
    secondName: {
        type: String,
        require: false
    },
    lastName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: false,
    },
    nationality: {
        type: String,
        require: false
    },
    roll: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

export default model<ActorInterface>("Actor", actorSchema);