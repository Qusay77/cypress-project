import styled from "@emotion/styled";

const PickerModalContent = styled.div`
	width: 780px;
	height: fit-content;
	display: flex;
	padding: 16px;
	border: 1px solid black;
	border-radius: 5px;
	position: relative;
`;

const PickerContainer = styled.div`
	padding-inline-start: 16px;
`;

const TimeFieldContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: fit-content;
	margin: 0px 0 16px 0;
`;
const TimeFieldsBlock = styled.div`
	display: flex;
	width: 100%;
	border-bottom: 1px solid var(--Seperation);
`;

export {
	PickerModalContent,
	PickerContainer,
	TimeFieldContainer,
	TimeFieldsBlock,
};
