import React from 'react';
import { arrayOf, shape } from 'prop-types';
import Day from './Day';

function Week(props) {
	const { week } = props;

	return (
		week.map((day) => (
			<Day key={ week.indexOf(day) } day={ day } />
		))
	);
}

Week.propTypes = {
	week: arrayOf(shape({})).isRequired,
};

export default Week;
