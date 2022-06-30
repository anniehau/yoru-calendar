import React from 'react';
import { func } from 'prop-types';
import TasksButton from './TasksButton';
import NewTaskButton from './NewTaskButton';

function MenuFooter(props) {
	const { goToTaskTable } = props;
	return (
		<footer className="menu__footer">
			<TasksButton
				onClick={ goToTaskTable }
			/>
			<NewTaskButton />
		</footer>
	);
}

MenuFooter.propTypes = {
	goToTaskTable: func.isRequired,
};

export default MenuFooter;
