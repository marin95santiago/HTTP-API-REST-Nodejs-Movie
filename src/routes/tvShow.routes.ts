import { Router } from 'express';
import { listTvShow, createTvShow } from '../controllers/tvShow.controller';
import { createTvShowEpisode, listTvShowEpisode } from '../controllers/tvShowEpisode.controller';
import { createTvShowSeason, listTvShowSeason } from '../controllers/tvShowSeason.controller';
import { isAuth } from '../util/handleToken';

const router = Router();

// routes for tv show
router.get('/tv-show/:sort?', isAuth, listTvShow);
router.post('/create/tv-show',isAuth, createTvShow);

// routes for tv show season
router.post('/create/tv-show-season',isAuth, createTvShowSeason);
router.get('/tv-show-season/:sort?', isAuth, listTvShowSeason);

// routes for tv show episodes
router.get('/tv-show/:season/:episode', isAuth, listTvShowEpisode);
router.post('/create/tv-show-episode', isAuth, createTvShowEpisode);

export default router;