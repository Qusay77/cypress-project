import { createBoard } from "@wixc3/react-board";
import { InputCore } from "../../../..";
import { useState } from "react";
const args = {
	error: true,
	errorMessage: "Invalid Email",
	type: "text",
	label: "Email",
	placeholder: "Enter your email here",
	styles: {
		// input , label , error --- for customize style for input field
		// layerProps , layerStyles --- for customize position and style for tooltip and dropdown
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

const InputCoreSet = () => {
	const [open, setIsopen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<InputCore
			{...args}
			type="text"
			value={value}
			setValue={setValue}
			isOpen={open}
			setOpen={setIsopen}
		/>
	);
};

export default createBoard({
	name: "InputCore",
	Board: () => <InputCoreSet />,
	environmentProps: {
		windowHeight: 304,
		windowWidth: 622,
		canvasWidth: 330
	},
});
