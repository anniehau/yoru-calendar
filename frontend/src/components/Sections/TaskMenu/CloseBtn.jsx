import React from 'react';
import { func } from 'prop-types';

function CloseBtn(props) {
	const { onClick } = props;
	return (
		<button
			className="menu__closeBtn"
			onClick={ onClick }
		>
			X
		</button>
	);
}

CloseBtn.propTypes = {
	onClick: func.isRequired,
};

export default CloseBtn;
