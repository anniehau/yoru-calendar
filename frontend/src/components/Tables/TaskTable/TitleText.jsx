import React from 'react';
import { string } from 'prop-types';

function TitleText(props) {
	const { title } = props;
	return (
		<td>
			{ title }
		</td>
	);
}

TitleText.propTypes = {
	title: string.isRequired,
};

export default TitleText;