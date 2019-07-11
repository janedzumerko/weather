import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MyCard, MyCardContent } from './style';

class WeatherCard extends Component {

	shouldComponentUpdate(nextProps) {
		if (this.props.type !== nextProps.type) {
			return true;
		}
		if (this.props.selected === nextProps.selected) {
			return false;
		} else {
			return true;
		}
	}

	render() {
		const { selected, click, date, day, avgTemp, type } = this.props;
		return (
			<MyCard selected={selected} onClick={click}>
				<MyCardContent>
					<Typography color="textPrimary">Temp:</Typography>

					<Typography color="textSecondary" variant="subtitle1" gutterBottom>
						{avgTemp}
						{type}
					</Typography>

					<Typography color="textPrimary">Date:</Typography>

					<Typography color="textSecondary" variant="subtitle1">
						{date} <br /> ({day})
					</Typography>
				</MyCardContent>
			</MyCard>
		);
	}
}

WeatherCard.propTypes = {
	avgTemp: PropTypes.number.isRequired,
	click: PropTypes.func.isRequired,
	date: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['F', 'C']).isRequired,
	day: PropTypes.oneOf(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']).isRequired,
	selected: PropTypes.bool.isRequired,
};

export default WeatherCard;
