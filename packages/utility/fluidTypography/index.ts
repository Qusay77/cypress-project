import { fluidTypeTypes } from "./types";
const vw = Math.max(
	document.documentElement.clientWidth || 0,
	window.innerWidth || 0,
);
export const fluidType = ({
	minScreen,
	maxScreen,
	minFont,
	maxFont,
}: fluidTypeTypes) => {
	return `
      font-size: calc(${minFont}px + (${
	maxFont - minFont
}) * (100vw - ${minScreen}px)/(${
	(vw > maxScreen ? vw : maxScreen) - minScreen
}));
    `;
};
