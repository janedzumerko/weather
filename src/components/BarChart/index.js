import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { barHeightGenerator, checkIfCelsius } from '../../helpers';
import Bar from '../Bar';
import { Wrapper } from './style';

function BarChart({ weatherData, selectedDate, tempScale }) {
	return (
		<Wrapper>
			{weatherData[selectedDate].list.map(el => (
				<Bar
					showTemp={checkIfCelsius(tempScale) ? el.tempC : el.tempF}
					key={el.time}
					time={el.time}
					type={checkIfCelsius(tempScale) ? 'C' : 'F'}
					temp={barHeightGenerator(el.temp)}
				/>
			))}
		</Wrapper>
	);
}

const mapStateToProps = state => {
	return {
		tempScale: state.tempScale,
		selectedDate: state.selectedDate,
		weatherData: state.weatherData,
	};
};

BarChart.propTypes = {
	weatherData: PropTypes.object.isRequired,
	selectedDate: PropTypes.string.isRequired,
	tempScale: PropTypes.oneOf(['fahrenheit', 'celsius']).isRequired,
};

export default connect(mapStateToProps)(BarChart);
