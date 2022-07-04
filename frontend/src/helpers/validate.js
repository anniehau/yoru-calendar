const login = {
	form: (form) => {
		const emailIsFilled = form.email !== '';
		const emailIsValid = form.email.length >= 3;
		const passwordIsFilled = form.password !== '';
		const passwordIsValid = form.password.length >= 6;
		switch (true) {
		case (!emailIsFilled):
			return { valid: false, message: 'Email must be filled!' };
		case (!emailIsValid):
			return { valid: false, message: 'Email is invalid!' };
		case (!passwordIsFilled):
			return { valid: false, message: 'Password must be filled!' };
		case (!passwordIsValid):
			return { valid: false, message: 'Password must be at least 6 characters long!' };
		default:
			return { valid: true };
		}
	}
};

const register = {
	form: (form) => {
		const nameIsFilled = form.name !== '';
		const nameIsValid = form.name.length >= 3;
		const emailIsFilled = form.email !== '';
		const emailIsValid = form.email.length >= 3;
		const passwordIsFilled = form.password !== '';
		const passwordIsValid = form.password.length >= 6;
		switch (true) {
		case (!nameIsFilled):
			return { valid: false, message: 'Name must be filled!' };
		case (!nameIsValid):
			return { valid: false, message: 'Name must be at least 3 characters long!' };
		case (!emailIsFilled):
			return { valid: false, message: 'Email must be filled!' };
		case (!emailIsValid):
			return { valid: false, message: 'Email is invalid!' };
		case (!passwordIsFilled):
			return { valid: false, message: 'Password must be filled!' };
		case (!passwordIsValid):
			return { valid: false, message: 'Password must be at least 6 characters long!' };
		default:
			return { valid: true };
		}
	}
};

const day = {
	month: (day, date) => {
		const dayMonth = day.format('MMMM');
		const dateMonth = date.format('MMMM');
		if (dayMonth !== dateMonth) return false;
		return true;
	},
};

const validate = { login, register, day };

export default validate;
