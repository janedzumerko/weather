import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { checkIfCelsius } from '../../helpers';
import { actionCreators } from '../../store';
import leftArrow from '../../svg/left-arrow.svg';
import rightArrow from '../../svg/right-arrow.svg';
import WeatherCard from '../WeatherCard';
import { CardsWrapper, Img, Navigation, Wrapper } from './style';
const CARD_WIDTH = 114;
const CARDS_ON_SCREEN = 3;
const RIGHT = 1;
const LEFT = -1;

export class Carousel extends PureComponent {
	constructor() {
		super();
		this.scroller = React.createRef();
		this.state = {
			position: 0,
			intervalStart: false,
		};
	}

	move(direction) {
		let end = Math.round(this.scroller.current.scrollLeft);

		end += direction * CARD_WIDTH;
		this.setState({ intervalStart: true });
		const id = setInterval(() => {
			if (Math.round(this.scroller.current.scrollLeft) === end) {
				clearInterval(id);
				this.setState({
					intervalStart: false,
					position: Math.round(this.scroller.current.scrollLeft),
				});
			} else {
				this.scroller.current.scrollLeft += direction;
			}
		}, 5);
	}

	handleMove = DIRECTION => {
		if (!this.state.intervalStart) {
			this.move(DIRECTION);
		}
	};

	render() {
		const { weatherData, selectedDate, tempScale, handleSelectCard } = this.props;
		return (
			<Wrapper data-test="component-carousel">
				<Navigation data-test="navigation">
					{this.state.position === 0 ? (
						<div />
					) : (
						<Img
							data-test="left-arrow"
							alt="left-arrow"
							onClick={() => this.handleMove(LEFT)}
							width="50"
							src={leftArrow}
						/>
					)}
					{this.state.position ===
					(Object.keys(weatherData).length - CARDS_ON_SCREEN) * CARD_WIDTH ? (
						<div />
					) : (
						<Img
							data-test="right-arrow"
							alt="right-arrow"
							onClick={() => this.handleMove(RIGHT)}
							width="50"
							src={rightArrow}
						/>
					)}
				</Navigation>
				<CardsWrapper ref={this.scroller} data-test="cards">
					{Object.keys(weatherData).map(date => {
						return (
							<WeatherCard
								key={date}
								day={weatherData[date].day}
								click={() => handleSelectCard(date)}
								date={date}
								selected={date === selectedDate}
								avgTemp={
									checkIfCelsius(tempScale)
										? weatherData[date].avgTempC
										: weatherData[date].avgTempF
								}
								type={checkIfCelsius(tempScale) ? 'C' : 'F'}
							/>
						);
					})}
				</CardsWrapper>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		weatherData: state.weatherData,
		selectedDate: state.selectedDate,
		tempScale: state.tempScale,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleSelectCard: date => dispatch(actionCreators.updateSelectedCard(date)),
	};
};

Carousel.propTypes = {
	weatherData: PropTypes.object.isRequired,
	selectedDate: PropTypes.string.isRequired,
	tempScale: PropTypes.oneOf(['fahrenheit', 'celsius']).isRequired,
	handleSelectCard: PropTypes.func.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Carousel);
