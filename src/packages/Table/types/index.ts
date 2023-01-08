import { ReactNode } from "react";
import { PaginationProps, TableProps } from "rsuite";
import { ExpandComponentProps } from "../hooks/useTable/types";

export type SortType = "desc" | "asc";
export type RowKeyType = string | number;
export interface DraggableHeaderCellComponent {
	children: React.ReactNode;
	onDrag(sourceId: string, targetId: string): void;
	id: string;
	CustomSortIcon?: (sortType?: "desc" | "asc") => React.ReactNode;
}
export type CustomCellType = ({
	rowData,
	dataKey,
}: {
	rowData?: RowDataType;
	dataKey: string;
}) => JSX.Element;

export type CustomCells = {
	[key: string]: CustomCellType;
};
export type RowDataType = {
	[key: string]: any;
} & { dataKey?: string; children?: RowDataType[] };
export type RowColumnDataProps = {
	[key: string]: string | number | [] | undefined | CustomCellType;
} & { rowData?: RowDataType; dataKey: string; CustomCell?: CustomCellType };

export interface RowProps {
	children: React.ReactNode;
	onDrag(sourceId: string, targetId: string): void;
	id: string;
	rowData: RowDataType;
	draggable?: boolean;
}
export interface RowPropsExternal {
	ExpandRow?: ((rowData: RowDataType | undefined) => React.ReactNode) | null;
	draggable?: boolean;
}

// type Style = React.CSSProperties;

export interface TableColumnsProps extends TableProps {
	columns?: { [key: string]: unknown }[];
	data: RowDataType[];
	customCells?: CustomCells;
	additionalData?: RowDataType[];
}

export interface DragRowProps {
	children?: ReactNode;
	rowData?: RowDataType | undefined;
}

export interface MainTableProps {
	// styles: { cell: Style };
	paginationProps?: PaginationProps;
	tableProps: TableColumnsProps;
	columnProps: ColumnProps;
	PaginationComponent?: () => JSX.Element;
	expandProps?: { columnId: string; ExpandComponent?: ExpandComponentProps };
	CustomSortIcon?: (sortType?: "desc" | "asc") => React.ReactNode;
	CustomHeaderCell?: (column: RowDataType) => JSX.Element;
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
	customCells?: CustomCells;
	draggable?: boolean;
	expandProps?: { columnId: string; ExpandComponent?: ExpandComponentProps };
	CustomSortIcon?: (sortType?: "desc" | "asc") => React.ReactNode;
	CustomHeaderCell?: (column: RowDataType) => JSX.Element;
}
