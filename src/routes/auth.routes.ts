import { Router } from 'express';
import { signUp, signIn, getUsers } from '../controllers/user.controller';

const router = Router();

router.get('/user', getUsers),
router.post('/signup', signUp);
router.post('/signin', signIn);

export default router