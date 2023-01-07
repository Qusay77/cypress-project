import { RowDataType } from "@packages/table";
const NotRenderRowExpanded = (
	rowData: RowDataType | undefined,
): JSX.Element => {
	return (
		<div>
			<p>not email: {rowData?.email}</p>
			<p>not Phone: {rowData?.phone}</p>
		</div>
	);
};

export default NotRenderRowExpanded;
