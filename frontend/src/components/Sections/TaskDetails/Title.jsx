import React from 'react';
import { string } from 'prop-types';

function Title(props) {
	const { title } = props;
	return (
		<h1 className="taskDetails__title">
			{ title }
		</h1>
	);
}

Title.propTypes = {
	title: string.isRequired,
};

export default Title;
