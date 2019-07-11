import { actionTypes } from '.';
import { setHoursPerDay } from '../helpers';

export const initialState = {
	loading: true,
	errorLoadingData: false,
	weatherData: {},
	selectedDate: '',
	tempScale: 'fahrenheit',
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SAVE_WEATHER_DATA:
			const weatherData = setHoursPerDay(action.payload);
			return {
				...state,
				weatherData,
				loading: false,
				selectedDate: action.payload.list[0].dt_txt.split(' ')[0],
			};
		case actionTypes.UPDATE_SELECTED_CARD:
			return {
				...state,
				selectedDate: action.payload,
			};
		case actionTypes.UPDATE_TEMP_SCALE:
			return {
				...state,
				tempScale: action.payload,
			};
		case actionTypes.ERROR_LOADING_DATA:
			return {
				...state,
				loading: false,
				errorLoadingData: true,
			};
		default:
			return state;
	}
}

export default reducer;
