import React from 'react';
import { string } from 'prop-types';

function Title(props) {
	const { month, year } = props;
	return (
		<div>
			{ month }
			{' '}
			{ year }
		</div>
	);
}

Title.propTypes = {
	month: string.isRequired,
	year: string.isRequired,
};

export default Title;
