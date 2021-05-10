import { Router } from 'express';
import { listActor, createActor } from '../controllers/actor.controller';
import { isAuth } from '../util/handleToken';

const router = Router();

router.get('/actors', isAuth, listActor),
router.post('/create/actor',isAuth, createActor)

export default router