import React from 'react';
import { func } from 'prop-types';

function SubmitTaskButton(props) {
	const { onClick } = props;
	return (
		<button
			className="newTask__submitTaskBtn"
			type="button"
			onClick={ onClick }
		>
      Create
		</button>
	);
}

SubmitTaskButton.propTypes = {
	onClick: func.isRequired,
};

export default SubmitTaskButton;
