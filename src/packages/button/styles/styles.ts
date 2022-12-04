import { css } from "@emotion/react";

const button = css`
	font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;
`;

const small = css`
	font-size: 12px;
	padding: 10px 16px;
`;

const medium = css`
	font-size: 14px;
	padding: 11px 20px;
`;

const large = css`
	font-size: 16px;
	padding: 12px 24px;
`;

export { button, small, medium, large };
