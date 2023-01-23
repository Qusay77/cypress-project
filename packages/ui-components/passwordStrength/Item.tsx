import React, { CSSProperties } from "react";

interface PasswordStrengthBarItemProps {
	score: number;
	itemNum: number;
	barColors: string[];
	style: any;
}

const itemStyle: CSSProperties = {
	flexBasis: 0,
	flexGrow: 1,
	position: "relative",
	maxWidth: "100%",
	width: "100%",
};

const Item: React.FunctionComponent<PasswordStrengthBarItemProps> = ({
	score,
	itemNum,
	barColors,
	style,
}) => {
	let bgColor = barColors[0];
	if (score >= itemNum) {
		bgColor = barColors[score];
	}

	return (
		<div
			style={{
				...itemStyle,
				...style,
				backgroundColor: bgColor,
			}}
		/>
	);
};

export default Item;
