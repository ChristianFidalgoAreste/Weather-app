import express from 'express';
import { getHistoryDays } from '../../controllers/history.js';

const router = express.Router();

router.get('/', getHistoryDays);

export { router as historyRouter };