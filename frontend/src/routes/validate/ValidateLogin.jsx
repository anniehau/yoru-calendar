import React from 'react';
import { Navigate } from 'react-router-dom';

function ValidateLogin() {
	return (
		<Navigate to="/login" />
	);
}

export default ValidateLogin;
