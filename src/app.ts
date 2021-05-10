// Importing dotenv for environments variables
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

import cors from 'cors';

// settings
app.set('port', process.env.PORT || 4000);

// midlewared
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
import authRoutes from './routes/auth.routes';
import directorRoutes from './routes/director.routes';
import actorRoutes from './routes/actor.routes';
import movieRoutes from './routes/movie.routes';
import tvShowRoutes from './routes/tvShow.routes';

app.use(authRoutes);
app.use(directorRoutes);
app.use(actorRoutes);
app.use(movieRoutes);
app.use(tvShowRoutes);

export default app;



