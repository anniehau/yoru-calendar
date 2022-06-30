import React from 'react';
import { string } from 'prop-types';

function Duration(props) {
	const { duration } = props;
	return (
		<div className="taskDetails__duration">
			{ duration
			&& `Task will take ${duration.replace('m', '')} minutes` }
		</div>
	);
}

Duration.propTypes = {
	duration: string.isRequired,
};

export default Duration;
