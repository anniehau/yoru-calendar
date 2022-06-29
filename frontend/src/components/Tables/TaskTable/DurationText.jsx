import React from 'react';
import { string } from 'prop-types';

function DurationText(props) {
	const { duration } = props;
	return (
		<td>
			{ duration }
		</td>
	);
}

DurationText.propTypes = {
	duration: string.isRequired,
};

export default DurationText;