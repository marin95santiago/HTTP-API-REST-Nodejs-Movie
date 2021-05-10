import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserInterface extends Document {
    username: string,
    email: string,
    password: string,
    matchPassword: (password: string) => Promise<Boolean>
}

const userSchema = new Schema<UserInterface>({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


userSchema.pre<UserInterface>("save", async function(next) {

    if(!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    
    this.password = hash;
    next();
});

userSchema.methods.matchPassword = async function(
    password: string
): Promise<Boolean> {
    return await bcrypt.compare(password, this.password);
};

export default model<UserInterface>("User", userSchema);