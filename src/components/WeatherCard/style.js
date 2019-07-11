import React from 'react';
import { styled } from '@material-ui/styles';
import { Card, CardContent } from '@material-ui/core';

export const MyCardContent = styled(CardContent)({
	padding: 0,
	'&:last-child': {
		paddingBottom: 0,
	},
});

export const MyCard = styled(({ selected, ...other }) => <Card {...other} />)({
	margin: '10px',
	cursor: 'pointer',
	width: '80px',
	border: props => `${props.selected ? '2px solid #FFC107' : ''}`,
	display: 'inline-block',
	padding: props => `${props.selected ? '5px' : '7px'}`,
});
