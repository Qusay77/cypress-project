import { InputProps } from "@qusay77/core-input";

const shared = {
	styles: {
		container: {
			marginTop: 40,
		},
		input: {
			fontWeight: "400",
			fontSize: "14px",
			lineHeight: "17px",
			color: "#333333",
			width: "100%",
		},
		label: {
			fontWeight: "400",
			fontSize: "12px",
			lineHeight: "15px",
			textTransform: "capitalize",
			color: "#808080",
		},
		error: {
			color: "#D83928",
		},
	},
};

const emailStyle = {
	errorMessage: "Invalid Email",
	label: "Email Address",
	placeholder: "Enter your Email",
	...shared,
};

const passwordStyle = {
	errorMessage: "Invalid Password",
	label: "Password",
	placeholder: "Enter your password",
	...shared,
};

const orgNameStyle = {
	label: "Organization Name",
	placeholder: "Organization Name",
	...shared,
};

const InputStyles: {
	email: InputProps;
	password: InputProps;
	orgName: InputProps;
	[key: string]: InputProps;
} = {
	email: emailStyle,
	password: passwordStyle,
	orgName: orgNameStyle,
	newPassword: passwordStyle,
};

export { InputStyles };
