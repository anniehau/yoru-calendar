import React from 'react';
import { string, func } from 'prop-types';

function UsernameInput(props) {
  const { username, onChange } = props;

  return (
    <input
      type="text"
      value={ username }
      placeholder="Username"
      onChange={ (e) => onChange(e, 'username') }
    />
  )
}

UsernameInput.propTypes = {
  username: string.isRequired,
  onChange: func.isRequired,
}

export default UsernameInput;
