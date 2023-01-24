interface AuthStateTypes {
	auth: {
		access: {
			token: string | null;
			expires: string | null;
		};
		refresh: {
			token: string | null;
			expires: string | null;
		};
	};
	rememberMe: boolean;
	[key: string]: unknown;
}

export type { AuthStateTypes };
