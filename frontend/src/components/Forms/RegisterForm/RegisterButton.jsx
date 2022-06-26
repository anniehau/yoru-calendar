import React from 'react';
import { func } from 'prop-types';

function RegisterButton(props) {
	const { onClick } = props;

	return (
		<button
			className="register__button"
			type="button"
			onClick={ onClick }
		>
      Register
		</button>
	);
}

RegisterButton.propTypes = {
	onClick: func.isRequired,
};

export default RegisterButton;
