import { Router } from 'express';
import { postCredential } from '../controllers/credentialsController.js';
import { validateCredentials } from '../middlewares/credentialValidations.js';
import verifyToken from '../middlewares/tokenValidation.js';

const credentialsRouter = Router();

credentialsRouter.post('/create-credential', verifyToken, validateCredentials, postCredential);

export default credentialsRouter;