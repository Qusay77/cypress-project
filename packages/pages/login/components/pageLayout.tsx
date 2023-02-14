import styled from "@emotion/styled";
import MarketingImage from "../assets/Marketing_Image.svg";

const PageContainer = styled.div`
	display: flex;
	height: 100vh;
	> div {
		flex: 1;
	}
	min-height: 740px;
`;

const PageSection = styled.div`
	display: flex;
`;

const FormSectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const FormSectionContent = styled.div<{ maxWidth: number }>`
	display: flex;
	max-width: ${({ maxWidth }) => `${maxWidth}px`};
	flex-direction: column;
	justify-content: center;
`;

const BottomTextContainer = styled.div`
	position: fixed;
	bottom: 40px;
	@media screen and (max-height: 780px) {
		position: relative;
		bottom: -20px;
	}
	> p {
		display: inline;
	}
`;

const TextWrapperContainer = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	> p {
		display: inline;
	}
`;

const MarketingSectionContainer = styled.div`
	height: 100%;
	width: 100%;
	background-image: url(${MarketingImage}),
		linear-gradient(#0990ff 0%, #58b4ff 100%);
	background-repeat: no-repeat;
	background-position: 50% 40%;
`;

export {
	PageContainer,
	PageSection,
	FormSectionContainer,
	FormSectionContent,
	BottomTextContainer,
	TextWrapperContainer,
	MarketingSectionContainer,
};
