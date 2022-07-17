import { Router } from 'express';
import { createWifiController } from '../controllers/wifiController.js';
import verifyToken from '../middlewares/tokenValidation.js';
import { validateWifiInfo } from '../middlewares/wifiValidation.js';

const wifiRouter = Router();

wifiRouter.post('/create-wifi', verifyToken, validateWifiInfo, createWifiController);

export default wifiRouter;