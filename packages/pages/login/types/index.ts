interface LoginStateTypes {
	email: string;
	password: string;
	newPassword: string;
	rememberMe: boolean;
	orgName: string;
	emailValidation: boolean;
	passwordValidation: boolean;
	newPasswordValidation: number;
	grade: number;
	specifics: Array<boolean>;
	[key: string]: unknown;
}

export type { LoginStateTypes };
