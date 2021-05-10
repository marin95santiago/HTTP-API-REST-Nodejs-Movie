import { Router } from 'express';
import { listMovie, createMovie } from '../controllers/movie.controller';
import { isAuth } from '../util/handleToken';

const router = Router();

router.get('/movies/:sort?', isAuth, listMovie),
router.post('/create/movie',isAuth, createMovie)

export default router;