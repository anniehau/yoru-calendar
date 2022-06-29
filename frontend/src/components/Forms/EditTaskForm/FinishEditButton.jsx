import React from 'react';
import { func } from 'prop-types';

function FinishEditButton(props) {
	const { onClick } = props;

	return (
		<button
			className="editTask__finishEditBtn"
			type="button"
			onClick={ onClick }
		>
      Finish
		</button>
	);
}

FinishEditButton.propTypes = {
	onClick: func.isRequired,
};

export default FinishEditButton;
