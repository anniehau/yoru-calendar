import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const requireAuth = (pageLoggedIn = '', pageLoggedOut = '/login') => {
	const { state } = useContext(AppContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!state.apiIsLoading) state.isLoggedIn ? navigate(pageLoggedIn) : navigate(pageLoggedOut);
	}, [state]);
};

export default requireAuth;
