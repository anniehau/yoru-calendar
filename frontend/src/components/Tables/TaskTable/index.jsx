import React, { useState, useContext, useEffect } from 'react';
import { shape } from 'prop-types';
import AppContext from '../../../context/AppContext';
import TableItem from './TableItem';

function TaskTable(props) {
	const { date } = props;
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
					id={ task.id }
					title={ task.title }
					description={ task.description }
					duration={ task.duration }
					datetime={ task.datetime }
				/>
			);
		})
	);

	return (
		<table className="table__task">
			<thead>
				<tr>
					<th>Task</th>
					<th>Date</th>
					<th>Time</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				{ tableBody }
			</tbody>
		</table>
	);
}

TaskTable.propTypes = {
	date: shape({}).isRequired,
};

export default TaskTable;
