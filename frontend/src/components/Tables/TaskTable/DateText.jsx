import React from 'react';
import { string } from 'prop-types';

function DateText(props) {
	const { date } = props;
	return (
		<td>
			{ date }
		</td>
	);
}

DateText.propTypes = {
	date: string.isRequired,
};

export default DateText;