import React from 'react';
import { Link } from 'react-router-dom';

function ToLoginButton() {
  return (
    <div className="register__login">
			<Link
				className="login__link"
				to="/login"
			>
				I already have an account!
			</Link>
		</div>
  )
}

export default ToLoginButton;
