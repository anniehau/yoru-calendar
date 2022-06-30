import React from 'react';
import { func } from 'prop-types';

function SubmitEditButton(props) {
	const { onClick } = props;
	return (
		<button
			className="newTask__finishEditBtn"
			type="button"
			onClick={ onClick }
		>
      Submit
		</button>
	);
}

SubmitEditButton.propTypes = {
	onClick: func.isRequired,
};

export default SubmitEditButton;
