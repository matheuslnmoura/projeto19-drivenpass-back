import { Router } from 'express';
import verifyToken from '../middlewares/tokenValidation.js';

const credentialsRouter = Router();

credentialsRouter.post('/create-credential', verifyToken);

export default credentialsRouter;