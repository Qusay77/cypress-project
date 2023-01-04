import { ReactNode } from "react";
import { PaginationProps, TableProps } from "rsuite";

export interface DraggableHeaderCellComponent {
	children: React.ReactNode;
	onDrag(sourceId: string, targetId: string): void;
	id: string;
}

export interface RowColumnDataProps {
	[key: string]: string | number | [] | undefined;
}

export interface RowProps {
	children: React.ReactNode;
	onDrag(sourceId: string, targetId: string): void;
	id: string;
	rowData: RowColumnDataProps;
}

// type Style = React.CSSProperties;
export interface RowDataType {
	dataKey?: string;
	children?: RowDataType[];
	[key: string]: any;
}

export interface TableColumnsProps extends TableProps {
	columns: any[];
	data: RowDataType[];
}
export type SortType = "desc" | "asc";
export type RowKeyType = string | number;

export interface DragRowProps {
	children?: ReactNode;
	rowData?: RowDataType | undefined;
}

export interface MainTableProps {
	// styles: { cell: Style };
	paginationProps: PaginationProps;
	tableProps: TableColumnsProps;
	columnProps: ColumnProps;
	// renderRow(props: DragRowProps): ReactNode;
}

export interface dropItem {
	id: string;
}
export interface dropOps {
	canDrop: boolean;
	isOver: boolean;
}

export interface TableStateTypes {
	limit: number;
	page: number;
	expandedRowKeys: Array<number>;
	data: Array<RowDataType>;
	columns: Array<RowDataType>;
	sortColumn: string | undefined;
	sortType: SortType | undefined;
	loading: boolean;
	[key: string]: any;
}
export interface ColumnProps {
	handleDragColumn(sourceId: string, targetId: string): void;
	expandedRowKeys: number[];
	handleExpanded(data: RowDataType): void;
	rowKey: RowKeyType;
}
export interface TableColumnProps extends ColumnProps {
	column: RowDataType;
}
