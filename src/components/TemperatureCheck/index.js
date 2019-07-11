import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

function TemperatureCheck({ tempScale, changeTempScale }) {
	return (
		<RadioGroup
			aria-label="Temperature"
			name="temperature"
			value={tempScale}
			onChange={changeTempScale}
			row
		>
			<FormControlLabel
				value="celsius"
				control={<Radio color="primary" />}
				label="Celsius"
				labelPlacement="end"
			/>
			<FormControlLabel
				value="fahrenheit"
				control={<Radio color="primary" />}
				label="Fahrenheit"
				labelPlacement="end"
			/>
		</RadioGroup>
	);
}

const mapStateToProps = state => {
	return {
		tempScale: state.tempScale,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeTempScale: e => dispatch(actionCreators.updateTempScale(e.target.value)),
	};
};

TemperatureCheck.propTypes = {
	tempScale: PropTypes.oneOf(['fahrenheit', 'celsius']).isRequired,
	changeTempScale: PropTypes.func.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TemperatureCheck);
