import express from 'express';
import { getForecastDays } from '../../controllers/forecast.js';

const router = express.Router();

router.get('/', getForecastDays);

export { router as forecastRouter };