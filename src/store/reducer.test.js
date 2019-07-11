import { actionCreators, reducer } from '.';
import { initialState } from './reducer';

describe('reducer', () => {
	it('should return default initial state when no action is passed', () => {
		const newState = reducer(undefined, {});
		expect(newState).toEqual(initialState);
	});

	it('should return `loading` to be `false` and `errorLoadingData` to be `true` upon receiving an action of type `ERROR_LOADING_DATA`', () => {
		const newState = reducer(initialState, actionCreators.errorLoadingData());
		expect(newState).toEqual({
			...initialState,
			loading: false,
			errorLoadingData: true,
		});
	});
});
