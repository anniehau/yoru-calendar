import React from 'react';
import { arrayOf, shape } from 'prop-types';
import Day from './Day';

function Week(props) {
	const { week, date } = props;

	return (
		<div className="calendar__week">
			{
				week.map((day) => (
					<Day
						key={ week.indexOf(day) }
						day={ day }
						date={ date }
					/>
				))
			}
		</div>
	);
}

Week.propTypes = {
	week: arrayOf(shape({})).isRequired,
	date: shape({}).isRequired,
};

export default Week;
