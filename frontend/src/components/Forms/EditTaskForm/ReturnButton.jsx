import React from 'react';
import { func } from 'prop-types';

function ReturnButton(props) {
	const { onClick } = props;

	return (
		<button
			className="editTask__returnBtn"
			type="button"
			onClick={ onClick }
		>
      Return
		</button>
	);
}

ReturnButton.propTypes = {
	onClick: func.isRequired,
};

export default ReturnButton;
