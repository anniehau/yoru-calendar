import React, { useState, useContext, useEffect } from 'react';
import { shape, func } from 'prop-types';
import AppContext from '../../../context/AppContext';
import TableItem from './TableItem';
import '../../../css/Calendar/TaskTable.css';

function TaskTable(props) {
	const { date, goToTaskEdit, goToTaskDetails } = props;
	const [tasks, setTasks] = useState([]);
	const { tasks: allTasks } = useContext(AppContext);

	const getDayTasks = () => {
		const filtered = allTasks
			.filter((task) => {
				const taskDate = new Date(task.datetime);
				const isSameYear = taskDate.getFullYear().toString() === date.format('Y');
				const isSameMonth = (taskDate.getMonth() + 1).toString() === date.format('M');
				const isSameDay = taskDate.getDate().toString() === date.format('D');
				return isSameYear && isSameMonth && isSameDay;
			});
		setTasks(filtered);
	};

	useEffect(() => {
		getDayTasks();
	}, [date, allTasks]);

	const tableBody = (
		tasks.map((task) => {
			return (
				<TableItem
					key={ task.id }
					task={ task }
					goToTaskEdit={ goToTaskEdit }
					onClick={ goToTaskDetails }
				/>
			);
		})
	);

	return (
		<table className="table__tasks">
			<thead>
				<tr>
					<th>Task</th>
					<th>Date</th>
					<th>Time</th>
					<th>Duration</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody className="table__tasksBody">
				{ tableBody }
			</tbody>
		</table>
	);
}

TaskTable.propTypes = {
	date: shape({}).isRequired,
	goToTaskEdit: func.isRequired,
	goToTaskDetails: func.isRequired,
};

export default TaskTable;
