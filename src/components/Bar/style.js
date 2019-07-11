import { Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import React from 'react';

export const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	minWidth: '30px',
});

export const MyBar = styled(({ height, color, ...other }) => <div {...other} />)({
	position: 'relative',
	margin: '4px',
	width: '100%',
	height: props => props.height,
	transition: 'height 500ms linear',
	background: props => props.color.main,
	border: props => `1px solid ${props.color.dark}`,
	'&:hover': {
		backgroundColor: props => props.color.light,
	},
});

export const MyTypography = styled(Typography)({
	lineHeight: 'normal',
});

export const TextInsideBar = styled(MyTypography)({
	position: 'absolute',
	bottom: '0',
	left: '50%',
	transform: 'translateX(-50%)',
});
