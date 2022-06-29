import React from 'react';
import { shape } from 'prop-types';
import create from '../../../helpers/create';

function Title(props) {
	const { date } = props;

	const weeks = create.calendar.weeks();

	const weekday = weeks[date.day()].name;
	const day = date.format('D');
	const month = date.format('M');
	const year = date.format('YYYY');
	return (
		<div className="menu__title">
			{ `${weekday}, ${day}/${month}/${year}` }
		</div>
	);
}

Title.propTypes = {
	date: shape({}).isRequired,
};

export default Title;
