interface LoginStateTypes {
	email: string;
	password: string;
	newPassword: string;
	orgName: string;
	emailValidation: boolean;
	passwordValidation: boolean;
	newPasswordValidation: number;
	grade: number;
	specifics: Array<boolean>;
	isEmailErrorActive: boolean;
	isPasswordErrorActive: boolean;
	[key: string]: unknown;
}

export type { LoginStateTypes };
