import React from 'react';
import { shape } from 'prop-types';

function Day(props) {
	const { day } = props;
	const formattedDay = day.format('D');

	return (
		<div >
			{ formattedDay }
		</div>
	);
}

Day.propTypes = {
	day: shape({}).isRequired,
};

export default Day;
