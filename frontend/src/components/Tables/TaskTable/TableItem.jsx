import React from 'react';
import { shape, func } from 'prop-types';
import TitleText from './TitleText';
import DurationText from './DurationText';
import DateText from './DateText';
import TimeText from './TimeText';
import EditTaskButton from './EditTaskButton';
import DeleteTaskButton from './DeleteTaskButton';
import moment from 'moment';

function TableItem(props) {
	const { task, goToTaskEdit, onClick } = props;
	const date = moment(task.datetime).format('YYYY/MM/DD');
	const time = moment(task.datetime).format('hh:mm A');
	return (
		<tr onClick={ () => onClick(task) }>
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
	onClick: func.isRequired,
};

export default TableItem;
