import {
	ERROR_LOADING_DATA,
	SAVE_WEATHER_DATA,
	UPDATE_SELECTED_CARD,
	UPDATE_TEMP_SCALE,
} from './actionTypes';

export function saveWeatherData(payload) {
	return {
		type: SAVE_WEATHER_DATA,
		payload,
	};
}

export function updateSelectedCard(payload) {
	return {
		type: UPDATE_SELECTED_CARD,
		payload,
	};
}

export function updateTempScale(payload) {
	return {
		type: UPDATE_TEMP_SCALE,
		payload,
	};
}

export function errorLoadingData() {
	return {
		type: ERROR_LOADING_DATA,
	};
}

export default {
	saveWeatherData,
	updateSelectedCard,
	updateTempScale,
	errorLoadingData,
};
