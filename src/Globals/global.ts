import { css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
type calculateClampFontSizeType = (
	minFont: number,
	maxFont: number,
	minScreen: number,
	maxScreen: number,
) => string;

const calculateClampFontSize: calculateClampFontSizeType = (
	minFont,
	maxFont,
	minScreen,
	maxScreen,
) => {
	const vw = (100 * (maxFont - minFont)) / (maxScreen - minScreen);
	const r =
		(minScreen * maxFont - maxScreen * minFont) / (minScreen - maxScreen) / 16;
	return `font-size: clamp(${minFont / 16}rem,${vw}vw + ${r}rem,${
		maxFont / 16
	}rem);`;
};

type fontClampType = (min: number, max: number) => string;

const fontClamp: fontClampType = (min, max) =>
	calculateClampFontSize(min, max, 260, 1920);

const TextHeader = "#000000";
const TextBody = "#333333";
const TextSecondary = "#808080";
const TextSub = "#b3b3b3";
const White = "#ffffff";
const BluePrimary = "#1d99ff";
const BlueText = "#00437a";
const Blue10 = "#e8f5ff";
const IconBlue = "#1d99ff";
const IconLight = "#c9c9c9";
const MenuGray = "#97a6b2";
const Seperation = "#e6e6e6";
const GreenPrimary = "#00e08f";
const GreenDark = "#00b874";
const PurplePrimary = "#714aff";
const ErrorPrimary = "#df2935";
const Error10 = "#fcedee";
const Blue5 = "#f4faff";
const BlueHover = "#bbe0ff";
const ButtonPrimary = "#1d99ff";
const ButtonPressed = "#00437a";
const ButtonDisabled = "#e6e6e6";

const theme = {
	colors: {
		TextHeader,
		TextBody,
		TextSecondary,
		TextSub,
		White,
		BluePrimary,
		BlueText,
		Blue10,
		IconBlue,
		IconLight,
		MenuGray,
		Seperation,
		GreenPrimary,
		GreenDark,
		PurplePrimary,
		ErrorPrimary,
		Error10,
		Blue5,
		BlueHover,
		ButtonPrimary,
		ButtonPressed,
		ButtonDisabled,
	},
	helpers: {
		fontClamp,
	},
};

const GlobalStyles = css`
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
	${emotionNormalize}
	:root {
		--Text-Header: ${TextHeader};
		--Text-Body: ${TextBody};
		--Text-Secondary: ${TextSecondary};
		--Text-Sub: ${TextSub};
		--White: ${White};
		--Blue-Primary: ${BluePrimary};
		--Blue-Text: ${BlueText};
		--Blue-10: ${Blue10};
		--Icon-Blue: ${IconBlue};
		--Icon-Light: ${IconLight};
		--Menu-Gray: ${MenuGray};
		--Seperation: ${Seperation};
		--Green-Primary: ${GreenPrimary};
		--Green-Dark: ${GreenDark};
		--Purple-Primary: ${PurplePrimary};
		--Error-Primary: ${ErrorPrimary};
		--Error-10: ${Error10};
		--Blue-5: ${Blue5};
		--Blue-Hover: ${BlueHover};
		--Button-Primary: ${ButtonPrimary};
		--Button-Pressed: ${ButtonPressed};
		--Button-Disabled: ${ButtonDisabled};
	}
	body {
		font-family: Inter;
		margin: 0;
	}

	p {
		margin: 0;
	}
`;

export { GlobalStyles, theme, fontClamp };
export type { fontClampType };
