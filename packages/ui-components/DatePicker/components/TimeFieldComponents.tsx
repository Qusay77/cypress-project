import styled from "@emotion/styled";

const TimeFieldBox = styled.div`
	width: 118px;
	display: flex;
	gap: 8px;
`;
const Separator = styled.div`
	display: flex;
	align-items: center;
	color: var(--Blue-Hover);
	font-size: 24px;
	font-weight: 200;
`;
const EditableField = styled.input`
	outline: 0px solid transparent;
	width: 44px;
	height: 33px;
	border: 1px solid var(--Seperation) !important;
	border-radius: 4px;
	font-size: 14px;
	color: var(--Text-Secondary);
	font-weight: 400;
	line-height: 17px;
	text-align: center;
	letter-spacing: 1px;
`;

export { TimeFieldBox, EditableField, Separator };
