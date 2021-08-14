import { Router } from 'express';
import { signUp, signIn, getUsers, getUser } from '../controllers/user.controller';

const router = Router();

router.get('/api/user', getUsers),
router.get('/api/user/:id', getUser),
router.post('/api/signup', signUp);
router.post('/api/signin', signIn);

export default router