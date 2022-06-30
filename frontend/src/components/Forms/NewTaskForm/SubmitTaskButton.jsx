import React from 'react';
import { func } from 'prop-types';

function SubmitTaskButton(props) {
	const { onClick } = props;
	return (
		<button
			className="editTask__finishEditBtn"
			type="button"
			onClick={ onClick }
		>
      Submit
		</button>
	);
}

SubmitTaskButton.propTypes = {
	onClick: func.isRequired,
};

export default SubmitTaskButton;
