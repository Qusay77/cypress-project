import { ChangeEventHandler } from "react";
import StyledCheckbox from "./components/StyledCheckbox";
const color = "#1D99FF";

const Checkbox = ({
	checked,
	onChange,
}: {
	checked: boolean;
	onChange: ChangeEventHandler;
}) => {
	return (
		<StyledCheckbox
			checked={checked}
			onChange={onChange}
			type="checkbox"
			borderColor={color}
			checkedColor={color}
			hoverColor={color}
		/>
	);
};

export default Checkbox;
