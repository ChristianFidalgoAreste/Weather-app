import { forecastType } from "./forecastType.js";
import { historyDayType } from "./historyDayType.js";

export type historyType = Omit<forecastType, 'current'> & {
	forecast: {
		forecastday: Array<historyDayType>
	}
};