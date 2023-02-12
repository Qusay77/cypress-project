import styled from "@emotion/styled";

export const ApplyBlockContainer = styled.div`
	display: flex;
	height: 33px;
	margin-top: 16px;
	font-weight: 400;
`;

export const FrameText = styled.p`
	color: var(--Text-Sub);
	font-size: 14px;
`;

export const FrameRangeText = styled.div`
	color: var(--Text-Body);
	font-size: 14px;
`;
export const FrameContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const ControlBlock = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 16px;
	padding-inline-start: 16px;
	margin-inline-start: 16px;
	border-inline-start: 1px solid var(--Seperation);
`;

export const ControlButton = styled.div<{ apply?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 24px;
	height: 33px;
	width: 70px;
	background-color: ${({ apply, theme }) =>
		apply ? theme.colors.BluePrimary : theme.colors.White};
	color: ${({ apply, theme }) =>
		apply ? theme.colors.White : theme.colors.Black};
	cursor: pointer;
`;
