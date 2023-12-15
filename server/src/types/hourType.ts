import { hourString } from "./hourString.js"

export type hourType = {
	time: hourString,
	temperature: number,
	chance_of_rain: number,
	is_day: number,
	condition: {
		text: string,
		icon: string
	}
}