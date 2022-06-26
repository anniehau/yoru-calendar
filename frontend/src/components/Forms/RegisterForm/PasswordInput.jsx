import React from 'react';
import { string, func } from 'prop-types';

function PasswordInput(props) {
  const { password, onChange } = props;

  return (
		<div className="login__textField">
			<input
				type="password"
				value={ password }
				onChange={ (e) => onChange(e, 'password') }
				required
			/>
			<span />
			<label>Password</label>
		</div>
  )
}

PasswordInput.propTypes = {
  password: string.isRequired,
  onChange: func.isRequired,
}

export default PasswordInput;
