import { fetchForecastDays } from "../services/forecast.js";
import { forecastDayType } from "../types/forecastDayType.js";
import { forecastType } from "../types/forecastType.js";
import { hourString } from "../types/hourString.js";
import { hourType } from "../types/hourType.js";

function getHoursArray(hoursObject) {
	const newHoursArray = [];

	for (let i = 0; i < hoursObject.length; i++) {
		const actualHour = hoursObject[i];
		const newHour: hourType = {
			time: actualHour.time.split(' ')[1],
			temperature: actualHour.temp_c,
			chance_of_rain: actualHour.chance_of_rain,
			is_day: actualHour.is_day,
			condition: {
				text: actualHour.condition.text,
				icon: actualHour.condition.icon
			}
		}

		newHoursArray.push(newHour);
	}

	return newHoursArray;
}

function getForecastDaysArray(forecastdayObject: any) {
	const newForecastdayArray = [];
	
	for (let i = 0; i < forecastdayObject.length; i++) {
		const actualForecastdayObject = forecastdayObject[i];
		const newForecastDay: forecastDayType = {
			date: actualForecastdayObject.date,
			day: {
				max_temp: actualForecastdayObject.day.maxtemp_c,
				min_temp: actualForecastdayObject.day.mintemp_c,
				avg_temp: actualForecastdayObject.day.avgtemp_c,
				chance_of_rain: actualForecastdayObject.day.daily_chance_of_rain
			},
			astro: {
				sunrise: actualForecastdayObject.astro.sunrise,
				sunset: actualForecastdayObject.astro.sunset,
				moon_phase: actualForecastdayObject.astro.moon_phase
			},
			condition: {
				text: actualForecastdayObject.day.condition.text,
				icon: actualForecastdayObject.day.condition.icon
			},
			hours: getHoursArray(actualForecastdayObject.hour)
		};

		newForecastdayArray.push(newForecastDay);
	}

	return newForecastdayArray;
}

const getForecastDays = async (req: any, res: any) => {
	const response = await fetchForecastDays(req.query.location, req.query.days);

	if (!response.ok) return res.status(502).send(response);

	const forecast: forecastType = {
		location: {
			name: response.location.name,
			region: response.location.region,
			country: response.location.country
		},
		current: {
			temperature: response.current.temp_c,
			feels_like: response.current.feelslike_c,
			wind_speed: response.current.wind_kph,
			humidity: response.current.humidity,
			uv: response.current.uv,
			is_day: response.current.is_day,
			condition: {
				text: response.current.condition.text,
				icon: response.current.condition.icon
			}
		},
		forecast: {
			forecastday: getForecastDaysArray(response.forecast.forecastday)
		}
	}

	return res.status(200).send(forecast);
}

export {
	getForecastDays
}