import styled from "@emotion/styled";

interface CheckboxProps {
	borderColor: string;
	checkedColor: string;
	hoverColor: string;
}

const StyledCheckbox = styled.input<CheckboxProps>`
	width: 16px;
	height: 16px;
	-webkit-appearance: none;
	display: inline-block;
	background: #ffffff;
	border: 1px solid ${({ borderColor }) => borderColor};
	display: flex;
	justify-content: center;
	border-radius: 5px;
	&:after {
		content: "";
		display: inline-block;
		position: relative;
		width: 3px;
		height: 9px;
		border-bottom: 2px solid #fff;
		border-right: 2px solid #fff;
		transform: rotate(45deg);
	}

	&:checked {
		background: ${({ checkedColor }) => checkedColor};
		outline: none;
	}
	&:focus,
	&:active {
		outline: none;
	}

	&:hover {
		outline: 1px solid ${({ hoverColor }) => hoverColor};
	}
`;

export default StyledCheckbox;
