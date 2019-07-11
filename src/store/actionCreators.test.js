import { actionCreators, actionTypes } from '.';

describe('saveWeatherData', () => {
	it('should return an action with type `SAVE_WEATHER_DATA`', () => {
		const action = actionCreators.saveWeatherData({});
		expect(action).toEqual({
			type: actionTypes.SAVE_WEATHER_DATA,
			payload: {},
		});
	});
});
