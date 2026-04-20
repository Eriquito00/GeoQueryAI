import { Router } from 'express';
import { sendAIQuery } from '../../controllers/GeoQueryAI.controller';

const router = Router();

router.post('/geo-query-ai', sendAIQuery);

export default router;
