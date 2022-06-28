import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';

function RedirectToHome() {
	const { state } = useContext(AppContext);

	const redirect = (
		state.isLoggedIn
			? <Navigate to="/calendar" />
			: <Navigate to="/login" />
	);

	return (
		!state.apiIsLoading && redirect
	);
}

export default RedirectToHome;
