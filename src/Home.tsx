import { CoolButton } from "@packages/button";
import { InputCore } from "@packages/core-input";
import { useState } from "react";

export default function Home() {
	const [inputData, setInputData] = useState("");
	const [isOpen, setOpen] = useState(false);
	const inputStyles = {
		// input , label , error --- for customize style for input field
		// layerProps , layerStyles --- for customize position and style for tooltip and dropdown
		input: {
			fontWeight: "400",
			fontSize: "14px",
			lineHeight: "17px",
			color: "#333333",
			width: "50%",
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
		layerProps: {
			placement: "top-start",
			possiblePlacements: [
				"top-start",
				"top-right",
				"bottom-start",
				"bottom-center",
				"bottom-end",
			],
			triggerOffset: 5,
			containerOffset: 10,
		},
		layerStyles: {
			border: "1px solid black",
			borderRadius: "18px",
		},
	};

	const ToolTipIcon = () => (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={() => {
				setOpen(!isOpen);
			}}
		>
			<rect width="48" height="48" rx="10" fill={"#F2F7FF"} />
			<circle cx="14" cy="24" r="2.5" fill={isOpen ? "#1D99FF" : "#808080"} />
			<circle cx="24" cy="24" r="2.5" fill={isOpen ? "#1D99FF" : "#808080"} />
			<circle cx="34" cy="24" r="2.5" fill={isOpen ? "#1D99FF" : "#808080"} />
		</svg>
	);

	return (
		<>
			<div>
				<CoolButton label="Code" />

				<InputCore
					error={true}
					errorMessage="Invalid Email"
					type="dropDown"
					value={inputData}
					setValue={setInputData}
					label="Email"
					placeholder="test"
					styles={inputStyles}
					isOpen={isOpen}
					setOpen={setOpen}
				>
					<>
						<ToolTipIcon />
						<h6>Actions</h6>
						<div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
							<p style={{ margin: 0 }}>icon</p>
							<p style={{ margin: 0 }}>Show User Sessions</p>
						</div>
					</>
				</InputCore>
			</div>
		</>
	);
}
