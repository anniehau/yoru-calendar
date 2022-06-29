import React from 'react';
import { string } from 'prop-types';

function TimeText(props) {
	const { time } = props;
	return (
		<td>
			{ time }
		</td>
	);
}

TimeText.propTypes = {
	time: string.isRequired,
};

export default TimeText;