import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../../helpers';
import { BsFillPersonFill } from 'react-icons/bs';

function ProfileButton() {
	const [name, setName] = useState('');
	const navigate = useNavigate();
 
	useEffect(() => { 
		const user = storage.user.get();
		setName(user.name);
	}, []);

	const goToProfile = () => navigate('/profile');

	return (
		<div>
			<button
				type="button"
				className="header__profileBtn"
				onClick={ goToProfile }
			>
				{ name }
				{' '}
				<BsFillPersonFill className="profileBtn__icon" size={ 20 } />
			</button>
		</div>
	);
}

export default ProfileButton;
