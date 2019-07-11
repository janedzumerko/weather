import { shallow } from 'enzyme';
import React from 'react';
import { App } from '.';
import { findByTestAttr } from '../../test/testUtils';

const setup = (
	props = {
		loading: true,
		weatherData: {},
		errorLoadingData: false,
		getWeather: () => {},
	},
	state = null
) => {
	let wrapper = shallow(<App {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

describe('<App />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	it('should render without errors', () => {
		const appComponent = findByTestAttr(wrapper, 'component-app');
		expect(appComponent.length).toBe(1);
	});

	it('should contain loading property in state with starting value - true', () => {
		const initialLoadingState = wrapper.state('loading');
		expect(initialLoadingState).toBeTruthy();
	});

	it('should render <Loader /> when loading is true', () => {
		const loaderComponent = findByTestAttr(wrapper, 'component-loader');
		expect(loaderComponent.length).toBe(1);
	});

	it('should not render <Loader /> when loading is false', () => {
		wrapper.setState({ loading: false });
		wrapper.update();
		const loaderComponent = findByTestAttr(wrapper, 'component-loader');
		expect(loaderComponent.length).toBe(0);
	});

	it('should render error text when loading in state is false and errorLoadingData in props is true', () => {
		wrapper.setState({ loading: false });
		wrapper.setProps({ errorLoadingData: true });
		wrapper.update();
		const errorText = findByTestAttr(wrapper, 'error-text');
		expect(errorText.length).toBe(1);
	});

	it('should render <Home /> when loading in state and errorLoadingData in props, both are false', () => {
		wrapper.setState({ loading: false });
		wrapper.setProps({ errorLoadingData: false });
		wrapper.update();
		const homeComponent = findByTestAttr(wrapper, 'component-home');
		expect(homeComponent.length).toBe(1);
	});
});
