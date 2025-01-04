import express from 'express';

import { getMessages, getPreSignedUrlFromAWS } from '../../controllers/messageController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/pres-signed-url', isAuthenticated, getPreSignedUrlFromAWS)
router.get('/:channelId', isAuthenticated, getMessages);

export default router;
