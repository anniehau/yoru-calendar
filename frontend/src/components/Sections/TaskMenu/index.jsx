import React from 'react';
import { shape, func } from 'prop-types';
import MenuHeader from './MenuHeader';
import TaskTable from '../../Tables/TaskTable';
import '../../../css/Calendar/TaskMenu.css';
import MenuFooter from './MenuFooter';

function TaskMenu(props) {
	const { date, closeMenu } = props;

	return (
		<section className="task__menu">
			<MenuHeader
				date={ date }
				closeMenu={ closeMenu }
			/>
			<TaskTable date={ date } />
			<MenuFooter />
		</section>
	);
}

TaskMenu.propTypes = {
	date: shape({}).isRequired,
	closeMenu: func.isRequired,
};

export default TaskMenu;
