import express from 'express';
import { config } from './config/config.js';

const app = express();

// Middleware to transform the body of the request to JSON format
app.use(express.json());

app.listen(config.PORT, () => {
	console.log(`🚀 Server running on port ${config.PORT} 🚀`);
});