import React from 'react';
import { func } from 'prop-types';

function CloseBtn(props) {
	const { onClick } = props;
	return (
		<button
			onClick={ onClick }
		>
			x
		</button>
	);
}

CloseBtn.propTypes = {
	onClick: func.isRequired,
};

export default CloseBtn;
