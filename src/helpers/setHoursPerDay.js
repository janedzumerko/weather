import {
	getDayOfWeek,
	convertToCelsius,
	convertToFahrenheit,
	findAveragePerDay,
} from '.';

export default dataInHours => {
	const dataInDays = {};
	let date, time;
	const data = dataInHours.list;

	for (let i = 0; i < data.length; i++) {
		date = data[i].dt_txt.split(' ')[0];
		time = data[i].dt_txt.split(' ')[1].split(':')[0];
		if (!dataInDays.hasOwnProperty(date)) {
			dataInDays[date] = { list: [], day: '', avgTempF: 0, avgTempC: 0 };
			dataInDays[date].day = getDayOfWeek(date);
		}
		dataInDays[date].list = dataInDays[date].list.concat([
			{
				time,
				temp: data[i].main.temp,
				tempC: convertToCelsius(data[i].main.temp),
				tempF: convertToFahrenheit(data[i].main.temp),
			},
		]);
	}
	findAveragePerDay(dataInDays);

	return dataInDays;
};
