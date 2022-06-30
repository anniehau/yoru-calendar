import React, { useContext, useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import AppContext from '../../../../context/AppContext';
import { create } from '../../../../helpers';

function Day(props) {
	const { day, date, onClick } = props;
	const { tasks: allTasks } = useContext(AppContext);
	const [tasks, setTasks] = useState([]);
	const taskAmount = tasks.length > 0 && tasks.length;

	const isOff = date.format('MMMM') === day.format('MMMM') ? '' : 'calendar__dayOff';
	const formattedDay = day.format('D');

	const verifyDayTasks = () => {
		const currDate = `${day.format('D')}/${day.format('M')}/${day.format('Y')}`;
		const filtered = allTasks
			.filter((task) => {
				const taskDate = create.calendar.date.format(task.datetime);
				return taskDate === currDate;
			});
		setTasks(filtered);
	};

	useEffect(() => {
		verifyDayTasks();
	}, []);

	const renderTaskAmount = (
		taskAmount &&
		<span className="day__tasks">
			{ taskAmount }
		</span>
	);

	return (
		<div
			className={ `calendar__day ${isOff}` }
			onClick={ () => onClick(day, taskAmount) }
		>
			{ renderTaskAmount }
			{ formattedDay }
		</div>
	);
}

Day.propTypes = {
	day: shape({}).isRequired,
	date: shape({}).isRequired,
	onClick: func.isRequired,
};

export default Day;
