import { Router } from 'express';
import { getCredentials, getCredentialById, postCredential, deleteCredentialById } from '../controllers/credentialsController.js';
import { validateCredentials } from '../middlewares/credentialValidations.js';
import verifyToken from '../middlewares/tokenValidation.js';

const credentialsRouter = Router();

credentialsRouter.post('/create-credential', verifyToken, validateCredentials, postCredential);
credentialsRouter.get('/credentials', verifyToken, getCredentials);
credentialsRouter.get('/credentials/:id', verifyToken, getCredentialById);
credentialsRouter.delete('/delete-credential/:id', verifyToken, deleteCredentialById);
export default credentialsRouter;