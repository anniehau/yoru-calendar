import React from 'react';
import { string } from 'prop-types';

function Datetime(props) {
	const { datetime } = props;
	return (
		<div className="taskDetails__datetime">
			{ datetime }
		</div>
	);
}

Datetime.propTypes = {
	datetime: string.isRequired,
};

export default Datetime;
