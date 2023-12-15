import { forecastDayType } from "./forecastDayType.js"

export type historyDayType = Omit<forecastDayType, 'hours'>;