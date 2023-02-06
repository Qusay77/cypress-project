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
	if (type !== "dropDown") {
		return (
			<div
				style={{
					...styles?.container,
					width: styles?.input.width || "100%",
					minWidth : styles?.input.minWidth
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "baseline",
					}}
				>
					{label ? <Label style={styles?.label}>{label}</Label> : ""}
					{errorMessage && error ? (
						<ErrorLabel style={{ ...styles?.error }}>{errorMessage}</ErrorLabel>
					) : null}
				</div>
				{type === "text" ? (
					<Text
						error={error}
						value={value}
						setValue={setValue}
						placeholder={placeholder}
						styles={styles}
					/>
				) : null}
				{type === "password" ? (
					<Password
						error={error}
						value={value}
						setValue={setValue}
						placeholder={placeholder}
						styles={styles}
					/>
				) : null}
			</div>
		);
	}
	if (type === "dropDown") {
		return (
			<DropDown
				styles={styles}
				isOpen={isOpen || false}
				setOpen={setOpen || (() => null)}
			>
				{children}
			</DropDown>
		);
	}

	return null;
};

export type { InputProps };
