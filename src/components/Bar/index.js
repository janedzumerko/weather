import { useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { MyBar, MyTypography, TextInsideBar, Wrapper } from './style';

function Bar({ temp, time, showTemp, type }) {
	const theme = useTheme();
	return (
		<Wrapper>
			<MyTypography variant="body1">
				{showTemp}
				{type}
			</MyTypography>
			<MyBar height={temp} color={theme.palette.primary}>
				<TextInsideBar variant="body2">{time}</TextInsideBar>
			</MyBar>
		</Wrapper>
	);
}

Bar.propTypes = {
	temp: PropTypes.number.isRequired,
	time: PropTypes.string.isRequired,
	showTemp: PropTypes.number.isRequired,
	type: PropTypes.oneOf(['F', 'C']).isRequired,
};

export default Bar;
