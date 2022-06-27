import React from 'react';
import { string, func } from 'prop-types';
import AdvanceMonthButton from './AdvanceMonthButton';
import RetreatMonthButton from './RetreatMonthButton';

function MonthHeader(props) {
	const { month, year, retreatMonth, advanceMonth } = props;

	return (
		<header className="calendar__headerMonth">
			<RetreatMonthButton onClick={ retreatMonth } />
			{ month }
			{' '}
			{ year }
			<AdvanceMonthButton onClick={ advanceMonth } />
		</header>
	);
}

MonthHeader.propTypes = {
	month: string.isRequired,
	year: string.isRequired,
	retreatMonth: func.isRequired,
	advanceMonth: func.isRequired,
};

export default MonthHeader;
