import React from 'react';
import { func } from 'prop-types';
import TasksButton from './TasksButton';
import NewTaskButton from './NewTaskButton';

function MenuFooter(props) {
	const { goToTaskTable, goToNewTask } = props;
	return (
		<footer className="menu__footer">
			<TasksButton
				onClick={ goToTaskTable }
			/>
			<NewTaskButton
				onClick={ goToNewTask }
			/>
		</footer>
	);
}

MenuFooter.propTypes = {
	goToTaskTable: func.isRequired,
	goToNewTask: func.isRequired,
};

export default MenuFooter;
