import React from 'react';
import { func } from 'prop-types';

function RetreatMonthButton(props) {
	const { onClick } = props;

	return (
		<button
			className="calendar__retreatMonthBtn"
			onClick={ onClick }
		>
			«
		</button>
	);
}

RetreatMonthButton.propTypes = {
	onClick: func.isRequired,
};

export default RetreatMonthButton;
