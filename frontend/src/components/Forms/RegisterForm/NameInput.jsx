import React from 'react';
import { string, func } from 'prop-types';

function NameInput(props) {
	const { name, onChange } = props;

	return (
		<div className="register__textField">
			<input
				type="text"
				value={ name }
				onChange={ (e) => onChange(e, 'name') }
				required
			/>
			<span />
			<label>Name</label>
		</div>
	);
}

NameInput.propTypes = {
	name: string.isRequired,
	onChange: func.isRequired,
};

export default NameInput;
