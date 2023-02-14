import { ChangeEvent, useState } from "react";
import handleInputChange from "../logic/handleInputChange";
import { InputProps } from "../types";
import { PasswordIcon } from "./PasswordIcon";
import { Input } from "../styles";

export default function Password({
	value,
	setValue,
	error,
	styles,
	placeholder,
}: {
	value: InputProps["value"];
	setValue: InputProps["setValue"];
	error?: boolean | null;
	styles: InputProps["styles"];
	placeholder: InputProps["placeholder"];
}) {
	const [showPassword, setShowPassword] = useState(true);
	return (
		<div style={{ position: "relative", display: "flex", width: "100%" }}>
			{/* ! */}
			<Input
				style={{ ...styles?.input, width: "-webkit-fill-available" }}
				placeholder={placeholder}
				error={error || false}
				value={value}
				errorColor={styles?.error?.color}
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					handleInputChange(event, setValue);
				}}
				{...(showPassword ? { type: "password" } : {})}
			/>

			<button
				style={{
					all: "unset",
					cursor: "pointer",
					position: "absolute",
					top: "10px",
					right: "12px",
				}}
				onClick={() => {
					setShowPassword(!showPassword);
				}}
			>
				<PasswordIcon show={showPassword} />
			</button>
		</div>
	);
}
