import express from 'express';
import { config } from './config/config.js';
import { forecastRouter } from './v1/routes/forecast.js';
import { historyRouter } from './v1/routes/history.js';

const app = express();

// Middleware to transform the body of the request to JSON format
app.use(express.json());

app.use('/v1/forecast', forecastRouter);
app.use('/v1/history', historyRouter);

app.listen(config.PORT, () => {
	console.log(`🚀 Server running on port ${config.PORT} 🚀`);
});