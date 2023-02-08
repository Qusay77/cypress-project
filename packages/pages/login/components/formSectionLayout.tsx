import styled from "@emotion/styled";
import { fluidType } from "@qusay77/fluid-typography";
import WebEyezIcon from "../assets/WebeyeZ_Logo.svg";
import { FillButtonProps, VarietyTextProps } from "./types";
import Info from "../assets/Info.svg";

const HeaderText = styled.div`
	line-height: 48.41px;
	font-weight: 800;
	height: 48px;
	${fluidType({
		minScreen: 260,
		maxScreen: 1920,
		minFont: 20,
		maxFont: 40,
	})}
`;

const HeaderIcon = styled.div`
	background-image: url(${WebEyezIcon});
	background-repeat: no-repeat;
	background-position: left;
	height: 40px;
	width: 100%;
	margin-bottom: 40px;
`;

const LoginText = styled.div`
	margin-top: 16px;
	line-height: 17px;
	font-weight: 400;
	${fluidType({
		minScreen: 260,
		maxScreen: 1920,
		minFont: 7,
		maxFont: 14,
	})}
`;

const ForgotPasswordBetweenContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 25px;
`;

const VarietyText = styled.p<VarietyTextProps>`
	font-weight: ${({ weight }) => weight};
	line-height: 17px;
	color: ${({ fontColor }) => fontColor};
	${({ theme, fontSize }) => theme.helpers.fontClamp(fontSize / 2, fontSize)}
	user-select: none;
	height: fit-content;
	cursor: ${({ isClickAble }) => (isClickAble ? "pointer" : "unset")};
`;

const FillButton = styled.div<FillButtonProps>`
	background-color: ${({ invert, disabled }) =>
		(disabled && "#E6E6E6") || (invert ? "#fff" : "#1d99ff")};
	color: ${({ invert }) => (invert ? "#1d99ff" : "#fff")};
	width: ${({ width }) => width};
	height: 48px;
	border-radius: 24px;
	border: 1px solid ${({ disabled }) => (disabled ? "#E6E6E6" : "#1d99ff")};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: ${({ invert, forceInvertMargin }) =>
		invert && !forceInvertMargin ? "unset" : "40px"};
	cursor: ${({ disabled }) => (disabled ? "unset" : "pointer")};
	user-select: none;
`;

const RememberMeBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
`;

const InfoIcon = styled.div`
	background-image: url(${Info});
	background-repeat: no-repeat;
	width: 15px;
	height: 15px;
`;

export {
	HeaderText,
	HeaderIcon,
	LoginText,
	ForgotPasswordBetweenContainer,
	VarietyText,
	FillButton,
	RememberMeBlock,
	InfoIcon,
};
