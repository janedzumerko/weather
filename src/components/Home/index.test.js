import { shallow } from 'enzyme';
import React from 'react';
import Home from '.';
import { findByTestAttr } from '../../../test/testUtils';

describe('<Home />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Home />);
	});

	it('should render without errors', () => {
		const homeComponent = findByTestAttr(wrapper, 'component-home');
		expect(homeComponent.length).toBe(1);
	});

	it('should render <Clouds />', () => {
		const cloudsComponent = findByTestAttr(wrapper, 'component-clouds');
		expect(cloudsComponent.length).toBe(1);
	});

	it('should render <TemperatureCheck />', () => {
		const temperatureCheckComponent = findByTestAttr(
			wrapper,
			'component-temperature-check'
		);
		expect(temperatureCheckComponent.length).toBe(1);
	});

	it('should render <Carousel />', () => {
		const carouselComponent = findByTestAttr(wrapper, 'component-carousel');
		expect(carouselComponent.length).toBe(1);
	});

	it('should render <BarChart />', () => {
		const barChartComponent = findByTestAttr(wrapper, 'component-bar-chart');
		expect(barChartComponent.length).toBe(1);
	});
});
