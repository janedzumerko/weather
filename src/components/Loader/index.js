import React, { PureComponent } from 'react';
import { rAFTimeout } from '../../helpers';
import './style.scss';

class Loader extends PureComponent {
	constructor() {
		super();

		this.loader = React.createRef();
		this.circle = React.createRef();
		this.rays = [];
	}

	_getCircle() {
		if (this.circle.current) {
			return this.circle.current;
		}
		return document.querySelector('.loader__circle');
	}

	animateIn() {
		this.animateCircle();

		rAFTimeout(() => this.animateRays(), 300);

		rAFTimeout(() => this.startRotation(), 500);
	}

	animateRays() {
		this.rays.map((el, idx) => {
			rAFTimeout(() => el.classList.add('animate-in'), idx * 80);
			return el;
		});
	}

	startRotation() {
		rAFTimeout(() => this._getCircle().classList.add('start-rotation'), 300);
	}

	animateCircle() {
		rAFTimeout(() => this._getCircle().classList.add('animate-in'), 150);
	}

	animateOut() {
		rAFTimeout(() => this._getCircle().classList.add('animate-out'), 550);

		this.rays.map((el, idx) => {
			rAFTimeout(() => el.classList.add('animate-out'), idx * 50);

			return el;
		});
	}

	componentDidMount() {
		this.rays = [...this._getCircle().querySelectorAll('.ray')];
	}

	render() {
		return (
			<div ref={this.loader} className="loader">
				<div ref={this.circle} className="loader__circle">
					{[0, 1].map(index => (
						<div key={`ray_${index}`} className="rays">
							<div className="ray ray--north" />
							<div className="ray ray--west" />
							<div className="ray ray--east" />
							<div className="ray ray--south" />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Loader;
