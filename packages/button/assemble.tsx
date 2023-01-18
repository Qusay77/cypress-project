/** @jsxImportSource @emotion/react */
import Button from "./components/Button";
import { button, small, medium, large } from "./styles/styles";

const sizeObj = {
	small,
	medium,
	large,
};

interface CoolButtonProps {
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	onClick?: () => void;
	extraText?: string;
}

const CoolButton = ({
	size = "medium",
	backgroundColor,
	label,
	extraText,
	...props
}: CoolButtonProps) => {
	return (
		<Button
			type="button"
			css={[button, sizeObj[size]]}
			style={{ backgroundColor }}
			{...props}
		>
			{label} {extraText} 2
		</Button>
	);
};

export { CoolButton };
