interface Style {
	[key: string]: {
		// justified
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	};
}

export interface InputDataObject {
	[key: string]: string | number | [];
}

type InputTypes = "text" | "password" | "dropDown";

export interface InputProps {
	type?: InputTypes;
	value?: string | number;
	setValue?: (value: string) => void;
	data?: Array<InputDataObject>;
	styles?: Style;
	error?: boolean | null;
	errorMessage?: string;
	label?: string;
	placeholder?: string;
	children?: JSX.Element;
	isOpen?: boolean;
	setOpen?: (value: boolean) => void;
}

export interface InputStyleProps {
	error?: boolean;
	errorColor?: string;
}
