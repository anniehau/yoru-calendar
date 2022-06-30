import React from 'react';
import { func } from 'prop-types';

function NewTaskButton(props) {
	const { onClick } = props;
	return (
		<button
			className="menu__newTaskBtn"
			onClick={ onClick }
		>
			New Task
		</button>
	);
}

NewTaskButton.propTypes = {
	onClick: func.isRequired,
};

export default NewTaskButton;
