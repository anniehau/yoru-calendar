import React from 'react';
import { string } from 'prop-types';

function Description(props) {
	const { description } = props;
	return (
		<div className="taskDetails__description">
			{ description }
		</div>
	);
}

Description.propTypes = {
	description: string.isRequired,
};

export default Description;
