import styled from "@emotion/styled";

export const Body = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	width: 200px;
	height: 100%;
	padding-top: 24px;
	border-right: 1px solid #e6e6e6;
	@media only screen and (max-width: 1366px) {
		width: 56px;
	}
`;
export const LogoContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-bottom: 32px;
`;
export const LogoIMG = styled.img`
	margin-right: 8px;
`;
export const LogoWordIMG = styled.img`
	@media only screen and (max-width: 1366px) {
		display: none;
	}
`;
export const SectionCard = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	width: 168px;
	padding: 8px 16px;
	gap: 8px;
	margin-bottom: 16px;
	cursor: pointer;
	@media only screen and (max-width: 1366px) {
		width: 100%;
		padding: 8px 0px;
		gap: 0px;
		text-align: center;
		justify-content: center;
	}
`;
export const SectionCardSelected = styled.div`
	display: flex;
	align-items: center;
	width: 168px;
	height: 40px;
	align-items: center;
	padding: 8px 12px;
	gap: 8px;
	margin-bottom: 16px;
	border-left: 4px solid #1d99ff;
	cursor: pointer;
	@media only screen and (max-width: 1366px) {
		width: 100%;
		padding: 8px 0px;
		gap: 0px;
		text-align: center;
		justify-content: center;
	}
`;
export const CardText = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #97a6b2;
	@media only screen and (max-width: 1366px) {
		display: none;
	}
`;

export const CardTextColor = styled.div`
	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	text-align: right;
	color: #1d99ff;
	@media only screen and (max-width: 1366px) {
		display: none;
	}
`;

export const Line = styled.div`
	width: 100%;
	height: 0;
	border: 1px solid #e6e6e6;
	transform: rotate(-180deg);
	margin-bottom: 16px;
`;
