import { InputProps } from "./types";
import Text from "./ui/Text";
import Password from "./ui/Password";
import DropDown from "./ui/DropDown";
import { Label, ErrorLabel } from "./styles";

export const InputCore = ({
	children,
	type,
	value,
	setValue,
	styles,
	error,
	errorMessage,
	label,
	placeholder,
	isOpen,
	setOpen,
}: InputProps) => {
	switch (type) {
	case "text":
		return (
			<>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					{label ? <Label style={styles?.label}>{label}</Label> : ""}
					{errorMessage && error ? (
						<ErrorLabel style={{ color: styles?.error.color }}>
							{errorMessage}
						</ErrorLabel>
					) : (
						""
					)}
				</div>
				<Text
					error={error}
					value={value}
					setValue={setValue}
					placeholder={placeholder}
					styles={styles}
				/>
			</>
		);
	case "password":
		return (
			<>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					{label ? <Label style={styles?.label}>{label}</Label> : ""}
					{errorMessage && error ? (
						<ErrorLabel>{errorMessage}</ErrorLabel>
					) : (
						""
					)}
				</div>
				<Password
					error={error}
					value={value}
					setValue={setValue}
					styles={styles}
				/>
			</>
		);
	case "dropDown":
		return (
			<DropDown styles={styles} isOpen={isOpen} setOpen={setOpen}>
				{children}
			</DropDown>
		);
	}
};
