import React, { useState } from 'react';
import { shape, func } from 'prop-types';
import MenuHeader from './MenuHeader';
import TaskTable from '../../Tables/TaskTable';
import { EditTaskForm } from '../../Forms';
import MenuFooter from './MenuFooter';
import '../../../css/Calendar/TaskMenu.css';

const INITIAL_MENU = {
	name: 'table',
	task: {},
};

function TaskMenu(props) {
	const [menu, setMenu] = useState(INITIAL_MENU);
	const { date, closeMenu } = props;

	const goToTaskEdit = (task) => setMenu({ name: 'edit', task });
	const goToTaskTable = () => setMenu({ ...INITIAL_MENU, name: 'table' });

	const main = (
		<>
			{ menu.name === 'table' && <TaskTable date={ date } goToTaskEdit={ goToTaskEdit } /> }
			{ menu.name === 'edit' && <EditTaskForm task={ menu.task } goToTaskTable={ goToTaskTable } /> }
		</>
	);
	
	return (
		<section className="task__menu">
			<MenuHeader
				date={ date }
				closeMenu={ closeMenu }
			/>
			{ main }
			<MenuFooter />
		</section>
	);
}

TaskMenu.propTypes = {
	date: shape({}).isRequired,
	closeMenu: func.isRequired,
};

export default TaskMenu;
