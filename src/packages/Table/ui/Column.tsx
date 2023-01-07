import { Table } from "rsuite";
import DraggableHeaderCell from "./DraggableHeaderCell";
import { RowColumnDataProps, TableColumnProps } from "../types";
import ExpandCell from "./ExpandCell";
const { Cell, Column } = Table;
const CompactCell = (props: RowColumnDataProps) => {
	const { CustomCell, ...rest } = props;

	if (CustomCell) {
		return (
			<Cell {...rest}>
				<CustomCell {...rest} />
			</Cell>
		);
	}
	return <Cell {...rest} />;
};
const TableColumn = ({
	column,
	handleDragColumn,
	expandedRowKeys,
	handleExpanded,
	rowKey,
	customCells,
}: TableColumnProps) => {
	return (
		<Column
			width={column.width}
			key={column.id}
			flexGrow={column.flexGrow}
			align={column.id === "id" ? "center" : "left"}
			sortable={column.sortable}
		>
			<DraggableHeaderCell onDrag={handleDragColumn} id={column.id}>
				{column.name}
			</DraggableHeaderCell>
			{column.id === "id" ? (
				<ExpandCell
					rowExpandKey={rowKey}
					rowData={column}
					expandedRowKeys={expandedRowKeys}
					onChange={handleExpanded}
				/>
			) : (
				<CompactCell
					CustomCell={customCells?.[column.id]}
					dataKey={column.id}
				/>
			)}
		</Column>
	);
};

export default TableColumn;
