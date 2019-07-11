import React from 'react';
import BarChart from '../BarChart';
import Carousel from '../Carousel';
import Clouds from '../Clouds';
import TemperatureCheck from '../TemperatureCheck';
import { Wrapper } from './style';

function Home() {
	return (
		<Wrapper data-test="component-home">
			<Clouds data-test="component-clouds" />
			<TemperatureCheck data-test="component-temperature-check" />
			<Carousel data-test="component-carousel" />
			<BarChart data-test="component-bar-chart" />
		</Wrapper>
	);
}

export default Home;
