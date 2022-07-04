import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { create } from '../helpers';

function verifyTaskAmount(day) {
	const [taskAmount, setTaskAmount] = useState(0);
	const { tasks } = useContext(AppContext);

	const verifyDayTasks = () => {
		const currDate = `${day.format('D')}/${day.format('M')}/${day.format('Y')}`;
		const filtered = tasks
			.filter((task) => {
				const taskDate = create.calendar.date.format(task.datetime);
				return taskDate === currDate;
			});
		const taskAmount = filtered.length > 0 ? filtered.length : 0;
		setTaskAmount(taskAmount);
	};
	
	useEffect(() => {
		verifyDayTasks();
	}, [tasks, day]);
	
	return taskAmount;
}

export default verifyTaskAmount;
