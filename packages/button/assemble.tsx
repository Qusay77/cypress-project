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
}

const CoolButton = ({
	size = "medium",
	backgroundColor,
	label,
	...props
}: CoolButtonProps) => {
	return (
		<Button
			type="button"
			css={[button, sizeObj[size]]}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</Button>
	);
};

export { CoolButton };
