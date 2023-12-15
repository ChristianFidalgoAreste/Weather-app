import { fetchHistoryDays } from "../services/history.js";
import { historyDayType } from "../types/historyDayType.js";
import { historyType } from "../types/historyType.js";

function getHistoryDaysArray(historydayObject: any) {
	const newHistorydayArray = [];
	
	for (let i = 0; i < historydayObject.length; i++) {
		const actualHistorydayObject = historydayObject[i];
		const newHistoryDay: historyDayType = {
			date: actualHistorydayObject.date,
			day: {
				max_temp: actualHistorydayObject.day.maxtemp_c,
				min_temp: actualHistorydayObject.day.mintemp_c,
				avg_temp: actualHistorydayObject.day.avgtemp_c,
				chance_of_rain: actualHistorydayObject.day.daily_chance_of_rain
			},
			astro: {
				sunrise: actualHistorydayObject.astro.sunrise,
				sunset: actualHistorydayObject.astro.sunset,
				moon_phase: actualHistorydayObject.astro.moon_phase
			},
			condition: {
				text: actualHistorydayObject.day.condition.text,
				icon: actualHistorydayObject.day.condition.icon
			}
		};

		newHistorydayArray.push(newHistoryDay);
	}

	return newHistorydayArray;
}

const getHistoryDays = async (req: any, res: any) => {
	const response = await fetchHistoryDays(req.query.location, req.query.dt);

	if (!response.ok) return res.status(502).send(response);

	const history: historyType = {
		location: {
			name: response.location.name,
			region: response.location.region,
			country: response.location.country
		},
		forecast: {
			forecastday: getHistoryDaysArray(response.forecast.forecastday)
		}
	}

	return res.status(200).send(history);
}

export {
	getHistoryDays
}