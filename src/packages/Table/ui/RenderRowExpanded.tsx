import { RowColumnDataProps } from "../types";
import React from "react";

const RenderRowExpanded = (
	rowData: RowColumnDataProps | undefined,
): React.ReactNode => {
	return (
		<div>
			<p>Email: {rowData?.email}</p>
			<p>Phone: {rowData?.phone}</p>
		</div>
	);
};

export default RenderRowExpanded;
