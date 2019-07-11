import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';

export const Wrapper = styled('div')({
	background: '#85b9dd',
	display: 'flex',
	flexDirection: 'column',
	height: '100vh',
	justifyContent: 'space-between',
	position: 'relative',
	overflow: 'hidden',
	'@media screen and (min-width: 550px)': {
		borderRadius: '10px',
		boxShadow: '0 3px 20px 0 rgba(0, 0, 0, 0.06)',
		height: '667px',
		overflow: 'hidden',
		width: '385px',
	},
});

export const MyTypography = styled(Typography)({
	padding: '1em',
});
