import { Schema, Document, model } from 'mongoose';

export interface DirectorInterface extends Document {
    name: string,
    secondName: string,
    lastName: string,
    age: number,
    nationality: string,
    roll: string
}

const directorSchema = new Schema<DirectorInterface>({
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

export default model<DirectorInterface>("Director", directorSchema);
