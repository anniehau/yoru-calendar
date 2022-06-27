import React from 'react';
import { arrayOf, shape } from 'prop-types';
import Day from './Day';

function Week(props) {
	const { week } = props;

	return (
		<div>
			{
				week.map((day) => (
					<Day key={ week.indexOf(day) } day={ day } />
				))
			}
		</div>
	);
}

Week.propTypes = {
	week: arrayOf(shape({})).isRequired,
};

export default Week;
