import { Router } from 'express';
import { listDirector, createDirector } from '../controllers/director.controller';
import { isAuth } from '../util/handleToken';

const router = Router();

router.get('/directors', isAuth, listDirector),
router.post('/create/director',isAuth, createDirector)

export default router