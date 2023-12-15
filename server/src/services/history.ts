import { config } from "../config/config.js";

const fetchHistoryDays = async (location : string, date : string) => {
	const apiResponse = 
		await fetch(`${config.API_URL}/history.json?key=${config.API_KEY}&q=${location}&dt=${date}`)
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
	fetchHistoryDays
}