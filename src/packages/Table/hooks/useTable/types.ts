import { TableColumnsProps, ColumnProps } from "./../../types";
import { PaginationProps } from "rsuite";

export interface TableHookProps {
	paginationProps: PaginationProps;
	tableProps: TableColumnsProps;
	columnProps: ColumnProps;
}
