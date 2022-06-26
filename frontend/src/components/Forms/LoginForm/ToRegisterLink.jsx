import React from 'react';
import { Link } from 'react-router-dom';

function ToRegisterLink() {
  return (
    <div className="login__signup">
			Not registered?
			{' '}
			<Link
				className="register__link"
				to="/register"
			>
				Create an account
			</Link>
			!
		</div>
  )
}

export default ToRegisterLink;
