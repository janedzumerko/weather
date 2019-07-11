import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionTypes, service } from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchWeatherData', () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should dispatch SAVE_WEATHER_DATA after successfuly fetching data from server', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: {},
			});
		});

		const expectedActions = [
			{
				type: actionTypes.SAVE_WEATHER_DATA,
				payload: {},
			},
		];

		const store = mockStore();

		return store.dispatch(service.fetchWeatherData()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('should dispatch ERROR_LOADING_DATA after error when fetching data from server', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 400,
				response: {},
			});
		});

		const expectedActions = [
			{
				type: actionTypes.ERROR_LOADING_DATA,
			},
		];

		const store = mockStore();

		return store.dispatch(service.fetchWeatherData()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
