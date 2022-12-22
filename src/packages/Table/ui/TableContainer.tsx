import { Table, TableProps } from "rsuite";

const TableContainer = ({ children, renderRow, ...props }: TableProps) => {
	return (
		<Table autoHeight renderRow={renderRow} {...props}>
			{children}
		</Table>
	);
};

export default TableContainer;
