import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import AppContext from './AppContext';
import { create, storage } from '../helpers';

const INITIAL_STATE = {
	apiStatus: '',
	apiIsLoading: true,
	isLoggedIn: false,
};

function AppProvider({ children }) {
	const [state, setState] = useState(INITIAL_STATE);
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		const token = storage.user.token.get();
		if (!token) return { error: 'Token not provided!' };
		const payload = create.payload.to.get.tasks(token);
		const result = await create.fetch.generic({ url: 'tasks', payload });
		if (!result.success) return { error: result.data };
		setTasks(result.data);
		return true;
	};

	const loadApi = async () => {
		setState((s) => ({ ...s, apiIsLoading: true }));
		const tasks = await fetchTasks();
		if (tasks.error) {
			const newState = { ...state, apiStatus: tasks.error, apiIsLoading: false };
			const isTokenError = tasks.error.toLowerCase().includes('token');
			if (isTokenError) newState.isLoggedIn = false;
			return setState(newState);
		}
		setState((s) => ({ ...s, apiIsLoading: false, isLoggedIn: true }));
	};

	useEffect(() => { loadApi(); }, []);

	return (
		<AppContext.Provider value={ { state, setState, tasks, setTasks, reloadApi: loadApi } }>
			{ children }
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: node.isRequired,
};

export default AppProvider;
