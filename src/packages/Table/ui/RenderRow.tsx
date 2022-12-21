import { ReactNode } from "react";
import { Row } from "rsuite";
import { RowProps } from "../types";

const RenderRow = ({ children, rowData, onDrag }: RowProps): ReactNode => {
	return rowData ? (
		<Row key={rowData.id} rowData={rowData} id={rowData.id} onDrag={onDrag}>
			{children}
		</Row>
	) : (
		children
	);
};

export default RenderRow;
