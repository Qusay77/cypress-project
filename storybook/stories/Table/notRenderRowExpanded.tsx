import React from "react";
import { RowColumnDataProps } from "@packages/table";
const NotRenderRowExpanded = (
	rowData: RowColumnDataProps | undefined,
): React.ReactNode => {
	return (
		<div>
			<p>not email: {rowData?.email}</p>
			<p>not Phone: {rowData?.phone}</p>
		</div>
	);
};

export default NotRenderRowExpanded;
