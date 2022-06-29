import React from 'react';
import { shape, func } from 'prop-types';
import TitleText from './TitleText';
import DurationText from './DurationText';
import DateText from './DateText';
import TimeText from './TimeText';
import EditTaskButton from './EditTaskButton';
import DeleteTaskButton from './DeleteTaskButton';

function TableItem(props) {
	const { task, goToTaskEdit } = props;
	const date = task.datetime.substring(0, task.datetime.indexOf('T')).replaceAll('-', '/');
	const time = new Date(task.datetime).toLocaleTimeString();
	return (
		<tr>
			<TitleText title={ task.title } />
			<DateText date={ date } />
			<TimeText time={ time } />
			<DurationText duration={ task.duration } />
			<EditTaskButton task={ task } onClick={ goToTaskEdit } />
			<DeleteTaskButton id={ task.id } />
		</tr>
	);
}

TableItem.propTypes = {
	task: shape({}).isRequired,
	goToTaskEdit: func.isRequired,
};

export default TableItem;
