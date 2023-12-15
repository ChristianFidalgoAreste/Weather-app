import dotenv from "dotenv";

dotenv.config();

export const config = {
	PORT: process.env.PORT || 3000,
	API_URL: process.env.API_URL || 'http://api.weatherapi.com/v1',
	API_KEY: process.env.API_KEY || 'YOUR API_KEY'
}