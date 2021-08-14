import { Router } from 'express';
import { listTvShow, createTvShow } from '../controllers/tvShow.controller';
import { createTvShowEpisode, listTvShowEpisode } from '../controllers/tvShowEpisode.controller';
import { createTvShowSeason, listTvShowSeason } from '../controllers/tvShowSeason.controller';
import { isAuth } from '../util/handleToken';

const router = Router();

// routes for tv show
router.get('/api/tv-show', isAuth, listTvShow);
router.post('/api/create/tv-show',isAuth, createTvShow);

// routes for tv show season
router.post('/api/create/tv-show-season',isAuth, createTvShowSeason);
router.get('/api/tv-show-season/', isAuth, listTvShowSeason);

// routes for tv show episodes
router.get('/api/tv-show/episode', isAuth, listTvShowEpisode);
router.post('/api/create/tv-show-episode', isAuth, createTvShowEpisode);

export default router;