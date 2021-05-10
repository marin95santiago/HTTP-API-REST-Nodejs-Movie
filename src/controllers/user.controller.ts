import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import ev from '../environmentVariables';
import User, { UserInterface } from '../models/user';

function createToken(user: UserInterface) {
    return jwt.sign({ 
        id: user.id, 
        username: user.username, 
        email: user.email 
    }, ev.jwtSecret, {
      expiresIn: '12h'
    });
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await User.find();
        res.status(200).send(response);

    } catch (error) {
        return res.status(500).send(error);
    }
}

export const signUp = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { username, email, password1, password2 } = req.body;

        if(password1 !== password2){
            return res.status(400).json({ message: "Password does not match" });
        }

        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ message: "The user already exists" });
        }
        
        const newUser = new User({
            username,
            email,
            password: password1
        });

        await newUser.save();
        return res.status(201).json(newUser);

    } catch (error) {
        return res.status(500).json(error);
    }
    
};
  
export const signIn = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "The user does not exists" });
        }
    
        const isMatch = await user.matchPassword(req.body.password);
        if (isMatch) {
            return res.status(200).json({ token: createToken(user) });
        }
    
        return res.status(400).json({message: "The email or password are incorrect"});

    } catch (error) {
        return res.status(500).json(error);
    }
    
};