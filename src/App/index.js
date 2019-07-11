import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Loader from '../components/Loader';
import { rAFTimeout } from '../helpers';
import { service } from '../store';
import { MyTypography, Wrapper } from './style';

export class App extends Component {
	constructor() {
		super();

		this.state = {
			loading: true,
		};

		this.loader = React.createRef();
	}

	init() {
		this.props.getWeather();
		rAFTimeout(() => this.loader.current.animateIn(), 100);
	}

	componentDidMount() {
		this.init();
	}

	componentDidUpdate(prevProps) {
		if (this.props.loading !== prevProps.loading) {
			rAFTimeout(() => {
				this.loader.current.animateOut();
				rAFTimeout(() => this.setState({ loading: false }), 600);
			}, 1000);
		}
	}

	render() {
		return (
			<Wrapper data-test="component-app">
				{this.state.loading ? (
					<Loader data-test="component-loader" ref={this.loader} />
				) : this.props.errorLoadingData ? (
					<MyTypography data-test="error-text" variant="h4">
						There was an error fetching the data. Please try again later...
					</MyTypography>
				) : (
							<Home data-test="component-home" />
						)}
			</Wrapper>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.loading,
		weatherData: state.weatherData,
		errorLoadingData: state.errorLoadingData,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getWeather: () => dispatch(service.fetchWeatherData()),
	};
};

App.propTypes = {
	loading: PropTypes.bool.isRequired,
	weatherData: PropTypes.object.isRequired,
	errorLoadingData: PropTypes.bool.isRequired,
	getWeather: PropTypes.func.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
