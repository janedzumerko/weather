import React from 'react';
import Cloud from '../Cloud';
import { Wrapper } from './style';

function Clouds() {
	return (
		<Wrapper>
			<Cloud type="big front slowest" />
			<Cloud type="distant smaller" />
			<Cloud type="small slow" />
			<Cloud type="distant super-slow massive" />
			<Cloud type="slower" />
		</Wrapper>
	);
}

export default Clouds;
