import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import moment from 'moment';
import { create } from '../../../helpers';

const INITIAL_DATE = {
	date: '',
	time: '',
};

function Datetime(props) {
	const { datetime } = props;
	const [data, setData] = useState(INITIAL_DATE);

	const getData = () => {
		const value = moment(datetime);
		const weeks = create.calendar.weeks();
		
		const weekday = weeks[value.day()].name;
		const date = value.clone().format('DD-MM-YYYY');
		const formattedDate = `${weekday}, ${date}`;
		const time = value.clone().format('HH:MM');

		setData({ date: formattedDate, time });
	};

	useEffect(() => getData(), []);

	return (
		<div className="taskDetails__datetime">
			{ data.date } at { data.time }
		</div>
	);
}

Datetime.propTypes = {
	datetime: string.isRequired,
};

export default Datetime;
