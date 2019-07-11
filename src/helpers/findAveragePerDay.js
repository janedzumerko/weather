import { convertToFahrenheit, convertToCelsius } from '.';

export default dataInDays => {
	for (let day in dataInDays) {
		let avgTemp = 0;
		let len = dataInDays[day].list.length;
		for (let i = 0; i < len; i++) {
			avgTemp += dataInDays[day].list[i].temp;
		}
		avgTemp /= len;
		
		dataInDays[day].avgTempF = convertToFahrenheit(avgTemp);
		dataInDays[day].avgTempC = convertToCelsius(avgTemp);
	}
};
