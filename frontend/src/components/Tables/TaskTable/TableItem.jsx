import React from 'react';
import { number, string } from 'prop-types';
import TitleText from './TitleText';
import DurationText from './DurationText';
import DateText from './DateText';
import TimeText from './TimeText';
import DeleteTaskButton from './DeleteTaskButton';

function TableItem(props) {
	const { id, title, datetime, duration } = props;
	const date = datetime.substring(0, datetime.indexOf('T')).replaceAll('-', '/');
	const time = new Date(datetime).toLocaleTimeString();
	return (
		<tr>
			<TitleText title={ title } />
			<DateText date={ date } />
			<TimeText time={ time } />
			<DurationText duration={ duration } />
			<td>
				<DeleteTaskButton id={ id } />
			</td>
		</tr>
	);
}

TableItem.propTypes = {
	id: number.isRequired,
	title: string.isRequired,
	description: string.isRequired,
	datetime: string.isRequired,
	duration: string.isRequired,
};

export default TableItem;
