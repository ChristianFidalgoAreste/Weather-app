import { hourString } from "./hourString.js"
import { hourType } from "./hourType.js"

export type forecastDayType = {
	date: string,
	day: {
		max_temp: number,
		min_temp: number,
		avg_temp: number,
		chance_of_rain: number
	},
	astro: {
		sunrise: hourString,
		sunset: hourString,
		moon_phase: string
	},
	condition: {
		text: string,
		icon: string
	},
	hours: Array<hourType>
}