import React from 'react';
import { string, func } from 'prop-types';

function TitleInput(props) {
	const { title, onChange } = props;

	return (
		<div className="">
			<input
				type="text"
				value={ title }
				onChange={ (e) => onChange(e, 'title') }
				required
			/>
			<span />
			<label>Title</label>
		</div>
	);
}

TitleInput.propTypes = {
	title: string.isRequired,
	onChange: func.isRequired,
};

export default TitleInput;
