/** @jsxImportSource @emotion/react */
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "rsuite/dist/rsuite.min.css";
import "rsuite-table/dist/css/rsuite-table.css";
import { MainTableProps } from "../types/index";
import TablePagination from "./TablePagination";
import TableContainer from "./TableContainer";
import TableColumn from "./Column";
export default function MainTable({
	paginationProps,
	tableProps,
	columnProps,
}: MainTableProps) {
	const { columns } = tableProps;
	return (
		<DndProvider backend={HTML5Backend}>
			<TableContainer {...tableProps}>
				{/* Huge child issue fixed by calling it as a function */}
				{columns.map((column) => TableColumn({ ...columnProps, column }))}
			</TableContainer>
			{paginationProps ? <TablePagination {...paginationProps} /> : null}
		</DndProvider>
	);
}
