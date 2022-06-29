import React from 'react';
import { string } from 'prop-types';

function DescriptionText(props) {
	const { description } = props;
	return (
		<td>
			{ description }
		</td>
	);
}

DescriptionText.propTypes = {
	description: string.isRequired,
};

export default DescriptionText;