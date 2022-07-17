import { Router } from 'express';
import { createWifiController, getWifisController } from '../controllers/wifiController.js';
import verifyToken from '../middlewares/tokenValidation.js';
import { validateWifiInfo } from '../middlewares/wifiValidation.js';

const wifiRouter = Router();

wifiRouter.post('/create-wifi', verifyToken, validateWifiInfo, createWifiController);
wifiRouter.get('/wifis', verifyToken, getWifisController);

export default wifiRouter;