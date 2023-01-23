import PasswordStrengthBar from "@qusay77/password-strength";
import { InputCore } from "@qusay77/core-input";
import { useSelector } from "react-redux";
import { LoginStateTypes } from "../types";
import { InfoIcon } from "./formSectionLayout";
import TooltipContent from "./TooltipContent";
import { useState } from "react";

const InfoIconTooltip = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<InputCore
			type="dropDown"
			isOpen={isOpen}
			styles={{
				layerProps: {
					placement: "right-end",
					possiblePlacements: [
						"top-start",
						"top-right",
						"bottom-start",
						"bottom-center",
						"bottom-end",
					],
					triggerOffset: 10,
					containerOffset: 10,
				},
				layerStyles: {
					borderRadius: "8px",
					padding: 0,
				},
			}}
		>
			<div>
				<div
					onMouseOver={() => setIsOpen(true)}
					onMouseOut={() => setIsOpen(false)}
					style={{ margin: "8px 0 0", cursor: "pointer" }}
				>
					<InfoIcon />
				</div>
				<TooltipContent />
			</div>
		</InputCore>
	);
};

const PasswordStrength = () => {
	const { password, grade } = useSelector(
		({ login }: { login: LoginStateTypes }) => login,
	);

	return (
		<PasswordStrengthBar
			password={password}
			barColors={["#F4F4F4", "#DF2935", "#EFCA08", "#F49F0A", "#00E08F"]}
			scoreWords={[
				"Please enter a password",
				"Very Weak, Must contain at least 8 characters",
				"Weak, Must contain at least 1 big Letter, 1 small letter and 1 digit",
				"Average, Must contain at special character",
				"Very Strong! Well done",
			]}
			scoreWordStyle={{
				color: "#808080",
				lineHeight: "15px",
				fontSize: "12px",
				fontWeight: 400,
				margin: "8px 0 0",
				textAlign: "left",
			}}
			style={{ width: "100%", height: "fit-content", marginTop: 15 }}
			itemStyle={{ height: 8, borderRadius: 24 }}
			customGrade={grade}
			CustomIcon={InfoIconTooltip}
		/>
	);
};
export default PasswordStrength;
