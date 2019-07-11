import { styled } from '@material-ui/styles';

export const Wrapper = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	Zindex: '20',
});

export const Navigation = styled('div')({
	width: '295px',
	height: '60px',
	padding: '0 30px',
	display: 'flex',
	justifyContent: 'space-between',
});

export const Img = styled('img')({
	cursor: 'pointer',
});

export const CardsWrapper = styled('div')({
	display: 'inline-block',
	verticalAlign: 'middle',
	whiteSpace: 'nowrap',
	overflowX: 'hidden',
	width: '342px',
});
