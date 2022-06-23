import React from 'react';
import { func } from 'prop-types';

function PasswordInput(props) {
  const { onClick } = props;

  return (
    <button onClick={ onClick }>
      Log In
    </button>
  )
}

PasswordInput.propTypes = {
  onClick: func.isRequired,
}

export default PasswordInput;
