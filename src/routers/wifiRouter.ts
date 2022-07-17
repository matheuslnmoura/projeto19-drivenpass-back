import { Router } from 'express';
import { createWifiController, deleteWifiByIdController, getWifiByIdController, getWifisController } from '../controllers/wifiController.js';
import verifyToken from '../middlewares/tokenValidation.js';
import { validateWifiInfo } from '../middlewares/wifiValidation.js';

const wifiRouter = Router();

wifiRouter.post('/create-wifi', verifyToken, validateWifiInfo, createWifiController);
wifiRouter.get('/wifis', verifyToken, getWifisController);
wifiRouter.get('/wifis/:id', verifyToken, getWifiByIdController);
wifiRouter.delete('/delete-wifi/:id', verifyToken, deleteWifiByIdController);

export default wifiRouter;