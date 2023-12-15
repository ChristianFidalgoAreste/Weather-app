import { config } from "../config/config.js";

const fetchForecastDays = async (location : string, days : number) => {
	const apiResponse = 
		await fetch(`${config.API_URL}/forecast.json?key=${config.API_KEY}&q=${location}&days=${days}`)
			.then(async response => {
				const object = await response.json()
				return { ...object, ok: true }
			})
			.catch(err => { 
				console.error(err); 
				return { message: 'Error 502', ok: false };
			});
	
	return apiResponse;
} 

export {
	fetchForecastDays
}