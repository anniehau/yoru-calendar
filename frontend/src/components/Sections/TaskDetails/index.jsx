import React from 'react';
import { shape, func } from 'prop-types';
import Title from './Title';
import TaskTitle from './TaskTitle';
import Description from './Description';
import Datetime from './Datetime';
import Duration from './Duration';
import EditTaskButton from './EditTaskButton';
import DeleteTaskButton from './DeleteTaskButton';
import '../../../css/Calendar/TaskDetails.css';

function TaskDetails(props) {
	const { task, goToTaskEdit } = props;
	return (
		<div className="task__details">
			<Title />
			<TaskTitle title={ task.title } />
			<Datetime datetime={ task.datetime } />
			<Duration duration={ task.duration } />
			<Description description={ task.description } />
			<div className="taskDetails__buttons">
				<EditTaskButton task={ task } onClick={ goToTaskEdit } />
				<DeleteTaskButton id={ task.id } />
			</div>
		</div>
	);
}

TaskDetails.propTypes = {
	task: shape({}).isRequired,
	goToTaskEdit: func.isRequired,
};

export default TaskDetails;
