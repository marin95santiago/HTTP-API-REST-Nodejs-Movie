import { Router } from 'express';
import { listMovie, createMovie } from '../controllers/movie.controller';
import { isAuth } from '../util/handleToken';

const router = Router();

router.get('/api/movies', isAuth, listMovie),
router.post('/api/create/movie',isAuth, createMovie)

export default router;