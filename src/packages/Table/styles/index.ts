import { css } from "@emotion/react";

export const TableCellStyle = css({
	padding: 0,
	height: "100%",
	width: "100%",
	["div"]: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
});
