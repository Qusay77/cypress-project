import { fluidTypeTypes } from "./types";

export const fluidType = ({
	minScreen,
	maxScreen,
	minFont,
	maxFont,
}: fluidTypeTypes) => {
	return `
      font-size: calc(${minFont}px + (${
	maxFont - minFont
}) * (100vw - ${minScreen}px)/(${maxScreen - minScreen}));
    `;
};
