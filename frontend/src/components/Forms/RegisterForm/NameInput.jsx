import React from 'react';
import { string, func } from 'prop-types';

function NameInput(props) {
  const { name, onChange } = props;

  return (
    <input
      type="text"
      value={ name }
      placeholder="Name"
      onChange={ (e) => onChange(e, 'name') }
    />
  )
}

NameInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
}

export default NameInput;
