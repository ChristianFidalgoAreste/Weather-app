import { forecastDayType } from "./forecastDayType.js"

export type forecastType = {
	location: {
		name: string,
		region: string,
		country: string
	},
	current: {
		temperature: number,
		feels_like: number,
		wind_speed: number,
		humidity: number,
		uv: number,
		is_day: number,
		condition: {
			text: string,
			icon: string
		}
	},	
	forecast: {
		forecastday: Array<forecastDayType> | null
	}

}