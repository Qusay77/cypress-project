import styled from "@emotion/styled";
import { fluidType } from "@qusay77/fluid-typography";
import filled from "../assets/Checkbox-Filled.svg";
import empty from "../assets/Checkbox-Empty.svg";
import { useSelector } from "react-redux";
import { LoginStateTypes } from "../types";

const Container = styled.div`
	height: fit-content;
	max-width: 316px;
	top: 10%;
	position: relative;
`;

const Header = styled.div`
	padding: 16px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-weight: 600;
	border-bottom: 1px solid #e6e6e6;
	${fluidType({
		minScreen: 260,
		maxScreen: 1920,
		minFont: 8,
		maxFont: 16,
	})}
`;

const Text = styled.p<{ disabled?: boolean }>`
	line-height: 17px;
	font-weight: 400;
	${fluidType({
		minScreen: 260,
		maxScreen: 1920,
		minFont: 7,
		maxFont: 14,
	})}
	color: ${({ disabled }) => (disabled ? "#B3B3B3" : "#333333")};
`;

const ContentContainer = styled.div`
	padding: 16px;
	gap: 15px;
	display: flex;
	flex-direction: column;
`;

const CheckRow = styled.div`
	display: flex;
	gap: 12px;
`;
const CheckIcon = styled.div<{ isFilled?: boolean }>`
	background-image: ${({ isFilled }) =>
		isFilled ? `url(${filled})` : `url(${empty})`};
	background-repeat: no-repeat;
	background-position: center center;
	height: 20px;
	width: 20px;
`;
const checksArray = [
	{ text: "8 Characters", level: 2 },
	{ text: "1 Big Letter", level: 3 },
	{ text: "1 Small Letter", level: 3 },
	{ text: "1 Number", level: 3 },
	{ text: "1 Special Character", level: 4 },
];
const TooltipContent = () => {
	const { specifics } = useSelector(
		({ login }: { login: LoginStateTypes }) => login,
	);
	return (
		<Container>
			<Header>Password Requirements</Header>
			<ContentContainer>
				<Text>The password must contain at least</Text>
				{checksArray.map(({ text }, i) => (
					<>
						<CheckRow>
							<CheckIcon isFilled={specifics[i]} />
							<Text>{text}</Text>
						</CheckRow>
					</>
				))}
			</ContentContainer>
		</Container>
	);
};

export default TooltipContent;
