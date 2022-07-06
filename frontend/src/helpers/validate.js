// Name
const validateName = (name) => {
	const nameIsFilled = name !== '';
	const nameIsValid = name.length >= 3;
	switch (true) {
	case !nameIsFilled:
		return { valid: false, message: 'Name must be filled.' };
	case !nameIsValid:
		return { valid: false, message: 'Name must be at least 3 characters long.' };
	default:
		return { valid: true };
	}
};

// Email
const validateEmailCharacters = (email) => {
	const name = email.substring(0, email.indexOf('@'));
	const invalidCharacters = /[ `!#$%^&*()+=[\]{};':"\\|,<>/?~]/;
	const nameHasInvalidCharacters = invalidCharacters.test(name);
	if (nameHasInvalidCharacters) return false;
	return true;
};

const validateEmailFormat = (email) => {
	const beforeAt = email.substring(0, email.indexOf('@'));
	const beforeDot = email.substring(email.indexOf('@'), email.indexOf('.'));
	const afterDot = email.substring(email.indexOf('.'));
	const format = [beforeAt, beforeDot, afterDot];
	return format[0].length > 0
	&& format[1].includes('@') 
	&& format[1].length > 1 
	&& format[2].includes('.')
	&& format[2].length > 1;
};

const validateEmail = (email) => {
	const emailIsFilled = email !== '';
	const charactersAreValid = validateEmailCharacters(email);
	const emailFormatIsValid = validateEmailFormat(email);
	switch (true) {
	case !emailIsFilled:
		return { valid: false, message: 'Email must be filled.' };
	case !emailFormatIsValid || !charactersAreValid:
		return { valid: false, message: 'Email must be a valid email!' };
	default:
		return { valid: true };
	}
};

// Password
const validatePassword = (password) => {
	const passwordIsFilled = password !== '';
	const passwordIsValid = password.length >= 3;
	switch (true) {
	case !passwordIsFilled:
		return { valid: false, message: 'Password must be filled.' };
	case !passwordIsValid:
		return { valid: false, message: 'Password must be at least 6 characters long.' };
	default:
		return { valid: true };
	}
};

const login = {
	form: (form) => {
		const validatedEmail = validateEmail(form.email);
		const validatedPassword = validatePassword(form.password);
		switch (true) {
		case (!validatedEmail.valid):
			return validatedEmail;
		case (!validatedPassword.valid):
			return validatedPassword;
		default:
			return { valid: true, message: '' };
		}
	}
};

const register = {
	form: (form) => {
		const validatedName = validateName(form.name);
		const validatedEmail = validateEmail(form.email);
		const validatedPassword = validatePassword(form.password);
		switch (true) {
		case (!validatedName.valid):
			return validatedName;
		case (!validatedEmail.valid):
			return validatedEmail;
		case (!validatedPassword.valid):
			return validatedPassword;
		default:
			return { valid: true, message: '' };
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
