import React from 'react';
import { arrayOf, shape, func } from 'prop-types';
import Day from './Day';

function Week(props) {
	const { week, date, onClick } = props;

	return (
		<div className="calendar__week">
			{
				week.map((day) => (
					<Day
						key={ week.indexOf(day) }
						day={ day }
						date={ date }
						onClick={ onClick }
					/>
				))
			}
		</div>
	);
}

Week.propTypes = {
	week: arrayOf(shape({})).isRequired,
	date: shape({}).isRequired,
	onClick: func.isRequired,
};

export default Week;
