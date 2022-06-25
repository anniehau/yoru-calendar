import React from 'react';
import { string, func } from 'prop-types';

function PasswordInput(props) {
  const { password, onChange } = props;

  return (
    <input
      type="password"
      value={ password }
      placeholder="******"
      onChange={ (e) => onChange(e, 'password') }
    />
  )
}

PasswordInput.propTypes = {
  password: string.isRequired,
  onChange: func.isRequired,
}

export default PasswordInput;
