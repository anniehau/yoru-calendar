import React from 'react';
import { func } from 'prop-types';

function AdvanceMonthButton(props) {
	const { onClick } = props;

	return (
		<button
			className="calendar__advanceMonthBtn"
			onClick={ onClick }
		>
			»
		</button>
	);
}

AdvanceMonthButton.propTypes = {
	onClick: func.isRequired,
};

export default AdvanceMonthButton;
