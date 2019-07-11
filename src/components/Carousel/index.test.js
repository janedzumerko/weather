import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import React from 'react';
import { Carousel } from '.';
import { findByTestAttr } from '../../../test/testUtils';

const setup = (
	props = {
		weatherData: {},
		selectedDate: '',
		tempScale: 'fahrenheit',
		handleSelectCard: () => { },
	},
	state = null
) => {
	let wrapper = shallow(<Carousel {...props} />);
	if (state) wrapper.setState(state);
	return wrapper;
};

describe('<Carousel />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup();
	});

	it('should render without errors', () => {
		const carouselComponent = findByTestAttr(wrapper, 'component-carousel');
		expect(carouselComponent.length).toBe(1);
	});

	it('should render navigation', () => {
		const navigation = findByTestAttr(wrapper, 'navigation');
		expect(navigation.length).toBe(1);
	});

	it('should render cards', () => {
		const cards = findByTestAttr(wrapper, 'cards');
		expect(cards.length).toBe(1);
	});

	it('should contain position property in state with starting value - 0', () => {
		const initialPositionState = wrapper.state('position');
		expect(initialPositionState).toBe(0);
	});

	it('should contain intervalStart property in state with starting value - false', () => {
		const initialIntervalStartState = wrapper.state('intervalStart');
		expect(initialIntervalStartState).toBeFalsy();
	});

	it('should render right arrow at start', () => {
		const rightArrow = findByTestAttr(wrapper, 'right-arrow');
		expect(rightArrow.length).toBe(1);
	});

	it('should not render left arrow if position property === 0', () => {
		wrapper.setState({ position: 0 });
		wrapper.update();
		const leftArrow = findByTestAttr(wrapper, 'left-arrow');
		expect(leftArrow.length).toBe(0);
	});

	it('should render left arrow only if position property !== 0', () => {
		wrapper.setState({ position: 114 });
		wrapper.update();
		const leftArrow = findByTestAttr(wrapper, 'left-arrow');
		expect(leftArrow.length).toBe(1);
	});

	it('should not throw warning with expected props', () => {
		const expectedProps = {
			weatherData: {},
			selectedDate: '',
			tempScale: 'fahrenheit',
			handleSelectCard: () => { },
		};
		const propError = checkPropTypes(
			Carousel.propTypes,
			expectedProps,
			'prop',
			Carousel.name
		);
		expect(propError).toBeUndefined();
	});
});
