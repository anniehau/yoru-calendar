import React from 'react';
import { string } from 'prop-types';

function ErrorText(props) {
	const { error } = props;

	return (
		error.length > 0 && <div className="register__error">* { error }</div>
	);
}

ErrorText.propTypes = {
	error: string.isRequired,
};

export default ErrorText;
