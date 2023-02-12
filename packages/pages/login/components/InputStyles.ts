import { InputProps } from "@qusay77/core-input";
import { theme } from "src/Globals/global";
const { TextBody, TextSecondary, ErrorPrimary } = theme.colors;
const shared = {
	styles: {
		container: {
			marginTop: 40,
		},
		input: {
			fontWeight: "400",
			fontSize: "14px",
			lineHeight: "17px",
			color: TextBody,
			width: "100%",
		},
		label: {
			fontWeight: "400",
			fontSize: "12px",
			lineHeight: "15px",
			textTransform: "capitalize",
			color: TextSecondary,
		},
		error: {
			color: ErrorPrimary,
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
