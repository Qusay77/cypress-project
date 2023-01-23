const validateEmail = (email: string) => {
	return !!email.match(
		// eslint-disable-next-line no-useless-escape
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	);
};

const validatePassword = (password: string) => {
	const containsSmallAndCapital = new RegExp(
		"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])",
	);
	const containsSmall = new RegExp("(?=.*[a-z])");
	const containsCapital = new RegExp("(?=.*[A-Z])");
	const containsDigit = new RegExp("(?=.*[0-9])");
	const containsSymbol = new RegExp(
		"(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,})",
	);
	let grade = 0;
	if (password.length) {
		grade += 1;
		if (password.length > 7) {
			grade += 1;
			if (containsSmallAndCapital.test(password)) {
				grade += 1;
				if (containsSymbol.test(password)) {
					grade += 1;
				}
			}
		}
	}

	const specifics = [
		password.length > 7,
		containsCapital.test(password),
		containsSmall.test(password),
		containsDigit.test(password),
		containsSymbol.test(password),
	];
	// const strongPassword = new RegExp(
	// 	"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})",
	// );
	return { grade, specifics };
	// if (Array.isArray(password)) {
	// 	const [pass, confirm] = password;
	// 	return pass.length > 7 && pass === confirm && strongPassword.test(pass);
	// }
	// return password?.length > 7 && strongPassword.test(password);
};

export { validateEmail, validatePassword };
