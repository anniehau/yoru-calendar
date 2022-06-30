import React from 'react';
import { func } from 'prop-types';

function TasksButton(props) {
	const { onClick } = props;
	return (
		<button
			className="menu__tasksBtn"
			onClick={ onClick }
		>
			Tasks
		</button>
	);
}

TasksButton.propTypes = {
	onClick: func.isRequired,
};

export default TasksButton;
