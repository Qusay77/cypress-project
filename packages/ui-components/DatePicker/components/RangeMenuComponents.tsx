import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: start;
	padding: 0 8px;
	border-right: 1px solid var(--Seperation);
	width: 144px;
	gap: 40px;
	div:last-child {
		position: absolute;
		bottom: 24px;
	}
`;

const RangeItem = styled.div`
	cursor: pointer;
	font-size: 14px;
	font-weight: 400;
	color: var(--Text-Body);
`;

export { Container, RangeItem };
