import React from 'react';
import { string } from 'prop-types';

function Duration(props) {
	const { duration } = props;
	return (
		<div className="taskDetails__duration">
			{ duration }
		</div>
	);
}

Duration.propTypes = {
	duration: string.isRequired,
};

export default Duration;
