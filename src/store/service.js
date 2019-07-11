import axios from 'axios';
import { actionCreators } from '.';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';

export const fetchWeatherData = () => {
	return dispatch => {
		return axios
			.get(API_URL)
			.then(response => dispatch(actionCreators.saveWeatherData(response.data)))
			.catch(() => dispatch(actionCreators.errorLoadingData()));
	};
};

export default {
	fetchWeatherData,
};
