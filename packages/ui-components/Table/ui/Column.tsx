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
	expandProps,
	CustomSortIcon,
	CustomHeaderCell,
}: TableColumnProps) => {
	const { columnId, ExpandComponent } = expandProps || {};
	return (
		<Column
			width={column.width}
			key={column.id}
			flexGrow={column.flexGrow}
			align={column.align}
			sortable={column.sortable}
		>
			<DraggableHeaderCell
				CustomSortIcon={CustomSortIcon}
				onDrag={handleDragColumn}
				id={column.id}
			>
				{CustomHeaderCell ? <CustomHeaderCell column={column} /> : column.name}
			</DraggableHeaderCell>
			{column.id === columnId ? (
				<ExpandCell
					rowExpandKey={rowKey}
					rowData={column}
					expandedRowKeys={expandedRowKeys}
					onChange={handleExpanded}
					ExpandComponent={ExpandComponent}
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
