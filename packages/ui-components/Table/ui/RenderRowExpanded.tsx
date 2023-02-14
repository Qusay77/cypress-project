import { RowDataType } from "../types";
const RenderRowExpanded = (rowData: RowDataType | undefined): JSX.Element => {
	return (
		<div>
			<p>Email: {rowData?.email}</p>
			<p>Phone: {rowData?.phone}</p>
		</div>
	);
};

export default RenderRowExpanded;
